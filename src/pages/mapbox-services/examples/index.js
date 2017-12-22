/*---
title: 'Android Mapbox Services Examples'
description: 'Android Mapbox Services SDK examples'
sideNavSections:
  - title: "Routing"
  - title: "Geocoding"
  - title: "Static Maps"
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
        <ExampleCardContainer exampleTitle="Routing">
          <ExampleCard
            exampleTitle="Show directions on a map"
            exampleDescription="Use Mapbox Services to request directions"
            difficulty="intro"
            exampleImgID="examplesDirection"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/mas/DirectionsActivity.java"
          />
          <ExampleCard
            exampleTitle="Map Matching"
            exampleDescription="Match raw GPS points to the map so they align with the roads/pathways."
            difficulty="intro"
            exampleImgID="examplesMapMatching"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/mas/MapMatchingActivity.java"
          />
          <ExampleCard
            exampleTitle="Simplify a polyline"
            exampleDescription="Using the polylines utility, simplify a polyline which reduces the amount of coordinates making up the polyline depending on tolerance."
            difficulty="intro"
            exampleImgID="examplesSimplifyLine"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/mas/SimplifyPolylineActivity.java"
          />
        </ExampleCardContainer>
        <ExampleCardContainer exampleTitle="Geocoding">
          <ExampleCard
            exampleTitle="Geocoding Auto Complete Widget"
            exampleDescription="Use the provided geocoding auto complete widget to convert location text into geographic coordinates."
            difficulty="intro"
            exampleImgID="examplesGeocodingAutoComplete"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/mas/DirectionsActivity.java"
          />
        </ExampleCardContainer>
        <ExampleCardContainer exampleTitle="Static Maps">
          <ExampleCard
            exampleTitle="Download a static map"
            exampleDescription="Use Mapbox Android Services to build a url and download a static map"
            difficulty="intro"
            exampleImgID="examplesStaticImage"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/mas/DirectionsActivity.java"
          />
        </ExampleCardContainer>
      </PageShell>
    );
  }
};

MapSdkExamplesLayout = withLocation(MapSdkExamplesLayout);
export default MapSdkExamplesLayout;
