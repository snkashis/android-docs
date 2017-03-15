import React from 'react'
import { Link } from 'react-router'
import { brandNames, brandClasses } from '../custom';


export default React.createClass({
  render() {
    let queryMatches = true;
    return (
      <div className='container unlimiter'>

        {/* Top left logo */ }
        <div className={`fill-denim z100 dark width16 bottom-shadow fixed-top pad1y pad2x`}>
          <a href='/' className={`active space-top1 space-left1 pin-topleft icon round dark mapbox pad0 ${brandClasses}`}></a>
          <div className={`strong small
            ${queryMatches.mobile ? 'space-left3' : ''}
            ${queryMatches.tablet ? 'space-left2' : 'space-left4 line-height15' }`}>
            {queryMatches.desktop ? brandNames.desktop :
              queryMatches.mobile ? brandNames.mobile : brandNames.tablet}
          </div>
        </div>

        {/* Navigation bar */ }
        <div className={`fill-denim navbar z100 dark fixed-top`}>
          {queryMatches.tablet && <div>
            <button
              onClick={this.toggleNav}
              className={`short quiet pin-topright button rcon ${showNav ? 'caret-up' : 'caret-down'} space-right1 space-top1`}>
              <span className='micro'>{activeSection}</span>
            </button>
            {showNav && <div className='fixed-left keyline-top fill-dark pin-left pad2 scroll-styled space-top5'>
              <Navigation
                navigationItemClicked={this.navigationItemClicked}
                activeSection={activeSection}
                ast={ast} />
            </div>}
          </div>}

          {/* Navigation items */ }
          <div className={'col6 bottom-shadow'}>
            <ul role="nav" className={'strong nav-button small'}>
              <li><Link to="/map-sdk">Map SDK</Link></li>
              <li><Link to="/mapbox-java">Mapbox Java</Link></li>
              <li><Link to="/examples">Examples</Link></li>
            </ul>
          </div>

          {/* Rightside navigation items */ }
          <div className={'col6 pad2x pad0 space-top1 space-right1 pin-topright'}>
            <div className={'pin-right'}>
              <input type="text"></input>
              {queryMatches.desktop ?
                <a
                  title={`Display as ${col1 ? 2 : 1} column`}
                  onClick={this.toggleColumnMode}
                  style={{ cursor: 'pointer' }}
                  className={`icon quiet space-left3 fr caret-${col1 ? 'right' : 'left'} fill-lighten1 pad0 round`}></a> : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
})
