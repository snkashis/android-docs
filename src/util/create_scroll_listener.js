/* @flow */
// Create a scroll listener debounced by requestAnimationFrame
function createScrollListener(element: EventTarget, callback: Function): { start: Function, stop: Function } {
  let ticking = false;

  function update() {
    ticking = false;
    callback();
  }

  function onScroll() {
    if (!ticking) requestAnimationFrame(update);
    ticking = true;
  }

  return {
    start() {
      element.addEventListener('scroll', onScroll);
    },
    stop() {
      element.removeEventListener('scroll', onScroll);
    }
  };
}

export { createScrollListener };
