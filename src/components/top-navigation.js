import React from 'react';
import PropTypes from 'prop-types';
import PopoverTrigger from '@mapbox/react-popover-trigger';
import Icon from '@mapbox/react-icon';
import { prefixUrl } from '@mapbox/batfish/modules/prefix-url';
import { ProductMenu } from './product-menu';
import { PlatformMenu } from './platform-menu';
import { MobileProductMenu } from './mobile-product-menu';

const NAV_CONTENT_HEIGHT = 47; // +1 for border = 48
const popoverProps = {
  placement: 'bottom'
};

export class TopNavigation extends React.PureComponent {
  static propTypes = {
    currentPlatform: PropTypes.string.isRequired,
    currentProduct: PropTypes.string.isRequired,
    currentSubnavItemText: PropTypes.string.isRequired,
    subnavItems: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        pathname: PropTypes.string.isRequired
      })
    )
  };

  shouldComponentUpdate(nextProps) {
    return (
      this.props.currentPlatform !== nextProps.currentPlatform ||
      this.props.currentProduct !== nextProps.currentProduct
    );
  }

  renderProductMenu() {
    return <ProductMenu />;
  }

  renderPlatformMenu() {
    return <PlatformMenu />;
  }

  render() {
    const { props } = this;

    let subnav = null;
    if (props.subnavItems) {
      const subnavItemEls = props.subnavItems.map(item => {
        const isActive = props.currentSubnavItemText === item.text;
        const itemClasses =
          'relative color-blue-on-hover flex-child py12 px12 inline-block relative';
        const bar = !isActive
          ? null
          : <div
              className="absolute bottom left right bg-gray-dark"
              style={{ height: 2 }}
            />;
        return (
          <div
            key={item.pathname}
            className="relative flex-parent flex-parent--center-cross"
            style={{ height: NAV_CONTENT_HEIGHT }}
          >
            {bar}
            <a href={prefixUrl(item.pathname)} className={itemClasses}>
              {item.text}
            </a>
          </div>
        );
      });

      subnav = (
        <div className="none flex-child-mm flex-parent-mm flex-parent--center-cross-mm">
          {subnavItemEls}
        </div>
      );
    }

    return (
      <div className="border-b border--gray-light bg-white">
        <div
          className="limiter txt-s txt-bold flex-parent flex-parent--center-cross flex-parent--space-between-main"
          style={{ height: NAV_CONTENT_HEIGHT }}
        >
          <div className="flex-child">
            <div className="inline-block align-middle color-gray-light mr12">
              Platform
            </div>
            <div className="inline-block align-middle">
              <PopoverTrigger
                content={this.renderPlatformMenu}
                respondsToHover={true}
                popoverProps={popoverProps}
              >
                <button>
                  <span className="flex-parent-inline flex-parent--center-cross py12 color-blue-on-hover">
                    <span className="flex-child">
                      {props.currentPlatform}
                    </span>
                    <span className="flex-child">
                      <Icon name="chevron-down" />
                    </span>
                  </span>
                </button>
              </PopoverTrigger>
            </div>
            <div className="none inline-block-mm align-middle">
              <div className="inline-block align-middle color-gray-light mx12">
                Product
              </div>
              <div className="inline-block align-middle">
                <PopoverTrigger
                  content={this.renderProductMenu}
                  respondsToHover={true}
                  popoverProps={popoverProps}
                >
                  <button>
                    <span className="flex-parent-inline flex-parent--center-cross py12 color-blue-on-hover">
                      <span className="flex-child">
                        {props.currentProduct}
                      </span>
                      <span className="flex-child">
                        <Icon name="chevron-down" />
                      </span>
                    </span>
                  </button>
                </PopoverTrigger>
              </div>
            </div>
          </div>
          {subnav}
          <div className="flex-child none-mm">
            <MobileProductMenu />
          </div>
        </div>
      </div>
    );
  }
}
