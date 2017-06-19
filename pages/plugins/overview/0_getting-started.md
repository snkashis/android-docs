---
title: Mapbox Plugins
path: /plugins/overview/
---
### Overview

Mapbox Plugins build on top of the [Map SDK](/map-sdk/latest/getting-started/) providing extra features in lightweight dependencies. Whether your looking to include traffic on top of your map or show the user location as a layer, plugins offer customizable APIs with a few lines of code to get started. Separating features into different plugins also allows for a more aggressive updating timeline.

### Selectively compiling plugins

Plugins give you the flexibility to only include the features your specific application requires. This means you can selectively choose which specific APIs your application needs. For example, if you only want to display a traffic layer inside your application you only need to include the Traffic Plugin dependency in your project.

The list below shows all the current separated dependencies you can use in your Android application.

```groovy
compile 'com.mapbox.mapboxsdk:mapbox-android-plugin-traffic:{trafficPluginVersion}'
```
