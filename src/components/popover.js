/* @flow */
import React from 'react';
import createFocusTrap from 'focus-trap';
import { isElementScrolledIntoView } from '../util/is_element_scrolled_into_view';
import type { alignments, placements } from '../util/calculate_position';
import { Positioner } from './positioner';

let popoverCounter = 0; // Incremented on creation

export type PopoverProps = {
  getAnchorElement: Function,
  placement: placements,
  alignment: alignments,
  backgroundColor: string,
  popoverClasses: string,
  hideWhenAnchorIsOffscreen: boolean,
  allowPlacementAxisChange: boolean,
  containWithinViewport: boolean,
  clickOutsideCloses: boolean,
  escapeCloses: boolean,
  receiveFocus: boolean,
  accessibleTitle: string | null,
  children?: ReactNode,
  onClose?: Function,
  onElement?: Function,
  getInitialFocus?: Function,
  ignoreClickWithinElement?: Function,
  getContainingElement?: Function,
  offsetFromAnchor?: boolean,
  contentElementAttributes?: Object
};

class Popover extends React.Component {
  props: PopoverProps;
  previouslyFocusedElement: ?HTMLElement;
  bodyElement: ?Element;
  popoverId: number;
  focusTrap: ?{
    active: Function,
    deactivate: Function,
    unpause: Function
  };
  focusBodyTimer: ?number;
  focusTriggerTimer: ?number;

  static defaultProps = {
    placement: 'right',
    alignment: 'top',
    backgroundColor: '#fff',
    popoverClasses: 'round py6 px12 shadow-darken25',
    hideWhenAnchorIsOffscreen: false,
    allowPlacementAxisChange: true,
    containWithinViewport: true,
    clickOutsideCloses: true,
    escapeCloses: true,
    receiveFocus: true
  };

  constructor(props: PopoverProps) {
    super(props);
    popoverCounter += 1;
    this.popoverId = popoverCounter;
  }

  componentWillMount() {
    // For focus management: focus will return to this element
    // when the popover is closed
    this.previouslyFocusedElement = document.activeElement;
  }

  componentDidMount() {
    document.addEventListener('click', this.onDocumentClick);
    // Delay this focus because of
    // https://github.com/mapbox/www2.mapbox.com/issues/283
    // If you go from one popover to another, we need focus to
    // hit the first popover's trigger and *then* enter this popover's body
    this.focusBodyTimer = setTimeout(
      () => {
        this.createFocusTrap();
      },
      10
    );
  }

  componentDidUpdate() {
    // This is necessary if, for example, you've hovered over
    // an PopoverTrigger and *then* clicked it: it's already mounted
    // but only *now* should receive focus
    this.createFocusTrap();
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onDocumentClick);
    if (this.focusBodyTimer) clearTimeout(this.focusBodyTimer);

    if (this.focusTrap) {
      this.focusTrap.deactivate();
      const { previouslyFocusedElement } = this;
      // We must defer this call in order for a parent popover's
      // onBodyFocus method to pick up on the programmatic focus
      // https://github.com/facebook/react/issues/7835
      setTimeout(
        () => {
          // Only focus if it's visible, to avoid semi-mysterious scroll bouncing
          if (previouslyFocusedElement && isElementScrolledIntoView(previouslyFocusedElement)) {
            previouslyFocusedElement.focus();
          }
        },
        0
      );
    }
  }

  createFocusTrap = () => {
    if (this.focusTrap || !this.props.receiveFocus || !this.bodyElement) return;
    this.focusTrap = createFocusTrap(this.bodyElement, {
      escapeDeactivates: this.props.escapeCloses,
      clickOutsideDeactivates: this.props.clickOutsideCloses,
      returnFocusOnDeactivate: false,
      initialFocus: this.props.getInitialFocus ? this.props.getInitialFocus() : undefined,
      fallbackFocus: this.bodyElement
    });
    this.focusTrap.activate();
  };

  onDocumentClick = (event: Object) => {
    const { onClose } = this.props;
    if (!this.bodyElement || !onClose) return;
    if (this.bodyElement.contains(event.target)) return;
    if (this.elementIsWithinChildPopover(event.target)) return;
    if (this.props.ignoreClickWithinElement && this.props.ignoreClickWithinElement(event.target)) return;
    onClose();
  };

  onBodyKeyDown = (event: Object) => {
    if (this.props.onClose && this.props.escapeCloses && event.key === 'Escape') {
      this.props.onClose();
    }
  };

  onBodyFocus = () => {
    if (!this.bodyElement) return;
    if (this.focusTrap) {
      this.focusTrap.unpause();
    }
  };

  elementIsWithinChildPopover = (element: Element): boolean => {
    const elementPopoverId = element.getAttribute('data-popover-id');
    if (elementPopoverId) {
      return Number(elementPopoverId) > this.popoverId;
    } else if (element.parentElement && element.parentElement !== document) {
      return this.elementIsWithinChildPopover(element.parentElement);
    }
    return false;
  };

  setBodyElement = (element: ?Element) => {
    this.bodyElement = element;
    if (this.props.onElement) this.props.onElement(element);
  };

  render() {
    return (
      <Positioner
        getAnchorElement={this.props.getAnchorElement}
        placement={this.props.placement}
        alignment={this.props.alignment}
        pointerColor={this.props.backgroundColor}
        hideWhenAnchorIsOffscreen={this.props.hideWhenAnchorIsOffscreen}
        allowPlacementAxisChange={this.props.allowPlacementAxisChange}
        containWithinViewport={this.props.containWithinViewport}
        getContainingElement={this.props.getContainingElement}
        offsetFromAnchor={this.props.offsetFromAnchor}
      >
        <div
          key="body"
          ref={this.setBodyElement}
          style={{ backgroundColor: this.props.backgroundColor}}
          className={this.props.popoverClasses}
          onKeyDown={this.onBodyKeyDown}
          onFocus={this.onBodyFocus}
          data-popover-id={this.popoverId}
          tabIndex={-1}
          aria-label={this.props.accessibleTitle}
          role="dialog"
          {...this.props.contentElementAttributes}
        >
          {this.props.children}
        </div>
      </Positioner>
    );
  }
}

export { Popover };
