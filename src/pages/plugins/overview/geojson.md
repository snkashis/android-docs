---
title: "GeoJSON"
description: "The Mapbox Android GeoJSON Plugin loads GeoJSON data into your project from a URL, an asset file, or path to quickly display data on your Mapbox map."
sideNavSections:
  - title: "Install the GeoJSON Plugin"
  - title: "Using the GeoJSON plugin"
  - title: "Marker click event"
  - title: "Load listeners"
prependJs:
  - |
    import {
      GEOJSON_PLUGIN_VERSION
    } from '../../../constants';
---

# GeoJSON plugin
GeoJSON is a JSON standard format for describing a wide variety of geographic data structures such as points, lines, or areas. [Click here to read more GeoJSON information](https://en.wikipedia.org/wiki/GeoJSON).

The Mapbox Android GeoJSON plugin makes it simple for you to load GeoJSON data into your project from a URL, an asset file, or path. The plugin also automatically draws the GeoJSON data on your map once the information is retrieved.

## Install the GeoJSON Plugin
To start developing an application using the GeoJSON Plugin, you'll need to add the appropriate dependencies inside your `build.gradle` file. This dependency includes the Maps SDK for Android. All dependencies given below can be found on MavenCentral.

If your application is close or exceeds the 65k method count limit, you can mitigate this problem by enabling ProGuard inside your application. ProGuard directives are included in the Android dependencies to preserve the required classes.

### Add the dependency

1. Start Android Studio.
2. Open up your application's `build.gradle`.
3. Make sure that your project's `minSdkVersion` is API 15 or higher.
4. Under dependencies, add a new build rule for the latest `mapbox-android-plugin-geojson`.
5. Click the Sync Project with Gradle Files near the toolbar in Studio.

```groovy
repositories {
  mavenCentral()
}

dependencies {
  implementation 'com.mapbox.mapboxsdk:mapbox-android-plugin-geojson:{{ GEOJSON_PLUGIN_VERSION }}'
}
```


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
