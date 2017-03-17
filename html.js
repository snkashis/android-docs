import React from 'react'
import DocumentTitle from 'react-document-title';

import { prefixLink } from 'gatsby-helpers'

const BUILD_TIME = new Date().getTime()

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      body: ""
    };
  },
  render: function() {
    var title
    title = DocumentTitle.rewind();
    if (this.props.title) {
      title = this.props.title;
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <title>{title}</title>
          <link href='https://api.mapbox.com/mapbox-assembly/v0.12.0/assembly.min.css' rel='stylesheet'/>
          <script async defer src='https://api.mapbox.com/mapbox-assembly/v0.12.0/assembly.js'></script>
          <link href='css/custom.css' rel='stylesheet' />
        </head>
        <body>
        <div id="react-mount" dangerouslySetInnerHTML={{__html: this.props.body}} />
        <script src={prefixLink("/bundle.js")}/>
        </body>
      </html>
    )
  },
})
