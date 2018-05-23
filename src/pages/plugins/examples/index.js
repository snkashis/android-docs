/*---
title: 'Mapbox Plugins for Android'
description: 'Working code examples of Mapbox Plugins for Android'
sideNavSections:
  - title: "Traffic"
  - title: "Location Layer"
  - title: "Building"  
  - title: "Localization"  
  - title: "Places"
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
            exampleDescription="Toggle building layer on and off and can be used with any style."
            difficulty="intro"
            exampleImgID="examplesBuilding"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/plugins/BuildingPluginActivity.java"
          />
        </ExampleCardContainer>
        <ExampleCardContainer exampleTitle="Localization">
          <ExampleCard
            exampleTitle="Change map text to device language"
            exampleDescription="Automatically change map label text to the language set on the device"
            difficulty="intro"
            exampleImgID="examplesLocalization"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/plugins/LocalizationPluginActivity.java"
          />
        </ExampleCardContainer>
        <ExampleCardContainer exampleTitle="Places">
          <ExampleCard
            exampleTitle="Global location search"
            exampleDescription="Add geocoding search functionality and UI for finding any region, country, place, or address in the world."
            difficulty="intro"
            exampleImgID="examplesPlaces"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/plugins/PlacesPluginActivity.java"
          />
        </ExampleCardContainer>
      </PageShell>
    );
  }
};

MapSdkExamplesLayout = withLocation(MapSdkExamplesLayout);
export default MapSdkExamplesLayout;
