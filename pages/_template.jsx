import React from 'react';
import {Link} from 'react-router';
import {prefixLink} from 'gatsby-helpers'
import includes from 'underscore.string/include';
import {Container, Grid, Span} from 'react-responsive-grid';
import {config} from 'config';
import {Popover} from '../src/components/popover';
import {PopoverTrigger} from '@mapbox/assembly-components/popover-trigger';
import {OverviewHeader} from '../src/components/overview_header';

import 'css/styles.css';
import 'css/markdown-styles.css'

module.exports = React.createClass({
  propTypes: {
    children: React.PropTypes.object
  },
  getInitialState: function() {
        return {
            opened: false,
            windowWidth: 1200
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
    if (window !== 'undefined') {
      this.setState({ windowWidth: this.state.windowWidth = window.innerWidth });
    }
  },
  render: function() {

    let {windowWidth} = this.state;




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
      return (<Link to={prefixLink(child.path)} className='inline-block col col--6 color-gray-dark bright-blue-color-on-hover txt-ms py3 px6-ml px0 mt3' key={i}>{child.title}</Link>)
    })

    const masPages = this.props.children.props.route.pages.map((p, i) => {
      if (includes(p.path, '/mapbox-services/')) {
        if (p.data.title === undefined) { return; }
        return (<Link to={prefixLink(p.path)} className='inline-block col col--6 color-gray-dark bright-blue-color-on-hover txt-ms py3 px6-ml px0 mt3' key={i}>{p.data.title}</Link>)
      }
    });


    const navPages = this.props.children.props.route.pages.map((p, i) => {
      if (includes(p.path, '/navigation/')) {
        if (p.data.title === undefined) { return; }
        return (<Link to={prefixLink(p.path)} className='inline-block col col--6 color-gray-dark bright-blue-color-on-hover txt-ms py3 px6-ml px0 mt3' key={i}>{p.data.title}</Link>)
      }
    });
    const pluginPages = this.props.children.props.route.pages.map((p, i) => {
      if (includes(p.path, '/plugins/')) {
        if (p.data.title === undefined) { return; }
        return (<Link to={prefixLink(p.path)} className='inline-block col col--6 color-gray-dark bright-blue-color-on-hover txt-ms py3 px6-ml px0 mt3' key={i}>{p.data.title}</Link>)
      }
    });

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

    return (
<div className='grid'>
  {/* Site top toolbar */}
  <div className={'z1 min48 flex-parent--center-main flex-parent w-full border-b border-t bg-white border--gray-less-faint fixed'}>
    <div className={'wmax1200 w-full pl24 pr24 flex-parent--space-between-main flex-parent'}>

      {/* Left side nav */}
      <div className={'flex-child col col--6 inline-block'}>
        {windowWidth > 800 && <div className={'txt-s py12 bg-transparent btn px0 color-gray-light'}><strong>Platform</strong></div>}
        <div className={'txt-s py12 bg-transparent btn  color-gray-dark'}><strong>Android</strong>{/*}<svg className={'icon'}><use href={'#icon-chevron-down'}/></svg>*/}</div>
        {windowWidth > 800 && <div className={'txt-s py12 bg-transparent btn px0 color-gray-light'}><strong>Product</strong></div>}
        {windowWidth > 800 && <PopoverTrigger content={
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
        </PopoverTrigger>}
      </div>
      {/* Right side nav */}
      <div className={'flex-child col col--6 flex-parent flex-parent--end-main'}>
      {windowWidth < 800 && <PopoverTrigger content={


          <div className='grid'>
            <div className='py12 px24 mt-neg18 mr-neg24 ml-neg24 mb24'>
              <div className='block mt12 relative'>
                  <div className='mb3 txt-uppercase w-full txt-s txt-spacing1 txt-fancy color-darken50 color-dark opacity50'>Map SDK</div>
                  <div className='pb18'>{mobileMenu}</div>
                  <div className='border-t border--gray-faint top left right pb18'/>
                  <div className='mb3 txt-uppercase w-full txt-s txt-spacing1 txt-fancy color-darken50 color-dark opacity50'>Plugins</div>
                  <div className='pb24'>{pluginPages}</div>
                  <div className='border-t border--gray-faint top left right pb18'/>
                  <div className='mb3 txt-uppercase w-full txt-s txt-spacing1 txt-fancy color-darken50 color-dark opacity50'>Mapbox Services</div>
                  <div className='pb24'>{masPages}</div>
                  <div className='border-t border--gray-faint top left right pb18'/>
                  <div className='mb3 txt-uppercase w-full txt-s txt-spacing1 txt-fancy color-darken50 color-dark opacity50'>Navigation SDK</div>
                  <div className='pb24'>{navPages}</div>
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
          <svg className={'icon--l color-gray-dark opacity75'}><use href={`#icon-${icon}`}/></svg>
        </button>
      </PopoverTrigger>}

        { windowWidth > 800 &&
        <Link className={`py12 transition mobile-right-nav unround btn color-gray-dark nav-item bg-transparent txt-s  ${activeSection === "overview" ? 'border-b border--3' : ''}`} to={prefixLink('/' + activeSdk + '/overview/')}>Overview</Link>}
        {windowWidth > 800 && mapSdkActive || mapboxJavaActive ? <Link className={`py12 transition mobile-right-nav unround btn color-gray-dark nav-item bg-transparent txt-s  ${activeSection === "examples" ? 'border-b border--3' : ''}`} to={prefixLink('/' + activeSdk + '/examples/')}>Examples</Link> : ''}
        {windowWidth > 800 && mapSdkActive ? <Link className={`py12 transition mobile-right-nav unround btn color-gray-dark nav-item bg-transparent txt-s  ${activeSection === "tutorials" ? 'border-b border--3' : ''}`} to={prefixLink('/' + activeSdk + '/tutorials/')}>Tutorials</Link> : ''}
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
