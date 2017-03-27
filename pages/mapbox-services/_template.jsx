import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers'
import includes from 'underscore.string/include';
import { Container, Grid, Span } from 'react-responsive-grid';
import find from 'lodash/find';

import 'css/styles.css';

import pageList from './_pages.yaml';

var sections;

module.exports = React.createClass({
  propTypes () {
    return {route: React.PropTypes.object};
  },
  contextTypes: {router: React.PropTypes.object.isRequired},
  getInitialState() {
      sections = document.getElementsByTagName('h2, h3');
      return {
        sections: sections
      }
  },
  componentDidUpdate(_, prevState) {
    if (prevState.sections !== this.state.sections) {

      // if (!sections.length) return;
      // for (var i = 0; i < sections.length; i++) {
      //   this.setState({
          this.setState({ sections: document.querySelectorAll('h2, h3')});
      //     activeSection: sections[i].getAttribute('data-title')
      //   });
      //   return;
      // }
    }
  },
  render: function() {
    var sections = this.state;

    const childPages = pageList.map((p) => {
      const page = find(this.props.route.pages, (_p) => _p.path === p);
      return {
        title: page.data.title,
        path: page.path,
        toc: page.data.toc,
      };
    });

    const docOptions = childPages.map((child) =>


      <option
        key={prefixLink(child.path)}
        value={prefixLink(child.path)}
      >
        {child.title}
        {child.toc}
      </option>

  )

    const docPages = childPages.map((child) => {
      const isActive = prefixLink(child.path) === this.props.location.pathname
      return (<div>
        <li
          key={child.path}
        >
          <Link
            to={prefixLink(child.path)}
            style={{
              textDecoration: 'none'
            }}
          >
            {isActive ? <strong>{child.title}</strong>
             : child.title }
          </Link>

        </li>
        {isActive? <div className={'m12 txt-s'} dangerouslySetInnerHTML={{ __html: child.toc }}/> : ''}
        </div>
      )
    });
    return (
      <div className={'grid'}>
        {/* Sidebar Navigation */}
        <div className={'w240 toc'}>
          {docPages}
        </div>

        {/* Content */}
        <div className={'prose scroll-styled main-content'}>
          <div className={'col--10'}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});
