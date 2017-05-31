import React from 'react';
import {Link} from 'react-router';
import {prefixLink} from 'gatsby-helpers'
import includes from 'underscore.string/include';
import {Container, Grid, Span} from 'react-responsive-grid';
import find from 'lodash/find';
import {OverviewHeader} from '../../src/components/overview_header';
import * as constants from '../../constants';

module.exports = React.createClass({
  propTypes() {
    return {route: React.PropTypes.object};
  },
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  },
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  },
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  },
  render: function() {
    var windowWidth = this.state.width;

    var stringLink = this.props.location.pathname;
    var overview = stringLink.match(/\/([^\/?]+)(?=\/$|\?|$)/)
    if (overview) {
      if (overview[1] == 'overview') {
        var show = true;
      }
    }
    return (
      <div>
        {/* Content */}
        <div className={'prose color-gray-dark'}>
        <div className={`content ${windowWidth < 800 ? 'col--12' : 'col--9 col col--offl3'}`}>
          
            {show && <OverviewHeader
              deviceImg={"../../assets/imgs/nav-sdk-splash.png"}
              sdk={"Navigation SDK"}
              imgWidth={360}
              version={constants.NAVIGATION_VERSION}
              changelogLink={"https://github.com/mapbox/mapbox-navigation-android/blob/master/CHANGELOG.md"}
              ghLink={"https://github.com/mapbox/mapbox-navigation-android"}
              sdkFeatures={['Off-route detection', 'Timed instructions', 'Snap to route', 'Route progress info', 'Traffic routing']}
              newFeature={[false, false, false, false, false]}/>}
            <div className='pt12 doc-ul doc-ol pb96 wmax1200 doc-ol-item'>
            {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
});
