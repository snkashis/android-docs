/* eslint-disable */
'use strict';

function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));
var Helmet = require('react-helmet');
var Helmet__default = _interopDefault(Helmet);

var classCallCheck = function(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
};

var createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

var _extends =
  Object.assign ||
  function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

var inherits = function(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError(
      'Super expression must either be null or a function, not ' +
        typeof superClass
    );
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
};

var possibleConstructorReturn = function(self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }

  return call && (typeof call === 'object' || typeof call === 'function')
    ? call
    : self;
};

var BrowserCompatibilityWarning = (function(_React$Component) {
  inherits(BrowserCompatibilityWarning, _React$Component);

  function BrowserCompatibilityWarning() {
    classCallCheck(this, BrowserCompatibilityWarning);
    return possibleConstructorReturn(
      this,
      (BrowserCompatibilityWarning.__proto__ ||
        Object.getPrototypeOf(BrowserCompatibilityWarning))
        .apply(this, arguments)
    );
  }

  createClass(BrowserCompatibilityWarning, [
    {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate() {
        return false;
      }
    },
    {
      key: 'render',
      value: function render() {
        return React.createElement(
          'div',
          {
            className: 'shell-wrapper',
            id: 'page-shell-compatibility-warning',
            style: { display: 'none' }
          },
          React.createElement(
            'div',
            {
              className:
                'shell-py12 shell-px24 shell-bg-pink shell-color-white shell-align-left'
            },
            React.createElement(
              'button',
              {
                className: 'shell-absolute shell-top shell-right shell-p12',
                id: 'page-shell-compatibility-dismiss'
              },
              React.createElement(
                'svg',
                { className: 'shell-icon', viewBox: '0 0 18 18' },
                React.createElement('path', {
                  d:
                    'M5.8,5C5.4,5,5,5.4,5,5.8C5,6,5.1,6.2,5.3,6.3l0,0L7.9,9l-2.6,2.6C5.1,11.8,5,12,5,12.2C5,12.6,5.4,13,5.8,13 c0.2,0,0.4-0.1,0.6-0.3L9,10.1l2.6,2.6c0.1,0.2,0.4,0.3,0.6,0.3c0.4,0,0.8-0.4,0.8-0.8c0-0.2-0.1-0.4-0.2-0.6L10.1,9l2.6-2.7 C12.9,6.2,13,6,13,5.8C13,5.4,12.6,5,12.2,5c-0.2,0-0.4,0.1-0.6,0.2L9,7.8L6.4,5.2C6.2,5.1,6,5,5.8,5L5.8,5z'
                })
              )
            ),
            React.createElement(
              'div',
              { className: 'limiter shell-block shell-relative' },
              React.createElement(
                'div',
                {
                  className:
                    'compatibility-warning-copy shell-mb6 shell-mb0-mm shell-align-center shell-align-left-mm shell-txt-bold'
                },
                'You are using an outdated browser and will encounter some problems with our website. Please consider upgrading.'
              ),
              React.createElement(
                'div',
                {
                  className: 'compatibility-warning-action shell-align-center'
                },
                React.createElement(
                  'a',
                  {
                    className:
                      'shell-btn shell-btn--white shell-color-pink shell-txt-nowrap',
                    href: 'http://outdatedbrowser.com'
                  },
                  'Upgrade Now'
                )
              )
            )
          )
        );
      }
    }
  ]);
  return BrowserCompatibilityWarning;
})(React.Component);

var PageHelmet = (function(_React$Component) {
  inherits(PageHelmet, _React$Component);

  function PageHelmet() {
    classCallCheck(this, PageHelmet);
    return possibleConstructorReturn(
      this,
      (PageHelmet.__proto__ || Object.getPrototypeOf(PageHelmet))
        .apply(this, arguments)
    );
  }

  createClass(PageHelmet, [
    {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate() {
        return false;
      }
    },
    {
      key: 'render',
      value: function render() {
        return React.createElement(
          Helmet.Helmet,
          null,
          React.createElement('meta', { charSet: 'utf-8' }),
          React.createElement('meta', {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1'
          }),
          React.createElement('link', {
            rel: 'shortcut icon',
            href: '/favicon.ico',
            type: 'image/x-icon'
          }),
          React.createElement('meta', {
            name: 'p:domain_verify',
            content: '57838af58c8045c2c024bc2f9d1577f9'
          }),
          React.createElement('meta', {
            name: 'twitter:site',
            content: '@Mapbox'
          }),
          React.createElement('meta', {
            property: 'og:site_name',
            content: 'Mapbox'
          })
        );
      }
    }
  ]);
  return PageHelmet;
})(React.Component);

var shellStyles = {
  navLink:
    'shell-block shell-color-gray-dark shell-color-blue-on-hover shell-txt-ms shell-py3 shell-px0 shell-px6-ml shell-mt3',
  navLinkHighlight:
    'shell-block shell-color-gray-dark shell-color-blue-on-hover shell-txt-s shell-py6 shell-px0 shell-px6-ml shell-opacity75-on-hover shell-transition',
  navHeading:
    'shell-mb3 shell-txt-uppercase shell-txt-s shell-txt-spacing1 shell-txt-fancy shell-color-darken50',
  popoverContainer: 'shell-absolute shell-z5',
  popoverBody: 'shell-round shell-shadow-darken25-bold shell-bg-white',
  popoverTriangle: 'shell-triangle shell-triangle--u shell-relative shell-z2',
  avatar:
    'shell-border shell-border--2 shell-border--white shell-h30 shell-w30 shell-bg-darken25 shell-clip shell-round-full'
};

