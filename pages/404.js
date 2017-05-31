import React from 'react';
import {Router} from 'react-router';
import {config} from 'config';
import {prefixLink} from 'gatsby-helpers'

const badLinks = [
  '/map-sdk/latest/getting-started/',
  '/map-sdk/latest/annotations/',
  '/map-sdk/latest/offline/',
  '/plugins/latest/getting-started/',
  '/mapbox-services/latest/getting-started/',
  '/mapbox-services/latest/directions-matrix/',
  '/mapbox-services/latest/geocoder/',
  '/mapbox-services/latest/static-image/',
  '/mapbox-services/latest/telemetry/',
  '/navigation/latest/getting-started/',
  '/navigation/latest/navigation-events/',
  '/navigation/latest/navigation-options/',
  '/navigation/latest/route-progress/',
  '/map-sdk/examples/basics/'
];

const goodLinks = [
  '/map-sdk/overview/',
  '/map-sdk/overview/annotations/',
  '/map-sdk/overview/offline/',
  '/plugins/overview/',
  '/mapbox-services/overview/',
  '/mapbox-services/directions-matrix/',
  '/mapbox-services/geocoder/',
  '/mapbox-services/static-image/',
  '/mapbox-services/telemetry/',
  '/navigation/overview/',
  '/navigation/overview/navigation-events/',
  '/navigation/overview/navigation-options/',
  '/navigation/overview/route-progress/',
  '/map-sdk/examples/'

];

module.exports = React.createClass({
  propTypes() {
    return {route: React.PropTypes.object};
  },
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  componentDidMount: function() {
    var stringLink = this.props.location.pathname;
    var Router = require('react-router');
    var badLinkIndex;

    badLinks.map((badLink, index) => {
      if (stringLink.includes(badLink)) {
        badLinkIndex = index;
      }
    });

    Router.browserHistory.push(goodLinks[badLinkIndex]);
  },
  render: function() {
    return (
      <div></div>
    )
  }
});
