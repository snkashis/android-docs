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
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  },
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  },
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  },
  render: function() {
    var windowWidth = this.state.width;
    return (
      <div>
        {/* Content */}
        <div className='prose color-gray-dark'>
          <div className={`content col ${windowWidth < 800 ? 'col--12' : 'col--9 col--offl3'}  pb96  pt12 doc-ul doc-ol wmax1200 doc-ol-item`}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});
