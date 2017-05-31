import React from 'react';
import {ExampleCard} from '../../../src/components/example_card';

/* Direction examples */
export const routing = [
  <ExampleCard
  exampleTitle={'Show directions on a map'}
  exampleDescription={'Use Mapbox Services to request directions'}
  difficulty={'intro'}
  exampleImg={'../../../assets/imgs/mapbox-services/direction.png'}
  exampleUrl={'https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/mas/DirectionsActivity.java'}/>,
  <ExampleCard
  exampleTitle={'Map Matching'}
  exampleDescription={'Match raw GPS points to the map so they align with the roads/pathways.'}
  difficulty={'intro'}
  exampleImg={'../../../assets/imgs/mapbox-services/map-matching.png'}
  exampleUrl={'https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/mas/MapMatchingActivity.java'}/>,
  <ExampleCard
  exampleTitle={'Simplify a polyline'}
  exampleDescription={'Using the polylines utility, simplify a polyline which reduces the amount of coordinates making up the polyline depending on tolerance.'}
  difficulty={'intro'}
  exampleImg={'../../../assets/imgs/mapbox-services/simplify-line.gif'}
  exampleUrl={'https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/basics/SimplifyPolylineActivity.java'}/>
]

export const geocoding = [
  <ExampleCard
  exampleTitle={'Geocoding Auto Complete Widget'}
  exampleDescription={'Use the provided geocoding auto complete widget to convert location text into geographic coordinates.'}
  difficulty={'intro'}
  exampleImg={'../../../assets/imgs/mapbox-services/geocoding-auto-complete.gif'}
  exampleUrl={'https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/mas/DirectionsActivity.java'}/>,
]

export const staticMap = [
  <ExampleCard
  exampleTitle={'Download a static map'}
  exampleDescription={'Use Mapbox Android Services to build a url and download a static map'}
  difficulty={'intro'}
  exampleImg={'../../../assets/imgs/mapbox-services/static-image.gif'}
  exampleUrl={'https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/mas/DirectionsActivity.java'}/>,
  // <ExampleCard
  // exampleTitle={'Map Matching'}
  // exampleDescription={'Match raw GPS points to the map so they align with the roads/pathways.'}
  // difficulty={'intro'}
  // exampleImg={'../../../assets/imgs/map-sdk/examples/getting-started/support-fragment.png'}
  // exampleUrl={'https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/mas/MapMatchingActivity.java'}/>
]
