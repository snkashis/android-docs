/* @flow */
import prefix from 'prefix';
import _ from 'lodash';

export type placements = 'top' | 'bottom' | 'left' | 'right';
export type alignments = 'top' | 'bottom' | 'left' | 'right' | 'center';

// Not currently designed to deal with
// - iframes
// - more than one level of sub-document scrolling
// - horizontal scrolling

const PLACEMENT_TOP = 'top';
const PLACEMENT_BOTTOM = 'bottom';
const PLACEMENT_LEFT = 'left';
const PLACEMENT_RIGHT = 'right';
const ALIGNMENT_TOP = 'top';
const ALIGNMENT_BOTTOM = 'bottom';
const ALIGNMENT_LEFT = 'left';
const ALIGNMENT_RIGHT = 'right';
const POINTER_DIRECTION_DOWNWARD = 'downward';
const POINTER_DIRECTION_UPWARD = 'upward';
const POINTER_DIRECTION_LEFTWARD = 'leftward';
const POINTER_DIRECTION_RIGHTWARD = 'rightward';

const mapPlacementToPointerDirection = {};
mapPlacementToPointerDirection[PLACEMENT_TOP] = POINTER_DIRECTION_DOWNWARD;
mapPlacementToPointerDirection[PLACEMENT_BOTTOM] = POINTER_DIRECTION_UPWARD;
mapPlacementToPointerDirection[PLACEMENT_LEFT] = POINTER_DIRECTION_RIGHTWARD;
mapPlacementToPointerDirection[PLACEMENT_RIGHT] = POINTER_DIRECTION_LEFTWARD;

