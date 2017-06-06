// @flow
import React from 'react';
import {Link} from 'react-router';
import {prefixLink} from 'gatsby-helpers'
import includes from 'underscore.string/include';
import {Container, Grid, Span} from 'react-responsive-grid';
import {config} from 'config';
import {Popover} from '@mapbox/assembly-components/popover';
import {PopoverTrigger} from '@mapbox/assembly-components/popover-trigger';
import {OverviewHeader} from '../src/components/overview_header';
import {Navbar} from '../src/components/navbar';

import 'css/site.css';
import 'css/markdown-styles.css'

class MainLayout extends React.Component {
  state: {
        windowWidth: number;
    };
  constructor() {
    super();
    this.state = {
      windowWidth: 1200
    };
  }

  componentDidMount() {
    this.handleWindowSizeChange();
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    if (window !== 'undefined') {
      this.setState({ windowWidth: window.innerWidth });
    }
  }

  render() {
    let {windowWidth} = this.state;

    var activeSdk;
    if (includes(this.props.location.pathname, '/mapbox-services/')) {
      activeSdk = "mapbox-services";
    } else if (includes(this.props.location.pathname, '/plugins/')) {
      activeSdk = "plugins";``
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
          <li className={'txt-bold txt-fancy'} key={child.path}>
            <Link to={prefixLink(child.path)} className={'bright-blue-color-on-hover text-decoration-none'}>
              {isActive
                ? <div className={'bright-blue-color'}>{child.title}</div> : child.title}
            </Link>
          </li>
          {isActive
            ? <div className={'ml6 pt6'} dangerouslySetInnerHTML={{
                __html: child.toc
              }}/>
            : ''}
        </div>
      )
    });



    return (
<div className='grid'>
  {/* Site top toolbar */}
  <Navbar
    windowWidth={windowWidth}
    pages={this.props.children.props.route.pages}
    activeSdk={activeSdk}
    pathname={this.props.location.pathname}
  />

  {/* Start content */}
  <div className={`scroll-styled ${windowWidth > 690 && 'flex-parent--center-main flex-parent'} limiter pb96 pl24 pr24 pt24 overflow-y t48 b0 fixed flex-child`}>
  <div className={`${windowWidth > 690 && 'flex-parent--space-between-main flex-parent'}`}>

{includes(this.props.location.pathname, '/examples/') ? '' :
    windowWidth > 690 && <div className={'col col--2 pt42 pr18 pb18 flex-child--no-shrink fixed color-gray-dark unstyled-list scroll-styled'}>{docPages}
    {includes(this.props.location.pathname, '/mapbox-services/') ? <PopoverTrigger content={
      <div className={'flex-parent wmin180 pb12 flex-parent--column'}>
        <strong className={'color-gray-light p6 txt-mm'}>Javadoc</strong>
          <a href={prefixLink('/api/mapbox-java/libjava-core/2.1.0/index.html')} className={`transition txt-bold color-gray-dark pl6 bg-transparent txt-s`}>mapbox-java-core</a>
          <a href={prefixLink('/api/mapbox-java/libjava-geojson/2.1.0/index.html')} className={`transition txt-bold color-gray-dark pl6 bg-transparent txt-s`}>mapbox-java-geojson</a>
          <a href={prefixLink('/api/mapbox-java/libjava-services/2.1.0/index.html')} className={`transition txt-bold color-gray-dark pl6 bg-transparent txt-s`}>mapbox-java-services</a>
          <a href={prefixLink('/api/mapbox-java/libjava-services-rx/2.1.0/index.html')} className={`transition txt-bold color-gray-dark pl6 bg-transparent txt-s`}>mapbox-java-services-rx</a>
          <a href={prefixLink('/api/mapbox-java/libandroid-services/2.1.0/index.html')} className={`transition txt-bold color-gray-dark pl6 bg-transparent txt-s`}>mapbox-android-services</a>
          <a href={prefixLink('/api/mapbox-java/libandroid-telemetry/2.1.0/index.html')} className={`transition txt-bold color-gray-dark pl6 bg-transparent txt-s`}>mapbox-android-telemetry</a>
          <a href={prefixLink('/api/mapbox-java/libandroid-ui/2.1.0/index.html')} className={`transition txt-bold color-gray-dark pl6 bg-transparent txt-s`}>mapbox-android-ui</a>
      </div>
      }
      respondsToHover={true}
      popoverProps={Object.assign({
        placement: 'right',
        alignment: 'center'
      })}>
      <button className={'txt-fancy bright-blue-color-on-hover'}>
        <strong>API Reference</strong>
      </button>
    </PopoverTrigger>  : ''}

    </div>}
      {this.props.children}
    </div></div>
  </div>);
  }
}

export default MainLayout
