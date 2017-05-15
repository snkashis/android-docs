/* @flow */
/* eslint-disable react/no-multi-comp */
import React from 'react';
import navigationMenus from '../shell/navigation_items';
import { shellStyles } from './shell_styles';

type NavigationMenuProps = {
  darkText?: boolean,
  name: string,
  links: Array<{
    name: string,
    to: string
  }>,
  highlightedLinks?: Array<{
    name: string,
    to: string
  }>
};

class NavigationMenu extends React.Component {
  props: NavigationMenuProps;

  // This should never be updated by React
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { props } = this;
    let isIndustry = props.name === 'Industries';
    const linkEls = props.links.map((link, i) => {
      return (
        <li className={`${isIndustry ? 'col col--6' : 'col col--12'}`} key={i}>

        </li>
      );
    });
    let highlightedLinksList = null;
    if (props.highlightedLinks) {
      const highlightedLinkEls = props.highlightedLinks.map((highlightedLink, i) => {
        if (highlightedLink.hideInHeader) return null;
        return (
          <li className={`${isIndustry ? 'col col--6' : 'col col--12'}`} key={i}>

          </li>
        );
      });
      highlightedLinksList = (
        <div className={`bg-gray-faint relative py6 pt3 pb6 clip round-b px12`}>
          <ul className="grid">
            {highlightedLinkEls}
          </ul>
        </div>
      );
    }

    let menuNameClasses = 'block txt-s txt-ms-ml txt-bold txt-nowrap';
    menuNameClasses += props.darkText ? ' transition color-dark-gray color-blue-on-hover ' : '  link link--white';

    const menuId = `${props.name.replace(/\s+/g, '').toLowerCase()}-menu`;
    const triggerId = `${menuId}-trigger`;

    return (
      <div className="relative flex-child mx6 mx12-ml mx18-mxl">
        <button
          id={triggerId}
          className={menuNameClasses}
          data-nav-trigger={props.name}
          data-test={`nav-menu-trigger-${props.name}`}
          aria-haspopup="true"
          aria-expanded="false"
          aria-controls={menuId}
        >
          {props.name}
        </button>
        <div
          id={menuId}
          role="group"
          aria-labelledby={triggerId}
          data-nav-menu={props.name}
          data-test={`nav-menu-${props.name}`}
          className={`${shellStyles.popoverContainer} mt3 ${isIndustry ? 'w420' : `w240`}`}
          style={{
            top: '100%',
            left: '50%',
            marginLeft: isIndustry ? -210 : -120,
            display: 'none'
          }}
        >
          <div className={`${shellStyles.popoverTriangle} color-white mt6 mx-auto`} />
          <div className={shellStyles.popoverBody}>
            <ul className="grid pt12 pb12 px12">
              {linkEls}
            </ul>
            {highlightedLinksList}
          </div>
        </div>
      </div>
    );
  }
}

type Props = {
  darkText?: boolean
};

class Navigation extends React.Component {
  props: Props;

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const menuEls = navigationMenus.menuOrder.map((menuId, i) => {
      const menuData = navigationMenus.menus[menuId];
      return <NavigationMenu key={i} darkText={this.props.darkText} {...menuData} />;
    });

    return (
      <div className="flex-parent">
        {menuEls}
      </div>
    );
  }
}

export { Navigation };
