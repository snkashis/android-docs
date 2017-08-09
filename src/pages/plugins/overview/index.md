---
title: "Mapbox Plugins"
description: "Mapbox Android plugins overview"
sideNavSections:
  - title: "Overview"
  - title: "Install a plugin"
  - title: "Selectively compiling plugins"
overviewHeaderProps:
  imageId: overviewPlugins
  sdk: Mapbox Plugins
  ghLink: "https://github.com/mapbox/mapbox-plugins-android"
  sdkFeatures:
    - Traffic on any style
    - Location layer
    - Show user orientation
    - Navigation puck
    - 3D Buildings
  newFeature:
    - false
    - true
    - true
    - true
    - true
prependJs:
  - |
    import {
      TRAFFIC_PLUGIN_VERSION,
      LOCATION_LAYER_PLUGIN_VERSION,
      BUILDING_PLUGIN_VERSION
    } from '../../../constants';
---

### Overview

Mapbox Plugins build on top of the [Map SDK](/android-docs/map-sdk/overview/getting-started/) providing extra features in lightweight dependencies. Whether you're looking to include traffic on top of your map or show the user location as a layer, plugins offer customizable APIs with a few lines of code to get started. Separating features into different plugins also allows for a more aggressive updating timeline.

### Install a plugin

By using a plugin, you also include the Android Map SDK which means that you'll need to setup your project to use the Map SDK if you haven't already. Head over to the [Map SDK Getting Started](/android-docs/map-sdk/overview/getting-started/) documentation to learn more. The example below shows how to install the Traffic Plugin, but the process is identical for other plugins.

Note that depending on the plugin you add, there might be required permissions and additional setup steps. You'll find more information on whether or not more configuration steps are involved when looking at the specific plugin documentation.

#### 1. Add the dependency

1. Start Android Studio
2. Open up your application's `build.gradle`
3. Make sure that your project's `minSdkVersion` is at API 15 or higher
4. Under dependencies, add a new build rule for the latest plugin version you are trying to use.
5. Click the Sync Project with Gradle Files near the toolbar in Studio.

```groovy
repositories {
  mavenCentral()
}

dependencies {
  compile 'com.mapbox.mapboxsdk:mapbox-android-plugin-traffic:{{ TRAFFIC_PLUGIN_VERSION }}'
}
```

### Selectively compiling plugins

Plugins give you the flexibility to only include the features your particular application requires, meaning you can selectively choose which specific APIs your application needs. For example, if you only want to display a traffic layer inside your app you only need to include the Traffic Plugin dependency in your project.

The list below shows all the current separated dependencies you can use in your Android application.

```groovy
compile 'com.mapbox.mapboxsdk:mapbox-android-plugin-traffic:{{ TRAFFIC_PLUGIN_VERSION }}'
compile 'com.mapbox.mapboxsdk:mapbox-android-plugin-locationlayer:{{ LOCATION_LAYER_PLUGIN_VERSION }}'
compile 'com.mapbox.mapboxsdk:mapbox-android-plugin-building:{{ BUILDING_PLUGIN_VERSION }}'
```
