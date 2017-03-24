import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers'
import includes from 'underscore.string/include';
import { Container, Grid, Span } from 'react-responsive-grid';
import find from 'lodash/find';

import 'css/styles.css';

module.exports = React.createClass({
  propTypes () {
    return {route: React.PropTypes.object};
  },
  contextTypes: {router: React.PropTypes.object.isRequired},
  render: function() {
    return (
      <div className={'grid'}>
        {/* Sidebar Navigation */}
        <div className={'w240 toc'}>

        </div>

        {/* Content */}
        <div className={'prose ml240 scroll-styled main-content'}>
          <div className={'col--10'}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});
