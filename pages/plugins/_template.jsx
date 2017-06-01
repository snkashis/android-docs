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
  getInitialState: function() {
        return {
            windowWidth: 1200
        };
    },
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  },
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  },
  updateWindowDimensions() {
    if (window !== 'undefined') {
      this.setState({ windowWidth: this.state.windowWidth = window.innerWidth });
    }
  },
  render: function() {
    let {windowWidth} = this.state;
    return (
      <div>
        {/* Content */}
        <div className='prose color-gray-dark'>
          <div className={`content col ${windowWidth < 690 ? 'col--12' : 'col--9 col--offl3'}  pb96  pt12 doc-ul doc-ol wmax1200 doc-ol-item`}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});
