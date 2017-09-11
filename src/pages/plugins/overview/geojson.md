---
title: "GeoJSON"
description: "Mapbox Android GeoJSON Plugin"
sideNavSections:
  - title: "Using the GeoJSON plugin"
  - title: "Marker click event"
  - title: "Load listeners"
---

# GeoJSON plugin

GeoJSON is a JSON standard format for describing a wide variety of geographic data structures such as points, lines, or areas. [Click here to read more GeoJSON information](https://en.wikipedia.org/wiki/GeoJSON).

The Mapbox Android GeoJSON plugin makes it simple for you to load GeoJSON data into your project from a URL, an asset file, or path. The plugin also automatically draws the GeoJSON data on your map once the information is retrieved. 

To install the plugin, head over to the [Mapbox Plugin Overview](/android-docs/plugins/overview/) page which will walk you through adding the dependency.


## Using the GeoJSON plugin

The GeoJSON plugin does not have any direct initialization, but rather, is set up via the `GeoJsonPluginBuilder` class.


```java
 geoJsonPlugin = new GeoJsonPluginBuilder()
      .withContext(this)
      .withMap(mapboxMap)
      .withOnLoadingURL(this)
      .withOnLoadingFileAssets(this)
      .withOnLoadingFilePath(this)
      .withMarkerClickListener(this)
      .withRandomFillColor()
      .build();
```


## Marker click event

A `OnMarkerEventListener` interface is included in the plugin. Implementing the interface and overriding the `onMarkerClickListener()` method in your activity/fragment enables you to easily do what you would like with the selected marker and the GeoJSON feature (a JSONObject) associated with the marker.

```java
 @Override
  public void onMarkerClickListener(Marker marker, JSONObject properties) {
  // Run whatever code that you'd like
  }
```

Once the `geoJsonPlugin` object has been built, you have three methods to choose from for retrieving the GeoJSON file

| Method | Description |
| --- | --- |
| `setUrl` | Retrieves the GeoJSON file hosted at a particular URL |
| `setAssetsName` | Retrieves the GeoJSON file which is located in your app's `assets` folder |
| `setFilePath` | Allows the user to navigate the device's file structure in a Android dialog to find the GeoJSON file |


## Load listeners

The other plugin interface that you should know about, `OnLoadingGeoJsonListener`, has three methods for you to have fine-grain control over UI and data interaction.

| Method | Description |
| --- | --- |
| `onPreLoading` | Callback will be triggered just before the GeoJSON file begins loading |
| `onLoaded` | Callback will be triggered when the GeoJSON file has been successfully loaded |
| `onLoadFailed` | Callback will be triggered when loading the GeoJSON file has failed |
