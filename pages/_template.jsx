import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers'
import includes from 'underscore.string/include';
import { Container, Grid, Span } from 'react-responsive-grid';
import { config } from 'config';

import 'css/custom.css';
import 'css/markdown-styles.css'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.object,
    }
  },
  render: function() {
    const mapSdkActive = includes(this.props.location.pathname, '/map-sdk/');
    const mapboxJavaActive = includes(this.props.location.pathname, '/mapbox-java/');
    const examplesActive = includes(this.props.location.pathname, '/examples/');
    return (
      <div className={'grid'}>

        {/* Site top toolbar */}
        <div className={'col--12 z1 hmin48 bg-denim shadow-darken50 fixed'}>
          {/* Site Navigation */}
          <div className={'ml240'}>
            <Link className={`py12 btn color-white bg-transparent bg-darken10-on-active bg-darken10-on-hover txt-s  ${mapSdkActive ? 'is-active' : ''}`} to={prefixLink('/map-sdk/5.0.0/getting-started/')}>Map SDK</Link>
            <Link className={`py12 btn color-white bg-transparent bg-darken10-on-active bg-darken10-on-hover txt-s  ${mapboxJavaActive ? 'is-active' : ''}`} to={prefixLink('/mapbox-java/2.0.0/getting-started/')}>Mapbox Java</Link>
            <Link className={`py12 btn color-white bg-transparent bg-darken10-on-active bg-darken10-on-hover txt-s  ${examplesActive ? 'is-active' : ''}`} to={prefixLink('/examples/')}>Examples</Link>
          </div>
        </div>

          {this.props.children}

      </div>
    );
  }
});
