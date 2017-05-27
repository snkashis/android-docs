import React from 'react';
import {ExampleCard} from '../../../src/components/example_card';
import {ExampleCardContainer} from '../../../src/components/example_card_container';
import * as exampleList from './exampleList';

module.exports = React.createClass({
  propTypes() {
    return {route: React.PropTypes.object};
  },
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  render: function() {
    return (
      <div className='grid'>
        {/* Table of contents */}
        <div className='col--2 fixed col scroll-styled'>
          <div className='txt-m'>Categories</div>
        </div>
        {/* Examples */}
        <div className='col col--offl2 col--10'>

          <ExampleCardContainer exampleTitle={'Getting Started'} exampleCategory={exampleList.gettingStarted}/>
          <ExampleCardContainer exampleTitle={'Styling Map'} exampleCategory={exampleList.styleMap}/>
          <ExampleCardContainer exampleTitle={'Map Camera'} exampleCategory={exampleList.camera}/>
          <ExampleCardContainer exampleTitle={'Annotations'} exampleCategory={exampleList.annotations}/>
          <ExampleCardContainer exampleTitle={'3D Extrusions'} exampleCategory={exampleList.extrusions}/>
          <ExampleCardContainer exampleTitle={'Data Driven Styling'} exampleCategory={exampleList.dds}/>
        </div>
      </div>
    );
  }
})
