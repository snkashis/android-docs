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
  getInitialState: function() {
        return {
            opened: false
        };
    },
    handleClick: function() {
        this.setState({
            opened: !this.state.opened
        })
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
          <li className={'txt-bold txt-fancy'} key={child.path}>
            <Link to={prefixLink(child.path)} className={'page-hover text-decoration-none'}>
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

    var mobileMenu = childPages.map((child, i) => {
      if (child === undefined) { return; }
      child.title = child.title.replace('Map SDK', 'Getting Started')
      return (<Link to={prefixLink(child.path)} className='inline-block col col--6 color-gray-dark color-blue-on-hover txt-ms py3 px6-ml px0 mt3' key={i}>{child.title}</Link>)
    })


var mobileMenuDisabled;
var icon = 'menu';
var opened = this.state.opened;
if (opened) {
  icon = 'close';
} else {
  icon = 'menu';
}

if (windowWidth > 640) {
  icon = 'menu'
  mobileMenuDisabled = true;
} else {
  mobileMenuDisabled = false;
}
console.log(mobileMenuDisabled);

    return (
<div className='grid'>
  {/* Site top toolbar */}
  <div className={'z1 min48 flex-parent--center-main flex-parent w-full border-b border-t bg-white border--gray-less-faint fixed'}>
    <div className={'wmax1200 w-full pl24 pr24 flex-parent--space-between-main flex-parent'}>

      {/* Left side nav */}
      <div className={'flex-child col col--6 inline-block'}>
        <div className={'txt-s mobile-left-nav py12 bg-transparent btn px0 color-gray-light'}><strong>Platform</strong></div>
        <div className={'txt-s py12 bg-transparent btn  color-gray-dark'}><strong>Android</strong>{/*}<svg className={'icon'}><use href={'#icon-chevron-down'}/></svg>*/}</div>
        <div className={'txt-s mobile-left-nav py12 bg-transparent btn px0 color-gray-light'}><strong>Product</strong></div>
        <PopoverTrigger content={
          <div className={'flex-parent wmin180 pb12 flex-parent--column'}>
            <strong className={'color-gray-light p6 txt-mm'}>Products</strong>
            <Link className={`transition txt-bold color-gray-dark pl6 bg-transparent txt-m`} to={prefixLink('/map-sdk/overview/')}>Map SDK</Link>
            <Link className={`transition txt-bold color-gray-dark pl6 bg-transparent txt-m`} to={prefixLink('/plugins/overview/')}>Plugins</Link>
            <Link className={`transition txt-bold color-gray-dark pl6 bg-transparent txt-m`} to={prefixLink('/mapbox-services/overview/')}>Mapbox Services</Link>
            <Link className={`transition txt-bold color-gray-dark pl6 bg-transparent txt-m`} to={prefixLink('/navigation/overview/')}>Navigation</Link>
          </div>
          }
          respondsToHover={true}
          popoverProps={_.assign({
            placement: 'bottom',
            alignment: 'center',
          })}>
          <button className={'txt-s py12 nav-item bg-transparent btn flex-parent flex-parent--center-cross color-gray-dark'}>
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
      <div className={'flex-child col col--6 flex-parent flex-parent--end-main'}>
      <PopoverTrigger content={


          <div className='grid'>
            <div className='bg-gray-faint py12 px24 mt-neg18 mr-neg24 ml-neg24 mb24'>
              <div className='block mt24 relative'>
                <div className='grid grid--gut12'>
                  <div className='mb3 txt-uppercase w-full txt-s txt-spacing1 txt-fancy color-darken50 color-dark opacity50'>Overview</div>
                  <div className=''>{mobileMenu}</div>
                </div>
                <div className='grid grid--gut12'>
                  <div className='mb3 txt-uppercase w-full txt-s txt-spacing1 txt-fancy color-darken50 color-dark opacity50'>Examples</div>
                  <div className=''>{mobileMenu}</div>
                </div>
                <div className='grid grid--gut12'>
                  <div className='mb3 txt-uppercase w-full txt-s txt-spacing1 txt-fancy color-darken50 color-dark opacity50'>Tutorial</div>
                  <div className=''>{mobileMenu}</div>
                </div>
            </div>
          </div>
        </div>


        }
        disabled={mobileMenuDisabled}
        display={'inherit'}
        respondsToHover={false}
        popoverProps={_.assign({
          popoverClasses: 'round shadow-darken25-bold bg-white clip py18 px24',

        })}>
        <button onClick={this.handleClick} className={'block flex-parent flex-parent--center-cross'}>
          <svg className={'icon--l nav-mobile color-gray-dark opacity75'}><use href={`#icon-${icon}`}/></svg>
        </button>
      </PopoverTrigger>

      {
        <Link className={`py12 transition mobile-right-nav unround btn color-gray-dark nav-item bg-transparent txt-s  ${activeSection === "overview" ? 'border-b border--3' : ''}`} to={prefixLink('/' + activeSdk + '/overview/')}>Overview</Link>}
        {mapSdkActive || mapboxJavaActive ? <Link className={`py12 transition mobile-right-nav unround btn color-gray-dark nav-item bg-transparent txt-s  ${activeSection === "examples" ? 'border-b border--3' : ''}`} to={prefixLink('/' + activeSdk + '/examples/')}>Examples</Link> : ''}
        {mapSdkActive ? <Link className={`py12 transition mobile-right-nav unround btn color-gray-dark nav-item bg-transparent txt-s  ${activeSection === "tutorials" ? 'border-b border--3' : ''}`} to={prefixLink('/' + activeSdk + '/tutorials/')}>Tutorials</Link> : ''}
      </div>
    </div>
  </div>

  {/* Start content */}
  <div className={`scroll-styled ${windowWidth > 800 && 'flex-parent--center-main flex-parent'} limiter pb96 pl24 pr24 pt24 overflow-y t48 b0 fixed flex-child`}>
  <div className={`${windowWidth > 800 && 'flex-parent--space-between-main flex-parent'}`}>

{includes(activeSection, 'examples') ? '' :
    <div className={'col--3 pt42 col toc flex-child--no-shrink  scroll-styled'}>{docPages}
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
    </div></div>
  </div>);
  }
});
