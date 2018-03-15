/*---
title: 'Android Plugin Examples'
description: 'Working code examples of Mapbox's Android Plugins'
sideNavSections:
  - title: "Traffic"
  - title: "Location Layer"
  - title: "Building"
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
        <ExampleCardContainer exampleTitle="Traffic">
          <ExampleCard
            exampleTitle="Show real-time traffic on a map"
            exampleDescription="Toggle the Mapbox Traffic plugin to display real-time traffic data on top of your map."
            difficulty="intro"
            exampleImgID="examplesTrafficPlugin"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/plugins/TrafficPluginActivity.java"
          />
        </ExampleCardContainer>
        <ExampleCardContainer exampleTitle="Location Layer">
          <ExampleCard
            exampleTitle="Location tracking"
            exampleDescription="Example showing how to setup the location layer plugin to indicate the users current location on the map."
            difficulty="intro"
            exampleImgID="examplesLocationLayer"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/plugins/LocationPluginActivity.java"
          />
        </ExampleCardContainer>
        <ExampleCardContainer exampleTitle="Building">
          <ExampleCard
            exampleTitle="Display 3D buildings on any map style"
            exampleDescription="Plugin allows you to toggle building layer on and off and can be used with any style."
            difficulty="intro"
            exampleImgID="examplesBuilding"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/plugins/BuildingPluginActivity.java"
          />
        </ExampleCardContainer>
      </PageShell>
    );
  }
};

MapSdkExamplesLayout = withLocation(MapSdkExamplesLayout);
export default MapSdkExamplesLayout;
