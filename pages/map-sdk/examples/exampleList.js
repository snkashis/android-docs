import React from 'react';
import {ExampleCard} from '../../../src/components/example_card';

/* Basic examples */
export const gettingStarted = [
  <ExampleCard
  exampleTitle={'Simple map view'}
  exampleDescription={'Learn how to quickly display a Mapbox Street map in your app.'}
  difficulty={'intro'}
  exampleImg={'../../../assets/imgs/map-sdk/examples/getting-started/simple-map.png'}
  exampleUrl={'https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/basics/SimpleMapViewActivity.java'}/>,
  <ExampleCard
  exampleTitle={'Support map fragment'}
  exampleDescription={'Include a map fragment within your app using Android support library.'}
  difficulty={'intro'}
  exampleImg={'../../../assets/imgs/map-sdk/examples/getting-started/support-fragment.png'}
  exampleUrl={'https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/basics/SupportMapFragmentActivity.java'}/>,
  <ExampleCard
  exampleTitle={'Dynamically build a map view'}
  exampleDescription={'Add a mapview in a dynamically created layout.'}
  difficulty={'intro'}
  exampleImg={'../../../assets/imgs/map-sdk/examples/getting-started/dynamically-add-map.png'}
  exampleUrl={'https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/basics/MapboxMapOptionActivity.java'}/>
]

/* Style examples */
export const styleMap = [
  <ExampleCard
  exampleTitle={'Mapbox Studio style'}
  exampleDescription={'Use a custom Mapbox-hosted style.'}
  difficulty={'intro'}
  exampleImg={'../../../assets/imgs/map-sdk/examples/style-map/studio-style.png'}
  exampleUrl={'https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/styles/MapboxStudioStyleActivity.java'}/>,
  <ExampleCard
  exampleTitle={'Create a heatmap from points'}
  exampleDescription={'Use the Map SDK to visualize point data as a heatmap.'}
  difficulty={'advanced'}
  exampleImg={'../../../assets/imgs/map-sdk/examples/style-map/heatmap-runtime.png'}
  exampleUrl={'https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/styles/CreateHeatmapPointsActivity.java'}/>,
  <ExampleCard
  exampleTitle={"Change a map's language"}
  exampleDescription={'Switch the maps language dynamically.'}
  difficulty={'intermediate'}
  exampleImg={'../../../assets/imgs/map-sdk/examples/style-map/change-map-language.png'}
  exampleUrl={'https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/styles/LanguageSwitchActivity.java'}/>,
  <ExampleCard
  exampleTitle={'Custom raster style'}
  exampleDescription={'Use legacy raster tiles in your app.'}
  difficulty={'intro'}
  exampleImg={'../../../assets/imgs/map-sdk/examples/style-map/custom-raster.png'}
  exampleUrl={'https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/styles/CustomRasterStyleActivity.java'}/>,
  <ExampleCard
  exampleTitle={'Default styles'}
  exampleDescription={'Use a variety of professionally designed styles with the Map SDK.'}
  difficulty={'intro'}
  exampleImg={'../../../assets/imgs/map-sdk/examples/style-map/default-style.png'}
  exampleUrl={'https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/styles/DefaultStyleActivity.java'}/>,
  <ExampleCard
  exampleTitle={'Show and hide layers'}
  exampleDescription={'Create a custom layer switcher to display different datasets.'}
  difficulty={'intermediate'}
  exampleImg={'../../../assets/imgs/map-sdk/examples/style-map/show-hide-layer.png'}
  exampleUrl={'https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/styles/ShowHideLayersActivity.java'}/>,
  <ExampleCard
  exampleTitle={"Change a layer's color"}
  exampleDescription={"Using layer set to change a layer's fill color."}
  difficulty={'intermediate'}
  exampleImg={'../../../assets/imgs/map-sdk/examples/style-map/custom-colors.png'}
  exampleUrl={'https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/styles/ColorSwitcherActivity.java'}/>,
  <ExampleCard
  exampleTitle={"Adjust a layer's opacity"}
  exampleDescription={'Drag the seek bar to adjust the opacity of a raster layer on top of a map.'}
  difficulty={'intermediate'}
  exampleImg={'../../../assets/imgs/map-sdk/examples/style-map/layer-opacity.png'}
  exampleUrl={'https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/styles/AdjustLayerOpacityActivity.java'}/>,
  <ExampleCard
  exampleTitle={'Add a new layer below labels'}
  exampleDescription={'Using the second argument of addLayerBelow, you can be more precise where your layer ends up in the map stack.'}
  difficulty={'intermediate'}
  exampleImg={'../../../assets/imgs/map-sdk/examples/style-map/geojson-layer.png'}
  exampleUrl={'https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/styles/GeojsonLayerInStackActivity.java'}/>,
  <ExampleCard
  exampleTitle={'Add a vector tile source'}
  exampleDescription={'Add a vector source to a map and display it as a layer.'}
  difficulty={'intermediate'}
  exampleImg={'../../../assets/imgs/map-sdk/examples/style-map/vector-layer.png'}
  exampleUrl={'https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/styles/VectorSourceActivity.java'}/>,
  <ExampleCard
  exampleTitle={'Add a WMS source'}
  exampleDescription={'Adding an external Web Map Service layer to the map.'}
  difficulty={'intermediate'}
  exampleImg={'../../../assets/imgs/map-sdk/examples/style-map/wms-map.png'}
  exampleUrl={'https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/styles/AddWmsSourceActivity.java'}/>,
  <ExampleCard
  exampleTitle={'Create and style data clusters'}
  exampleDescription={'Use GeoJSON to visualize point data in clusters.'}
  difficulty={'advanced'}
  exampleImg={'../../../assets/imgs/map-sdk/examples/style-map/clustering.png'}
  exampleUrl={'https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/styles/GeoJsonClusteringActivity.java'}/>,
  <ExampleCard
  exampleTitle={'Marker symbol layer'}
  exampleDescription={'Display markers on the map by adding a symbol layer.'}
  difficulty={'advanced'}
  exampleImg={'../../../assets/imgs/map-sdk/examples/style-map/symbol-layer.png'}
  exampleUrl={'https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/styles/SymbolLayerActivity.java'}/>,
]

