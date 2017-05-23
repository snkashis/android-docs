// This code ends up running directly in the browser,
// so let's keep it ES3-5ish. ESLint should help with that.
// This code deliberately avoids flow
// because we're defining its types in declarations/mapbox_page_shell.js

/**
 * Mapbox page shell library.
 *
 * When this library loads, it adds Segment's global `analytics` object to the page.
 */
var MapboxPageShell = (window.MapboxPageShell = {});

/**
 * Execute a function only after the DOMContentLoaded event.
 * If that has already fired, execute immediately; otherwise, wait.
 *
 * @param {Function} callback
 */
MapboxPageShell.afterDOMContentLoaded = function(callback) {
  if (document.readyState !== 'loading') {
    callback();
  } else {
    document.addEventListener('DOMContentLoaded', callback);
  }
};

/**
 * Returns a boolean indicating whether the site is running in production
 * (on mapbox.com) or elsewhere.
 *
 * @returns {boolean}
 */
MapboxPageShell.isProduction = function() {
  return /mapbox\.com$/.test(window.location.hostname);
};

var MAPBOX_ACCESS_TOKEN = MapboxPageShell.isProduction
  ? 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA'
  : 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpZ3BqeDZlcDAwMDBzcmt1YnQ1OTM4cTEifQ.54XwgUSkvlmB7gHW4vWJ3w';

/**
 * Returns a Mapbox public access token suitable for API calls.
 *
 * @returns {string}
 */
MapboxPageShell.getMapboxAccessToken = function() {
  return MAPBOX_ACCESS_TOKEN;
};

// ==================================================
// Analytics
// ==================================================

// Initialize Segment
/* eslint-disable */
!(function() {
  var analytics = (window.analytics = window.analytics || []);
  window.analytics = analytics;
  if (!analytics.initialize)
    if (analytics.invoked)
      window.console && console.error && console.error('Segment snippet included twice.');
    else {
      analytics.invoked = !0;
      analytics.methods = [
        'trackSubmit',
        'trackClick',
        'trackLink',
        'trackForm',
        'pageview',
        'identify',
        'reset',
        'group',
        'track',
        'ready',
        'alias',
        'debug',
        'page',
        'once',
        'off',
        'on'
      ];
      analytics.factory = function(t) {
        return function() {
          var e = Array.prototype.slice.call(arguments);
          e.unshift(t);
          analytics.push(e);
          return analytics;
        };
      };
      for (var t = 0; t < analytics.methods.length; t++) {
        var e = analytics.methods[t];
        analytics[e] = analytics.factory(e);
      }
      analytics.load = function(t) {
        var e = document.createElement('script');
        e.type = 'text/javascript';
        e.async = !0;
        e.src = ('https:' === document.location.protocol ? 'https://' : 'http://') +
          'cdn.segment.com/analytics.js/v1/' +
          t +
          '/analytics.min.js';
        var n = document.getElementsByTagName('script')[0];
        n.parentNode.insertBefore(e, n);
      };
      analytics.SNIPPET_VERSION = '4.0.0';
    }
})();
/* eslint-enable */

if (MapboxPageShell.isProduction()) {
  analytics.load('fl0c8p240n');
} else {
  analytics.load('0biiejpgfj');
}
analytics.page();

/**
 * Hover intent library.
 * Taken directly from https://github.com/tristen/hoverintent.
 * Unlike `mouseenter` and `mouseleave` events, this tries to determine
 * whether the user is intentionally hovering over an element, or
 * just moving the mouse over it on the way to something else.
 *
 * @param {HTMLElement} el - Element which will recieve a hover.
 * @param {Function} onOver - Function to be called when hover is recognized.
 * @param {Function} onOut - Function to be called when hover is cancelled.
 */
