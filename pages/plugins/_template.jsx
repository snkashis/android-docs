import React from 'react';
import {Link} from 'react-router';
import {prefixLink} from 'gatsby-helpers'
import includes from 'underscore.string/include';
import {Container, Grid, Span} from 'react-responsive-grid';
import find from 'lodash/find';

module.exports = React.createClass({
  propTypes() {
    return {route: React.PropTypes.object};
  },
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  render: function() {
    return (
      <div>
        {/* Content */}
        <div className={'prose color-gray-dark'}>
          <div className={'col--9 col fr'}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});