export const camera = [
  <ExampleCard
  exampleTitle={'Animate the map camera'}
  exampleDescription={"Animate the map's camera position, tilt, bearing, and zoom."}
  difficulty={'intro'}
  exampleImg={'../../../assets/imgs/map-sdk/examples/camera/animated-camera.gif'}
  exampleUrl={'https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/camera/AnimateMapCameraActivity.java'}/>,
  <ExampleCard
  exampleTitle={'Fit camera in bounding box'}
  exampleDescription={'Position the camera so that all the given markers are in view.'}
  difficulty={'intro'}
  exampleImg={'../../../assets/imgs/map-sdk/examples/camera/camera-bbox.gif'}
  exampleUrl={'https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/camera/BoundingBoxCameraActivity.java'}/>,
]

export const annotations = [
  <ExampleCard
  exampleTitle={'Draw a marker'}
  exampleDescription={"Create a default marker with an InfoWindow."}
  difficulty={'intro'}
  exampleImg={'../../../assets/imgs/map-sdk/examples/annotations/draw-marker.png'}
  exampleUrl={'https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/annotations/DrawMarkerActivity.java'}/>,
  <ExampleCard
  exampleTitle={'Custom info window'}
  exampleDescription={'Use an info window adapter to customize the info window.'}
  difficulty={'intro'}
  exampleImg={'../../../assets/imgs/map-sdk/examples/annotations/custom-info-window.png'}
  exampleUrl={'https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/annotations/CustomInfoWindowActivity.java'}/>,
  <ExampleCard
  exampleTitle={'Animate marker position'}
  exampleDescription={'Animate the marker to a new position on the map.'}
  difficulty={'intermediate'}
  exampleImg={'../../../assets/imgs/map-sdk/examples/annotations/animated-marker.gif'}
  exampleUrl={'https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/annotations/AnimatedMarkerActivity.java'}/>,
  <ExampleCard
  exampleTitle={'Draw a custom marker icon'}
  exampleDescription={'Create a marker with a custom icon using the Map SDK.'}
  difficulty={'intro'}
  exampleImg={'../../../assets/imgs/map-sdk/examples/annotations/custom-icon.png'}
  exampleUrl={'https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/annotations/DrawCustomMarkerActivity.java'}/>,
  <ExampleCard
  exampleTitle={'Draw a GeoJSON line'}
  exampleDescription={'Draw a polyline by parsing a GeoJSON file with the Map SDK.'}
  difficulty={'intermediate'}
  exampleImg={'../../../assets/imgs/map-sdk/examples/annotations/polyline.png'}
  exampleUrl={'https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/annotations/DrawGeojsonLineActivity.java'}/>,
  <ExampleCard
  exampleTitle={'Draw a polygon'}
  exampleDescription={'Draw a vector polygon on a map with the Map SDK.'}
  difficulty={'intro'}
  exampleImg={'../../../assets/imgs/map-sdk/examples/annotations/polygon.png'}
  exampleUrl={'https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/annotations/DrawPolygonActivity.java'}/>,
  <ExampleCard
  exampleTitle={'Draw a marker view'}
  exampleDescription={'Attach a view to a given position on the map.'}
  difficulty={'intro'}
  exampleImg={'../../../assets/imgs/map-sdk/examples/annotations/marker-view.png'}
  exampleUrl={'https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/annotations/BasicMarkerViewActivity.java'}/>,
  <ExampleCard
  exampleTitle={'Draw a polygon with holes'}
  exampleDescription={'Draw a vector polygon with holes on a map using the Map SDK.'}
  difficulty={'intermediate'}
  exampleImg={'../../../assets/imgs/map-sdk/examples/annotations/polygon-with-holes.png'}
  exampleUrl={'https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/annotations/PolygonHolesActivity.java'}/>,
]