MapboxPageShell.hoverIntent = function(el, onOver, onOut) {
  var x, y, pX, pY;
  var h = {}, state = 0, timer = 0;

  var options = {
    sensitivity: 7,
    interval: 100,
    timeout: 0
  };

  function delay(el, e) {
    if (timer) timer = clearTimeout(timer);
    state = 0;
    return onOut.call(el, e);
  }

  function tracker(e) {
    x = e.clientX;
    y = e.clientY;
  }

  function compare(el, e) {
    if (timer) timer = clearTimeout(timer);
    if (Math.abs(pX - x) + Math.abs(pY - y) < options.sensitivity) {
      state = 1;
      return onOver.call(el, e);
    } else {
      pX = x;
      pY = y;
      timer = setTimeout(
        function() {
          compare(el, e);
        },
        options.interval
      );
    }
  }

  h.options = function(opt) {
    for (var key in opt) {
      if (!opt.hasOwnProperty(key)) continue;
      options[key] = opt[key];
    }
    return h;
  };

  function dispatchOver(e) {
    if (timer) timer = clearTimeout(timer);
    el.removeEventListener('mousemove', tracker, false);

    if (state !== 1) {
      pX = e.clientX;
      pY = e.clientY;

      el.addEventListener('mousemove', tracker, false);

      timer = setTimeout(
        function() {
          compare(el, e);
        },
        options.interval
      );
    }

    return this;
  }

  function dispatchOut(e) {
    if (timer) timer = clearTimeout(timer);
    el.removeEventListener('mousemove', tracker, false);

    if (state === 1) {
      timer = setTimeout(
        function() {
          delay(el, e);
        },
        options.timeout
      );
    }

    return this;
  }

  h.remove = function() {
    if (!el) return;
    el.removeEventListener('mouseover', dispatchOver, false);
    el.removeEventListener('mouseout', dispatchOut, false);
  };

  if (el) {
    el.addEventListener('mouseover', dispatchOver, false);
    el.addEventListener('mouseout', dispatchOut, false);
  }

  return h;
};

// ==================================================
// Check the session!
// ==================================================

