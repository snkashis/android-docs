import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers'
import includes from 'underscore.string/include';
import { Container, Grid, Span } from 'react-responsive-grid';
import { config } from 'config';

import 'css/custom.css';

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

        {/* Site Navigation */}
        <div className={'col--12 bg-denim shadow-darken50 flex-parent fixed'}>
          <div className={'w240'}></div>
            <Link className={`flex-parent-inline p12 btn color-white color-white-on-active bg-transparent bg-darken10-on-active bg-darken10-on-hover txt-s ml3 ${mapSdkActive ? 'is-active' : ''}`} to={prefixLink('/map-sdk/5.0.0/getting-started/')}>Map SDK</Link>
            <Link className={`flex-parent-inline p12 btn color-white color-white-on-active bg-transparent bg-darken10-on-active bg-darken10-on-hover txt-s ml3 ${mapboxJavaActive ? 'is-active' : ''}`} to={prefixLink('/mapbox-java/2.0.0/getting-started/')}>Mapbox Java</Link>
            <Link className={`flex-parent-inline p12 btn color-white color-white-on-active bg-transparent bg-darken10-on-active bg-darken10-on-hover txt-s ml3 ${examplesActive ? 'is-active' : ''}`} to={prefixLink('/examples/')}>Examples</Link>
        </div>


            {this.props.children}

        
      </div>
    );
  }
});
