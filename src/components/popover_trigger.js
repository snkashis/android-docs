/* @flow */
import React from 'react';
import _ from 'lodash';
import { Popover } from './popover';

const TRIGGER_HOVER = 'hover';
const TRIGGER_POPOVER_HOVER = 'popover-hover';
const TRIGGER_FOCUS = 'focus';
const TRIGGER_CLICK = 'click';

type Props = {
  display: string,
  children?: ReactNode,
  content: Function | ReactNode,
  renderHiddenContent: boolean,
  receiveFocus: boolean,
  // **Warning**: You probably don't want to use respondsToClick
  // and receivesFocus *and* respondsToFocus all together, because they can have
  // clashing interactions. e.g. When the popover that trapped focus closes, it
  // returns focus to the trigger, which then causes the popover to open again.
  respondsToClick: boolean,
  respondsToHover: boolean,
  respondsToFocus: boolean,
  disabled: boolean,
  hoverEnterDelay: number,
  hoverExitDelay: number,
  popoverProps?: Object,
  triggerProps?: Object
};

type State = {
  visible: boolean,
  activeTriggerType: null | 'hover' | 'popover-hover' | 'focus' | 'click'
};

class PopoverTrigger extends React.Component {
  props: Props;
  state: State;
  triggerElement: ?Element;
  popoverElement: ?Element;
  hoverListener: ?{ remove: Function };
  hoverHideTimeout: ?number;

