/*eslint-disable*/
!(function() {
  'use strict';
  function e(e, t, n) {
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
      for (var t in e) e.hasOwnProperty(t) && (g[t] = e[t]);
      return m;
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
  }
  function t() {
    return (
      !0 === window.MapboxPageShellProduction ||
      /mapbox\.com$/.test(window.location.hostname)
    );
  }
  function n(e) {
    'loading' !== document.readyState
      ? e()
      : document.addEventListener('DOMContentLoaded', e);
  }
  function o() {
    var e = document.createElement('div');
    e.className = 'shell-wrapper';
    var t = document.createElement('div');
    (t.className =
      'shell-loading shell-loading--dark shell-fixed shell-top shell-left shell-right shell-bottom shell-flex-parent shell-bg-darken50'), (t.style.zIndex =
      '9999'), e.appendChild(t), document.body.appendChild(e);
  }
  function i() {
    return oe;
  }
  function r(e) {
    oe = e;
  }
  function a() {
    return ue;
  }
  function l() {
    ue = !0;
  }
  function u() {
    return ie;
  }
  function c(e) {
    ie = e;
  }
  function s(e) {
    re.push(e);
  }
  function d() {
    re.forEach(function(e) {
      e();
    }), (re = []);
  }
  function m(e) {
    le = e;
  }
  function v() {
    le && le();
  }
  function f(e) {
    ae.push(e);
  }
  function g() {
    ae.forEach(function(e) {
      e();
    }), (ae = []);
  }
  function y(e) {
    s(e);
  }
  function p(e, t) {
    for (var n = document.querySelectorAll(e), o = 0; o < n.length; o++)
      if (n[o].contains(t)) return !0;
    return !1;
  }
  function h() {
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
  function E(e) {
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
  function k(e) {
    throw (h(), e);
  }
  function I() {
    return t() ? G : $;
  }
  function L() {
    o();
    var e = new XMLHttpRequest();
    (e.withCredentials = !0), (e.onerror = k), (e.onload = function() {
      if (200 === e.status) return window.location.reload();
      throw new Error(e.statusText);
    }), e.open('DELETE', I() + '/api/logout'), e.send();
  }
  function B(e) {
    if (e && e.authorizations)
      for (var t = void 0, n = 0, o = e.authorizations.length; n < o; n++)
        if (
          'api' === (t = e.authorizations[n]).client &&
          'pk' === t.usage &&
          !0 === t.default
        )
          return t.token;
  }
  function x() {
    return ce;
  }
  function S(e) {
    if (ce && ('Escape' === e.key || 'Esc' === e.key || 27 === e.keyCode)) {
      C();
      var t = document.getElementById('user-menu-trigger');
      t && t.focus();
    }
  }
  function A(e) {
    var t = document.getElementById('user-menu-body'),
      n = document.getElementById('user-menu-trigger');
    t && n && (t.contains(e.target) || n.contains(e.target) || C());
  }
  function T() {
    var e = document.getElementById('user-menu-body'),
      t = document.getElementById('user-menu-trigger');
    e &&
      t &&
      (
        v && v(),
        (ce = !0),
        (e.style.display = 'block'),
        m(C),
        e.addEventListener('keydown', S),
        t.setAttribute('aria-expanded', 'true'),
        t.addEventListener('keydown', S),
        document.addEventListener('focusin', A)
      );
  }
  function C() {
    var e = document.getElementById('user-menu-body'),
      t = document.getElementById('user-menu-trigger');
    e &&
      t &&
      (
        (ce = !1),
        (e.style.display = 'none'),
        e.removeEventListener('keydown', S),
        t.setAttribute('aria-expanded', 'false'),
        t.removeEventListener('keydown', S),
        document.removeEventListener('focusin', A)
      );
  }
  function P(e) {
    if (p('[data-sign-out]', e.target)) return e.preventDefault(), L();
    var t = x(),
      n = document.getElementById('user-menu-trigger');
    if (!t && n && n.contains(e.target)) return T();
    var o = document.getElementById('user-menu-body');
    return t && o && !o.contains(e.target) ? C() : void 0;
  }
  function M(e, t) {
    if (
      (
        'function' == typeof e ? ((t = e), (e = {})) : (e = e || {}),
        (e.cache = void 0 === e.cache || e.cache),
        a() && e.cache
      )
    ) {
      var n = i();
      return n ? E(n, u()) : h(), d(), void (t && t());
    }
    if (se) t && y(t);
    else {
      se = !0;
      var o = new XMLHttpRequest();
      o.open('GET', I() + '/api/session'), o.setRequestHeader(
        'Accept',
        'application/json'
      ), (o.onerror = k), (o.onload = function() {
        if ((l(), 403 === o.status)) h();
        else if (200 !== o.status) h(), console.log(o.statusText);
        else {
          var e = JSON.parse(o.response);
          r(e), c(B(e)), E(e), analytics.identify(e.id, {
            username: e.id,
            email: e.email
          });
        }
        document.addEventListener('click', P), d(), t && t(), (se = !1);
      }), (o.withCredentials = !0), o.send();
    }
  }
  function q(t, n) {
    function o(e) {
      t.contains(e.target) || n.contains(e.target) || r();
    }
    function i() {
      v && v(), d ||
        (
          (d = !0),
          clearTimeout(y),
          (n.style.display = 'block'),
          t.setAttribute('aria-expanded', 'true'),
          m(r),
          p.addEventListener('focusin', o)
        );
    }
    function r() {
      d &&
        (
          (d = !1),
          clearTimeout(y),
          (g = null),
          (n.style.display = 'none'),
          t.setAttribute('aria-expanded', 'false'),
          p.removeEventListener('focusin', o)
        );
    }
    function a() {
      if (d && g === me) return r();
      (g = me), d || (clearTimeout(y), i());
    }
    function l() {
      g !== me &&
        (
          (g = null),
          (y = setTimeout(function() {
            d && null === g && r();
          }, ve))
        );
    }
    function u() {
      g !== me && (clearTimeout(y), (g = de));
    }
    function c(e) {
      if (e.target.getAttribute && e.target.getAttribute('data-nav-link'))
        return r();
      if (!n.contains(e.target)) return t.contains(e.target) ? a() : void r();
    }
    function s(e) {
      d &&
        (('Escape' !== e.key && 'Esc' !== e.key && 27 !== e.keyCode) ||
          (r(), t.focus()));
    }
    var d = !1,
      g = null,
      y = void 0,
      p = window.document;
    if (!t.hasAttribute('data-page-shell-hover-menu')) {
      t.setAttribute('data-page-shell-hover-menu', '');
      var h = e(
        t,
        function() {
          g !== me && (clearTimeout(y), (g = de), i());
        },
        function() {}
      );
      t.addEventListener('mouseleave', l), t.addEventListener(
        'keydown',
        s
      ), n.addEventListener('mouseenter', u), n.addEventListener(
        'mouseleave',
        l
      ), n.addEventListener('keydown', s), p.addEventListener(
        'click',
        c
      ), f(function() {
        t.removeAttribute(
          'data-page-shell-hover-menu'
        ), h.remove(), t.removeEventListener('mouseleave', l), t.removeEventListener('keydown', s), n.removeEventListener('mouseenter', u), n.removeEventListener('mouseleave', l), n.removeEventListener('keydown', s), p.removeEventListener('click', c);
      });
    }
  }
  function N() {
    if (!fe) {
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
          String(o - parseInt(n.style.top)) + 'px'), (fe = !0);
      }
    }
  }
  function z() {
    if (fe) {
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
          (fe = !1)
        );
    }
  }
  function j() {
    var e = document.getElementById('mobile-nav-menu'),
      t = document.getElementById('mobile-nav-pointer'),
      n = document.getElementById('mobile-nav-trigger-menu'),
      o = document.getElementById('mobile-nav-trigger-close');
    e &&
      t &&
      n &&
      o &&
      (
        (ge = !0),
        (e.style.display = 'block'),
        (t.style.display = 'block'),
        (n.style.display = 'none'),
        (o.style.display = 'block'),
        N()
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
        (ge = !1),
        (e.style.display = 'none'),
        (t.style.display = 'none'),
        (n.style.display = 'block'),
        (o.style.display = 'none'),
        z()
      );
  }
  function U(e) {
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
          ? ge ? D() : j()
          : ge && !n.contains(e.target) && D());
  }
  function X() {
    if (!ye) {
      ye = !0;
      var e = document.querySelectorAll('[data-nav-trigger]');
      if (0 !== e.length) {
        var t = void 0,
          n = void 0,
          o = void 0;
        for (o = 0; o < e.length; o++)
          (n = (t = e[o]).getAttribute('data-nav-trigger')), q(
            t,
            document.querySelector('[data-nav-menu="' + n + '"]')
          );
        document.addEventListener('click', U);
      }
    }
  }
  function Y() {
    ye && ((ye = !1), g(), z(), D(), document.removeEventListener('click', U));
  }
  function H() {
    var e = (window.analytics = window.analytics || []);
    if (((window.analytics = e), !e.initialize))
      if (e.invoked)
        window.console &&
          console.error &&
          console.error('Segment snippet included twice.');
      else {
        (e.invoked = !0), (e.methods = [
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
        ]), (e.factory = function(t) {
          return function() {
            var n = Array.prototype.slice.call(arguments);
            return n.unshift(t), e.push(n), e;
          };
        });
        for (var n = 0; n < e.methods.length; n++) {
          var o = e.methods[n];
          e[o] = e.factory(o);
        }
        (e.load = function(e) {
          var t = document.createElement('script');
          (t.type = 'text/javascript'), (t.async = !0), (t.src =
            ('https:' === document.location.protocol ? 'https://' : 'http://') +
            'cdn.segment.com/analytics.js/v1/' +
            e +
            '/analytics.min.js');
          var n = document.getElementsByTagName('script')[0];
          n.parentNode.insertBefore(t, n);
        }), (e.SNIPPET_VERSION = '4.0.0');
      }
    t() ? e.load(te) : e.load(ne), e.page();
  }
  function O(e, t) {
    return '' + e + F(t);
  }
  function R(e, t) {
    return '-' + e + '-' + t;
  }
  function F(e) {
    return '' + e.charAt(0).toUpperCase() + e.substr(1);
  }
  function J(e) {
    return (
      e in
      (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window)
    );
  }
  function W(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : pe;
    return (
      e in n.style ||
      (!!t &&
        he.some(function(t) {
          return W(O(t, e));
        }))
    );
  }
  function Q(e, t) {
    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : pe,
      i = n.allowPrefixedProp,
      r = n.allowPrefixedValue,
      a = !1;
    return (i || r) &&
      (a = he.some(function(n) {
        return Q(i ? O(n, e) : e, r ? R(n, t) : t);
      })), a || ((o.style[e] = t), o.style[e] === t);
  }
  function V() {
    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pe;
    (we = {
      flexBox:
        W('flex', e, t) &&
        Q(
          'display',
          'flex',
          { allowPrefixedProp: !1, allowPrefixedValue: e },
          t
        ),
      viewportUnits: Q(
        'width',
        '100vw',
        { allowPrefixedProp: !1, allowPrefixedValue: !1 },
        t
      ),
      visibilityState: J('visibilityState', window.document),
      devicePixelRatio: J('devicePixelRatio')
    }).doesCutMustard = Object.keys(we).every(function(e) {
      return we[e];
    });
  }
  function Z() {
    var e = window.document.getElementById('page-shell-compatibility-dismiss'),
      t = window.document.getElementById('page-shell-compatibility-warning');
    (be = !0), (Ee = !1), e && e.removeEventListener('click', Z), t &&
      (t.style.display = 'none'), window.localStorage &&
      window.localStorage.setItem(
        'suppress-browser-compatibility-warning',
        'true'
      );
  }
  function _() {
    if (
      (
        null == we.doesCutMustard && V(!0),
        !(
          be ||
          we.doesCutMustard ||
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
      if ((e && (e.style.display = 'block'), !Ee)) {
        var t = window.document.getElementById(
          'page-shell-compatibility-dismiss'
        );
        t && t.addEventListener('click', Z);
      }
      Ee = !0;
    }
  }
  var G = 'https://www.mapbox.com',
    $ = 'https://122e4e-mapbox.global.ssl.fastly.net',
    K =
      'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA',
    ee =
      'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpZ3BqeDZlcDAwMDBzcmt1YnQ1OTM4cTEifQ.54XwgUSkvlmB7gHW4vWJ3w',
    te = 'fl0c8p240n',
    ne = '0biiejpgfj',
    oe = void 0,
    ie = void 0,
    re = [],
    ae = [],
    le = void 0,
    ue = !1,
    ce = !1,
    se = !1,
    de = 'mouse',
    me = 'click',
    ve = 300,
    fe = !1,
    ge = !1,
    ye = !1,
    pe = window.document.createElement('div'),
    he = ['webkit', 'moz', 'o', 'ms'],
    we = {},
    Ee = !1,
    be = !1,
    ke = !1,
    Ie = {
      isProduction: t,
      afterDomContentLoaded: n,
      hoverIntent: e,
      appendFullscreenLoader: o,
      getMapboxAccessToken: function() {
        return t() ? K : ee;
      },
      getUser: i,
      isUserChecked: a,
      onNextUserCheck: y,
      afterUserCheck: function(e) {
        a() ? e() : y(e);
      },
      getUserPublicAccessToken: u,
      querySelectorContainsElement: p,
      signOut: L,
      checkSession: M,
      createHoverMenu: q,
      initializeNavigation: X,
      removeNavigation: Y,
      initialize: function() {
        ke || H(), (ke = !0), n(function() {
          M(), Y(), X(), _();
        });
      },
      generateCompatibilitySummary: V,
      getCompatibilitySummary: function() {
        return we;
      }
    };
  (window.MapboxPageShell = Ie), Ie.initialize();
})();
