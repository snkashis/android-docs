import React from 'react';
import PropTypes from 'prop-types';
import find from 'array-find';
import classnames from 'classnames';
import ReactPageShell from '../../vendor/dotcom-page-shell/react-page-shell';
import orderedPages from '@mapbox/batfish/data/ordered-pages';
import { withLocation } from '@mapbox/batfish/modules/with-location';
import {
  addRouteChangeStartListener,
  addRouteChangeEndListener
} from '@mapbox/batfish/modules/route-change-listeners';
import { pageLoadingIndicator } from './page-loading-indicator';
import { OverviewHeader } from './overview-header';
import { TopNavigation } from './top-navigation';
import { SideNavigation } from './side-navigation';
import { productNavbarTabs } from '../data/product-navbar-tabs';
import { productNames } from '../data/product-names';

addRouteChangeStartListener(onRouteChangeStart);
addRouteChangeEndListener(onRouteChangeEnd);

function onRouteChangeStart() {
  pageLoadingIndicator.start();
}
function onRouteChangeEnd() {
  pageLoadingIndicator.end();
}

class PageShell extends React.PureComponent {
  static PropTypes = {
    frontMatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      sideNavSections: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired
        })
      ),
      overviewHeaderProps: PropTypes.object
    }).isRequired,
    proseContent: PropTypes.bool,
    // From withLocation
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired
    }).isRequired,
    sideNavigation: PropTypes.node
  };

  static defaultProps = {
    proseContent: false
  };

  render() {
    const { props } = this;

    let overviewHeader = null;
    if (props.frontMatter.overviewHeaderProps) {
      overviewHeader = (
        <div className="mb36">
          <OverviewHeader {...props.frontMatter.overviewHeaderProps} />
        </div>
      );
    }

    const normalizedPathname = /\/$/.test(props.location.pathname)
      ? props.location.pathname
      : `${props.location.pathname}/`;
    const pathPrefixMatch = /\/android-docs\/([^/]+\/)([^/]+\/)/.exec(
      normalizedPathname
    );
    if (!pathPrefixMatch) {
      throw new Error(`No subnav known for ${normalizedPathname}`);
    }
    const currentProductId = pathPrefixMatch[1].slice(0, -1);
    const subnavItems = productNavbarTabs[currentProductId];
    const currentSubnavItemText = find(subnavItems, item => {
      return normalizedPathname.indexOf(item.pathname) !== -1;
    }).text;

    const sideNavigation = (
      <SideNavigation
        currentPath={normalizedPathname}
        siblingNavPages={orderedPages[pathPrefixMatch[1] + pathPrefixMatch[2]]}
        childNavItems={props.frontMatter.sideNavSections}
      />
    );

    const currentProduct = productNames[currentProductId];
    const contentContainerClasses = classnames('pb96 wmax1200', {
      'prose doc-ul doc-ol doc-ol-item': this.props.proseContent
    });

    return (
      <ReactPageShell
        meta={{
          title: `${props.frontMatter.title} | Android Documentation`,
          description: props.frontMatter.description,
          pathname: normalizedPathname
        }}
        includeHeader={false}
        includeFooter={false}
      >
        <div
          className="flex-parent flex-parent--column"
          style={{ height: '100vh', overflow: 'hidden' }}
        >
          <div className="flex-child">
            <TopNavigation
              currentPlatform="Android"
              currentProduct={currentProduct}
              subnavItems={subnavItems}
              currentSubnavItemText={currentSubnavItemText}
            />
          </div>
          <div
            className="flex-child pt12 scroll-styled"
            style={{ overflow: 'auto' }}
          >
            <div className="limiter grid pb120">
              {sideNavigation}
              <div className="pt6 color-gray-dark content col col--12 col--offl3-mm col--9-mm">
                {overviewHeader}
                <div className={contentContainerClasses}>
                  {props.children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ReactPageShell>
    );
  }
}

export default withLocation(PageShell);
