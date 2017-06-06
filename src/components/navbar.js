/* @flow */
import React from 'react';
import includes from 'underscore.string/include';
import {prefixLink} from 'gatsby-helpers'
import {Popover} from '@mapbox/assembly-components/popover';
import {PopoverTrigger} from '@mapbox/assembly-components/popover-trigger';
import {Link} from 'react-router';
import {NavbarMobileMenu} from './navbar_mobile_menu';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    var SdkTitle = this.props.activeSdk;
    SdkTitle = SdkTitle.replace('map-sdk', 'Map SDK');
    SdkTitle = SdkTitle.replace('mapbox-services', 'Mapbox Services');
    SdkTitle = SdkTitle.replace('plugins', 'Plugins');
    SdkTitle = SdkTitle.replace('navigation', 'Navigation SDK');

    return (
      <div className={'z1 min48 flex-parent--center-main flex-parent w-full border-b border-t bg-white border--gray-less-faint fixed'}>
        <div className={'wmax1200 w-full pl24 pr24 flex-parent--space-between-main flex-parent'}>

          {/* Left side nav */}
          <div className={'flex-child col col--6 inline-block'}>
            {this.props.windowWidth > 690 && <div className={'txt-s py12 bg-transparent btn px0 color-gray-light'}><strong>Platform</strong></div>}
            <div className={'txt-s py12 bg-transparent btn  color-gray-dark'}><strong>Android</strong>{/*}<svg className={'icon'}><use href={'#icon-chevron-down'}/></svg>*/}</div>
            {this.props.windowWidth > 690 && <div className={'txt-s py12 bg-transparent btn px0 color-gray-light'}><strong>Product</strong></div>}
            {this.props.windowWidth > 690 && <PopoverTrigger content={
              <div className={'flex-parent wmin180 pb12 flex-parent--column'}>
                <strong className={'color-gray-light p6 txt-mm'}>Products</strong>
                <Link className={`transition txt-bold color-gray-dark pl6 bg-transparent txt-m`} to={prefixLink('/map-sdk/overview/')}>Map SDK</Link>
                <Link className={`transition txt-bold color-gray-dark pl6 bg-transparent txt-m`} to={prefixLink('/plugins/overview/')}>Plugins</Link>
                <Link className={`transition txt-bold color-gray-dark pl6 bg-transparent txt-m`} to={prefixLink('/mapbox-services/overview/')}>Mapbox Services</Link>
                <Link className={`transition txt-bold color-gray-dark pl6 bg-transparent txt-m`} to={prefixLink('/navigation/overview/')}>Navigation</Link>
              </div>
              }
              respondsToHover={true}
              popoverProps={Object.assign({
                placement: 'bottom',
                alignment: 'center'
              })}
              >
              <button className={'txt-s py12 border--bright-blue-color bright-blue-color-on-hover bg-transparent btn flex-parent flex-parent--center-cross color-gray-dark'}>
                <strong>
                {SdkTitle}
                </strong><svg className={'icon'}><use href={'#icon-chevron-down'}/></svg>
              </button>
            </PopoverTrigger>}
          </div>
          {/* Right side nav */}
          <div className={'flex-child col col--6 flex-parent flex-parent--end-main'}>
          {this.props.windowWidth < 690 && <NavbarMobileMenu pages={this.props.pages}/>}

            { this.props.windowWidth > 690 &&
            <Link className={`py12 transition mobile-right-nav unround btn color-gray-dark border--bright-blue-color bright-blue-color-on-hover bg-transparent txt-s  ${this.props.activeSection === "overview" ? 'border-b border--3' : ''}`} to={prefixLink('/' + this.props.activeSdk + '/overview/')}>Overview</Link>}
            { this.props.windowWidth > 690 && this.props.activeSdk == 'map-sdk' || this.props.activeSdk == 'mapbox-services' ? <Link className={`py12 transition mobile-right-nav unround btn color-gray-dark border--bright-blue-color bright-blue-color-on-hover bg-transparent txt-s  ${this.props.activeSection === "examples" ? 'border-b border--3' : ''}`} to={prefixLink('/' + this.props.activeSdk + '/examples/')}>Examples</Link> : ''}
            { this.props.windowWidth > 690 && this.props.activeSdk == 'map-sdk' ? <Link className={`py12 transition mobile-right-nav unround btn color-gray-dark border--bright-blue-color bright-blue-color-on-hover bg-transparent txt-s  ${this.props.activeSection === "tutorials" ? 'border-b border--3' : ''}`} to={prefixLink('/' + this.props.activeSdk + '/tutorials/')}>Tutorials</Link> : ''}
          </div>
        </div>
      </div>
    );
  }
}

export { Navbar };