var UserMenu = (function(_React$Component) {
  inherits(UserMenu, _React$Component);

  function UserMenu() {
    classCallCheck(this, UserMenu);
    return possibleConstructorReturn(
      this,
      (UserMenu.__proto__ || Object.getPrototypeOf(UserMenu))
        .apply(this, arguments)
    );
  }

  createClass(UserMenu, [
    {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate() {
        return false;
      }
    },
    {
      key: 'render',
      value: function render() {
        var signInButtonColorClasses = this.props.darkText
          ? 'shell-btn--stroke shell-color-gray-dark shell-color-blue-on-hover'
          : 'shell-btn--lighten25';
        var userButtonColorClasses = this.props.darkText
          ? 'shell-color-gray-dark shell-color-blue-on-hover'
          : 'shell-link shell-link--white';

        // Very special case: If we are on the sign-up page with a route-to query param,
        // we need that param to persist when the user clicks the sign-in button in
        // the page header.
        var signInQuery = '';
        if (typeof window !== 'undefined' && window.location.search) {
          var match = window.location.search.match(
            /^\?.*?(?:.&)?(route-to=[^&]*).*$/
          );
          if (match) {
            signInQuery = '?' + match[1];
          }
        }

        return (
          // Hard-coded width matches the width of the sign-in button, which is slightly
          // wider than the user-menu trigger. By hard-coding this value we can prevent
          // horizontal bounce when the session API response comes back.
          // **Be careful changing this value!** The width varies based on browser,
          // so you need to accommodate the browser with the fattest fonts.
          React.createElement(
            'div',
            { style: { width: 66 } },
            React.createElement(
              'div',
              { 'data-show-unauthenticated': true, style: { display: 'none' } },
              React.createElement(
                'a',
                {
                  className:
                    'shell-btn shell-w-full shell-py6 shell-round-full shell-txt-s ' +
                    signInButtonColorClasses,
                  href: '/signin/' + signInQuery,
                  id: 'signin-button',
                  'data-test': 'signin-button'
                },
                'Sign in'
              )
            ),
            React.createElement(
              'div',
              {
                'data-show-authenticated': true,
                style: { display: 'none' },
                className: 'clearfix'
              },
              React.createElement(
                'div',
                { id: 'user-menu', className: 'shell-relative shell-fr' },
                React.createElement(
                  'button',
                  {
                    id: 'user-menu-trigger',
                    'data-test': 'user-menu-trigger',
                    'aria-haspopup': 'true',
                    'aria-controls': 'user-menu-body',
                    'aria-expanded': 'false',
                    'aria-label': 'User menu',
                    className:
                      'shell-flex-parent shell-flex-parent--center-cross ' +
                      userButtonColorClasses
                  },
                  React.createElement('span', {
                    'data-user-avatar': true,
                    className:
                      'shell-flex-child shell-flex-child--no-shrink ' +
                      shellStyles.avatar
                  }),
                  React.createElement(
                    'span',
                    {
                      className:
                        'shell-user-menu-icon shell-flex-child shell-ml6'
                    },
                    React.createElement(
                      'svg',
                      { viewBox: '0 0 18 18', className: 'shell-icon' },
                      React.createElement('path', {
                        d:
                          'M9,12.4H9a.6047.6047,0,0,1-.6-.3L4.8,8.2A.8485.8485,0,1,1,6,7l3,3.2L12.4,7a.9125.9125,0,0,1,1.2,0,.9125.9125,0,0,1,0,1.2l-4,3.9A.8643.8643,0,0,1,9,12.4Z'
                      })
                    )
                  )
                ),
                React.createElement(
                  'div',
                  {
                    id: 'user-menu-body',
                    'data-test': 'user-menu',
                    role: 'group',
                    'aria-labelledby': 'user-menu-trigger',
                    className:
                      shellStyles.popoverContainer + ' shell-right shell-w240',
                    style: { display: 'none', top: '100%' }
                  },
                  React.createElement(
                    'div',
                    { className: 'shell-clearfix shell-mr3 shell-mt3' },
                    React.createElement('div', {
                      className:
                        'shell-fr shell-mr30 shell-color-white ' +
                        shellStyles.popoverTriangle
                    })
                  ),
                  React.createElement(
                    'div',
                    {
                      className:
                        shellStyles.popoverBody + ' shell-px12 shell-py12'
                    },
                    React.createElement(
                      'a',
                      {
                        href: '/studio/account/',
                        className: shellStyles.navLink
                      },
                      'Account'
                    ),
                    React.createElement(
                      'a',
                      { href: '/studio/', className: shellStyles.navLink },
                      'Mapbox Studio'
                    ),
                    React.createElement(
                      'a',
                      { href: '/help/', className: shellStyles.navLink },
                      'Help'
                    ),
                    React.createElement(
                      'div',
                      {
                        className:
                          'shell-bg-gray-faint shell-mt12 shell-round-b shell-p12 shell-ml-neg12 shell-mb-neg12 shell-mr-neg12 shell-txt-ms'
                      },
                      React.createElement(
                        'div',
                        { className: 'shell-color-gray shell-px6' },
                        React.createElement('span', { 'data-user-name': true })
                      ),
                      React.createElement(
                        'button',
                        {
                          'data-sign-out': true,
                          'data-test': 'signout-button',
                          className:
                            shellStyles.navLink +
                            ' shell-mt6 shell-flex-parent shell-flex-parent-center--cross shell-txt-bold'
                        },
                        React.createElement(
                          'span',
                          { className: 'shell-flex-child' },
                          React.createElement(
                            'svg',
                            {
                              viewBox: '0 0 18 18',
                              className: 'shell-icon shell-mr6'
                            },
                            React.createElement('path', {
                              d:
                                'M4,4c0,0-1,0-1,1v8c0,1,1,1,1,1h4c0.6,0,1-0.4,1-1s-0.4-1-1-1H5V6h3c0.6,0,1-0.4,1-1S8.6,4,8,4H4z M11,5 c-0.3,0-0.5,0.1-0.7,0.3c-0.4,0.4-0.4,1,0,1.4L11.6,8H7C6.5,8,6,8.5,6,9s0.5,1,1,1h4.6l-1.3,1.3c-0.4,0.4-0.4,1,0,1.4s1,0.4,1.4,0 l2.8-2.9c0.2-0.2,0.4-0.5,0.4-0.9c0-0.3-0.2-0.6-0.4-0.9l-2.8-2.9C11.5,5.1,11.3,5,11,5L11,5z'
                            })
                          )
                        ),
                        React.createElement(
                          'span',
                          { className: 'shell-flex-child' },
                          'Sign out'
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        );
      }
    }
  ]);
  return UserMenu;
})(React.Component);

var navigationMenuData = {
  menuOrder: ['products', 'developers', 'industries', 'company'],
  menus: {
    products: {
      name: 'Products',
      links: [
        { name: 'Maps', to: '/maps/' },
        { name: 'Mapbox Studio', to: '/mapbox-studio/' },
        { name: 'Mobile', to: '/mobile/' },
        { name: 'Satellite', to: '/maps/satellite/' },
        { name: 'Directions', to: '/directions/' },
        { name: 'Geocoding', to: '/geocoding/' }
      ],
      highlightedLinks: [{ name: 'All products', to: '/products/' }]
    },
    developers: {
      name: 'Developers',
      links: [
        { name: 'iOS SDK', to: '/ios-sdk/' },
        { name: 'Android SDK', to: '/android-sdk/' },
        { name: 'Web', to: '/mapbox-gl-js/api/' },
        { name: 'Unity', to: '/unity/' },
        { name: 'Navigation SDK', to: '/navigation-sdk/' }
      ],
      highlightedLinks: [
        { name: 'Documentation', to: '/developers/' },
        { name: 'Help', to: '/help/', hideInHeader: true }
      ]
    },
    industries: {
      name: 'Industries',
      twoColumns: true,
      links: [
        { name: 'Agriculture', to: '/industries/agriculture/' },
        {
          name: 'BI & Analytics',
          to: '/industries/business-intelligence/'
        },
        { name: 'Drones', to: '/industries/drones/' },
        { name: 'Government', to: '/industries/government/' },
        { name: 'Logistics', to: '/industries/logistics/' },
        { name: 'Media', to: '/industries/media/' },
        { name: 'Outdoors', to: '/industries/outdoors/' },
        { name: 'Real estate', to: '/industries/real-estate/' },
        { name: 'Mobility', to: '/industries/transportation/' },
        { name: 'Travel', to: '/industries/travel/' }
      ],
      highlightedLinks: [
        { name: 'Pricing', to: '/pricing/', hideInHeader: true },
        { name: 'Showcase', to: '/showcase/' }
      ]
    },
    company: {
      name: 'Company',
      links: [
        { name: 'About', to: '/about/' },
        { name: 'Jobs', to: '/jobs/' },
        { name: 'Teams', to: '/about/team/' },
        { name: 'Blog', to: '/blog/' },
        { name: 'Open source', to: '/about/open/' },
        { name: 'Security', to: '/security/' }
      ],
      highlightedLinks: [{ name: 'Contact', to: '/contact/' }]
    }
  },
  useCaseMenu: {
    name: 'Use cases',
    links: [
      { name: 'Asset tracking', to: '/use-cases/asset-tracking/' },
      { name: 'Data visualization', to: '/use-cases/data-visualization/' }
    ],
    highlightedLinks: []
  }
};

/* eslint-disable react/no-multi-comp */
/**
 * This is a mess because it's supposed to be very temporary!!!
 * If you find yourself changing this after July, 2017, then refactor this code!!!
 */
function ProductsMenu() {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'div',
      { className: 'shell-pt12 shell-pb12 shell-px12' },
      React.createElement(
        'div',
        {
          className:
            'shell-mb12 shell-pb12 shell-border-b shell-border--gray-faint'
        },
        React.createElement(
          'div',
          {
            className:
              'shell-mb3 shell-txt-uppercase shell-txt-s shell-txt-spacing1 shell-txt-fancy shell-color-dark shell-opacity50 shell-pt6 shell-px6'
          },
          navigationMenuData.menus.products.name
        ),
        React.createElement(
          'ul',
          { className: 'shell-grid' },
          navigationMenuData.menus.products.links.map(function(link, i) {
            return React.createElement(
              'li',
              { className: 'shell-col shell-col--6', key: i },
              React.createElement(
                'a',
                {
                  href: link.to,
                  className: '' + shellStyles.navLink,
                  'data-nav-link': true,
                  'data-test': 'nav-link-' + link.name
                },
                link.name
              )
            );
          })
        )
      ),
      React.createElement(
        'div',
        { className: 'shell-pb6' },
        React.createElement(
          'div',
          {
            className:
              'shell-mb3 shell-txt-uppercase shell-txt-s shell-txt-spacing1 shell-txt-fancy shell-color-dark shell-opacity50 shell-pt6 shell-px6'
          },
          navigationMenuData.useCaseMenu.name
        ),
        React.createElement(
          'ul',
          { className: 'shell-grid' },
          navigationMenuData.useCaseMenu.links.map(function(link, i) {
            return React.createElement(
              'li',
              { className: 'shell-col shell-col--6', key: i },
              React.createElement(
                'a',
                {
                  href: link.to,
                  className: '' + shellStyles.navLink,
                  'data-nav-link': true,
                  'data-test': 'nav-link-' + link.name
                },
                link.name
              )
            );
          })
        )
      )
    ),
    React.createElement(
      'div',
      {
        className:
          'shell-bg-gray-faint shell-relative shell-py6 shell-pt3 shell-pb6 shell-clip shell-round-b shell-px12'
      },
      React.createElement(
        'ul',
        { className: 'shell-grid' },
        navigationMenuData.menus.products.highlightedLinks.map(function(
          highlightedLink,
          i
        ) {
          return React.createElement(
            'li',
            { className: 'shell-col shell-col--6', key: i },
            React.createElement(
              'a',
              {
                href: highlightedLink.to,
                className:
                  shellStyles.navLinkHighlight +
                  ' shell-mt3 shell-txt-bold shell-flex-parent shell-flex-parent--center-cross',
                'data-nav-link': highlightedLink.name,
                'data-test': 'nav-link-products'
              },
              React.createElement(
                'div',
                { className: 'shell-flex-child' },
                highlightedLink.name
              ),
              React.createElement(
                'div',
                { className: 'shell-flex-child' },
                React.createElement(
                  'svg',
                  {
                    viewBox: '0 0 18 18',
                    className: 'shell-icon shell-ml13'
                  },
                  React.createElement(
                    'g',
                    null,
                    React.createElement('path', {
                      d:
                        'M14.6,9.9l-3.8,3.9c-0.4,0.4-1.1,0.4-1.4,0c-0.4-0.4-0.4-1,0-1.4l2.3-2.3L4,10c-0.5,0-1-0.5-1-1s0.5-1,1-1h7.6L9.3,5.7 c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l3.8,3.9C14.8,8.4,15,8.7,15,9S14.8,9.6,14.6,9.9L14.6,9.9z'
                    })
                  )
                )
              )
            )
          );
        })
      )
    )
  );
}

function NavigationMenu(props) {
  var isIndustry = props.name === 'Industries';
  var isProducts = props.name === 'Products';
  var linkEls = props.links.map(function(link, i) {
    return React.createElement(
      'li',
      {
        className:
          'shell-col ' + (isIndustry ? 'shell-col--6' : 'shell-col--12'),
        key: i
      },
      React.createElement(
        'a',
        {
          href: link.to,
          className: '' + shellStyles.navLink,
          'data-nav-link': true,
          'data-test': 'nav-link-' + link.name
        },
        link.name
      )
    );
  });
  var highlightedLinksList = null;
  if (props.highlightedLinks) {
    var highlightedLinkEls = props.highlightedLinks.map(function(
      highlightedLink,
      i
    ) {
      if (highlightedLink.hideInHeader) return null;
      return React.createElement(
        'li',
        {
          className:
            'shell-col ' + (isIndustry ? 'shell-col--6' : 'shell-col--12'),
          key: i
        },
        React.createElement(
          'a',
          {
            href: highlightedLink.to,
            className:
              shellStyles.navLinkHighlight +
              ' shell-mt3 shell-txt-bold shell-flex-parent shell-flex-parent--center-cross',
            'data-nav-link': highlightedLink.name,
            'data-test': 'nav-link-' + props.name
          },
          React.createElement(
            'div',
            { className: 'shell-flex-child' },
            highlightedLink.name
          ),
          React.createElement(
            'div',
            { className: 'shell-flex-child' },
            React.createElement(
              'svg',
              { viewBox: '0 0 18 18', className: 'shell-icon shell-ml3' },
              React.createElement(
                'g',
                null,
                React.createElement('path', {
                  d:
                    'M14.6,9.9l-3.8,3.9c-0.4,0.4-1.1,0.4-1.4,0c-0.4-0.4-0.4-1,0-1.4l2.3-2.3L4,10c-0.5,0-1-0.5-1-1s0.5-1,1-1h7.6L9.3,5.7 c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l3.8,3.9C14.8,8.4,15,8.7,15,9S14.8,9.6,14.6,9.9L14.6,9.9z'
                })
              )
            )
          )
        )
      );
    });
    highlightedLinksList = React.createElement(
      'div',
      {
        className:
          'shell-bg-gray-faint shell-relative shell-py6 shell-pt3 shell-pb6 shell-clip shell-round-b shell-px12'
      },
      React.createElement('ul', { className: 'shell-grid' }, highlightedLinkEls)
    );
  }

  var menuNameClasses =
    'shell-block shell-txt-s shell-txt-ms-mxl shell-txt-bold shell-txt-nowrap';
  menuNameClasses += props.darkText
    ? ' shell-transition shell-color-dark-gray shell-color-blue-on-hover'
    : ' shell-link shell-link--white';

  var menuId = props.name.replace(/\s+/g, '').toLowerCase() + '-menu';
  var triggerId = menuId + '-trigger';
  var menu = void 0;
  if (isProducts) {
    menu = React.createElement(ProductsMenu, null);
  } else {
    menu = React.createElement(
      'div',
      null,
      React.createElement(
        'ul',
        { className: 'shell-grid shell-pt12 shell-pb12 shell-px12' },
        linkEls
      ),
      highlightedLinksList
    );
  }

  return React.createElement(
    'div',
    {
      className:
        'shell-relative shell-flex-child shell-mx6 shell-mx12-ml shell-mx18-mxl'
    },
    React.createElement(
      'button',
      {
        id: triggerId,
        className: menuNameClasses,
        'data-nav-trigger': props.name,
        'data-test': 'nav-menu-trigger-' + props.name,
        'aria-haspopup': 'true',
        'aria-expanded': 'false',
        'aria-controls': menuId
      },
      props.name
    ),
    React.createElement(
      'div',
      {
        id: menuId,
        role: 'group',
        'aria-labelledby': triggerId,
        'data-nav-menu': props.name,
        'data-test': 'nav-menu-' + props.name,
        className: shellStyles.popoverContainer + ' shell-mt3',
        style: {
          top: '100%',
          left: '50%',
          marginLeft: isIndustry || isProducts ? -210 : -120,
          display: 'none',
          width: isIndustry || isProducts ? 420 : 240
        }
      },
      React.createElement('div', {
        className:
          shellStyles.popoverTriangle +
          ' shell-color-white shell-mt6 shell-mx-auto'
      }),
      React.createElement('div', { className: shellStyles.popoverBody }, menu)
    )
  );
}

var Navigation = (function(_React$Component) {
  inherits(Navigation, _React$Component);

  function Navigation() {
    classCallCheck(this, Navigation);
    return possibleConstructorReturn(
      this,
      (Navigation.__proto__ || Object.getPrototypeOf(Navigation))
        .apply(this, arguments)
    );
  }

  createClass(Navigation, [
    {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate() {
        return false;
      }
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;

        var menuEls = navigationMenuData.menuOrder.map(function(menuId, i) {
          var menuData = navigationMenuData.menus[menuId];
          return React.createElement(
            NavigationMenu,
            _extends({ key: i, darkText: _this2.props.darkText }, menuData)
          );
        });

        return React.createElement(
          'div',
          { className: 'shell-flex-parent' },
          menuEls
        );
      }
    }
  ]);
  return Navigation;
})(React.Component);

var MobileNavigationLinkList = (function(_React$Component) {
  inherits(MobileNavigationLinkList, _React$Component);

  function MobileNavigationLinkList() {
    classCallCheck(this, MobileNavigationLinkList);
    return possibleConstructorReturn(
      this,
      (MobileNavigationLinkList.__proto__ ||
        Object.getPrototypeOf(MobileNavigationLinkList))
        .apply(this, arguments)
    );
  }

  createClass(MobileNavigationLinkList, [
    {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate() {
        return false;
      }
    },
    {
      key: 'render',
      value: function render() {
        var highlightedItems = this.props.highlightedLinks.map(function(
          link,
          i
        ) {
          return React.createElement(
            'a',
            {
              key: 'h' + i,
              href: link.to,
              className: '' + shellStyles.navLink,
              style: { fontWeight: 'bold' },
              'data-nav-link': link.name,
              'data-test': 'mobile-nav-link-' + link.name
            },
            link.name
          );
        });

        var firstColumnLength = Math.ceil(
          (this.props.links.length + this.props.highlightedLinks.length) / 2
        );
        var firstColumnItems = this.props.links
          .slice(0, firstColumnLength)
          .map(function(link, i) {
            return React.createElement(
              'a',
              {
                key: i,
                href: link.to,
                className: '' + shellStyles.navLink,
                'data-nav-link': link.name,
                'data-test': 'mobile-nav-link-' + link.name
              },
              link.name
            );
          });
        var secondColumnItems = this.props.links
          .slice(firstColumnLength)
          .map(function(link, i) {
            return React.createElement(
              'a',
              {
                key: i,
                href: link.to,
                className: '' + shellStyles.navLink,
                'data-nav-link': link.name,
                'data-test': 'mobile-nav-link-' + link.name
              },
              link.name
            );
          })
          .concat(highlightedItems);
        var items = React.createElement(
          'div',
          { className: 'shell-grid shell-grid--gut24' },
          React.createElement(
            'div',
            { className: 'shell-col shell-col--6' },
            firstColumnItems
          ),
          React.createElement(
            'div',
            { className: 'shell-col shell-col--6' },
            secondColumnItems
          )
        );

        return React.createElement(
          'div',
          null,
          React.createElement(
            'div',
            { className: '' + shellStyles.navHeading },
            this.props.name
          ),
          items
        );
      }
    }
  ]);
  return MobileNavigationLinkList;
})(React.Component);

MobileNavigationLinkList.defaultProps = {
  highlightedLinks: []
};

var MobileNavigation = (function(_React$Component) {
  inherits(MobileNavigation, _React$Component);

  function MobileNavigation() {
    classCallCheck(this, MobileNavigation);
    return possibleConstructorReturn(
      this,
      (MobileNavigation.__proto__ || Object.getPrototypeOf(MobileNavigation))
        .apply(this, arguments)
    );
  }

  createClass(MobileNavigation, [
    {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate() {
        return false;
      }
    },
    {
      key: 'render',
      value: function render() {
        var menuIconClasses = 'shell-icon--l ';
        if (!this.props.darkText) {
          menuIconClasses += ' shell-link shell-link--white';
        } else {
          menuIconClasses += ' shell-color-gray-dark shell-color-blue-on-hover';
        }

        // We're adding Help to the Company links for mobile only.
        // On desktop, Help is available in the user menu. But on
        // mobile there is no user menu, so it neeeds another place
        // to live.
        var companyLinks = navigationMenuData.menus.company.links.concat({
          name: 'Help',
          to: '/help'
        });

        return React.createElement(
          'div',
          { className: 'page-shell-text' },
          React.createElement(
            'div',
            { style: { position: 'relative' } },
            React.createElement(
              'button',
              {
                id: 'mobile-nav-trigger',
                'aria-label': 'Toggle navigation',
                className: 'shell-p6y shell-p3x',
                'data-test': 'mobile-nav-trigger'
              },
              React.createElement(
                'svg',
                {
                  id: 'mobile-nav-trigger-menu',
                  viewBox: '0 0 18 18',
                  className: 'shell-icon ' + menuIconClasses,
                  style: { display: 'block' }
                },
                React.createElement(
                  'g',
                  null,
                  React.createElement('path', {
                    d:
                      'M4.2,6h9.6C14.5,6,15,5.6,15,5s-0.5-1-1.2-1H4.2C3.5,4,3,4.4,3,5S3.5,6,4.2,6z'
                  }),
                  React.createElement('path', {
                    d:
                      'M13.8,8H4.2C3.5,8,3,8.4,3,9s0.5,1,1.2,1h9.6c0.7,0,1.2-0.4,1.2-1S14.5,8,13.8,8z'
                  }),
                  React.createElement('path', {
                    d:
                      'M13.8,12H4.2C3.5,12,3,12.4,3,13s0.5,1,1.2,1h9.6c0.7,0,1.2-0.4,1.2-1S14.5,12,13.8,12z'
                  })
                )
              ),
              React.createElement(
                'svg',
                {
                  id: 'mobile-nav-trigger-close',
                  viewBox: '0 0 18 18',
                  className: 'shell-icon ' + menuIconClasses,
                  style: { display: 'none' }
                },
                React.createElement('path', {
                  d:
                    'M5.8,5C5.4,5,5,5.4,5,5.8C5,6,5.1,6.2,5.3,6.3l0,0L7.9,9l-2.6,2.6C5.1,11.8,5,12,5,12.2C5,12.6,5.4,13,5.8,13 c0.2,0,0.4-0.1,0.6-0.3L9,10.1l2.6,2.6c0.1,0.2,0.4,0.3,0.6,0.3c0.4,0,0.8-0.4,0.8-0.8c0-0.2-0.1-0.4-0.2-0.6L10.1,9l2.6-2.7 C12.9,6.2,13,6,13,5.8C13,5.4,12.6,5,12.2,5c-0.2,0-0.4,0.1-0.6,0.2L9,7.8L6.4,5.2C6.2,5.1,6,5,5.8,5L5.8,5z'
                })
              )
            ),
            React.createElement(
              'div',
              {
                id: 'mobile-nav-pointer',
                className: 'shell-absolute',
                style: {
                  display: 'none',
                  top: 34,
                  zIndex: 10,
                  left: 0,
                  right: 0
                }
              },
              React.createElement(
                'div',
                {
                  className: 'shell-flex-parent shell-flex-parent--center-main'
                },
                React.createElement(
                  'div',
                  { className: 'shell-flex-child' },
                  React.createElement('div', {
                    className:
                      'shell-color-gray-faint shell-triangle-l shell-triangle-l--u'
                  })
                )
              )
            )
          ),
          React.createElement('div', {
            id: 'mobile-nav-backdrop',
            'data-test': 'mobile-nav-backdrop',
            className:
              'shell-absolute shell-bottom shell-left shell-right shell-cursor-pointer',
            style: {
              display: 'none',
              top: 72, // This number should match the actual height of the mobile header!
              backgroundImage:
                'linear-gradient(to bottom, transparent, rgba(31, 51, 73, .5))'
            }
          }),
          React.createElement(
            'div',
            {
              id: 'mobile-nav-menu',
              'data-test': 'mobile-nav-menu',
              className:
                shellStyles.popoverContainer + ' shell-w-full shell-px6',
              style: {
                display: 'none',
                marginTop: 62, // Top margin must accommodate pointer height
                top: 0,
                right: 0
              }
            },
            React.createElement(
              'div',
              {
                className:
                  shellStyles.popoverBody + ' shell-clip shell-py18 shell-px24'
              },
              React.createElement(
                'div',
                {
                  className:
                    'shell-bg-gray-faint shell-py12 shell-px24 shell-mt-neg18 shell-mr-neg24 shell-ml-neg24 shell-mb24 shell-txt-ms'
                },
                React.createElement(
                  'div',
                  {
                    'data-show-authenticated': true,
                    style: { display: 'none' }
                  },
                  React.createElement(
                    'div',
                    {
                      'data-test': 'mobile-user-menu',
                      className: 'shell-grid shell-grid--gut12'
                    },
                    React.createElement(
                      'div',
                      { className: 'shell-col shell-col--6' },
                      React.createElement(
                        'a',
                        {
                          href: '/studio/account/',
                          className: shellStyles.navLink
                        },
                        'Account'
                      ),
                      React.createElement(
                        'a',
                        { href: '/studio/', className: shellStyles.navLink },
                        'Mapbox Studio'
                      ),
                      React.createElement(
                        'a',
                        { href: '/help/', className: shellStyles.navLink },
                        'Help'
                      )
                    ),
                    React.createElement(
                      'div',
                      { className: 'shell-col shell-col--6' },
                      React.createElement('div', {
                        'data-user-avatar': true,
                        className:
                          'shell-mb6 shell-flex-child shell-flex-child--no-shrink ' +
                          shellStyles.avatar
                      }),
                      React.createElement('div', {
                        className:
                          'shell-color-gray shell-flex-child shell-txt-truncate',
                        'data-user-name': true
                      }),
                      React.createElement(
                        'button',
                        {
                          'data-sign-out': true,
                          'data-test': 'mobile-signout-button',
                          className:
                            shellStyles.navLink +
                            ' shell-flex-parent shell-flex-parent-center--cross shell-txt-bold'
                        },
                        React.createElement(
                          'svg',
                          {
                            viewBox: '0 0 18 18',
                            className: 'shell-icon shell-mr6'
                          },
                          React.createElement('path', {
                            d:
                              'M4,4c0,0-1,0-1,1v8c0,1,1,1,1,1h4c0.6,0,1-0.4,1-1s-0.4-1-1-1H5V6h3c0.6,0,1-0.4,1-1S8.6,4,8,4H4z M11,5 c-0.3,0-0.5,0.1-0.7,0.3c-0.4,0.4-0.4,1,0,1.4L11.6,8H7C6.5,8,6,8.5,6,9s0.5,1,1,1h4.6l-1.3,1.3c-0.4,0.4-0.4,1,0,1.4s1,0.4,1.4,0 l2.8-2.9c0.2-0.2,0.4-0.5,0.4-0.9c0-0.3-0.2-0.6-0.4-0.9l-2.8-2.9C11.5,5.1,11.3,5,11,5L11,5z'
                          })
                        ),
                        'Sign out'
                      )
                    )
                  )
                ),
                React.createElement(
                  'div',
                  {
                    'data-show-unauthenticated': true,
                    style: { display: 'none' }
                  },
                  React.createElement(
                    'div',
                    { className: 'shell-grid shell-grid--gut24 shell-mt-neg3' },
                    React.createElement(
                      'div',
                      { className: 'shell-col shell-col--6' },
                      React.createElement(
                        'a',
                        {
                          href: '/signin/',
                          className:
                            shellStyles.navLink +
                            ' shell-txt-bold shell-w-full',
                          'data-test': 'mobile-signin-button'
                        },
                        'Sign in'
                      )
                    ),
                    React.createElement(
                      'div',
                      { className: 'shell-col shell-col--6' },
                      React.createElement(
                        'a',
                        {
                          href: '/signup/',
                          className:
                            shellStyles.navLink +
                            ' shell-txt-bold shell-w-full',
                          'data-test': 'mobile-signup-button'
                        },
                        'Create an account'
                      )
                    )
                  )
                )
              ),
              React.createElement(
                'div',
                { className: 'shell-mt24 shell-relative' },
                React.createElement(
                  MobileNavigationLinkList,
                  navigationMenuData.menus.developers
                )
              ),
              React.createElement(
                'div',
                { className: 'shell-mt24 shell-pt24 shell-relative' },
                React.createElement('div', {
                  className:
                    'shell-border-t shell-border--gray-faint shell-absolute shell-top shell-left shell-right'
                }),
                React.createElement(
                  MobileNavigationLinkList,
                  navigationMenuData.menus.products
                )
              ),
              React.createElement(
                'div',
                { className: 'shell-mt24 shell-pt24 shell-relative' },
                React.createElement('div', {
                  className:
                    'shell-border-t shell-border--gray-faint shell-absolute shell-top shell-left shell-right'
                }),
                React.createElement(
                  MobileNavigationLinkList,
                  navigationMenuData.useCaseMenu
                )
              ),
              React.createElement(
                'div',
                { className: 'shell-mt24 shell-pt24 shell-relative' },
                React.createElement('div', {
                  className:
                    'shell-border-t shell-border--gray-faint shell-absolute shell-top shell-left shell-right'
                }),
                React.createElement(
                  MobileNavigationLinkList,
                  navigationMenuData.menus.industries
                )
              ),
              React.createElement(
                'div',
                { className: 'shell-mt24 shell-pt24 shell-relative' },
                React.createElement('div', {
                  className:
                    'shell-border-t shell-border--gray-faint shell-absolute shell-top shell-left shell-right'
                }),
                React.createElement(
                  MobileNavigationLinkList,
                  _extends({}, navigationMenuData.menus.company, {
                    // Override the links with the amended list
                    links: companyLinks
                  })
                )
              )
            )
          )
        );
      }
    }
  ]);
  return MobileNavigation;
})(React.Component);

var PageHeader = (function(_React$Component) {
  inherits(PageHeader, _React$Component);

  function PageHeader() {
    classCallCheck(this, PageHeader);
    return possibleConstructorReturn(
      this,
      (PageHeader.__proto__ || Object.getPrototypeOf(PageHeader))
        .apply(this, arguments)
    );
  }

  createClass(PageHeader, [
    {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate() {
        return false;
      }
    },
    {
      key: 'render',
      value: function render() {
        var logoClasses = 'shell-mb-logo';
        if (!this.props.darkText) {
          logoClasses += ' shell-mb-logo--white';
        }

        var headerClasses = void 0;
        if (this.props.position === 'absolute') {
          headerClasses = 'shell-absolute shell-w-full shell-z1';
        }

        return React.createElement(
          'header',
          {
            id: 'page-header',
            className: headerClasses,
            'data-swiftype-index': 'false'
          },
          React.createElement(
            'div',
            {
              className:
                'shell-none limiter shell-mt24 shell-flex-parent-mm shell-flex-parent--center-cross'
            },
            React.createElement('a', {
              className:
                'shell-flex-child shell-flex-child--no-shrink ' + logoClasses,
              href: '/',
              'aria-label': 'Mapbox',
              'data-test': 'logo-link'
            }),
            React.createElement(
              'div',
              { className: 'shell-flex-child shell-flex-child--grow' },
              React.createElement(
                'div',
                {
                  className:
                    'shell-flex-parent shell-flex-parent--center-cross shell-flex-parent--end-main'
                },
                React.createElement(
                  'div',
                  { className: 'shell-flex-child' },
                  React.createElement(Navigation, {
                    darkText: this.props.darkText
                  })
                ),
                React.createElement(
                  'div',
                  {
                    className:
                      'shell-flex-child shell-opacity75 shell-mx6 shell-mx12-ml shell-mx18-mxl'
                  },
                  React.createElement(
                    'a',
                    {
                      className:
                        'shell-block shell-txt-s shell-txt-ms-mxl shell-txt-bold ' +
                        (this.props.darkText
                          ? 'shell-transition shell-color-dark-gray shell-color-blue-on-hover'
                          : 'shell-link shell-link--white'),
                      'aria-label': 'pricing',
                      href: '/pricing/'
                    },
                    'Pricing'
                  )
                ),
                React.createElement(
                  'div',
                  {
                    className:
                      'shell-flex-child shell-ml6 shell-ml12-ml shell-ml18-mxl'
                  },
                  React.createElement(UserMenu, {
                    darkText: this.props.darkText
                  })
                )
              )
            )
          ),
          React.createElement(
            'div',
            {
              className:
                'shell-none-mm limiter shell-py12 shell-flex-parent shell-flex-parent--center-cross shell-flex-parent--space-between-main'
            },
            React.createElement('a', {
              className: 'shell-flex-child ' + logoClasses,
              href: '/',
              'aria-label': 'Mapbox',
              'data-test': 'mobile-logo-link'
            }),
            React.createElement(
              'div',
              {
                className:
                  'shell-mr-neg6 shell-flex-child shell-flex-parent shell-flex-parent--end-main'
              },
              React.createElement(MobileNavigation, {
                darkText: this.props.darkText
              })
            )
          )
        );
      }
    }
  ]);
  return PageHeader;
})(React.Component);

PageHeader.propTypes = {
  darkText: PropTypes.bool,
  position: PropTypes.oneOf(['absolute', 'static'])
};

PageHeader.defaultProps = {
  darkText: false,
  position: 'absolute'
};

var PageFooter = (function(_React$Component) {
  inherits(PageFooter, _React$Component);

  function PageFooter() {
    classCallCheck(this, PageFooter);
    return possibleConstructorReturn(
      this,
      (PageFooter.__proto__ || Object.getPrototypeOf(PageFooter))
        .apply(this, arguments)
    );
  }

  createClass(PageFooter, [
    {
      key: 'shouldComponentUpdate',
      value: function shouldComponentUpdate() {
        return false;
      }
    },
    {
      key: 'render',
      value: function render() {
        var renderMenuLinks = function renderMenuLinks(menuData) {
          var options =
            arguments.length > 1 && arguments[1] !== undefined
              ? arguments[1]
              : {};

          var linkClasses =
            'shell-txt-ms shell-py3 shell-color-dark shell-color-blue-on-hover';
          if (options.linkClasses) linkClasses += ' ' + options.linkClasses;
          var menuLinks = menuData.links;

          var linkEls = menuLinks.map(function(link) {
            return React.createElement(
              'a',
              { key: link.name, href: link.to, className: linkClasses },
              link.name
            );
          });

          var highlightedLinkEls = void 0;
          if (menuData.highlightedLinks) {
            highlightedLinkEls = menuData.highlightedLinks.map(function(link) {
              return React.createElement(
                'a',
                {
                  key: link.name,
                  href: link.to,
                  className: linkClasses + ' shell-txt-s shell-txt-bold'
                },
                link.name
              );
            });
          }

          return linkEls.concat(highlightedLinkEls);
        };
        var columnClassList = 'shell-footer-column shell-flex-child';
        return React.createElement(
          'footer',
          {
            id: 'page-footer',
            className: 'shell-py48-ml',
            'data-swiftype-index': 'false'
          },
          React.createElement(
            'div',
            { className: 'limiter' },
            React.createElement(
              'div',
              { className: 'shell-block shell-footer-nav' },
              React.createElement(
                'div',
                {
                  className:
                    'shell-grid shell-mt24 shell-flex-parent shell-flex-parent--space-between-main'
                },
                React.createElement(
                  'div',
                  { className: columnClassList + ' shell-mt24 shell-mt0-mm' },
                  React.createElement(
                    'div',
                    { className: shellStyles.navHeading + ' shell-pr12' },
                    'Products'
                  ),
                  React.createElement(
                    'div',
                    { className: 'shell-grid' },
                    renderMenuLinks(navigationMenuData.menus.products, {
                      linkClasses: 'shell-col shell-col--6 shell-col--12-mm'
                    })
                  )
                ),
                React.createElement(
                  'div',
                  { className: columnClassList + ' shell-mt24 shell-mt0-mm' },
                  React.createElement(
                    'div',
                    { className: shellStyles.navHeading + ' shell-pr12' },
                    navigationMenuData.useCaseMenu.name
                  ),
                  React.createElement(
                    'div',
                    { className: 'shell-grid' },
                    renderMenuLinks(navigationMenuData.useCaseMenu, {
                      linkClasses: 'shell-col shell-col--6 shell-col--12-mm'
                    })
                  )
                ),
                React.createElement(
                  'div',
                  { className: columnClassList + ' shell-mt24 shell-mt0-mm' },
                  React.createElement(
                    'div',
                    { className: shellStyles.navHeading + ' shell-pr12' },
                    'Developers'
                  ),
                  React.createElement(
                    'div',
                    { className: 'shell-grid' },
                    renderMenuLinks(navigationMenuData.menus.developers, {
                      linkClasses: 'shell-col shell-col--6 shell-col--12-mm'
                    })
                  )
                ),
                React.createElement(
                  'div',
                  { className: columnClassList + ' shell-mt24 shell-mt0-mm' },
                  React.createElement(
                    'div',
                    { className: shellStyles.navHeading + ' shell-pr12' },
                    'Industries'
                  ),
                  React.createElement(
                    'div',
                    { className: 'shell-grid' },
                    renderMenuLinks(navigationMenuData.menus.industries, {
                      linkClasses: 'shell-col shell-col--6 shell-col--12-mm'
                    })
                  )
                ),
                React.createElement(
                  'div',
                  {
                    className:
                      columnClassList + ' shell-mt24 shell-mt0-mm mb0-mm mb24'
                  },
                  React.createElement(
                    'div',
                    { className: shellStyles.navHeading + ' shell-pr12' },
                    'company'
                  ),
                  React.createElement(
                    'div',
                    { className: 'shell-grid' },
                    renderMenuLinks(navigationMenuData.menus.company, {
                      linkClasses: 'shell-col shell-col--6 shell-col--12-mm'
                    })
                  )
                )
              )
            ),
            React.createElement(
              'div',
              {
                className:
                  'shell-color-gray shell-mt42-ml shell-align-center shell-py12 shell-py0-ml shell-txt-s shell-footer-legal shell-relative'
              },
              React.createElement(
                'a',
                { className: 'shell-link', href: '/tos/' },
                'Terms'
              ),
              ' ',
              '+',
              ' ',
              React.createElement(
                'a',
                { className: 'shell-link', href: '/privacy/' },
                'Privacy'
              ),
              ' ',
              '\xA9 Mapbox',
              React.createElement(
                'div',
                { className: 'shell-inline shell-ml12' },
                React.createElement(
                  'a',
                  {
                    'aria-label': 'Twitter',
                    className: 'shell-mr3 shell-link shell-link--gray',
                    href: 'https://twitter.com/mapbox/'
                  },
                  React.createElement(
                    'svg',
                    {
                      viewBox: '0 0 18 18',
                      className:
                        'shell-icon shell-inline-block shell-align-middle'
                    },
                    React.createElement(
                      'g',
                      null,
                      React.createElement('path', {
                        d:
                          'M16,4.7c-0.5,0.2-1.1,0.4-1.6,0.4c0.6-0.3,1-0.9,1.3-1.6c-0.6,0.3-1.2,0.6-1.8,0.7c-0.5-0.5-1.3-0.9-2.1-0.9 c-1.6,0-2.9,1.3-2.9,2.8c0,0.2,0,0.4,0.1,0.6C6.5,6.8,4.4,5.6,3,3.9C2.7,4.3,2.6,4.8,2.6,5.3c0,1,0.5,1.8,1.3,2.4 C3.4,7.7,3,7.6,2.6,7.3l0,0c0,1.4,1,2.5,2.3,2.8c-0.2,0.1-0.5,0.1-0.8,0.1c-0.2,0-0.4,0-0.5-0.1C4,11.2,5,12,6.3,12.1 c-1,0.8-2.2,1.2-3.6,1.2c-0.2,0-0.5,0-0.7,0c1.3,0.8,2.8,1.3,4.4,1.3c5.3,0,8.2-4.3,8.2-8c0-0.1,0-0.2,0-0.4 C15.1,5.8,15.6,5.3,16,4.7'
                      })
                    )
                  )
                ),
                React.createElement(
                  'a',
                  {
                    'aria-label': 'LinkedIn',
                    className: 'shell-mr3 shell-link shell-link--gray',
                    href: 'https://www.linkedin.com/company/mapbox'
                  },
                  React.createElement(
                    'svg',
                    {
                      viewBox: '0 0 18 18',
                      className:
                        'shell-icon shell-inline-block shell-align-middle'
                    },
                    React.createElement('path', {
                      d:
                        'M3,2L2,3v12l1,1h6.8c5.2,0-2.2,0,5.2,0l1-1V3l-1-1H3z M6,5c0.5,0,0.9,0.4,0.9,1c0,0.5-0.4,1-0.9,1S5,6.6,5,6S5.4,5,6,5z M11,7.5c1.7,0,2,1.1,2,2.5v3h-1.7v-2.6c0-0.6,0-1.4-0.9-1.4s-1,0.7-1,1.4V13H8V7.7h1.4v0.7l0,0C9.7,8,10.2,7.5,11,7.5L11,7.5z M5.1,7.7h1.7V13H5.1V7.7z'
                    })
                  )
                ),
                React.createElement(
                  'a',
                  {
                    'aria-label': 'Facebook',
                    className: 'shell-mr3 shell-link shell-link--gray',
                    href: 'https://www.facebook.com/Mapbox'
                  },
                  React.createElement(
                    'svg',
                    {
                      viewBox: '0 0 18 18',
                      className:
                        'shell-icon shell-inline-block shell-align-middle'
                    },
                    React.createElement('path', {
                      d:
                        'M3,2L2,3v12l1,1h6.8v-5H8V9h1.8V6.9c0-1.8,1.1-2.8,2.7-2.8c0.8,0,1.1,0.1,1.3,0.1V6H13c-0.9,0-1,0.4-1,1v2h2.1l-0.3,2H12v5 h3l1-1V3l-1-1H3z'
                    })
                  )
                )
              )
            )
          )
        );
      }
    }
  ]);
  return PageFooter;
})(React.Component);

var DEFAULT_SOCIAL_IMAGE_URL = 'https://www.mapbox.com/social-1200x630.png';
var DEFAULT_SOCIAL_IMAGE_THUMBNAIL_URL =
  'https://www.mapbox.com/social-120x120.png';

var MetaTagger = (function(_React$PureComponent) {
  inherits(MetaTagger, _React$PureComponent);

  function MetaTagger() {
    classCallCheck(this, MetaTagger);
    return possibleConstructorReturn(
      this,
      (MetaTagger.__proto__ || Object.getPrototypeOf(MetaTagger))
        .apply(this, arguments)
    );
  }

  createClass(MetaTagger, [
    {
      key: 'render',
      value: function render() {
        var props = this.props;

        var suffixedTitle = /^Mapbox/.test(props.title)
          ? props.title
          : props.title + ' | Mapbox';
        var preppedDescription = props.description.replace(/\s+/g, ' ');
        var prodUrl = 'https://www.mapbox.com';
        if (props.pathname[0] !== '/') prodUrl += '/';
        prodUrl += props.pathname;

        var metaItems = [{ name: 'description', content: preppedDescription }];

        metaItems.push(
          { name: 'twitter:title', content: props.title },
          { name: 'og:title', content: props.title },
          { name: 'twitter:description', content: preppedDescription },
          { name: 'og:description', content: preppedDescription },
          { name: 'og:url', content: prodUrl },
          { name: 'og:type', content: 'website' },
          {
            class: 'swiftype',
            name: 'title',
            'data-type': 'string',
            content: props.title
          },
          {
            class: 'swiftype',
            name: 'excerpt',
            'data-type': 'string',
            content: props.description
          },
          { name: 'twitter:image:alt', content: props.imageAlt },
          { name: 'og:image', content: props.imageUrl },
          {
            class: 'swiftype',
            name: 'image',
            'data-type': 'enum',
            content: props.imageUrl
          },
          // https://developers.google.com/web/updates/2014/11/Support-for-theme-color-in-Chrome-39-for-Android
          { name: 'theme-color', content: '#4264fb' }
        );

        if (props.largeImage) {
          metaItems.push(
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:image', content: props.imageUrl }
          );
        } else {
          metaItems.push(
            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:image', content: props.imageUrlThumbnail }
          );
        }

        if (process.env.DEPLOY_ENV !== 'production') {
          metaItems.push({ name: 'robots', content: 'noindex' });
        }

        return React.createElement(Helmet__default, {
          title: suffixedTitle,
          meta: metaItems
        });
      }
    }
  ]);
  return MetaTagger;
})(React.PureComponent);

MetaTagger.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  imageUrlThumbnail: PropTypes.string,
  imageAlt: PropTypes.string,
  largeImage: PropTypes.bool
};

MetaTagger.defaultProps = {
  imageUrl: DEFAULT_SOCIAL_IMAGE_URL,
  imageUrlThumbnail: DEFAULT_SOCIAL_IMAGE_THUMBNAIL_URL,
  imageAlt: 'Mapbox',
  largeImage: true
};

/* globals MapboxPageShell */
var pageShellInitialized = false;
var lastUrl = void 0;

var ReactPageShell = (function(_React$Component) {
  inherits(ReactPageShell, _React$Component);

  function ReactPageShell() {
    classCallCheck(this, ReactPageShell);
    return possibleConstructorReturn(
      this,
      (ReactPageShell.__proto__ || Object.getPrototypeOf(ReactPageShell))
        .apply(this, arguments)
    );
  }

  createClass(ReactPageShell, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (!window.MapboxPageShell)
          throw new Error('MapboxPageShell not loaded');

        if (!pageShellInitialized) {
          this.initialize();
        } else {
          MapboxPageShell.initialize();
        }
      }
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        // Avoid reinitializing if we're actually on the same page.
        var currentUrl = window.location.href;
        if (currentUrl === lastUrl) return;
        lastUrl = currentUrl;
        MapboxPageShell.initialize();
      }
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        MapboxPageShell.removeNavigation();
      }
    },
    {
      key: 'initialize',
      value: function initialize() {
        var _this2 = this;

        // On the dev-server, navigation elements weren't mounted when
        // MapboxPageShell first initialized the nav.
        MapboxPageShell.initialize();
        MapboxPageShell.afterUserCheck(function() {
          if (_this2.props.onUser) {
            _this2.props.onUser(
              MapboxPageShell.getUser(),
              MapboxPageShell.getUserPublicAccessToken()
            );
          }
        });
        pageShellInitialized = true;
      }
    },
    {
      key: 'render',
      value: function render() {
        var footer = void 0;
        if (this.props.includeFooter) {
          footer = React.createElement(PageFooter, null);
        }

        var nonFooterClasses = 'shell-flex-child shell-flex-child--grow';
        if (this.props.nonFooterBgClass) {
          nonFooterClasses += ' ' + this.props.nonFooterBgClass;
        }

        var header = void 0;
        if (this.props.includeHeader) {
          header = React.createElement(PageHeader, {
            darkText: this.props.darkHeaderText
          });
        }

        return React.createElement(
          'div',
          null,
          React.createElement(BrowserCompatibilityWarning, null),
          React.createElement(
            'div',
            {
              id: 'page-shell',
              className: 'shell-flex-parent shell-flex-parent--column',
              style: { minHeight: '100vh', overflowX: 'hidden' }
            },
            React.createElement(PageHelmet, null),
            React.createElement(MetaTagger, this.props.meta),
            React.createElement(
              'div',
              { className: nonFooterClasses },
              React.createElement(
                'div',
                { className: 'shell-wrapper' },
                header
              ),
              React.createElement(
                'main',
                { style: { position: 'relative', display: 'block' } },
                this.props.children
              )
            ),
            React.createElement(
              'div',
              { className: 'shell-flex-child shell-wrapper' },
              footer
            )
          )
        );
      }
    }
  ]);
  return ReactPageShell;
})(React.Component);

ReactPageShell.propTypes = {
  meta: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    pathname: PropTypes.string
  }).isRequired,
  onUser: PropTypes.func,
  darkHeaderText: PropTypes.bool,
  includeHeader: PropTypes.bool,
  includeFooter: PropTypes.bool,
  children: PropTypes.node,
  nonFooterBgClass: PropTypes.string
};

ReactPageShell.defaultProps = {
  darkHeaderText: false,
  includeHeader: true,
  includeFooter: true
};

module.exports = ReactPageShell;
