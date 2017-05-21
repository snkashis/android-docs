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
              sdk={"Navigation SDK (Preview)"}
              version={constants.NAVIGATION_VERSION}
              changelogLink={"https://github.com/mapbox/mapbox-navigation-android/blob/master/CHANGELOG.md"}
              ghLink={"https://github.com/mapbox/mapbox-navigation-android"}
              featureListColumnOne={
                <ul className={'unstyled'}>
                  <li className={'li-icon flex-parent flex-parent--center-cross'}><svg className={'icon'}><use href='#icon-check'/></svg>Upcoming maneuver alerts</li>
                  <li className={'li-icon flex-parent flex-parent--center-cross'}><svg className={'icon'}><use href='#icon-check'/></svg>Show progress along route</li>
                  <li className={'li-icon flex-parent flex-parent--center-cross'}><svg className={'icon'}><use href='#icon-check'/></svg>Off-route detection</li>
                </ul>
              }
              />
            }
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});
