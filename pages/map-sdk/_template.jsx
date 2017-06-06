import React from 'react';


import includes from 'underscore.string/include';

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
  getInitialState: function() {
        return {
            windowWidth: 1200
        };
    },
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  },
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  },
  updateWindowDimensions() {
    if (window !== 'undefined') {
      this.setState({ windowWidth: this.state.windowWidth = window.innerWidth });
    }
  },
  render: function() {
    let {windowWidth} = this.state;

    var stringLink = this.props.location.pathname;
    var overview = stringLink.match(/\/([^\/?]+)(?=\/$|\?|$)/)
    if (overview) {
      if (overview[1] == 'overview') {
        var show = true;
      }
    }
    var isExample = includes(stringLink, "/examples/");
    return (
      <div>
        {/* Content */}
        <div className={'prose color-gray-dark'}>
          <div className={`content ${isExample || (windowWidth < 690) ? 'col--12' : 'col--9 col col--offl3'}`}>
            {show && <OverviewHeader
              deviceImg={"../../assets/imgs/map-sdk-splash.png"}
              sdk={"Map SDK"}
              version={constants.MAP_SDK_VERSION}
              changelogLink={"https://www.github.com/mapbox/mapbox-gl-native/blob/master/platform/android/CHANGELOG.md"}
              ghLink={"https://github.com/mapbox/mapbox-gl-native"}
              sdkFeatures={['Live traffic', 'Runtime styling', 'Annotations', '3D extrusions', 'Offline support']}
              newFeature={[false, false, false, true, false]}/>}
            <div className='pt12 doc-ul doc-ol pb96 wmax1200 doc-ol-item'>
            {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
});
