import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import GithubSlugger from 'github-slugger';
import PopoverTrigger from '@mapbox/react-popover-trigger';
import { prefixUrl } from '@mapbox/batfish/modules/prefix-url';
import * as constants from '../constants';

const slugger = new GithubSlugger();
const sideNavPopoverProps = {
  placement: 'right',
  alignment: 'center'
};

class SideNavigation extends React.Component {
  static propTypes = {
    currentPath: PropTypes.string.isRequired,
    siblingNavPages: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired
      })
    ).isRequired,
    childNavItems: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired
      })
    )
  };

  getMapSdkApiItem() {
    return (
      <div className={'flex-parent wmin180 pb12 flex-parent--column'}>
        <a
          href={prefixUrl(
            `/api/map-sdk/${constants.MAP_SDK_VERSION}/index.html`
          )}
          className="txt-fancy color-blue-on-hover"
        >
          API Reference
        </a>
      </div>
    );
  }

  getPluginsApiItem() {
    return (
      <PopoverTrigger
        content={
          <div className={'flex-parent wmin180 pb12 flex-parent--column'}>
            <strong className={'color-gray-light p6 txt-mm'}>Javadoc</strong>
            <a
              href={prefixUrl(
                `/api/plugins/locationlayer/${constants.LOCATION_LAYER_PLUGIN_VERSION}/index.html`
              )}
              className={`transition color-blue-on-hover txt-bold color-gray-dark mt3 bg-transparent txt-ms`}
            >
              Location Layer
            </a>
            <a
              href={prefixUrl(
                `/api/plugins/building/${constants.BUILDING_PLUGIN_VERSION}/index.html`
              )}
              className={`transition color-blue-on-hover txt-bold color-gray-dark mt3 bg-transparent txt-ms`}
            >
              Building
            </a>
            <a
              href={prefixUrl(
                `/api/plugins/places/${constants.PLACES_PLUGIN_VERSION}/index.html`
              )}
              className={`transition color-blue-on-hover txt-bold color-gray-dark mt3 bg-transparent txt-ms`}
            >
              Places
            </a>
            <a
              href={prefixUrl(
                `/api/plugins/traffic/${constants.TRAFFIC_PLUGIN_VERSION}/index.html`
              )}
              className={`transition color-blue-on-hover txt-bold color-gray-dark mt3 bg-transparent txt-ms`}
            >
              Traffic
            </a>
            <a
              href={prefixUrl(
                `/api/plugins/offline/${constants.OFFLINE_PLUGIN_VERSION}/index.html`
              )}
              className={`transition color-blue-on-hover txt-bold color-gray-dark mt3 bg-transparent txt-ms`}
            >
              Offline
            </a>
            <a
              href={prefixUrl(
                `/api/plugins/localization/${constants.LOCALIZATION_PLUGIN_VERSION}/index.html`
              )}
              className={`transition color-blue-on-hover txt-bold color-gray-dark mt3 bg-transparent txt-ms`}
            >
              Localization
            </a>
            <a
              href={prefixUrl(
                `/api/plugins/china/${constants.CHINA_PLUGIN_VERSION}/china-release/index.html`
              )}
              className={`transition color-blue-on-hover txt-bold color-gray-dark mt3 bg-transparent txt-ms`}
            >
              China
            </a>
          </div>
        }
        respondsToHover={true}
        popoverProps={sideNavPopoverProps}
      >
        <button className={'txt-fancy color-blue-on-hover'}>
          <strong>API Reference</strong>
        </button>
      </PopoverTrigger>
    );
  }

  getJavaApiItem() {
    return (
      <PopoverTrigger
        content={
          <div className={'flex-parent wmin180 pb12 flex-parent--column'}>
            <strong className={'color-gray-light p6 txt-mm'}>Javadoc</strong>
            <a
              href={prefixUrl(
                `/api/mapbox-java/libjava-core/${constants.JAVA_SDK_VERSION}/index.html`
              )}
              className={`transition color-blue-on-hover txt-bold color-gray-dark mt3 bg-transparent txt-ms`}
            >
              mapbox-java-core
            </a>
            <a
              href={prefixUrl(
                `/api/mapbox-java/libjava-geojson/${constants.JAVA_SDK_VERSION}/index.html`
              )}
              className={`transition color-blue-on-hover txt-bold color-gray-dark mt3 bg-transparent txt-ms`}
            >
              mapbox-java-geojson
            </a>
            <a
              href={prefixUrl(
                `/api/mapbox-java/libjava-turf/${constants.JAVA_SDK_VERSION}/index.html`
              )}
              className={`transition color-blue-on-hover txt-bold color-gray-dark mt3 bg-transparent txt-ms`}
            >
              mapbox-java-turf
            </a>
            <a
              href={prefixUrl(
                `/api/mapbox-java/libjava-services/${constants.JAVA_SDK_VERSION}/index.html`
              )}
              className={`transition color-blue-on-hover txt-bold color-gray-dark mt3 bg-transparent txt-ms`}
            >
              mapbox-java-services
            </a>
          </div>
        }
        respondsToHover={true}
        popoverProps={sideNavPopoverProps}
      >
        <button className={'txt-fancy color-blue-on-hover'}>
          <strong>API Reference</strong>
        </button>
      </PopoverTrigger>
    );
  }

  getNavigationApiItem() {
    return (
      <PopoverTrigger
        content={
          <div className={'flex-parent wmin180 pb12 flex-parent--column'}>
            <strong className={'color-gray-light p6 txt-mm'}>Javadoc</strong>
            <a
              href={prefixUrl(
                `/api/navigation-sdk/navigation/${constants.NAVIGATION_VERSION}/index.html`
              )}
              className={`transition color-blue-on-hover txt-bold color-gray-dark mt3 bg-transparent txt-ms`}
            >
              navigation
            </a>
            <a
              href={prefixUrl(
                `/api/navigation-sdk/navigation-ui/${constants.NAVIGATION_VERSION}/index.html`
              )}
              className={`transition color-blue-on-hover txt-bold color-gray-dark mt3 bg-transparent txt-ms`}
            >
              navigation-ui
            </a>
          </div>
        }
        respondsToHover={true}
        popoverProps={sideNavPopoverProps}
      >
        <button className={'txt-fancy color-blue-on-hover'}>
          <strong>API Reference</strong>
        </button>
      </PopoverTrigger>
    );
  }

  getCoreApiItem() {
    return (
      <div className={'flex-parent wmin180 pb12 flex-parent--column'}>
        <a
          href={prefixUrl(
            `/api/telemetry/libcore/${constants.CORE_VERSION}/index.html`
          )}
          className="txt-fancy color-blue-on-hover"
        >
          API Reference
        </a>
      </div>
    );
  }

  render() {
    const { props } = this;
    slugger.reset();
    const childPageNavigation =
      props.childNavItems &&
      props.childNavItems.map((item, i) => {
        const slug = slugger.slug(item.title);
        const itemClasses = classnames({
          mt6: i !== 0
        });
        return (
          <li key={slug} className={itemClasses}>
            <a
              href={`${props.currentPath}#${slug}`}
              className="color-blue-on-hover"
            >
              {item.title}
            </a>
          </li>
        );
      });

    // create a better key here
    const siblingPageNavigation = props.siblingNavPages.map((page, index) => {
      const isActive = props.currentPath === page.path;
      const title = /\/examples\//.test(props.currentPath)
        ? 'Categories'
        : page.title;
      return (
        <div key={index}>
          <div className={`txt-bold txt-fancy ${isActive ? 'color-blue' : ''}`}>
            <a
              href={page.path}
              className="color-blue-on-hover text-decoration-none"
            >
              {title}
            </a>
          </div>
          {isActive && childPageNavigation
            ? <div className="ml6 pt6">
                <ul className="txt-s inline-block mb12 color-blue-on-hover-anchor">
                  {childPageNavigation}
                </ul>
              </div>
            : ''}
        </div>
      );
    });
    let apiItem = null;
    if (/\/map-sdk\/overview\//.test(props.currentPath)) {
      apiItem = this.getMapSdkApiItem();
    } else if (/\/plugins\/overview\//.test(props.currentPath)) {
      apiItem = this.getPluginsApiItem();
    } else if (/\/java-sdk\/overview\//.test(props.currentPath)) {
      apiItem = this.getJavaApiItem();
    } else if (/\/navigation\/overview\//.test(props.currentPath)) {
      apiItem = this.getNavigationApiItem();
    } else if (/\/core\/overview\//.test(props.currentPath)) {
      apiItem = this.getCoreApiItem();
    }
    return (
      <div className="col col--2-mm pt12 fixed none block-mm color-gray-dark unstyled-list scroll-styled scroll-auto">
        {siblingPageNavigation}
        {apiItem}
      </div>
    );
  }
}

export { SideNavigation };