(function() {
  var userChecked = false;
  var user;
  var userPublicAccessToken;
  var userMenuIsOpen = false;
  var userCheckCallbacks = [];

  /**
   * Returns whether the user's authentication has been checked.
   *
   * @returns {boolean}
   */
  MapboxPageShell.isUserChecked = function() {
    return userChecked;
  };

  /**
   * Registers a callback that is invoked when the user is next checked.
   *
   * @param {Function} callback
   */
  MapboxPageShell.onNextUserCheck = function(callback) {
    userCheckCallbacks.push(callback);
  };

  /**
   * Registers a callback that is invoked either immediately,
   * if the user has already been checked, or after the user is checked.
   *
   * @param {Function} callback
   */
  MapboxPageShell.afterUserCheck = function(callback) {
    if (MapboxPageShell.isUserChecked()) {
      callback();
    } else {
      MapboxPageShell.onNextUserCheck(callback);
    }
  };

  function callUserCheckCallbacks() {
    userCheckCallbacks.forEach(function(callback) {
      callback();
    });
    userCheckCallbacks = [];
  }

  /**
   * Returns the user object, if a user has been authenticated.
   *
   * @returns {Object}
   */
  MapboxPageShell.getUser = function() {
    return user;
  };

  /**
   * Returns the user's public access token, if a user has been authenticated.
   *
   * @returns {?string}
   */
  MapboxPageShell.getUserAccessToken = function() {
    return userPublicAccessToken;
  };

  /**
   * Adds a full-screen-blocking loading spinner.
   */
  MapboxPageShell.appendFullscreenLoader = function() {
    var loader = document.createElement('div');
    loader.className = 'loading loading--dark fixed top left right bottom flex-parent bg-darken50';
    loader.style.zIndex = '9999';
    document.body.appendChild(loader);
  };

  // Shows all elements on the page with `data-show-unauthenticated`.
  function showUnauthenticatedElements() {
    hideAuthenticatedElements();
    var els = document.querySelectorAll('[data-show-unauthenticated]');
    for (var i = 0; i < els.length; i++) {
      els[i].style.display = 'block';
    }
  }

  function hideUnauthenticatedElements() {
    var els = document.querySelectorAll('[data-show-unauthenticated]');
    for (var i = 0; i < els.length; i++) {
      els[i].style.display = 'none';
    }
  }

  // Shows all elements on the page with `data-show-authenticated`.
  // Also inject username and user avatar into relevant elements.
  function showAuthenticatedElements(user) {
    hideUnauthenticatedElements();
    var i;
    var usernames = document.querySelectorAll('[data-user-name]');
    for (i = 0; i < usernames.length; i++) {
      usernames[i].textContent = user.id;
    }
    var avatars = document.querySelectorAll('[data-user-avatar]');
    for (i = 0; i < avatars.length; i++) {
      avatars[i].style.background = 'url("' + user.avatar + '") no-repeat center center';
      avatars[i].style.backgroundSize = '30px';
    }
    var els = document.querySelectorAll('[data-show-authenticated]');
    for (i = 0; i < els.length; i++) {
      els[i].style.display = 'block';
    }
  }

  function hideAuthenticatedElements() {
    var els = document.querySelectorAll('[data-show-authenticated]');
    for (var i = 0; i < els.length; i++) {
      els[i].style.display = 'none';
    }
  }

  function onUserMenuKeyDown(event) {
    if (!userMenuIsOpen) return;
    if (event.key === 'Escape' || event.key === 'Esc' || event.keyCode === 27) {
      hideUserMenuBody();
      var userMenuTrigger = document.getElementById('user-menu-trigger');
      if (userMenuTrigger) userMenuTrigger.focus();
    }
  }

  function userMenuFocusHandler(event) {
    var userMenuBody = document.getElementById('user-menu-body');
    var userMenuTrigger = document.getElementById('user-menu-trigger');
    if (!userMenuBody || !userMenuTrigger) return;
    if (userMenuBody.contains(event.target) || userMenuTrigger.contains(event.target)) return;
    hideUserMenuBody();
  }

  function showUserMenuBody() {
    var userMenuBody = document.getElementById('user-menu-body');
    var userMenuTrigger = document.getElementById('user-menu-trigger');
    if (!userMenuBody || !userMenuTrigger) return;
    // If this function is not undefined, that means another menu is open
    // and should be closed.
    if (MapboxPageShell.hideOpenMenu) MapboxPageShell.hideOpenMenu();
    userMenuIsOpen = true;
    userMenuBody.style.display = 'block';
    MapboxPageShell.hideOpenMenu = hideUserMenuBody;
    userMenuBody.addEventListener('keydown', onUserMenuKeyDown);
    userMenuTrigger.setAttribute('aria-expanded', 'true');
    userMenuTrigger.addEventListener('keydown', onUserMenuKeyDown);
    document.addEventListener('focusin', userMenuFocusHandler);
  }

  function hideUserMenuBody() {
    var userMenuBody = document.getElementById('user-menu-body');
    var userMenuTrigger = document.getElementById('user-menu-trigger');
    if (!userMenuBody || !userMenuTrigger) return;
    userMenuIsOpen = false;
    userMenuBody.style.display = 'none';
    userMenuBody.removeEventListener('keydown', onUserMenuKeyDown);
    userMenuTrigger.setAttribute('aria-expanded', 'false');
    userMenuTrigger.removeEventListener('keydown', onUserMenuKeyDown);
    document.removeEventListener('focusin', userMenuFocusHandler);
  }

  /**
   * Returns a boolean indicating whether an element is contained within
   * any element on the page that matches a query selector.
   *
   * @param {string} querySelector
   * @param {HTMLElement} element
   * @return {boolean}
   */
  MapboxPageShell.querySelectorContainsElement = function(querySelector, element) {
    var candidates = document.querySelectorAll(querySelector);
    for (var i = 0; i < candidates.length; i++) {
      if (candidates[i].contains(element)) return true;
    }
    return false;
  };

  function authenticationClickHandler(event) {
    if (MapboxPageShell.querySelectorContainsElement('[data-sign-out]', event.target)) {
      event.preventDefault();
      return MapboxPageShell.signOut();
    }

    var menuTrigger = document.getElementById('user-menu-trigger');
    if (!userMenuIsOpen && menuTrigger && menuTrigger.contains(event.target)) {
      return showUserMenuBody();
    }

    var userMenuBody = document.getElementById('user-menu-body');
    if (userMenuIsOpen && userMenuBody && !userMenuBody.contains(event.target)) {
      return hideUserMenuBody();
    }
  }

  function handleError(error) {
    showUnauthenticatedElements();
    // Because IE10 ended up sending a ProgressEvent in here ...
    if (error instanceof ProgressEvent) return;
    throw error;
  }

  function getUserPublicAccessToken() {
    if (!user || !user.authorizations) return;
    var authorization;
    for (var i = 0, l = user.authorizations.length; i < l; i++) {
      authorization = user.authorizations[i];
      if (authorization.client === 'api' && authorization.usage === 'pk' && authorization.default === true) {
        return authorization.token;
      }
    }
  }

  var appUrlOrigin = MapboxPageShell.isProduction()
    ? 'https://www.mapbox.com'
    : 'https://122e4e-mapbox.global.ssl.fastly.net';

  var isCheckingSession = false;

  /**
   * Checks a user's session.
   *
   * @param {Object?} options
   * @param {boolean} [options.cache=true] - Whether to use a cached value. By default,
   *   the cache is on to prevent unnecessary calls to the session API.
   * @param {Function} callback - Invoked when the session-checking is complete.
   */
  MapboxPageShell.checkSession = function(options, callback) {
    // Options are optional
    if (typeof options === 'function') {
      callback = options;
      options = {};
    } else {
      options = options || {};
    }
    options.cache = options.cache !== undefined ? options.cache : true;

    if (userChecked && options.cache) {
      if (user) {
        showAuthenticatedElements(user, userPublicAccessToken);
      } else {
        showUnauthenticatedElements();
      }
      callUserCheckCallbacks();
      if (callback) callback();
      return;
    }

    // If we're already checking the session, don't send another API call,
    // but queue up the callback if there is one.
    if (isCheckingSession) {
      if (callback) MapboxPageShell.onNextUserCheck(callback);
      return;
    }

    isCheckingSession = true;

    var request = new XMLHttpRequest();
    request.open('GET', appUrlOrigin + '/api/session');
    request.setRequestHeader('Accept', 'application/json');
    request.onerror = handleError;
    request.onload = function() {
      userChecked = true;

      // If we're not authenticated or there's an error,
      // show the unauthenticated elements. The console should
      // log the reason for the error, so if we think we
      // *should* have been authenticated we can debug.
      if (request.status === 403) {
        showUnauthenticatedElements();
      } else if (request.status !== 200) {
        showUnauthenticatedElements();
        console.log(request.statusText);
      } else {
        user = JSON.parse(request.response);
        userPublicAccessToken = getUserPublicAccessToken();
        showAuthenticatedElements(user, userPublicAccessToken);
        analytics.identify(user.id, {
          username: user.id,
          email: user.email
        });
      }

      document.addEventListener('click', authenticationClickHandler);
      callUserCheckCallbacks();
      if (callback) callback();
      isCheckingSession = false;
    };
    request.withCredentials = true;
    request.send();
  };

  /**
   * Signs the user out. This deletes the user session and shows a
   * full-screen-blocking loader as it does so.
   */
  MapboxPageShell.signOut = function() {
    MapboxPageShell.appendFullscreenLoader();
    var request = new XMLHttpRequest();
    request.withCredentials = true;
    request.onerror = handleError;
    request.onload = function() {
      if (request.status === 200) {
        return window.location.reload();
      }
      throw new Error(request.statusText);
    };
    request.open('DELETE', appUrlOrigin + '/api/logout');
    request.send();
  };

  // Check session right away
  MapboxPageShell.afterDOMContentLoaded(MapboxPageShell.checkSession);
})();

