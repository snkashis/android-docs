import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

import find from 'lodash/find';

import 'css/custom.css'

import pageList from './_pages.yaml';

module.exports = React.createClass({
  propTypes () {
    return {route: React.PropTypes.object};
  },


  render: function() {
    const childPages = pageList.map((p) => {
      const page = find(this.props.route.pages, (_p) => _p.path === p);
      return {
        title: page.data.title,
        path: page.path,
      };
    });
    return (
      <div>
        {this.props.location.pathname}
      </div>
    );
  }
});
