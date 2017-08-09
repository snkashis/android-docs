import React from 'react';
import { NavbarDropdownMenu } from './navbar-dropdown-menu';

const menuItems = [
  {
    url: '/android-docs/',
    text: 'Android'
  },
  {
    url: '/ios-sdk/',
    text: 'iOS SDK'
  },
  {
    url: 'https://doc.qt.io/qt-5/location-plugin-mapbox.html',
    text: 'Qt'
  },
  {
    url: '/unity/',
    text: 'Unity'
  },
  {
    url: '/mapbox-gl-js/',
    text: 'Web'
  }
];

export class PlatformMenu extends React.PureComponent {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return <NavbarDropdownMenu title="Platforms" items={menuItems} />;
  }
}
