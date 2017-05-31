import React from 'react';
import {ExampleCard} from '../../../src/components/example_card';
import {ExampleCardContainer} from '../../../src/components/example_card_container';
import * as exampleList from './index';

module.exports = React.createClass({
  propTypes() {
    return {route: React.PropTypes.object};
  },
  getInitialState: function() {
        return {
            windowWidth: 1200
        };
    },
  contextTypes: {
    router: React.PropTypes.object.isRequired
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

    return (
      <div className='grid'>
        {/* Table of contents */}
        {(windowWidth > 800) &&
        <div className='col--2 pt12 fixed col scroll-styled '>
          <div className='txt-m txt-bold gray-dark'>Categories</div>
          <div className='pt24 unstyled-list ml-neg18'><ul>
            <li className='p0 m0'><a className='text-decoration-none txt-s' href={'#getting-started'}>Getting Started</a></li>
            <li className='p0 m0'><a className='text-decoration-none txt-s' href={'#styling-map'}>Styling Map</a></li>
            <li className='p0 m0'><a className='text-decoration-none txt-s' href={'#map-camera'}>Map Camera</a></li>
            <li className='p0 m0'><a className='text-decoration-none txt-s' href={'#annotations'}>Annotations</a></li>
            <li className='p0 m0'><a className='text-decoration-none txt-s' href={'#3d-extrusions'}>3D Extrusions</a></li>
            <li className='p0 m0'><a className='text-decoration-none txt-s' href={'#data-driven-styling'}>Data Driven Styling</a></li>
            <li className='p0 m0'><a className='text-decoration-none txt-s' href={'#offline'}>Offline</a></li>
            <li className='p0 m0'><a className='text-decoration-none txt-s' href={'#query-map'}>Query Map</a></li>
          </ul></div>
        </div>}
        {/* Examples */}
        <div className={`${windowWidth > 800 ? 'col--offl2 col--10' : 'col--12'} col flex-parent flex-parent--wrap`}>
          <ExampleCardContainer exampleTitle={'Getting Started'} exampleCategory={exampleList.gettingStarted}/>
          <ExampleCardContainer exampleTitle={'Styling Map'} exampleCategory={exampleList.styleMap}/>
          <ExampleCardContainer exampleTitle={'Map Camera'} exampleCategory={exampleList.camera}/>
          <ExampleCardContainer exampleTitle={'Annotations'} exampleCategory={exampleList.annotations}/>
          <ExampleCardContainer exampleTitle={'3D Extrusions'} exampleCategory={exampleList.extrusions}/>
          <ExampleCardContainer exampleTitle={'Data Driven Styling'} exampleCategory={exampleList.dds}/>
          <ExampleCardContainer exampleTitle={'Offline'} exampleCategory={exampleList.offline}/>
          <ExampleCardContainer exampleTitle={'Query Map'} exampleCategory={exampleList.query}/>
        </div>
      </div>
    );
  }
})