  static defaultProps = {
    display: 'inline-block',
    disabled: false,
    renderHiddenContent: false,
    receiveFocus: true,
    respondsToHover: false,
    respondsToFocus: false,
    respondsToClick: true,
    // The popover will not appear unless you've hovered for at least this long
    hoverEnterDelay: 150,
    // The popover will not disappear unless you are not hovering for at least this long
    hoverExitDelay: 300
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      visible: false,
      activeTriggerType: null
    };
  }

  componentDidMount() {
    if (!this.triggerElement) return;
    this.hoverListener = MapboxPageShell.hoverIntent(
      this.triggerElement,
      this.onTriggerMouseEnter,
      this.onTriggerMouseLeave
    );
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    const { popoverElement } = this;
    const justOpened = prevState.visible === false && this.state.visible === true;

    if (
      justOpened &&
      popoverElement &&
      // If the popover was opened by hover, pay attention to hovering
      // within the popover itself
      this.state.activeTriggerType === TRIGGER_HOVER
    ) {
      popoverElement.addEventListener('mouseover', this.onPopoverMouseEnter);
      popoverElement.addEventListener('mouseleave', this.onPopoverMouseLeave);
    }

    if (justOpened && popoverElement && this.state.activeTriggerType !== TRIGGER_CLICK) {
      popoverElement.addEventListener('mousedown', this.onPopoverMouseDown);
      popoverElement.addEventListener('touchstart', this.onPopoverMouseDown);
    }
  }

  componentWillUnmount() {
    if (this.hoverListener) this.hoverListener.remove();
    this.clearHoverTimeouts();
  }

  // A trigger interaction always takes precedence over hover or focus interactions.
  // If the popover is already open by hover or focus, a click will change its
  // priorities, so it stays open even if you mouseleave or blur
  onTriggerClick = () => {
    if (this.props.disabled || !this.props.respondsToClick) return;

    if (this.state.visible && this.state.activeTriggerType === TRIGGER_CLICK) {
      this.hide();
    } else {
      this.showBecauseClick();
    }
  };

  // Hover and focus interactions do not overlap: if the popover opened because
  // of a hover (and no clicking), it will only close when you mouseleave;
  // and if it opened because of a focus (and no clicking), it will only close
  // when you blur.

  // This can override a popover-hover trigger type because you might mouseleave
  // the popover onto the trigger
  onTriggerMouseEnter = () => {
    if (
      this.props.disabled ||
      !this.props.respondsToHover ||
      (this.state.activeTriggerType !== null && this.state.activeTriggerType !== TRIGGER_POPOVER_HOVER)
    )
      return;

    this.showBecauseTriggerHover();
  };

  onTriggerMouseLeave = () => {
    if (this.props.disabled || !this.props.respondsToHover || this.state.activeTriggerType !== TRIGGER_HOVER) return;

    this.hideBecauseHover();
  };

  // When you hover over the popover, you do not want to disappear from beneath
  // your cursor. This keeps the popover open when your cursor is within it.
  onPopoverMouseEnter = () => {
    if (this.props.disabled || !this.props.respondsToHover) return;

    this.showBecausePopoverHover();
  };

  onPopoverMouseLeave = () => {
    if (this.props.disabled || !this.props.respondsToHover || this.state.activeTriggerType !== TRIGGER_POPOVER_HOVER)
      return;

    this.hideBecauseHover();
  };

  // A click inside the popover is equivalent to a click on the trigger:
  // if we initially opened because of hover/focus, we should now open
  // more lastingly
  onPopoverMouseDown = () => {
    if (this.props.disabled || !this.props.respondsToClick || this.state.activeTriggerType === TRIGGER_CLICK) return;

    this.showBecauseClick();
  };

  onTriggerFocus = () => {
    if (this.props.disabled || !this.props.respondsToFocus || this.state.visible) return;

    this.showBecauseTriggerFocus();
  };

  onTriggerBlur = () => {
    if (
      this.props.disabled ||
      !this.props.respondsToFocus ||
      !this.state.visible ||
      this.state.activeTriggerType !== TRIGGER_FOCUS
    )
      return;

    this.hide();
  };

  onTriggerKeyDown = (event: Object) => {
    const escapeCloses = _.get(this.props.popoverProps, 'escapeCloses');
    if (escapeCloses === false) return;
    if (event.key === 'Escape') {
      this.hide();
    }
  };

  showBecauseClick = () => {
    this.clearHoverTimeouts();
    this.removePopoverListeners();
    this.setState({
      visible: true,
      activeTriggerType: TRIGGER_CLICK
    });
  };

  showBecauseTriggerHover = () => {
    this.setState({ activeTriggerType: TRIGGER_HOVER, visible: true });
  };

  showBecausePopoverHover = () => {
    this.setState({
      activeTriggerType: TRIGGER_POPOVER_HOVER
    });
  };

  showBecauseTriggerFocus = () => {
    this.clearHoverTimeouts();
    this.removePopoverListeners();
    this.setState({
      visible: true,
      activeTriggerType: TRIGGER_FOCUS
    });
  };

  hideBecauseHover = () => {
    this.setState({ activeTriggerType: null });
    this.hoverHideTimeout = setTimeout(
      () => {
        // If by this point we still have no active trigger type, that means the user
        // has not hovered back over the trigger or popover. If the user did
        // return the cursor to these elements, we should not close.
        if (this.state.activeTriggerType === null) {
          this.hide();
        }
      },
      this.props.hoverExitDelay
    );
  };

  hide = () => {
    this.clearHoverTimeouts();
    this.removePopoverListeners();
    this.setState({
      visible: false,
      activeTriggerType: null
    });
  };

  removePopoverListeners = () => {
    const { popoverElement } = this;
    if (!popoverElement) return;
    popoverElement.removeEventListener('mouseover', this.onPopoverMouseEnter);
    popoverElement.removeEventListener('mouseleave', this.onPopoverMouseLeave);
    popoverElement.removeEventListener('mousedown', this.onPopoverMouseDown);
    popoverElement.removeEventListener('touchstart', this.onPopoverMouseDown);
  };

  clearHoverTimeouts() {
    if (this.hoverHideTimeout) clearTimeout(this.hoverHideTimeout);
  }

  ignoreClickWithinElement = (element: ?Element): boolean => {
    if (this.triggerElement && this.triggerElement.contains(element)) return true;
    const ignoreClickWithinElement = _.get(this.props.popoverProps, 'ignoreClickWithinElement');
    if (ignoreClickWithinElement) {
      return ignoreClickWithinElement(element);
    }
    return false;
  };

  getAnchorElement = (): ?Element => {
    const getAnchorElement = _.get(this.props.popoverProps, 'getAnchorElement');
    if (getAnchorElement) {
      return getAnchorElement();
    }
    return this.triggerElement;
  };

  setTriggerElement = (element: ?Element) => {
    this.triggerElement = element;
  };

  setPopoverElement = (element: ?Element) => {
    this.popoverElement = element;
  };

  getPopoverContent = () => {
    const { content } = this.props;
    if (typeof content === 'function') {
      return content();
    } else {
      return content;
    }
  };

  render() {
    const { props, state } = this;

    let popover = null;
    if (state.visible) {
      const receiveFocus = props.receiveFocus &&
        // Only send focus inside if we've clicked to open
        state.activeTriggerType === TRIGGER_CLICK;
      popover = (
        <Popover
          onClose={this.hide}
          {...props.popoverProps}
          getAnchorElement={this.getAnchorElement}
          ignoreClickWithinElement={this.ignoreClickWithinElement}
          receiveFocus={receiveFocus}
          onElement={this.setPopoverElement}
        >
          {this.getPopoverContent()}
        </Popover>
      );
    }

    // Tooltips need to the popover content to be present in the DOM
    // with the appropriate id, so aria-labelledby will work
    let hiddenContent = null;
    if (!state.visible && props.renderHiddenContent) {
      hiddenContent = (
        <div className="hide-visually" {..._.get(this.props, 'popoverProps.contentElementAttributes', {})}>
          {this.getPopoverContent()}
        </div>
      );
    }

    return (
      <div
        ref={this.setTriggerElement}
        style={{ display: props.display }}
        {...props.triggerProps}
        onClick={this.onTriggerClick}
        onFocus={this.onTriggerFocus}
        onBlur={this.onTriggerBlur}
        onKeyDown={this.onTriggerKeyDown}
      >
        {props.children}
        {hiddenContent}
        {popover}
      </div>
    );
  }
}

export { PopoverTrigger };
