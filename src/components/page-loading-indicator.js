const BASE_CLASSNAME = 'page-loader h6 round-full opacity50 fixed top left';
const ENTER_CLASSNAME = 'page-loader-enter';
const LEAVE_CLASSNAME = 'page-loader-leave';
let el;
let canEnd;
let mounted = false;

function createElement() {
  el = document.createElement('div');
  el.className = BASE_CLASSNAME;
  el.style.zIndex = '9999';
}

function start() {
  if (mounted) return;
  mounted = true;
  if (!el) createElement();
  document.body.appendChild(el);
  // Next-tick delay to allow the node to be added and ready for a transition.
  setTimeout(() => {
    el.className += ' ' + ENTER_CLASSNAME;
    canEnd = new Promise(resolve => {
      setTimeout(resolve, 300);
    });
  }, 0);
}

function end() {
  if (!mounted) return;
  el.className = el.className.replace(ENTER_CLASSNAME, LEAVE_CLASSNAME);
  canEnd.then(() => {
    setTimeout(() => {
      mounted = false;
      el.parentNode.removeChild(el);
      el.className = BASE_CLASSNAME;
    }, 300);
  });
}

export const pageLoadingIndicator = { start, end };
