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
        {(windowWidth > 690) &&
        <div className='col--2 pt12 fixed col scroll-styled '>
          <div className='txt-m txt-bold gray-dark'>Categories</div>
          <div className='pt24 unstyled-list ml-neg18'><ul>
            <li className='p0 m0'><a className='text-decoration-none txt-s' href={'#routing'}>Routing</a></li>
            <li className='p0 m0'><a className='text-decoration-none txt-s' href={'#geocoding'}>Geocoding</a></li>
            <li className='p0 m0'><a className='text-decoration-none txt-s' href={'#static-maps'}>Static Maps</a></li>
          </ul></div>
        </div>}
        {/* Examples */}
        <div className={`${windowWidth > 690 ? 'col--offl2 col--10' : 'col--12'} col flex-parent flex-parent--wrap`}>
          <ExampleCardContainer exampleTitle={'Routing'} exampleCategory={exampleList.routing}/>
          <ExampleCardContainer exampleTitle={'Geocoding'} exampleCategory={exampleList.geocoding}/>
          <ExampleCardContainer exampleTitle={'Static Maps'} exampleCategory={exampleList.staticMap}/>
        </div>
      </div>
    );
  }
})