function calculatePosition(
  options: {
    placement: placements,
    alignment: alignments,
    getAnchorElement: () => ?HTMLElement,
    getBodyElement: () => ?HTMLElement,
    getContainingElement?: () => HTMLElement,
    offsetFromAnchor?: number,
    offsetFromEdge?: number,
    containWithinViewport?: boolean,
    getScrollableParentElement?: () => ?Element,
    allowPlacementAxisChange?: boolean,
    hasPointer?: boolean,
    pointerBase?: number,
    pointerAltitude?: number,
    pointerColor?: string,
    hideWhenAnchorIsOffscreen?: boolean,
    getAvailableWidth?: () => number,
    getAvailableHeight?: () => number
  }
): {
  placement: string,
  alignment: string,
  topOffset: number,
  leftOffset: number,
  pointerPositioningStyle: Object,
  bodyPositioningStyle: Object
} {
  const scrollY = window.pageYOffset;

  const { placement, alignment } = options;
  const anchor = options.getAnchorElement();
  if (!anchor) throw new Error('No anchor element provided');
  const containingElementRect = options.getContainingElement
    ? options.getContainingElement().getBoundingClientRect()
    : null;
  const offsetFromEdgeDefault = containingElementRect ? 0 : 5;
  const offsetFromEdge = options.offsetFromEdge !== undefined ? options.offsetFromEdge : offsetFromEdgeDefault;
  const offsetFromAnchor = options.offsetFromAnchor !== undefined ? options.offsetFromAnchor : 5;
  const containWithinViewport = options.containWithinViewport !== undefined ? options.containWithinViewport : false;
  const pointerAltitude = options.pointerAltitude !== undefined ? options.pointerAltitude : 0;
  const bodyOffsetFromAnchor = offsetFromAnchor + pointerAltitude;
  const pointerBase = options.pointerBase !== undefined ? options.pointerBase : 0;
  const pointerColor = options.pointerColor !== undefined ? options.pointerColor : '#fff';
  const allowPlacementAxisChange = options.allowPlacementAxisChange !== undefined
    ? options.allowPlacementAxisChange
    : true;
  const availableWidth = options.getAvailableWidth !== undefined
    ? options.getAvailableWidth()
    : _.get(document, 'documentElement.scrollWidth', 0);

  // If the document element's top position has been manipulated, we'll need to adjust accordingly
  let documentTopOffset = 0;
  const documentPosition = _.get(document, 'documentElement.style.position');
  if (documentPosition === 'fixed' || documentPosition === 'absolute') {
    documentTopOffset = parseFloat(_.get(document, `documentElement.style.top`, 0));
  }

  let availableHeight;
  if (options.getAvailableHeight !== undefined) {
    availableHeight = options.getAvailableHeight();
  } else if (options.containWithinViewport) {
    availableHeight = window.innerHeight;
  } else {
    availableHeight = _.get(document, 'documentElement.scrollHeight', 0);
  }

  let topBoundary;
  if (containingElementRect) {
    topBoundary = containingElementRect.top + scrollY + offsetFromEdge;
  } else if (containWithinViewport === true) {
    topBoundary = scrollY + offsetFromEdge;
  } else {
    topBoundary = offsetFromEdge;
  }

  let bottomBoundary;
  if (containingElementRect) {
    bottomBoundary = containingElementRect.bottom + scrollY - offsetFromEdge;
  } else if (containWithinViewport === true) {
    bottomBoundary = scrollY + availableHeight - offsetFromEdge;
  } else {
    bottomBoundary = availableHeight - offsetFromEdge;
  }

  const anchorRect = anchor.getBoundingClientRect();
  const bodyElement = options.getBodyElement();
  if (!bodyElement) throw new Error('No body element provided');
  const bodyElementRect = bodyElement.getBoundingClientRect();
  const spaceLeftOfAnchor = anchorRect.left - offsetFromEdge;
  const spaceRightOfAnchor = availableWidth - anchorRect.right - offsetFromEdge;
  const spaceAboveAnchor = anchorRect.top - offsetFromEdge;
  const spaceBelowAnchor = availableHeight - anchorRect.bottom - offsetFromEdge;
  const anchorAbsoluteTop = anchorRect.top + scrollY;
  const anchorAbsoluteBottom = anchorRect.bottom + scrollY;
  const sufficientSpaceIfPlacedOnLeft = bodyElementRect.width + bodyOffsetFromAnchor <= spaceLeftOfAnchor;
  const sufficientSpaceIfPlacedOnRight = bodyElementRect.width + bodyOffsetFromAnchor <= spaceRightOfAnchor;
  const sufficientSpaceIfPlacedAbove = bodyElementRect.height + bodyOffsetFromAnchor <= spaceAboveAnchor;
  const sufficientSpaceIfPlacedBelow = bodyElementRect.height + bodyOffsetFromAnchor <= spaceBelowAnchor;
  const maxLeftOffset = Math.max(availableWidth - offsetFromEdge - bodyElementRect.width, offsetFromEdge);
  let maxWidth = availableWidth - 2 * offsetFromEdge;
  let maxHeight = availableHeight - 2 * offsetFromEdge;

  let calculatedPlacement = placement;
  let calculatedAlignment = alignment;

  if (placement === PLACEMENT_TOP || placement === PLACEMENT_BOTTOM) {
    if (placement === PLACEMENT_BOTTOM && !sufficientSpaceIfPlacedBelow) {
      if (sufficientSpaceIfPlacedAbove) {
        calculatedPlacement = PLACEMENT_TOP;
      } else if (allowPlacementAxisChange && sufficientSpaceIfPlacedOnLeft) {
        calculatedPlacement = PLACEMENT_LEFT;
      } else if (allowPlacementAxisChange && sufficientSpaceIfPlacedOnRight) {
        calculatedPlacement = PLACEMENT_RIGHT;
      } else if (spaceAboveAnchor > spaceBelowAnchor) {
        calculatedPlacement = PLACEMENT_TOP;
      }
    }

    if (placement === PLACEMENT_TOP && !sufficientSpaceIfPlacedAbove) {
      if (sufficientSpaceIfPlacedBelow) {
        calculatedPlacement = PLACEMENT_BOTTOM;
      } else if (allowPlacementAxisChange && sufficientSpaceIfPlacedOnLeft) {
        calculatedPlacement = PLACEMENT_LEFT;
      } else if (allowPlacementAxisChange && sufficientSpaceIfPlacedOnRight) {
        calculatedPlacement = PLACEMENT_RIGHT;
      } else if (spaceBelowAnchor > spaceAboveAnchor) {
        calculatedPlacement = PLACEMENT_BOTTOM;
      }
    }
  }

  if (placement === PLACEMENT_LEFT || placement === PLACEMENT_RIGHT) {
    if (placement === PLACEMENT_LEFT && !sufficientSpaceIfPlacedOnLeft) {
      if (sufficientSpaceIfPlacedOnRight) {
        calculatedPlacement = PLACEMENT_RIGHT;
      } else if (allowPlacementAxisChange && !sufficientSpaceIfPlacedBelow && sufficientSpaceIfPlacedAbove) {
        calculatedPlacement = PLACEMENT_TOP;
      } else if (allowPlacementAxisChange) {
        calculatedPlacement = PLACEMENT_BOTTOM;
      } else if (spaceRightOfAnchor > spaceLeftOfAnchor) {
        calculatedPlacement = PLACEMENT_RIGHT;
      }
    }

    if (placement === PLACEMENT_RIGHT && !sufficientSpaceIfPlacedOnRight) {
      if (sufficientSpaceIfPlacedOnLeft) {
        calculatedPlacement = PLACEMENT_LEFT;
      } else if (allowPlacementAxisChange && !sufficientSpaceIfPlacedBelow && sufficientSpaceIfPlacedAbove) {
        calculatedPlacement = PLACEMENT_TOP;
      } else if (allowPlacementAxisChange) {
        calculatedPlacement = PLACEMENT_BOTTOM;
      } else if (spaceLeftOfAnchor > spaceRightOfAnchor) {
        calculatedPlacement = PLACEMENT_LEFT;
      }
    }
  }

  // Having determined the placement and alignment,
  // translate those into actual offsetFromAnchors
  // =========================================================

  let topOffset;
  let leftOffset;

  if (calculatedPlacement === PLACEMENT_TOP) {
    topOffset = anchorAbsoluteTop - bodyElementRect.height - bodyOffsetFromAnchor;
  } else if (calculatedPlacement === PLACEMENT_BOTTOM) {
    topOffset = anchorAbsoluteBottom + bodyOffsetFromAnchor;
  } else if (calculatedAlignment === ALIGNMENT_TOP) {
    topOffset = anchorAbsoluteTop;
  } else if (calculatedAlignment === ALIGNMENT_BOTTOM) {
    topOffset = anchorAbsoluteBottom - bodyElementRect.height;
  } else {
    // Only situation left is left/right placed with alignment center
    topOffset = anchorAbsoluteTop + anchorRect.height / 2 - bodyElementRect.height / 2;
  }
  topOffset = Math.max(offsetFromEdge, Math.round(topOffset));
  // topOffset = Math.min(maxTopOffset, topOffset);
  if (topOffset < topBoundary) topOffset = topBoundary;
  if (topOffset + bodyElementRect.height > bottomBoundary) topOffset = bottomBoundary - bodyElementRect.height;
  topOffset -= documentTopOffset;

  if (calculatedPlacement === PLACEMENT_LEFT) {
    leftOffset = anchorRect.left - bodyElementRect.width - bodyOffsetFromAnchor;
  } else if (calculatedPlacement === PLACEMENT_RIGHT) {
    leftOffset = anchorRect.right + bodyOffsetFromAnchor;
  } else if (calculatedAlignment === ALIGNMENT_LEFT) {
    leftOffset = anchorRect.left;
  } else if (calculatedAlignment === ALIGNMENT_RIGHT) {
    leftOffset = anchorRect.right - bodyElementRect.width;
  } else {
    // Only situation left is top/bottom placed with alignment center
    leftOffset = anchorRect.left + anchorRect.width / 2 - bodyElementRect.width / 2;
  }
  leftOffset = Math.max(offsetFromEdge, Math.round(leftOffset));
  leftOffset = Math.min(maxLeftOffset, leftOffset);

  const prefixedTransform = prefix.dash('transform');

  const bodyPositioningStyle: Object = {
    [prefixedTransform]: `translate3d(${leftOffset}px, ${topOffset}px, 0)`,
    'max-width': `${maxWidth}px`,
    'max-height': `${maxHeight}px`
  };

  // Position and style the pointer
  // =========================================================

  const anchorHorizontalCenter = anchorRect.left + anchorRect.width / 2;
  const anchorVerticalCenter = anchorAbsoluteTop + anchorRect.height / 2;
  const verticalPointerLeftOffset = Math.round(anchorHorizontalCenter - pointerBase / 2);
  const horizontalPointerTopOffset = Math.round(anchorVerticalCenter - pointerBase / 2);
  const helperBorder = `${pointerBase / 2}px solid transparent`;
  const coloredBorder = `${pointerAltitude}px solid ${pointerColor}`;
  const pointerDirection = mapPlacementToPointerDirection[calculatedPlacement];

  let pointerPositioningStyle: Object = {};
  switch (pointerDirection) {
    case POINTER_DIRECTION_UPWARD:
      pointerPositioningStyle = {
        [prefixedTransform]: `translate3d(${verticalPointerLeftOffset}px, ${Math.round(anchorAbsoluteTop + anchorRect.height + offsetFromAnchor - documentTopOffset)}px, 0)`,
        'border-top': 0,
        'border-bottom': coloredBorder,
        'border-left': helperBorder,
        'border-right': helperBorder
      };
      break;
    case POINTER_DIRECTION_DOWNWARD:
      pointerPositioningStyle = {
        [prefixedTransform]: `translate3d(${verticalPointerLeftOffset}px, ${Math.round(anchorAbsoluteTop - offsetFromAnchor - pointerAltitude - documentTopOffset)}px, 0)`,
        'border-top': coloredBorder,
        'border-bottom': 0,
        'border-left': helperBorder,
        'border-right': helperBorder
      };
      break;
    case POINTER_DIRECTION_LEFTWARD:
      pointerPositioningStyle = {
        [prefixedTransform]: `translate3d(${Math.round(anchorRect.right + offsetFromAnchor)}px, ${horizontalPointerTopOffset - documentTopOffset}px, 0)`,
        'border-top': helperBorder,
        'border-bottom': helperBorder,
        'border-left': 0,
        'border-right': coloredBorder
      };
      break;
    case POINTER_DIRECTION_RIGHTWARD:
      pointerPositioningStyle = {
        [prefixedTransform]: `translate3d(${Math.round(anchorRect.left - offsetFromAnchor - pointerAltitude)}px, ${horizontalPointerTopOffset - documentTopOffset}px, 0)`,
        'border-top': helperBorder,
        'border-bottom': helperBorder,
        'border-left': coloredBorder,
        'border-right': 0
      };
      break;
  }

  // Determine whether to hide things or not
  // =========================================================

  const hideStyles = {
    visibility: 'hidden',
    zIndex: -1
  };

  const showStyles = {
    visibility: 'visible',
    zIndex: 1
  };

  function hideThings() {
    _.assign(pointerPositioningStyle, hideStyles);
    if (options.hideWhenAnchorIsOffscreen) {
      _.assign(bodyPositioningStyle, hideStyles);
    }
  }

  function showThings() {
    _.assign(pointerPositioningStyle, showStyles);
    if (options.hideWhenAnchorIsOffscreen) {
      _.assign(bodyPositioningStyle, showStyles);
    }
  }

  const scrollableParent = options.getScrollableParentElement !== undefined
    ? options.getScrollableParentElement()
    : null;

  let scrollableParentTop;
  let scrollableParentBottom;
  if (scrollableParent) {
    if (scrollableParent === window) {
      scrollableParentTop = options.containWithinViewport ? scrollY : 0;
      scrollableParentBottom = options.containWithinViewport ? scrollY + window.innerHeight : availableHeight;
    } else {
      const scrollableParentRect = scrollableParent.getBoundingClientRect();
      scrollableParentTop = scrollableParentRect.top + scrollY;
      scrollableParentBottom = scrollableParentRect.bottom + scrollY;
    }

    const offsetFromScrollableParentTopEdge = Math.round(anchorVerticalCenter - pointerBase / 2) - 2;
    const offsetFromScrollableParentBottomEdge = Math.round(anchorVerticalCenter + pointerBase / 2) + 2;
    const onLeftOrRide = calculatedPlacement === PLACEMENT_LEFT || calculatedPlacement === PLACEMENT_RIGHT;

    if (
      (calculatedPlacement === PLACEMENT_TOP && scrollableParentTop > anchorAbsoluteTop) ||
      (calculatedPlacement === PLACEMENT_BOTTOM && scrollableParentBottom < anchorAbsoluteTop) ||
      (!onLeftOrRide && scrollableParentBottom < anchorAbsoluteTop) ||
      (!onLeftOrRide && scrollableParentTop > anchorAbsoluteBottom) ||
      (onLeftOrRide &&
        // Offset the allowed top/bottom to prevent the pointer triangle from appearing
        // beyond the border curves
        (scrollableParentTop + pointerBase / 2 + 1 > offsetFromScrollableParentTopEdge ||
          scrollableParentBottom - pointerBase / 2 - 1 < offsetFromScrollableParentBottomEdge))
    ) {
      hideThings();
    } else {
      showThings();
    }
  }

  // Return something of value
  // =========================================================

  return {
    placement: calculatedPlacement,
    alignment: calculatedAlignment,
    topOffset: topOffset,
    leftOffset: leftOffset,
    pointerPositioningStyle: pointerPositioningStyle,
    bodyPositioningStyle: bodyPositioningStyle
  };
}

export { calculatePosition };
