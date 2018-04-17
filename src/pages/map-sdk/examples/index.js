/*---
title: 'Android Map SDK Examples'
description: 'View various examples to see the power of the Mapbox Maps SDK for Android.'
sideNavSections:
  - title: "Getting Started"
  - title: "Styling Map"
  - title: "Map Camera"
  - title: "Annotations"
  - title: "3D Extrusions"
  - title: "Data Driven Styling"
  - title: "Offline"
  - title: "Query Map"
  - title: "Gestures"
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
        <ExampleCardContainer exampleTitle="Getting Started">
          <ExampleCard
            exampleTitle="Simple map view"
            exampleDescription="Learn how to quickly display a Mapbox Street map in your app."
            difficulty="intro"
            exampleImgID="examplesGettingStartedSimpleMap"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/basics/SimpleMapViewActivity.java"
          />
          <ExampleCard
            exampleTitle="Support map fragment"
            exampleDescription="Include a map fragment within your app using Android support library."
            difficulty="intro"
            exampleImgID="examplesGettingStartedSupportFragment"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/basics/SupportMapFragmentActivity.java"
          />
          <ExampleCard
            exampleTitle="Dynamically build a map view"
            exampleDescription="Add a mapview in a dynamically created layout."
            difficulty="intro"
            exampleImgID="examplesGettingStartedDynamicallyAddMap"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/basics/MapboxMapOptionActivity.java"
          />
        </ExampleCardContainer>
        <ExampleCardContainer exampleTitle="Styling Map">
          <ExampleCard
            exampleTitle="Mapbox Studio style"
            exampleDescription="Use a custom Mapbox-hosted style."
            difficulty="intro"
            exampleImgID="examplesStyleMapStudioStyle"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/styles/MapboxStudioStyleActivity.java"
          />
          <ExampleCard
            exampleTitle={"Change a map's language"}
            exampleDescription="Switch the map's language dynamically."
            difficulty="intermediate"
            exampleImgID="examplesStyleMapChangeMapLanguage"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/styles/LanguageSwitchActivity.java"
          />
          <ExampleCard
            exampleTitle="Local style source"
            exampleDescription="Example loads the map style via a locally stored style JSON file or custom raster style."
            difficulty="intro"
            exampleImgID="examplesStyleMapCustomRaster"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/styles/LocalStyleSourceActivity.java"
          />
          <ExampleCard
            exampleTitle="Default styles"
            exampleDescription="Use a variety of professionally designed styles with the Map SDK."
            difficulty="intro"
            exampleImgID="examplesStyleMapDefaultStyle"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/styles/DefaultStyleActivity.java"
          />
          <ExampleCard
            exampleTitle="Show and hide layers"
            exampleDescription="Create a custom layer switcher to display different datasets."
            difficulty="intermediate"
            exampleImgID="examplesStyleMapShowHideLayer"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/styles/ShowHideLayersActivity.java"
          />
          <ExampleCard
            exampleTitle={"Change a layer's color"}
            exampleDescription={
              "Using layer set to change a layer's fill color."
            }
            difficulty="intermediate"
            exampleImgID="examplesStyleMapCustomColors"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/styles/ColorSwitcherActivity.java"
          />
          <ExampleCard
            exampleTitle={'Create a line layer'}
            exampleDescription={
              'Create a GeoJSON line source, style it using properties, and add the layer to the map.'
            }
            difficulty="intro"
            exampleImgID="examplesStyleLineLayer"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/eadaf3a81c01f1390753dbe24b560f77d117ec27/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/styles/LineLayerActivity.java"
          />
          <ExampleCard
            exampleTitle={"Adjust a layer's opacity"}
            exampleDescription="Drag the seek bar to adjust the opacity of a raster layer on top of a map."
            difficulty="intermediate"
            exampleImgID="examplesStyleMapLayerOpacity"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/styles/AdjustLayerOpacityActivity.java"
          />
          <ExampleCard
            exampleTitle="Add a new layer below labels"
            exampleDescription="Using the second argument of addLayerBelow, you can be more precise where your layer ends up in the map stack."
            difficulty="intermediate"
            exampleImgID="examplesStyleMapGeojsonLayer"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/styles/GeojsonLayerInStackActivity.java"
          />
          <ExampleCard
            exampleTitle="Add a vector tile source"
            exampleDescription="Add a vector source to a map and display it as a layer."
            difficulty="intermediate"
            exampleImgID="examplesStyleMapVectoLayer"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/styles/VectorSourceActivity.java"
          />
          <ExampleCard
            exampleTitle="Add a WMS source"
            exampleDescription="Adding an external Web Map Service layer to the map."
            difficulty="intermediate"
            exampleImgID="examplesStyleMapWmsMap"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/styles/AddWmsSourceActivity.java"
          />
          <ExampleCard
            exampleTitle="Create and style data clusters"
            exampleDescription="Use GeoJSON to visualize point data in clusters."
            difficulty="advanced"
            exampleImgID="examplesStyleMapClustering"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/styles/GeoJsonClusteringActivity.java"
          />
          <ExampleCard
            exampleTitle="Marker symbol layer"
            exampleDescription="Display markers on the map by adding a symbol layer."
            difficulty="advanced"
            exampleImgID="examplesStyleMapSymbolLayer"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/styles/BasicSymbolLayerActivity.java"
          />
        </ExampleCardContainer>
        <ExampleCardContainer exampleTitle="Map Camera">
          <ExampleCard
            exampleTitle="Animate the map camera"
            exampleDescription={
              "Animate the map's camera position, tilt, bearing, and zoom."
            }
            difficulty="intro"
            exampleImgID="examplesCameraAnimatedCamera"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/camera/AnimateMapCameraActivity.java"
          />
          <ExampleCard
            exampleTitle="Fit camera in bounding box"
            exampleDescription="Position the camera so that all the given markers are in view."
            difficulty="intro"
            exampleImgID="examplesCameraCameraBbox"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/camera/BoundingBoxCameraActivity.java"
          />
          <ExampleCard
            exampleTitle="Restrict map panning"
            exampleDescription="Prevent a map from being panned to a different place."
            difficulty="intermediate"
            exampleImgID="examplesCameraRestrictPanning"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/eadaf3a81c01f1390753dbe24b560f77d117ec27/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/camera/RestrictCameraActivity.java"
          />
        </ExampleCardContainer>
        <ExampleCardContainer exampleTitle="Annotations">
          <ExampleCard
            exampleTitle="Draw a marker"
            exampleDescription={'Create a default marker with an InfoWindow.'}
            difficulty="intro"
            exampleImgID="examplesAnnotationsDrawMarker"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/annotations/DrawMarkerActivity.java"
          />
          <ExampleCard
            exampleTitle="Animate marker position"
            exampleDescription="Animate the marker to a new position on the map."
            difficulty="intermediate"
            exampleImgID="examplesAnnotationsAnimatedMarker"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/annotations/AnimatedMarkerActivity.java"
          />
          <ExampleCard
            exampleTitle="Draw a custom marker icon"
            exampleDescription="Create a marker with a custom icon using the Map SDK."
            difficulty="intro"
            exampleImgID="examplesAnnotationsCustomIcon"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/annotations/DrawCustomMarkerActivity.java"
          />
          <ExampleCard
            exampleTitle="Draw a GeoJSON line"
            exampleDescription="Draw a polyline by parsing a GeoJSON file with the Map SDK."
            difficulty="intermediate"
            exampleImgID="examplesAnnotationsPolyline"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/annotations/DrawGeojsonLineActivity.java"
          />
          <ExampleCard
            exampleTitle="Draw a polygon"
            exampleDescription="Draw a vector polygon on a map with the Map SDK."
            difficulty="intro"
            exampleImgID="examplesAnnotationsPolygon"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/annotations/DrawPolygonActivity.java"
          />
          <ExampleCard
            exampleTitle="Draw a marker view"
            exampleDescription="Attach a view to a given position on the map."
            difficulty="intro"
            exampleImgID="examplesAnnotationsMarkerView"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/annotations/BasicMarkerViewActivity.java"
          />
          <ExampleCard
            exampleTitle="Draw a polygon with holes"
            exampleDescription="Draw a vector polygon with holes on a map using the Map SDK."
            difficulty="intermediate"
            exampleImgID="examplesAnnotationsPolygonWithHoles"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/annotations/PolygonHolesActivity.java"
          />
        </ExampleCardContainer>
        <ExampleCardContainer exampleTitle="3D Extrusions">
          <ExampleCard
            exampleTitle="Display 3D building height based on vector data"
            exampleDescription={
              'Use imported vector data to set the height of 3D building extrusions'
            }
            difficulty="intermediate"
            exampleImgID="examples3dExtrusionsPopulationExtrusions"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/extrusions/PopulationDensityExtrusionActivity.java"
          />
          <ExampleCard
            exampleTitle="Use GeoJSON data to set extrusion height"
            exampleDescription={
              "Use data-driven styling and GeoJSON data to set extrusions' heights"
            }
            difficulty="intermediate"
            exampleImgID="examples3dExtrusionsGeojsonExtrusions"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/5937a1c4cb677f2056deb9170792e169a85b4fa0/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/extrusions/MarathonExtrusionActivity.java"
          />
          <ExampleCard
            exampleTitle="Adjust light location and color"
            exampleDescription={
              "Change the location and color of the light that's shined on extrusions"
            }
            difficulty="intermediate"
            exampleImgID="examples3dExtrusionsExtrusionLight"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/extrusions/AdjustExtrusionLightActivity.java"
          />
          <ExampleCard
            exampleTitle="Extrude polygons for 3D indoor mapping"
            exampleDescription={
              'Create a 3D indoor map with the full-extrude-height paint property'
            }
            difficulty="advanced"
            exampleImgID="examples3dExtrusionsIndoorMapping"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/eadaf3a81c01f1390753dbe24b560f77d117ec27/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/extrusions/Indoor3DMapActivity.java"
          />
          <ExampleCard
            exampleTitle="Adjust light location and color"
            exampleDescription={
              "Change the location and color of the light that's shined on extrusions"
            }
            difficulty="intermediate"
            exampleImgID="examples3dExtrusionsDeviceFeedback"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/1a035aebf0299b506c03bad0cb09dd32a3bf5ec7/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/extrusions/RotationExtrusionActivity.java"
          />
        </ExampleCardContainer>
        <ExampleCardContainer exampleTitle="Data Driven Styling">
          <ExampleCard
            exampleTitle="Style circles categorically"
            exampleDescription={
              'Using a categorical circle-color property function for a visualization.'
            }
            difficulty="intermediate"
            exampleImgID="examplesDdsCategoricallyDds"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/dds/StyleCirclesCategoricallyActivity.java"
          />
          <ExampleCard
            exampleTitle="Update by zoom level"
            exampleDescription={
              'Display state or county population depending on zoom level.'
            }
            difficulty="intermediate"
            exampleImgID="examplesDdsPopulationZoom"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/dds/ChoroplethZoomChangeActivity.java"
          />
          <ExampleCard
            exampleTitle="Color dependent on zoom level"
            exampleDescription={
              'Make a property depend on the map zoom level, in this case, the water layers fill color.'
            }
            difficulty="intermediate"
            exampleImgID="examplesDdsColorZoom"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/styles/ZoomDependentFillColorActivity.java"
          />
          <ExampleCard
            exampleTitle="Style lines using an identity property function"
            exampleDescription={
              'Using an identity line-color property function for a visualization.'
            }
            difficulty="intro"
            exampleImgID="examplesDdsLinePropertyStyling"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/eadaf3a81c01f1390753dbe24b560f77d117ec27/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/dds/StyleLineIdentityPropertyActivity.java"
          />
          <ExampleCard
            exampleTitle="Join local JSON data with vector tile geometries"
            exampleDescription={
              'Style a choropleth map by merging local JSON data with vector tile geometries.'
            }
            difficulty="advanced"
            exampleImgID="examplesDdsJSONVectorMerge"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/eadaf3a81c01f1390753dbe24b560f77d117ec27/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/dds/ChoroplethJsonVectorMixActivity.java"
          />
          <ExampleCard
            exampleTitle="Data time lapse"
            exampleDescription={
              'Use data-driven styling to visualize point data with a time lapse effect; rainfall in China in this example.'
            }
            difficulty="advanced"
            exampleImgID="examplesDdsDataTimeLapse"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/5bd275476e8c9b70e09aa71f7ced955a33f8fe61/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/dds/AddRainFallStyleActivity.java"
          />
          <ExampleCard
            exampleTitle="Create hotspots from points"
            exampleDescription="Use the Maps SDK to visualize point data as hotspots."
            difficulty="advanced"
            exampleImgID="examplesStyleMapHotspotsRuntime"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/dds/CreateHotspotsActivity.java"
          />
        </ExampleCardContainer>
        <ExampleCardContainer exampleTitle="Offline">
          <ExampleCard
            exampleTitle="A simple offline map"
            exampleDescription={
              'Download and view an offline map using the Maps SDK.'
            }
            difficulty="intermediate"
            exampleImgID="examplesOfflineSimpleOffline"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/offline/SimpleOfflineMapActivity.java"
          />
          <ExampleCard
            exampleTitle="Offline Manager"
            exampleDescription={
              'Download, view, navigate to, and delete an offline region.'
            }
            difficulty="intermediate"
            exampleImgID="examplesOfflineOfflineManager"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/offline/OfflineManagerActivity.java"
          />
        </ExampleCardContainer>
        <ExampleCardContainer exampleTitle="Query Map">
          <ExampleCard
            exampleTitle="Select a building"
            exampleDescription={
              'Use the query feature to select a building, get its geometry and draw a polygon highlighting it.'
            }
            difficulty="intermediate"
            exampleImgID="examplesQuerySelectBuilding"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/query/SelectBuildingActivity.java"
          />
          <ExampleCard
            exampleTitle="Feature count"
            exampleDescription={
              'Get the feature count inside a bounding box and highlight all the  buidings.'
            }
            difficulty="intermediate"
            exampleImgID="examplesQueryFeatureCount"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/query/FeatureCountActivity.java"
          />
          <ExampleCard
            exampleTitle="Click on a single layer"
            exampleDescription={
              'Click on and highlight a selected a GeoJSON polygon'
            }
            difficulty="intermediate"
            exampleImgID="examplesQuerySingleLayerClick"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/112c80a2816c512e5ea7c0459fcf28f96e4fc811/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/query/ClickOnLayerActivity.java"
          />
          <ExampleCard
            exampleTitle="Query a map feature"
            exampleDescription={
              'Click the map to add a marker at the location and display the maps property information for this feature.'
            }
            difficulty="intermediate"
            exampleImgID="examplesQueryQueryMap"
            exampleUrl="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/query/QueryFeatureActivity.java"
          />
        </ExampleCardContainer>
      </PageShell>
    );
  }
};

MapSdkExamplesLayout = withLocation(MapSdkExamplesLayout);
export default MapSdkExamplesLayout;
