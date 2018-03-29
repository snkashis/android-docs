/*---
title: 'Android Mapbox Services Examples'
description: 'Mapbox Java Services code examples'
sideNavSections:
  - title: "Directions"
  - title: "Map matching"
  - title: "Simplify a polyline"
  - title: "Static maps"
  - title: "Matrix"
---*/

import React from 'react';
import { withLocation } from '@mapbox/batfish/modules/with-location';

import { ExampleCard } from '../../../components/example-card';
import { ExampleCardContainer } from '../../../components/example-card-container';
import PageShell from '../../../components/page-shell';

let MapSdkExamplesLayout = class MapSdkExamplesLayout extends React.Component {
  render() {
    return (
      <PageShell frontMatter={this.props.frontMatter}>
        <ExampleCardContainer exampleTitle="Directions">
          <ExampleCard
            exampleTitle="Show directions on a map"
            exampleDescription="Request directions between two points."
            difficulty="intro"
            exampleImgID="examplesDirection"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/javaservices/DirectionsActivity.java"
          />
          <ExampleCard
            exampleTitle="Map matching"
            exampleDescription="Match raw GPS points to the map so they align with the roads/pathways."
            difficulty="intro"
            exampleImgID="examplesMapMatching"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/javaservices/MapMatchingActivity.java"
          />
          <ExampleCard
            exampleTitle="Simplify a polyline"
            exampleDescription="Simplify a polyline which, depending on the set tolerance, reduces the amount of coordinates needed to create the polyline."
            difficulty="intro"
            exampleImgID="examplesSimplifyLine"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/javaservices/SimplifyPolylineActivity.java"
          />
        </ExampleCardContainer>
        <ExampleCardContainer exampleTitle="Static maps">
          <ExampleCard
            exampleTitle="Download a static map"
            exampleDescription="Use Mapbox Java Services to build a URL and download a static map image"
            difficulty="intro"
            exampleImgID="examplesStaticImage"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/javaservices/StaticImageActivity.java"
          />
        </ExampleCardContainer>
        <ExampleCardContainer exampleTitle="Optimization">
          <ExampleCard
            exampleTitle="Optimization"
            exampleDescription="Use the Optimization API to retrieve the fastest route between 2 to 12 locations."
            difficulty="intro"
            exampleImgID="examplesOptimization"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/javaservices/OptimizationActivity.java"
          />
        </ExampleCardContainer>
        <ExampleCardContainer exampleTitle="Matrix">
          <ExampleCard
            exampleTitle="Get a travel time matrix"
            exampleDescription="Calculate travel times between many points."
            difficulty="intro"
            exampleImgID="examplesMatrix"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/javaservices/MatrixApiActivity.java"
          />
        </ExampleCardContainer>
      </PageShell>
    );
  }
};

MapSdkExamplesLayout = withLocation(MapSdkExamplesLayout);
export default MapSdkExamplesLayout;
