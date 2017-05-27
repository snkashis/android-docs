import React from 'react';
import {Link} from 'react-router';
import {prefixLink} from 'gatsby-helpers'
import includes from 'underscore.string/include';
import {Container, Grid, Span} from 'react-responsive-grid';
import {config} from 'config';
import {Popover} from '../src/components/popover';
import {PopoverTrigger} from '../src/components/popover_trigger';
import {OverviewHeader} from '../src/components/overview_header';
import {MapboxPageShell} from '../src/components/mapbox_page_shell'

import 'css/styles.css';
import 'css/markdown-styles.css'

module.exports = React.createClass({
  propTypes: {
    children: React.PropTypes.object
  },
  render() {
    const mapSdkActive = includes(this.props.location.pathname, '/map-sdk/');
    const mapboxJavaActive = includes(this.props.location.pathname, '/mapbox-services/');
    const pluginsActive = includes(this.props.location.pathname, '/plugins/');
    const navigationActive = includes(this.props.location.pathname, '/navigation/');

    var activeSection = "overview";
    if (includes(this.props.location.pathname, '/examples/')) {
      activeSection = "examples";
    } else if (includes(this.props.location.pathname, '/tutorials/')) {
      activeSection = "tutorials";
    }

    var activeSdk;
    if (includes(this.props.location.pathname, '/mapbox-services/')) {
      activeSdk = "mapbox-services";
    } else if (includes(this.props.location.pathname, '/plugins/')) {
      activeSdk = "plugins";
    } else if (includes(this.props.location.pathname, '/navigation/')) {
      activeSdk = "navigation";
    } else {
      activeSdk = "map-sdk";
    }

    var activeTitle;

    const childPages = this.props.children.props.route.pages.map((p) => {
      if (includes(this.props.location.pathname, p.file.dir)) {
        if (p.data.title !== undefined) {
          return {title: p.data.title, path: p.path, toc: p.data.toc};
        }
      }
    });

    const docPages = childPages.map((child) => {
      if (child === undefined) {
        return;
      }
      const isActive = prefixLink(child.path) === this.props.location.pathname
      isActive
        ? activeTitle = child.title
        : '';

      return (
        <div onClick={this.toggleNav}>
          <li className={'txt-fancy'} key={child.path}>
            <Link to={prefixLink(child.path)} className={'page-hover'} style={{
              textDecoration: 'none'
            }}>
              {isActive
                ? <div className={'active-item'}>
                    <strong>{child.title}</strong>
                  </div>
                : child.title}
            </Link>
          </li>
          {isActive
            ? <div className={'ml12'} dangerouslySetInnerHTML={{
                __html: child.toc
              }}/>
            : ''}
        </div>
      )
    });

    return (
<div className={'grid flex-parent--center-main flex-parent'}>
  {/* Site top toolbar */}
  <div className={'z1 min48 flex-child col col--12 navigation fixed'}>
    <div className={'limiter'}>
      {/* Left side nav */}
      <div className={'flex-child inline-block'}>
        <div className={'txt-s py12 bg-transparent btn px0 color-gray-light'}><strong>Platform</strong></div>
        <div className={'txt-s py12 bg-transparent btn nav-icon color-gray-dark'}><strong>Android</strong>{/*}<svg className={'icon'}><use href={'#icon-chevron-down'}/></svg>*/}</div>
        <div className={'txt-s py12 bg-transparent btn px0 color-gray-light'}><strong>Product</strong></div>
        <PopoverTrigger content={
          <div className={'flex-parent wmin180 pb12 flex-parent--column'}>
            <strong className={'color-gray-light p6 txt-mm'}>Products</strong>
            <Link className={`transition txt-bold color-gray-dark pl6 bg-transparent txt-s`} to={prefixLink('/map-sdk/' + activeSection + '/')}>Map SDK</Link>
            <Link className={`transition txt-bold color-gray-dark pl6 bg-transparent txt-s`} to={prefixLink('/plugins/' + activeSection + '/')}>Plugins</Link>
            <Link className={`transition txt-bold color-gray-dark pl6 bg-transparent txt-s`} to={prefixLink('/mapbox-services/' + activeSection + '/')}>Mapbox Services</Link>
            <Link className={`transition txt-bold color-gray-dark pl6 bg-transparent txt-s`} to={prefixLink('/navigation/' + activeSection + '/')}>Navigation</Link>
          </div>
          }
          respondsToHover={true}
          popoverProps={_.assign({
            placement: 'bottom',
            alignment: 'center'
          })}>
          <button className={'txt-s py12 nav-item bg-transparent btn nav-icon color-gray-dark'}>
            <strong>
            {`${mapSdkActive ? 'Map SDK' : ''}`}
            {`${pluginsActive ? 'Plugins' : ''}`}
            {`${mapboxJavaActive ? 'Mapbox Services' : ''}`}
            {`${navigationActive ? 'Navigation' : ''}`}
            </strong><svg className={'icon'}><use href={'#icon-chevron-down'}/></svg>
          </button>
        </PopoverTrigger>
      </div>

      {/* Right side nav */}
      <div className={'flex-child fr inline-block'}>
        <Link className={`py12 transition btn color-gray-dark nav-item bg-transparent txt-s  ${activeSection === "overview" ? 'active-button' : ''}`} to={prefixLink('/' + activeSdk + '/overview/')}>Overview</Link>
        {mapSdkActive || mapboxJavaActive ? <Link className={`py12 transition btn color-gray-dark nav-item bg-transparent txt-s  ${activeSection === "examples" ? 'active-button' : ''}`} to={prefixLink('/' + activeSdk + '/examples/')}>Examples</Link> : ''}
        {mapSdkActive ? <Link className={`py12 transition btn color-gray-dark nav-item bg-transparent txt-s  ${activeSection === "tutorials" ? 'active-button' : ''}`} to={prefixLink('/' + activeSdk + '/tutorials/')}>Tutorials</Link> : ''}
      </div>
    </div>
  </div>

  {/* Start content */}
  <div className={'scroll-styled main-content flex-child'}>

{includes(activeSection, 'examples') ? '' :
    <div className={'col--2 pt42 col toc scroll-styled'}>{docPages}
    {mapboxJavaActive ? <PopoverTrigger content={
      <div className={'flex-parent wmin180 pb12 flex-parent--column'}>
        <strong className={'color-gray-light p6 txt-mm'}>Javadoc</strong>
          <a className={`transition txt-bold color-gray-dark pl6 bg-transparent txt-s`}>mapbox-java-core</a>
          <a className={`transition txt-bold color-gray-dark pl6 bg-transparent txt-s`}>mapbox-java-geojson</a>
          <a className={`transition txt-bold color-gray-dark pl6 bg-transparent txt-s`}>mapbox-java-services</a>
          <a className={`transition txt-bold color-gray-dark pl6 bg-transparent txt-s`}>mapbox-java-services-rx</a>
          <a className={`transition txt-bold color-gray-dark pl6 bg-transparent txt-s`}>mapbox-android-services</a>
          <a className={`transition txt-bold color-gray-dark pl6 bg-transparent txt-s`}>mapbox-android-telemetry</a>
          <a className={`transition txt-bold color-gray-dark pl6 bg-transparent txt-s`}>mapbox-android-ui</a>
      </div>
      }
      respondsToHover={true}
      popoverProps={_.assign({
        placement: 'right',
        alignment: 'center'
      })}>
      <button className={'txt-fancy page-hover'}>
        <strong>API Reference</strong>
      </button>
    </PopoverTrigger>  : ''}
    </div>}
      {this.props.children}
    </div>
  </div>);
  }
});
