import React from 'react'
import NavigationBar from './navigation-bar';

var MapSdk = React.createClass({
  render() {
    let queryMatches = true;
    let col1 = false;
    return (<div className='container unlimiter'>
      <NavigationBar/>

      {/* Content background */ }
      {(!col1 && !queryMatches.mobile) && <div className={`custom-content fixed-top fixed-right ${queryMatches.desktop && 'space-left16'}`}>
        <div className='fill-light col6 pin-right'></div>
      </div>}

      {/* Content */ }
      <div className={`${queryMatches.desktop && 'space-left16'}`}>
        <div className={col1 ? 'margin1 custom-content' : 'custom-content'}>
          <h2>Hello world </h2>
        </div>
      </div>





      </div>
    )
  }
})

module.exports = MapSdk;
//
// <Content
//   leftClassname={col1 ? 'col8 space-bottom4 pad2x prose clip' : 'space-bottom8 col6 pad2x prose clip'}
//   rightClassname={col1 ? 'space-bottom2 pad2 prose clip fill-light space-top5' : 'space-bottom4 col6 pad2 prose clip fill-light space-top5'}
//   ast={ast}/>
