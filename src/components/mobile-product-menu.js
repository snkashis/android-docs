import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mapbox/react-icon';
import PopoverTrigger from '@mapbox/react-popover-trigger';
import { prefixUrl } from '@mapbox/batfish/modules/prefix-url';
import orderedPages from '@mapbox/batfish/data/ordered-pages';
import { productNames } from '../data/product-names';
import { productNavbarTabs } from '../data/product-navbar-tabs';

const popoverProps = {
  placement: 'bottom',
  themePopover: 'round shadow-darken25'
};
const triggerProps = {
  className: 'block'
};
const productMenus = Object.keys(productNames).map(productId => {
  const productName = productNames[productId];

  return {
    productName,
    productNonOverviewSections: productNavbarTabs[productId].filter(item => {
      return item.text !== 'Overview';
    }),
    productOverviewSections: orderedPages[`${productId}/overview/`]
  };
});

export class MobileProductMenu extends React.PureComponent {
  state = {
    open: false
  };

  renderMenu() {
    return (
      <div
        style={{
          width: 'calc(100vw - 48px)',
          maxHeight: 'calc(100vh - 200px)'
        }}
        className="scroll-auto scroll-styled py6 px12"
      >
        {productMenus.map(item => {
          return (
            <div key={item.productName}>
              <MobileProductMenuSection {...item} />
            </div>
          );
        })}
      </div>
    );
  }

  onPopoverOpen = () => {
    this.setState({ open: true });
  };

  onPopoverClose = () => {
    this.setState({ open: false });
  };

  render() {
    const iconName = this.state.open ? 'close' : 'menu';
    return (
      <PopoverTrigger
        content={this.renderMenu}
        triggerProps={triggerProps}
        popoverProps={popoverProps}
        onPopoverOpen={this.onPopoverOpen}
        onPopoverClose={this.onPopoverClose}
      >
        <button className="block">
          <Icon name={iconName} themeIcon="icon--l" />
        </button>
      </PopoverTrigger>
    );
  }
}

const mobileMenuItemClasses =
  'col col--6 color-gray-dark color-blue-on-hover txt-ms py3 mt3';

function MobileProductMenuSection(props) {
  if (!props.productOverviewSections) return null;

  const items = [];

  props.productNonOverviewSections.forEach(item => {
    items.push(
      <a
        key={item.pathname}
        className={`txt-bold ${mobileMenuItemClasses}`}
        href={prefixUrl(item.pathname)}
      >
        {item.text}
      </a>
    );
  });

  props.productOverviewSections.forEach(item => {
    const rgxp = /(Map SDK|Mapbox Plugins|Mapbox Services SDK|Navigation SDK)/;
    const text = rgxp.test(item.title) ? 'Overview' : item.title;
    items.push(
      <a key={item.path} className={mobileMenuItemClasses} href={item.path}>
        {text}
      </a>
    );
  });

  return (
    <div className="py6">
      <div className="mb3 txt-uppercase w-full txt-s txt-spacing1 txt-fancy color-darken50 color-dark opacity50">
        {props.productName}
      </div>
      <div className="pb18 grid grid--gut24">
        {items}
      </div>
    </div>
  );
}

MobileProductMenuSection.propTypes = {
  productName: PropTypes.string.isRequired,
  productNonOverviewSections: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      pathname: PropTypes.string.isRequired
    })
  ).isRequired,
  productOverviewSections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired
    })
  )
};
