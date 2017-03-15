import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './components/app'
import MapSdk from './components/map-sdk'
import MapboxJava from './components/mapbox-java'
import Examples from './components/examples'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/map-sdk" component={MapSdk}/>
    <Route path="/mapbox-java" component={MapboxJava}/>
    <Route path="/examples" component={Examples}/>
  </Router>
), document.getElementById('app'))
