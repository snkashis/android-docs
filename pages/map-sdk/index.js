import React from 'react';
import { browserHistory } from 'react-router';
import { config } from 'config';
import { prefixLink } from 'gatsby-helpers'

module.exports = React.createClass({
  componentDidMount: function() {
    window.location.href = window.location.href = prefixLink("/map-sdk/overview/latest/getting-started/")
  },
  render () {
    return (<div></div>
    )
  }
});
