import React from 'react';
import { browserHistory } from 'react-router';
import DocumentTitle from 'react-document-title';
import { config } from 'config';

module.exports = React.createClass({
  componentDidMount: function() {
    window.location.href = "/android-docs/map-sdk/5.0.1/getting-started/"
  },
  render () {
    return (<div></div>

    )
  }
});
