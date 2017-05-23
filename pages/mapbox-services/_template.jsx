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
  render: function() {
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
          <div className={'content col--9 col fr'}>
            {show && <OverviewHeader
              deviceImg={"../../assets/imgs/mas-sdk-splash.png"}
              sdk={"Mapbox Services SDK"}
              imgWidth={480}
              version={constants.MAS_VERSION}
              changelogLink={"https://github.com/mapbox/mapbox-java/blob/master/CHANGELOG.md"}
              ghLink={"https://github.com/mapbox/mapbox-java"}
              sdkFeatures={['Directions', 'Geocoding', 'Map Matching', 'Directions Matrix', 'Optimization']}/>}
            <div className='pt12 doc-ul doc-ol doc-ol-item'>
            {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
});
