/* @flow */
// Adapted from https://github.com/HubSpot/tether/blob/master/src/js/utils.js
function getScrollableParents(element: Element): Array<Element> {
  const position = window.getComputedStyle(element).position;
  if (position === 'fixed') return [];

  const parents = [];
  let parent = element.parentElement;

  while (parent) {
    const parentStyle = getComputedStyle(parent);

    const allOverflows = parentStyle.overflow + parentStyle.overflowY;
    if (/(auto|scroll|overlay)/.test(allOverflows)) {
      if (position !== 'absolute' || /(relative|absolute|fixed)/.test(parentStyle.position)) {
        parents.push(parent);
      }
    }

    parent = parent.parentElement;
  }

  parents.push(window);
  return parents;
}

export { getScrollableParents };
