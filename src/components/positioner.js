/* @flow */
import React from 'react';
import displace from 'react-displace';
import _ from 'lodash';
import type { alignments, placements } from '../util/calculate_position';
import { calculatePosition } from '../util/calculate_position';
import { getScrollableParents } from '../util/get_scrollable_parents';
import { createScrollListener } from '../util/create_scroll_listener';

type Props = {
  children: ReactNode,
  getAnchorElement: Function,
  placement: placements,
  alignment: alignments,
  hasPointer: boolean,
  pointerBase: number,
  pointerAltitude: number,
  pointerColor: string,
  offsetFromAnchor: number,
  hideWhenAnchorIsOffscreen: boolean,
  allowPlacementAxisChange: boolean,
  containWithinViewport: boolean,
  getContainingElement?: Function,
  offsetFromAnchor?: number
};

class Positioner extends React.Component {
  props: Props;
  bodyElement: ?HTMLElement;
  pointerElement: ?HTMLElement;
  scrollableParents: Array<Element>;
  handleResize: Function;
  scrollListeners: Array<{ start: Function, stop: Function }>;

  static defaultProps = {
    hasPointer: true,
    pointerBase: 12,
    pointerAltitude: 6,
    pointerColor: '#fff',
    offsetFromAnchor: 5,
    hideWhenAnchorIsOffscreen: false,
    containWithinViewport: false
  };

  componentDidMount() {
    this.scrollableParents = getScrollableParents(this.props.getAnchorElement());
    this.handleResize = _.debounce(this.setPosition, 200);
    window.addEventListener('resize', this.handleResize);
    this.scrollListeners = this.scrollableParents.map(
      scrollableParent => {
        const scrollListener = createScrollListener(scrollableParent, this.setPosition);
        scrollListener.start();
        return scrollListener;
      },
      this
    );
    this.setPosition();
  }

  componentDidUpdate() {
    this.setPosition();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
    this.scrollListeners.forEach(scrollListener => {
      scrollListener.stop();
    });
  }

  getScrollableParentElement = (): ?Element => {
    return this.scrollableParents[0];
  };

  setPosition = () => {
    const { props } = this;

    const positionData = calculatePosition({
      getScrollableParentElement: this.getScrollableParentElement,
      getBodyElement: this.getBodyElement,
      getAnchorElement: props.getAnchorElement,
      placement: props.placement,
      alignment: props.alignment,
      offsetFromAnchor: props.offsetFromAnchor,
      pointerBase: props.pointerBase,
      pointerAltitude: props.pointerAltitude,
      pointerColor: props.pointerColor,
      hideWhenAnchorIsOffscreen: props.hideWhenAnchorIsOffscreen,
      allowPlacementAxisChange: props.allowPlacementAxisChange,
      containWithinViewport: props.containWithinViewport,
      getContainingElement: props.getContainingElement
    });

    const bodyElement = this.bodyElement;
    if (bodyElement) {
      bodyElement.style.setProperty('visibility', 'visible');
      for (let key in positionData.bodyPositioningStyle) {
        bodyElement.style.setProperty(key, positionData.bodyPositioningStyle[key]);
      }
    }

    const pointerElement = this.pointerElement;
    if (pointerElement) {
      pointerElement.style.setProperty('visibility', 'visible');
      for (let key in positionData.pointerPositioningStyle) {
        pointerElement.style.setProperty(key, positionData.pointerPositioningStyle[key]);
      }
    }
  };

  setBodyElement = (element: HTMLElement) => {
    this.bodyElement = element;
  };

  getBodyElement = (): ?HTMLElement => {
    return this.bodyElement;
  };

  setPointerElement = (element: HTMLElement) => {
    this.pointerElement = element;
  };

  render() {
    const basicStyle = {
      position: 'absolute',
      zIndex: 1,
      top: 0,
      left: 0,
      visibility: 'hidden'
    };

    return (
      <div>
        <div ref={this.setBodyElement} style={basicStyle}>
          {this.props.children}
        </div>
        <div ref={this.setPointerElement} style={basicStyle} />
      </div>
    );
  }
}

const DisplacedPositioner = displace(Positioner);

export { DisplacedPositioner as Positioner };
