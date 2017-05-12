import React from 'react';
import { browserHistory } from 'react-router';
import { config } from 'config';
import { prefixLink } from 'gatsby-helpers'

module.exports = React.createClass({
  componentDidMount: function() {
    window.location.href = prefixLink("/map-sdk/5.0.2/getting-started/")
  },
  render () {
    return (<div></div>
    )
  }
});
