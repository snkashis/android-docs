import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers'
import includes from 'underscore.string/include';
import { Container, Grid, Span } from 'react-responsive-grid';
import { config } from 'config';

import 'css/styles.css';
import 'css/markdown-styles.css'

module.exports = React.createClass({
  propTypes: {
    children: React.PropTypes.object
  },
  getInitialState() {
    if (process.browser) {
    let mqls = [
        { name: 'widescreen', query: window.matchMedia('(min-width: 1200px)') },
        { name: 'desktop', query: window.matchMedia('(min-width: 961px)') },
        { name: 'tablet', query: window.matchMedia('(max-width: 960px)') },
        { name: 'mobile', query: window.matchMedia('(max-width: 640px)') }
      ];
      mqls.forEach(q => q.query.addListener(this.mediaQueryChanged));
      return {
        // media queryMatches
        mqls: mqls,
        // object of currently matched queries, like { desktop: true }
        queryMatches: {}
      };
    } else {
      return {
        mqls: { },
        queryMatches: {
          desktop: true
        }
      };
      }
    },
  componentDidMount() {
    this.mediaQueryChanged();
  },
  componentWillUnmount() {
    this.state.mqls.forEach(q => q.removeListener(this.mediaQueryChanged));
  },
  mediaQueryChanged() {
    this.setState({
      queryMatches: this.state.mqls.reduce((memo, q) => {
        memo[q.name] = q.query.matches;
        return memo;
      }, {})
    });
  },
  render() {
    const mapSdkActive = includes(this.props.location.pathname, '/map-sdk/');
    const mapboxJavaActive = includes(this.props.location.pathname, '/mapbox-services/');
    const examplesActive = includes(this.props.location.pathname, '/examples/');
    let { queryMatches } = this.state;

    return (
      <div className={'grid'}>

        {/* Site top toolbar */}
        <div className={'col--12 z1 hmin48 bg-denim shadow-darken50 fixed'}>
          {/* Site Navigation */}
          <div className={'align-t hmin48 flex-parent-inline flex-parent--center-cross flex-parent--left-main w240'}><a href={'https://mapbox.com/'}><div className={queryMatches.desktop ? 'ml12 mb-logo--s mb-logo--white' : ''}/></a></div>
            <Link className={`py12 btn color-white bg-transparent bg-darken10-on-active bg-darken10-on-hover txt-s  ${mapSdkActive ? 'is-active' : ''}`} to={prefixLink('/map-sdk/5.0.1/getting-started/')}>Map SDK</Link>
            <Link className={`py12 btn color-white bg-transparent bg-darken10-on-active bg-darken10-on-hover txt-s  ${mapboxJavaActive ? 'is-active' : ''}`} to={prefixLink('/mapbox-services/2.0.0/getting-started/')}>Mapbox Services</Link>
            <Link className={`py12 btn color-white bg-transparent bg-darken10-on-active bg-darken10-on-hover txt-s  ${examplesActive ? 'is-active' : ''}`} to={prefixLink('/examples/basics/')}>Examples</Link>
          </div>

          {this.props.children}

      </div>
    );
  }
});
