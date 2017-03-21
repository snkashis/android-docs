import React from 'react';
import { browserHistory } from 'react-router';
import DocumentTitle from 'react-document-title';
import { config } from 'config';

export default class Index extends React.Component {
  render () {
    return (
      <DocumentTitle title={config.siteTitle}>
        {browserHistory.push("/map-sdk/5.0.0/getting-started/")}
      </DocumentTitle>
    )
  }
}
