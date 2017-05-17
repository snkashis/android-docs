/* @flow */
import { getScrollableParents } from './get_scrollable_parents';
import _ from 'lodash';

// Assumes there's only one level of sub-document scrolling involved
function isElementScrolledIntoView(element: Element): boolean {
  const scrollableParents = getScrollableParents(element).filter(parent => {
    return parent !== window;
  });

  const elementRect = element.getBoundingClientRect();

  if (scrollableParents.length > 0) {
    const scrollableParentRect = scrollableParents[0].getBoundingClientRect();
    if (scrollableParentRect.top > elementRect.top || scrollableParentRect.bottom < elementRect.bottom) {
      return false;
    }
  }

  const bodyTop = _.get(document, 'body.scrollTop', 0);
  return bodyTop < elementRect.top && bodyTop + window.innerHeight > elementRect.bottom;
}

export { isElementScrolledIntoView };
