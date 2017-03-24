import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers'
import includes from 'underscore.string/include';
import { Container, Grid, Span } from 'react-responsive-grid';
import find from 'lodash/find';

import 'css/styles.css';

import pageList from './_pages.yaml';

module.exports = React.createClass({
  propTypes () {
    return {route: React.PropTypes.object};
  },
  contextTypes: {router: React.PropTypes.object.isRequired},
  render: function() {
    const childPages = pageList.map((p) => {
      const page = find(this.props.route.pages, (_p) => _p.path === p);
      return {
        title: page.data.title,
        path: page.path,
      };
    });
    console.log('childPages');
    const docOptions = childPages.map((child) =>
      <option
        key={prefixLink(child.path)}
        value={prefixLink(child.path)}
      >
        {child.title}
      </option>

    )

    const docPages = childPages.map((child) => {
      const isActive = prefixLink(child.path) === this.props.location.pathname
      return (
        <li
          key={child.path}
        >
          <Link
            to={prefixLink(child.path)}
            style={{
              textDecoration: 'none'
            }}
          >
            {isActive ? <strong>{child.title}</strong> : child.title }
          </Link>
        </li>
      )
    });
    return (
      <div className={'grid'}>
        {/* Sidebar Navigation */}
        <div className={'w240 toc'}>
          {docPages}
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
