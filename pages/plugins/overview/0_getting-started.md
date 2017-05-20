---
title: Mapbox Plugins
path: /plugins/overview/
---
# Mapbox Plugins

Mapbox Plugins build on top of the [Map SDK](/map-sdk/latest/getting-started/) providing extra features in lightweight dependencies. Whether your looking to include traffic on top of your map or show the user location as a layer, plugins offer customizable APIs with a few lines of code to get started. Separating features into different plugins also allows for a more aggressive updating timeline.

> **Note:** The Map SDK is required to use any of these plugins and many require passing in both the `MapView` and `MapboxMap` objects.

### Support and contributions

- Reach out through [Stack Overflow](https://stackoverflow.com/questions/tagged/mapbox+android) or through [the Mapbox contact page](https://www.mapbox.com/contact/) if you are looking for support with using this SDK.
- If you have found a bug and can provide steps to reliably reproduce it, open an issue in the [/mapbox-plugins-android repository on Github](https://github.com/mapbox/mapbox-plugins-android/issues). Make sure to apply the bug label to your issue as well.
- If you have a feature request, open an issue in the /mapbox-plugins-android repository on Github and apply the feature label.
<!--- If you want to contribute to this SDK, please read [our contribution guidelines](https://github.com/mapbox/mapbox-gl-native/blob/master/CONTRIBUTING.md) and then open a pull request with your changes.-->

### API reference
All public methods and dependencies in the Mapbox Plugins project are well documented and can be either viewed inside of the source code or directly on the Javadoc (linked below). If you are using an older version of the SDK, you can still access the Javadoc by replacing the URL's version number with the one that you are using inside of your application.

<!-- TODO -->
 <!-- - [0.1.0](https://www.mapbox.com/android-docs/api/map-sdk/5.0.2/index.html)-->

## Installation
Several steps must be taken before you start developing your application with the Maps SDK. Note that while we show how to add the stable version of the SDK inside your project, you can also use the nightly build/snapshot or the beta version, if one is available. The dependency given below can be found on MavenCentral.

1. Start Android Studio
2. Open up your application's `build.gradle`
3. Make sure that your project's `minSdkVersion` is at API 15 or higher
4. Under dependencies, add a new build rule for the latest plugin you'd like to include
5. Click the Sync Project with Gradle Files near the toolbar in Studio.

<!-- > **Note:** If your application is close or exceeds the 65k method count limit, you can mitigate this problem by enabling ProGuard inside your application. ProGuard directives are included in the Android dependencies to preserve the required classes. -->

```groovy
repositories {
  mavenCentral()
}

dependencies {
  compile 'com.mapbox.mapboxsdk:mapbox-android-plugin-traffic:{trafficPluginVersion}'
}
```

### Selectively compiling plugins

Plugins give you the flexibility to only include the features your specific application requires. This means you can selectively choose which specific APIs your application needs. For example, if you only want to display a traffic layer inside your application you only need to include the Traffic Plugin dependency in your project.

The list below shows all the current separated dependencies you can use in your Android application.

```groovy
compile 'com.mapbox.mapboxsdk:mapbox-android-plugin-traffic:{trafficPluginVersion}'
```

- Traffic Plugin

<!-- > **Note:** ProGuard directives are included in the Android dependencies to preserve the required classes.-->
