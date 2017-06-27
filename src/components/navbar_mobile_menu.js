/* @flow */
import React from 'react';
import includes from 'underscore.string/include';
import {prefixLink} from 'gatsby-helpers'
import {Popover} from '@mapbox/assembly-components/popover';
import {PopoverTrigger} from '@mapbox/assembly-components/popover-trigger';
import {Link} from 'react-router';

class NavbarMobileMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  //
  handleClick() {
    this.setState({ opened: !this.state.opened })
    this.refs.mobileMenu.hide();
  }

render() {
  let {opened} = this.state;
  var icon = 'menu';
  if (opened) {
    icon = 'close';
  } else {
    icon = 'menu';
  }
  const mapPages = this.props.pages.map((p, i) => {
    if (includes(p.path, '/map-sdk/')) {
      if (p.data.title === undefined) { return; }
      return (
        <Link
          onClick={this.handleClick}
          to={prefixLink(p.path)}
          className={`${p.data.title == 'Examples' ? 'txt-bold' : ''} inline-block col col--6 color-gray-dark bright-blue-color-on-hover txt-ms py3 px6-ml px0 mt3`}
          key={i}>
          {p.data.title}
        </Link>)
    }
  });

  const masPages = this.props.pages.map((p, i) => {
    if (includes(p.path, '/mapbox-services/')) {
      if (p.data.title === undefined) { return; }
      return (
        <Link
          onClick={this.handleClick}
          to={prefixLink(p.path)}
          className={`${p.data.title == 'Examples' ? 'txt-bold' : ''} inline-block col col--6 color-gray-dark bright-blue-color-on-hover txt-ms py3 px6-ml px0 mt3`}
          key={i}>{p.data.title}
        </Link>)
    }
  });

  const navPages = this.props.pages.map((p, i) => {
    if (includes(p.path, '/navigation/')) {
      if (p.data.title === undefined) { return; }
      return (
        <Link
          onClick={this.handleClick}
          to={prefixLink(p.path)}
          className={`${p.data.title == 'Examples' ? 'txt-bold' : ''} inline-block col col--6 color-gray-dark bright-blue-color-on-hover txt-ms py3 px6-ml px0 mt3`}
          key={i}>{p.data.title}
        </Link>)
    }
  });
  const pluginPages = this.props.pages.map((p, i) => {
    if (includes(p.path, '/plugins/')) {
      if (p.data.title === undefined) { return; }
      return (
        <Link
          onClick={this.handleClick}
          to={prefixLink(p.path)}
          className={`${p.data.title == 'Examples' ? 'txt-bold' : ''} inline-block col col--6 color-gray-dark bright-blue-color-on-hover txt-ms py3 px6-ml px0 mt3`}
          key={i}>{p.data.title}
        </Link>)
    }
  });

  return(
    <PopoverTrigger ref='mobileMenu' content={
      <div className='grid'>
        <div className='py12 px24 mt-neg18 mr-neg24 ml-neg24 mb24'>
          <div className='block mt12 relative'>
            <div className='mb3 txt-uppercase w-full txt-s txt-spacing1 txt-fancy color-darken50 color-dark opacity50'>Map SDK</div>
            <div className='pb18'>{mapPages}</div>
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
      </div>}
    display={'inherit'}
    respondsToHover={false}
    popoverProps={Object.assign({
      placement: 'bottom',
      alignment: 'center',
      accessibleTitle: 'Navigation drawer menu'
    })}
    >
    <button onClick={this.handleClick} className={'block flex-parent flex-parent--center-cross'}>
      <svg className={'icon--l color-gray-dark opacity75'}><use href={`#icon-${icon}`}/></svg>
    </button>
  </PopoverTrigger>)
}}

export { NavbarMobileMenu };
