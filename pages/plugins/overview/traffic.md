---
title: Traffic Plugin
path: /plugins/overview/traffic/
---
# Traffic Plugin
The Mapbox Traffic Plugin adds a real-time traffic layer to any Mapbox base map. If you want to display a traffic layer inside your application, you only need to include this plugin dependency in your project.

### Install the Traffic Plugin
By using the Traffic Plugin, you are also including the Android Map SDK which means that you'll need to setup your project by also following the steps in the [overview documentation]().

#### 1. Add the dependency

1. Start Android Studio
2. Open up your application's `build.gradle`
3. Make sure that your project's `minSdkVersion` is at API 15 or higher
4. Under dependencies, add a new build rule for the latest `mapbox-android-plugin-traffic`
5. Click the Sync Project with Gradle Files near the toolbar in Studio.

```groovy
repositories {
  mavenCentral()
}

dependencies {
  compile 'com.mapbox.mapboxsdk:mapbox-android-plugin-traffic:{trafficPluginVersion}'
}
```

#### 2. Add traffic

Open the activity Java file you'd like to include the traffic plugin in and add the code below to the file.

```java
@Override
public void onMapReady(MapboxMap mapboxMap) {
  TrafficPlugin trafficPlugin = new TrafficPlugin(mapView, mapboxMap);
  trafficPlugin.toggle(); // Enable the traffic view by default
}
```

### Features
`isEnabled()` can be used to determine whether or not the traffic layer is currently visible on the map and then you can react accordingly if needed. The map can change styles at anytime and the map traffic will be redrawn in the new map style.
