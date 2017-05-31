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
    var isExample = includes(stringLink, "/examples/");
    return (
      <div>
        {/* Content */}
        <div className={'prose color-gray-dark'}>
          <div className={`content ${isExample || windowWidth < 800 ? 'col--12' : 'col--9 col col--offl3'}`}>
            {show && <OverviewHeader
              deviceImg={"../../assets/imgs/mas-sdk-splash.png"}
              sdk={"Mapbox Services SDK"}
              imgWidth={420}
              version={constants.MAS_VERSION}
              changelogLink={"https://github.com/mapbox/mapbox-java/blob/master/CHANGELOG.md"}
              ghLink={"https://github.com/mapbox/mapbox-java"}
              sdkFeatures={['Directions', 'Geocoding', 'Map Matching', 'Directions Matrix', 'Optimization']}
              newFeature={[false, false, false, false, true]}/>}
            <div className='pt12 doc-ul pb96 doc-ol wmax1200 doc-ol-item'>
            {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
});