// ==================================================
// Navigation!
// ==================================================

(function() {
  var xLinkNamespace = 'http://www.w3.org/1999/xlink';
  var hoverMenuListenerRemovers = [];

  /**
   * Creates a hover menu.
   *
   * Hover menus are opened when you intentionally hover over them, and closed
   * when you hover away and stay away for a short period. (That grace period
   * prevents sudden, unexpected, and unwanted vanishing, especially when you
   * are moving the mouse from the trigger into the menu.)
   *
   * Hover menus can also be more definitively opened with a click on the
   * trigger or inside the menu. Once the menu is opened with a click,
   * it will only close when there's another click on the trigger or *outside*
   * the menu (not just when you hover away).
   *
   * @param {HTMLElement} trigger - Trigger element, sensitive to hover & click.
   * @param {HTMLElement} menu - Menu element, shown on hover & click.
   */
  MapboxPageShell.createHoverMenu = function(trigger, menu) {
    var TRIGGER_HOVER = 'mouse';
    var TRIGGER_CLICK = 'click';
    var HOVER_HIDE_DELAY = 300;
    var isOpen = false;
    var triggerType;
    var hoverHideTimeout;

    function hoverMenuFocusHandler(event) {
      if (trigger.contains(event.target) || menu.contains(event.target)) return;
      hideMenu();
    }

    function showMenu() {
      // First, immediately hide any menu that is already open
      if (MapboxPageShell.hideOpenMenu) MapboxPageShell.hideOpenMenu();
      isOpen = true;
      menu.style.display = 'block';
      trigger.setAttribute('aria-expanded', 'true');
      MapboxPageShell.hideOpenMenu = hideMenu;
      document.addEventListener('focusin', hoverMenuFocusHandler);
    }

    function hideMenu() {
      clearTimeout(hoverHideTimeout);
      isOpen = false;
      triggerType = null;
      menu.style.display = 'none';
      trigger.setAttribute('aria-expanded', 'false');
      document.removeEventListener('focusin', hoverMenuFocusHandler);
    }

    // When there's a click on the trigger:
    // - If the menu was opened because of a click, hide it.
    // - If the menu was opened for some other reason, switch its reason to a click.
    // - If the menu was not opened, open it.
    function onTriggerClick() {
      if (isOpen && triggerType === TRIGGER_CLICK) return hideMenu();

      triggerType = TRIGGER_CLICK;
      if (!isOpen) {
        clearTimeout(hoverHideTimeout);
        showMenu();
      }
    }

    // Hover has no effect if the menu was opened because of a click.
    // Otherwise, it opens the thing.
    function onTriggerHover() {
      if (triggerType === TRIGGER_CLICK) return;
      clearTimeout(hoverHideTimeout);
      triggerType = TRIGGER_HOVER;
      showMenu();
    }

    // Moving away has no effect if the menu was opened because of a click.
    // Otherwise, it will hide the menu after a short delay.
    // This delay allows some friendly forgiveness, which is especially necessary
    // as users move the mouse from the trigger into the menu.
    function hideBecauseMouseLeave() {
      if (triggerType === TRIGGER_CLICK) return;
      triggerType = null;
      hoverHideTimeout = setTimeout(
        function() {
          if (isOpen && triggerType === null) {
            hideMenu();
          }
        },
        HOVER_HIDE_DELAY
      );
    }

    // When the mouse enters a menu that was opened because of a hover,
    // keep that menu open. By changing the trigger type, we will cancel out
    // the delayed hiding.
    function onMenuMouseEnter() {
      if (triggerType === TRIGGER_CLICK) return;
      clearTimeout(hoverHideTimeout);
      triggerType = TRIGGER_HOVER;
    }

    function hoverMenuClickHandler(event) {
      // If the click is on a nav a link, the menu should hide right away.
      if (event.target.getAttribute && event.target.getAttribute('data-nav-link')) return hideMenu();
      // If it's in the menu but not on a link, do nothing.
      if (menu.contains(event.target)) return;
      // If it's the trigger, trigger the trigger.
      if (trigger.contains(event.target)) return onTriggerClick();
      // If it's outside the trigger and menu, hide the menu.
      hideMenu();
    }

    function onMenuKeyDown(event) {
      if (!isOpen) return;
      if (event.key === 'Escape' || event.key === 'Esc' || event.keyCode === 27) {
        hideMenu();
        trigger.focus();
      }
    }

    // Uses hoverIntent on opening only.
    var hoverListener = MapboxPageShell.hoverIntent(trigger, onTriggerHover, function() {});
    trigger.addEventListener('mouseleave', hideBecauseMouseLeave);
    trigger.addEventListener('keydown', onMenuKeyDown);
    menu.addEventListener('mouseenter', onMenuMouseEnter);
    menu.addEventListener('mouseleave', hideBecauseMouseLeave);
    menu.addEventListener('keydown', onMenuKeyDown);
    document.addEventListener('click', hoverMenuClickHandler);

    hoverMenuListenerRemovers.push(function() {
      hoverListener.remove();
      trigger.removeEventListener('mouseleave', hideBecauseMouseLeave);
      trigger.removeEventListener('keydown', onMenuKeyDown);
      menu.removeEventListener('mouseenter', onMenuMouseEnter);
      menu.removeEventListener('mouseleave', hideBecauseMouseLeave);
      menu.removeEventListener('keydown', onMenuKeyDown);
      document.removeEventListener('click', hoverMenuClickHandler);
    });
  };

  var docCropped = false;

  // Does not need to account for scrollbar width because there aren't
  // scrollbars on mobile.
  function cropDoc() {
    if (docCropped) return;
    var mobileNavMenu = document.getElementById('mobile-nav-menu');
    var app = document.getElementById('app');
    var mobileNavBackdrop = document.getElementById('mobile-nav-backdrop');
    if (!mobileNavMenu || !app || !mobileNavBackdrop) return;
    // 40 is an arbitrary buffer.
    // We don't want the page to be cropped shorter than the viewport's height.
    var newPageBottom = Math.max(mobileNavMenu.getBoundingClientRect().bottom + 40, window.innerHeight);
    app.style.height = String(newPageBottom) + 'px';
    app.style.overflow = 'hidden';
    mobileNavBackdrop.style.display = 'block';
    mobileNavBackdrop.style.height = String(newPageBottom - parseInt(mobileNavBackdrop.style.top)) + 'px';
    docCropped = true;
  }

  function unCropDoc() {
    if (!docCropped) return;
    var app = document.getElementById('app');
    var mobileNavBackdrop = document.getElementById('mobile-nav-backdrop');
    if (!app || !mobileNavBackdrop) return;
    app.style.height = '';
    app.style.overflow = '';
    mobileNavBackdrop.style.display = 'none';
    mobileNavBackdrop.style.height = '';
    docCropped = false;
  }

  var mobileNavIsOpen = false;

  function openMobileNav() {
    var mobileNavMenu = document.getElementById('mobile-nav-menu');
    var mobileNavPointer = document.getElementById('mobile-nav-pointer');
    var mobileNavTrigger = document.getElementById('mobile-nav-trigger');
    if (!mobileNavMenu || !mobileNavTrigger || !mobileNavPointer) return;
    mobileNavIsOpen = true;
    mobileNavMenu.style.display = 'block';
    mobileNavPointer.style.display = 'block';
    mobileNavTrigger.querySelector('use').setAttributeNS(xLinkNamespace, 'xlink:href', '#icon-close');
    cropDoc();
  }

  function closeMobileNav() {
    var mobileNavMenu = document.getElementById('mobile-nav-menu');
    var mobileNavPointer = document.getElementById('mobile-nav-pointer');
    var mobileNavTrigger = document.getElementById('mobile-nav-trigger');
    if (!mobileNavMenu || !mobileNavTrigger || !mobileNavPointer) return;
    mobileNavIsOpen = false;
    mobileNavMenu.style.display = 'none';
    mobileNavPointer.style.display = 'none';
    mobileNavTrigger.querySelector('use').setAttributeNS(xLinkNamespace, 'xlink:href', '#icon-menu');
    unCropDoc();
  }

  function mobileNavClickHandler(event) {
    var mobileNavTrigger = document.getElementById('mobile-nav-trigger');
    var mobileNavMenu = document.getElementById('mobile-nav-menu');
    if (event.target.getAttribute && event.target.getAttribute('data-nav-link')) {
      // If the click is on a nav link, the menu should hide right away and we scroll to the top
      document.body.scrollTop = 0;
      closeMobileNav();
    } else if (mobileNavTrigger.contains(event.target)) {
      // If it's on the trigger, toggle the menu.
      if (mobileNavIsOpen) {
        closeMobileNav();
      } else {
        openMobileNav();
      }
    } else if (mobileNavIsOpen && !mobileNavMenu.contains(event.target)) {
      // If it's outside an open menu, close the menu.
      closeMobileNav();
    }
  }

  /**
   * Initializes navigation, using any elements tagged with
   * `data-nav-trigger` and `data-nav-menu`.
   */
  MapboxPageShell.initializeNavigation = function() {
    var menuTriggers = document.querySelectorAll('[data-nav-trigger]');
    if (menuTriggers.length === 0) return;

    var menuTrigger;
    var menuId;
    var menu;
    var menuIndex;
    for (menuIndex = 0; menuIndex < menuTriggers.length; menuIndex++) {
      menuTrigger = menuTriggers[menuIndex];
      menuId = menuTrigger.getAttribute('data-nav-trigger');
      menu = document.querySelector('[data-nav-menu="' + menuId + '"]');
      MapboxPageShell.createHoverMenu(menuTrigger, menu);
    }
    // Initialize mobile navigation.
    // **Important!** This requires that the overlay have a
    // cursor: pointer CSS declaration, or mobile Safari will
    // not pick up the `click` event.
    document.addEventListener('click', mobileNavClickHandler);
  };

  /**
   * Closes all menus and removes all listeners.
   */
  MapboxPageShell.removeNavigation = function() {
    hoverMenuListenerRemovers.forEach(function(remover) {
      remover();
    });
    hoverMenuListenerRemovers = [];
    unCropDoc();
    closeMobileNav();
    document.removeEventListener('click', mobileNavClickHandler);
  };

  // Initialize navigation right away
  MapboxPageShell.afterDOMContentLoaded(MapboxPageShell.initializeNavigation);
})();

/**
 * For dynamic routing: Re-initializes session and navigation when the page dynamically
 * changes.
 */
MapboxPageShell.reInitialize = function() {
  MapboxPageShell.checkSession();
  MapboxPageShell.removeNavigation();
  MapboxPageShell.initializeNavigation();
};
