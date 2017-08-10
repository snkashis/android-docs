/*eslint-disable*/
!(function() {
  'use strict';
  function e() {
    return (
      !0 === window.MapboxPageShellProduction ||
      /mapbox\.com$/.test(window.location.hostname)
    );
  }
  function t(e) {
    'loading' !== document.readyState
      ? e()
      : document.addEventListener('DOMContentLoaded', e);
  }
  function n() {
    var e = document.createElement('div');
    e.className = 'shell-wrapper';
    var t = document.createElement('div');
    (t.className =
      'shell-loading shell-loading--dark shell-fixed shell-top shell-left shell-right shell-bottom shell-flex-parent shell-bg-darken50'), (t.style.zIndex =
      '9999'), e.appendChild(t), document.body.appendChild(e);
  }
  function o() {
    return se;
  }
  function i(e) {
    se = e;
  }
  function r() {
    return ge;
  }
  function a() {
    ge = !0;
  }
  function l() {
    return de;
  }
  function u(e) {
    de = e;
  }
  function c(e) {
    me.push(e);
  }
  function s() {
    me.forEach(function(e) {
      e();
    }), (me = []);
  }
  function d(e) {
    fe = e;
  }
  function m() {
    fe && fe();
  }
  function v(e) {
    ve.push(e);
  }
  function f() {
    ve.forEach(function(e) {
      e();
    }), (ve = []);
  }
  function g(e) {
    c(e);
  }
  function y(e, t) {
    for (var n = document.querySelectorAll(e), o = 0; o < n.length; o++)
      if (n[o].contains(t)) return !0;
    return !1;
  }
  function p() {
    b();
    for (
      var e = document.querySelectorAll('[data-show-unauthenticated]'), t = 0;
      t < e.length;
      t++
    )
      e[t].style.display = 'block';
  }
  function w() {
    for (
      var e = document.querySelectorAll('[data-show-unauthenticated]'), t = 0;
      t < e.length;
      t++
    )
      e[t].style.display = 'none';
  }
  function h(e) {
    w();
    var t = void 0,
      n = document.querySelectorAll('[data-user-name]');
    for (t = 0; t < n.length; t++) n[t].textContent = e.id;
    var o = document.querySelectorAll('[data-user-avatar]');
    for (t = 0; t < o.length; t++)
      (o[t].style.background =
        'url("' + e.avatar + '") no-repeat center center'), (o[
        t
      ].style.backgroundSize =
        '30px');
    var i = document.querySelectorAll('[data-show-authenticated]');
    for (t = 0; t < i.length; t++) i[t].style.display = 'block';
  }
  function b() {
    for (
      var e = document.querySelectorAll('[data-show-authenticated]'), t = 0;
      t < e.length;
      t++
    )
      e[t].style.display = 'none';
  }
  function E(e) {
    throw (p(), e);
  }
  function k() {
    return e() ? ne : oe;
  }
  function I() {
    n();
    var e = new XMLHttpRequest();
    (e.withCredentials = !0), (e.onerror = E), (e.onload = function() {
      if (200 === e.status) return window.location.reload();
      throw new Error(e.statusText);
    }), e.open('DELETE', k() + '/api/logout'), e.send();
  }
  function L(e) {
    if (e && e.authorizations)
      for (var t = void 0, n = 0, o = e.authorizations.length; n < o; n++)
        if (
          'api' === (t = e.authorizations[n]).client &&
          'pk' === t.usage &&
          !0 === t.default
        )
          return t.token;
  }
  function S() {
    return ye;
  }
  function x(e) {
    if (ye && ('Escape' === e.key || 'Esc' === e.key || 27 === e.keyCode)) {
      T();
      var t = document.getElementById('user-menu-trigger');
      t && t.focus();
    }
  }
  function B(e) {
    var t = document.getElementById('user-menu-body'),
      n = document.getElementById('user-menu-trigger');
    t && n && (t.contains(e.target) || n.contains(e.target) || T());
  }
  function A() {
    var e = document.getElementById('user-menu-body'),
      t = document.getElementById('user-menu-trigger');
    e &&
      t &&
      (
        m && m(),
        (ye = !0),
        (e.style.display = 'block'),
        d(T),
        e.addEventListener('keydown', x),
        t.setAttribute('aria-expanded', 'true'),
        t.addEventListener('keydown', x),
        document.addEventListener('focusin', B)
      );
  }
  function T() {
    var e = document.getElementById('user-menu-body'),
      t = document.getElementById('user-menu-trigger');
    e &&
      t &&
      (
        (ye = !1),
        (e.style.display = 'none'),
        e.removeEventListener('keydown', x),
        t.setAttribute('aria-expanded', 'false'),
        t.removeEventListener('keydown', x),
        document.removeEventListener('focusin', B)
      );
  }
  function C(e) {
    if (y('[data-sign-out]', e.target)) return e.preventDefault(), I();
    var t = S(),
      n = document.getElementById('user-menu-trigger');
    if (!t && n && n.contains(e.target)) return A();
    var o = document.getElementById('user-menu-body');
    return t && o && !o.contains(e.target) ? T() : void 0;
  }
  function P(e, t) {
    if (
      (
        'function' == typeof e ? ((t = e), (e = {})) : (e = e || {}),
        (e.cache = void 0 === e.cache || e.cache),
        r() && e.cache
      )
    ) {
      var n = o();
      return n ? h(n, l()) : p(), s(), void (t && t());
    }
    if (pe) t && g(t);
    else {
      pe = !0;
      var c = new XMLHttpRequest();
      c.open('GET', k() + '/api/session'), c.setRequestHeader(
        'Accept',
        'application/json'
      ), (c.onerror = E), (c.onload = function() {
        if ((a(), 403 === c.status)) p();
        else if (200 !== c.status) p(), console.log(c.statusText);
        else {
          var e = JSON.parse(c.response);
          i(e), u(L(e)), h(e), analytics.identify(e.id, {
            username: e.id,
            email: e.email
          });
        }
        document.addEventListener('click', C), s(), t && t(), (pe = !1);
      }), (c.withCredentials = !0), c.send();
    }
  }
  function M(e, t) {
    function n(n) {
      e.contains(n.target) || t.contains(n.target) || i();
    }
    function o() {
      m && m(), s ||
        (
          (s = !0),
          clearTimeout(g),
          (t.style.display = 'block'),
          e.setAttribute('aria-expanded', 'true'),
          d(i),
          y.addEventListener('focusin', n)
        );
    }
    function i() {
      s &&
        (
          (s = !1),
          clearTimeout(g),
          (f = null),
          (t.style.display = 'none'),
          e.setAttribute('aria-expanded', 'false'),
          y.removeEventListener('focusin', n)
        );
    }
    function r() {
      if (s && f === he) return i();
      (f = he), s || (clearTimeout(g), o());
    }
    function a() {
      f !== he &&
        (
          (f = null),
          (g = setTimeout(function() {
            s && null === f && i();
          }, be))
        );
    }
    function l() {
      f !== he && (clearTimeout(g), (f = we));
    }
    function u(n) {
      if (n.target.getAttribute && n.target.getAttribute('data-nav-link'))
        return i();
      if (!t.contains(n.target)) return e.contains(n.target) ? r() : void i();
    }
    function c(t) {
      s &&
        (('Escape' !== t.key && 'Esc' !== t.key && 27 !== t.keyCode) ||
          (i(), e.focus()));
    }
    var s = !1,
      f = null,
      g = void 0,
      y = window.document;
    if (!e.hasAttribute('data-page-shell-hover-menu')) {
      e.setAttribute('data-page-shell-hover-menu', '');
      var p = te(
        e,
        function() {
          f !== he && (clearTimeout(g), (f = we), o());
        },
        function() {}
      );
      e.addEventListener('mouseleave', a), e.addEventListener(
        'keydown',
        c
      ), t.addEventListener('mouseenter', l), t.addEventListener(
        'mouseleave',
        a
      ), t.addEventListener('keydown', c), y.addEventListener(
        'click',
        u
      ), v(function() {
        e.removeAttribute(
          'data-page-shell-hover-menu'
        ), p.remove(), e.removeEventListener('mouseleave', a), e.removeEventListener('keydown', c), t.removeEventListener('mouseenter', l), t.removeEventListener('mouseleave', a), t.removeEventListener('keydown', c), y.removeEventListener('click', u);
      });
    }
  }
  function j(e) {
    console.log('Raven failed to initialize'), e && console.log(e);
  }
  function q() {
    t(function() {
      if (!window.Raven) {
        var e = {
            shouldSendCallback: function() {
              return Ee;
            }
          },
          t = document.createElement('script');
        (t.type = 'text/javascript'), (t.src =
          'https://cdn.ravenjs.com/' + ue + '/raven.min.js'), t.setAttribute(
          'crossorigin',
          'anonymous'
        ), t.setAttribute('async', ''), t.setAttribute(
          'defer',
          ''
        ), (t.onerror = j), (t.onload = function() {
          window.Raven ? window.Raven.config(ce, e).install() : j();
        }), document.head.appendChild(t);
      }
    });
  }
  function R() {
    if (!ke) {
      var e = document.getElementById('page-shell'),
        t = document.getElementById('mobile-nav-menu'),
        n = document.getElementById('mobile-nav-backdrop');
      if (t && e && n) {
        var o = Math.max(
          t.getBoundingClientRect().bottom + 40,
          window.innerHeight
        );
        (e.style.height = String(o) + 'px'), (e.style.overflow =
          'hidden'), (n.style.display = 'block'), (n.style.height =
          String(o - parseInt(n.style.top)) + 'px'), (ke = !0);
      }
    }
  }
  function z() {
    if (ke) {
      var e = document.getElementById('page-shell'),
        t = document.getElementById('mobile-nav-backdrop');
      e &&
        t &&
        (
          (e.style.height = ''),
          (e.style.overflow = ''),
          (e.style.overflowX = 'hidden'),
          (t.style.display = 'none'),
          (t.style.height = ''),
          (ke = !1)
        );
    }
  }
  function N() {
    var e = document.getElementById('mobile-nav-menu'),
      t = document.getElementById('mobile-nav-pointer'),
      n = document.getElementById('mobile-nav-trigger-menu'),
      o = document.getElementById('mobile-nav-trigger-close');
    e &&
      t &&
      n &&
      o &&
      (
        (Ie = !0),
        (e.style.display = 'block'),
        (t.style.display = 'block'),
        (n.style.display = 'none'),
        (o.style.display = 'block'),
        R()
      );
  }
  function D() {
    var e = document.getElementById('mobile-nav-menu'),
      t = document.getElementById('mobile-nav-pointer'),
      n = document.getElementById('mobile-nav-trigger-menu'),
      o = document.getElementById('mobile-nav-trigger-close');
    e &&
      t &&
      n &&
      o &&
      (
        (Ie = !1),
        (e.style.display = 'none'),
        (t.style.display = 'none'),
        (n.style.display = 'block'),
        (o.style.display = 'none'),
        z()
      );
  }
  function O(e) {
    var t = document.getElementById('mobile-nav-trigger'),
      n = document.getElementById('mobile-nav-menu');
    t &&
      n &&
      (e.target.getAttribute && e.target.getAttribute('data-nav-link')
        ? (
            (document.documentElement.scrollTop = 0),
            (document.body.scrollTop = 0),
            D()
          )
        : t.contains(e.target)
          ? Ie ? D() : N()
          : Ie && !n.contains(e.target) && D());
  }
  function U() {
    if (!Le) {
      Le = !0;
      var e = document.querySelectorAll('[data-nav-trigger]');
      if (0 !== e.length) {
        var t = void 0,
          n = void 0,
          o = void 0;
        for (o = 0; o < e.length; o++)
          (n = (t = e[o]).getAttribute('data-nav-trigger')), M(
            t,
            document.querySelector('[data-nav-menu="' + n + '"]')
          );
        document.addEventListener('click', O);
      }
    }
  }
  function X() {
    Le && ((Le = !1), f(), z(), D(), document.removeEventListener('click', O));
  }
  function Y() {
    var t = (window.analytics = window.analytics || []);
    if (((window.analytics = t), !t.initialize))
      if (t.invoked)
        window.console &&
          console.error &&
          console.error('Segment snippet included twice.');
      else {
        (t.invoked = !0), (t.methods = [
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
        ]), (t.factory = function(e) {
          return function() {
            var n = Array.prototype.slice.call(arguments);
            return n.unshift(e), t.push(n), t;
          };
        });
        for (var n = 0; n < t.methods.length; n++) {
          var o = t.methods[n];
          t[o] = t.factory(o);
        }
        (t.load = function(e) {
          var t = document.createElement('script');
          (t.type = 'text/javascript'), (t.async = !0), (t.src =
            ('https:' === document.location.protocol ? 'https://' : 'http://') +
            'cdn.segment.com/analytics.js/v1/' +
            e +
            '/analytics.min.js');
          var n = document.getElementsByTagName('script')[0];
          n.parentNode.insertBefore(t, n);
        }), (t.SNIPPET_VERSION = '4.0.0');
      }
    e() ? t.load(ae) : t.load(le), t.page();
  }
  function H() {
    if (window.history && window.history.pushState) {
      var e = void 0,
        t = function(t) {
          (t = t || {}), setTimeout(function() {
            (t.referrer = e), analytics.page(t), window._cio && window._cio.page && window._cio.page(window.location.href), (e = window.location.href);
          }, 300);
        },
        n = window.history.pushState;
      (window.history.pushState = function() {
        (e = window.location.href), t({
          clientSideRouting: 'pushstate'
        }), n.apply(window.history, arguments);
      }), window.addEventListener('popstate', function() {
        t({ clientSideRouting: 'popstate' });
      });
    }
  }
  function F(e, t) {
    return '' + e + W(t);
  }
  function J(e, t) {
    return '-' + e + '-' + t;
  }
  function W(e) {
    return '' + e.charAt(0).toUpperCase() + e.substr(1);
  }
  function _(e) {
    return (
      e in
      (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window)
    );
  }
  function Q(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Se;
    return (
      e in n.style ||
      (!!t &&
        xe.some(function(t) {
          return Q(F(t, e));
        }))
    );
  }
  function V(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Se,
      i = n.allowPrefixedProp,
      r = n.allowPrefixedValue,
      a = !1;
    return (i || r) &&
      (a = xe.some(function(n) {
        return V(i ? F(n, e) : e, r ? J(n, t) : t);
      })), a || ((o.style[e] = t), o.style[e] === t);
  }
  function Z() {
    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Se;
    (Be = {
      flexBox:
        Q('flex', e, t) &&
        V(
          'display',
          'flex',
          { allowPrefixedProp: !1, allowPrefixedValue: e },
          t
        ),
      viewportUnits: V(
        'width',
        '100vw',
        { allowPrefixedProp: !1, allowPrefixedValue: !1 },
        t
      ),
      visibilityState: _('visibilityState', window.document),
      devicePixelRatio: _('devicePixelRatio')
    }).doesCutMustard = Object.keys(Be).every(function(e) {
      return Be[e];
    });
  }
  function G() {
    var e = window.document.getElementById('page-shell-compatibility-dismiss'),
      t = window.document.getElementById('page-shell-compatibility-warning');
    (Te = !0), (Ae = !1), e && e.removeEventListener('click', G), t &&
      (t.style.display = 'none'), window.localStorage &&
      window.localStorage.setItem(
        'suppress-browser-compatibility-warning',
        'true'
      );
  }
  function $() {
    if (
      (
        null == Be.doesCutMustard && Z(!0),
        !(
          Te ||
          Be.doesCutMustard ||
          ('localStorage' in window &&
            'true' ===
              window.localStorage.getItem(
                'suppress-browser-compatibility-warning'
              ))
        )
      )
    ) {
      var e = window.document.getElementById(
        'page-shell-compatibility-warning'
      );
      if ((e && (e.style.display = 'block'), !Ae)) {
        var t = window.document.getElementById(
          'page-shell-compatibility-dismiss'
        );
        t && t.addEventListener('click', G);
      }
      Ae = !0;
    }
  }
  var K = function() {
      for (var e = {}, t = 0; t < arguments.length; t++) {
        var n = arguments[t];
        for (var o in n) ee.call(n, o) && (e[o] = n[o]);
      }
      return e;
    },
    ee = Object.prototype.hasOwnProperty,
    te = function(e, t, n) {
      function o(e, t) {
        return f && (f = clearTimeout(f)), (v = 0), n.call(e, t);
      }
      function i(e) {
        (u = e.clientX), (c = e.clientY);
      }
      function r(e, n) {
        if (
          (
            f && (f = clearTimeout(f)),
            Math.abs(s - u) + Math.abs(d - c) < g.sensitivity
          )
        )
          return (v = 1), t.call(e, n);
        (s = u), (d = c), (f = setTimeout(function() {
          r(e, n);
        }, g.interval));
      }
      function a(t) {
        return f && (f = clearTimeout(f)), e.removeEventListener(
          'mousemove',
          i,
          !1
        ), 1 !== v &&
          (
            (s = t.clientX),
            (d = t.clientY),
            e.addEventListener('mousemove', i, !1),
            (f = setTimeout(function() {
              r(e, t);
            }, g.interval))
          ), this;
      }
      function l(t) {
        return f && (f = clearTimeout(f)), e.removeEventListener(
          'mousemove',
          i,
          !1
        ), 1 === v &&
          (f = setTimeout(function() {
            o(e, t);
          }, g.timeout)), this;
      }
      var u,
        c,
        s,
        d,
        m = {},
        v = 0,
        f = 0,
        g = { sensitivity: 7, interval: 100, timeout: 0 };
      return (m.options = function(e) {
        return (g = K({}, g, e)), m;
      }), (m.remove = function() {
        e &&
          (
            e.removeEventListener('mouseover', a, !1),
            e.removeEventListener('mouseout', l, !1)
          );
      }), e &&
        (
          e.addEventListener('mouseover', a, !1),
          e.addEventListener('mouseout', l, !1)
        ), m;
    },
    ne = 'https://www.mapbox.com',
    oe = 'https://122e4e-mapbox.global.ssl.fastly.net',
    ie =
      'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA',
    re =
      'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpZ3BqeDZlcDAwMDBzcmt1YnQ1OTM4cTEifQ.54XwgUSkvlmB7gHW4vWJ3w',
    ae = 'fl0c8p240n',
    le = '0biiejpgfj',
    ue = '3.17.0',
    ce = 'https://581913e6cd0845d785f5b551a4986b61@sentry.io/11290',
    se = void 0,
    de = void 0,
    me = [],
    ve = [],
    fe = void 0,
    ge = !1,
    ye = !1,
    pe = !1,
    we = 'mouse',
    he = 'click',
    be = 300,
    Ee = !0,
    ke = !1,
    Ie = !1,
    Le = !1,
    Se = window.document.createElement('div'),
    xe = ['webkit', 'moz', 'o', 'ms'],
    Be = {},
    Ae = !1,
    Te = !1,
    Ce = !1,
    Pe = {
      isProduction: e,
      afterDomContentLoaded: t,
      hoverintent: te,
      appendFullscreenLoader: n,
      getMapboxAccessToken: function() {
        return e() ? ie : re;
      },
      getUser: o,
      isUserChecked: r,
      onNextUserCheck: g,
      afterUserCheck: function(e) {
        r() ? e() : g(e);
      },
      getUserPublicAccessToken: l,
      querySelectorContainsElement: y,
      signOut: I,
      checkSession: P,
      createHoverMenu: M,
      initializeNavigation: U,
      removeNavigation: X,
      initialize: function() {
        Ce || (Y(), q(), H()), (Ce = !0), t(function() {
          P(), X(), U(), $();
        });
      },
      disableRaven: function() {
        Ee = !1;
      },
      generateCompatibilitySummary: Z,
      getCompatibilitySummary: function() {
        return Be;
      }
    };
  (window.MapboxPageShell = Pe), Pe.initialize();
})();