export const extrusions = [
  <ExampleCard
  exampleTitle={'3D buildings'}
  exampleDescription={"Use extrusions to display builds' height in 3D"}
  difficulty={'intermediate'}
  exampleImg={'../../../assets/imgs/map-sdk/examples/3d-extrusions/3d-builds.png'}
  exampleUrl={'https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/styles/BasicExtrusionActivity.java'}/>,
]

export const dds = [
  <ExampleCard
  exampleTitle={'Style circles categorically'}
  exampleDescription={"Using a categorical circle-color property function for a visualization."}
  difficulty={'intermediate'}
  exampleImg={'../../../assets/imgs/map-sdk/examples/dds/categorically-dds.png'}
  exampleUrl={'https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/dds/ChoroplethZoomChangeActivity.java'}/>,
  <ExampleCard
  exampleTitle={'Update by zoom level'}
  exampleDescription={"Display state or county population depending on zoom level."}
  difficulty={'intermediate'}
  exampleImg={'../../../assets/imgs/map-sdk/examples/dds/population-zoom.gif'}
  exampleUrl={'https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/dds/StyleCirclesCategoricallyActivity.java'}/>,
  <ExampleCard
  exampleTitle={'Color dependent on zoom level'}
  exampleDescription={"Make a property depend on the map zoom level, in this case, the water layers fill color."}
  difficulty={'intermediate'}
  exampleImg={'../../../assets/imgs/map-sdk/examples/dds/color-zoom.gif'}
  exampleUrl={'https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/styles/ZoomDependentFillColorActivity.java'}/>,
]
