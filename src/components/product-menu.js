import React from 'react';
import { prefixUrl } from '@mapbox/batfish/modules/prefix-url';
import { NavbarDropdownMenu } from './navbar-dropdown-menu';

const menuItems = [
  {
    url: prefixUrl('/map-sdk/overview/'),
    text: 'Map SDK'
  },
  {
    url: prefixUrl('/plugins/overview/'),
    text: 'Plugins'
  },
  {
    url: prefixUrl('/mapbox-services/overview/'),
    text: 'Mapbox Services'
  },
  {
    url: prefixUrl('/navigation/overview/'),
    text: 'Navigation SDK'
  }
];

export class ProductMenu extends React.PureComponent {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return <NavbarDropdownMenu title="Products" items={menuItems} />;
  }
}
