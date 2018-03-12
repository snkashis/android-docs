---
title: "Mapbox Plugins"
description: "Mapbox Android plugins overview"
sideNavSections:
  - title: "What are Mapbox Plugins"
  - title: "How plugins work"
  - title: "Prerequisites"
  - title: "Available documentation"
  - title: "Support and contributions"
overviewHeaderProps:
  imageId: overviewPlugins
  sdk: Mapbox Plugins
  ghLink: "https://github.com/mapbox/mapbox-plugins-android"
  sdkFeatures:
    - Add in-app place searching
    - Load GeoJSON files onto the map
    - Show user location
    - Display traffic and 3D buildings
    - Change the map's language
  newFeature:
    - true
    - false
    - false
    - false
    - false
---

## What are Mapbox Plugins?

Mapbox Plugins for Android are a collection of libraries that extend our Maps, Navigation, and Services SDKs for Android to help you integrate powerful mapping features into your applications. Use plugins to show a user's location, display traffic or building overlays, or search for places. With these plugins, you can pick the features that your app needs without losing the ability to customize; all bundled into lightweight dependencies.

### How plugins work

The plugins we offer are extensive and cover many of our SDKs for Android. They can be used together or separately depending on your needs. A brief summary of each plugin and its purpose is provided below:

- **Building**: Add 3D buildings to your map style with as few as two lines of code. Take this further by allowing users to toggle the layer visibility.
- **Location Layer**: A popular, often critical feature is showing the user's current location as an annotation to give a reference point on the map.
- **Traffic**: Place realtime traffic data within your map style as a layer.
- **Places**: Add UI components such as a Place Picker or Autocomplete search built on top of the [Mapbox Geocoding API](https://www.mapbox.com/api-documentation/#geocoding). Each component includes an intentBuilder which starts an activity for results and returns a Carmen Feature.

## Prerequisites

Before using any of the Mapbox Plugins for Android, you will need:

- The latest version of [Android Studio](https://developer.android.com/studio/index.html).
- JDK version 7.0 or higher.
- A recent version of the Android SDK.
- Android API Level 15 or higher (Android 4.0.3 and above).
- A Mapbox [access token](https://www.mapbox.com/help/how-access-tokens-work/).

## Available documentation

- **Guides**. Each plugin has an associated guide which contains both technical descriptions about the plugin and its features, as well as, conceptual explanations of the different components and how they work together.
- [**Examples**]({{prefixUrl('plugins/examples')}}) See the code in action inside of [our demo app](https://play.google.com/store/apps/details?id=com.mapbox.mapboxandroiddemo) and use the source code as a good starting point for your project.

<!-- - Tutorials — The tutorials section contains several step-by-step guides for creating apps using Mapbox SDKs for Android alongside plugins. -->

## Support and contributions
- If you are looking for support using this SDK, either reach out through [Stack Overflow](https://stackoverflow.com/questions/tagged/mapbox+android) or through our [contact page](https://www.mapbox.com/contact/).
- If you find a bug and can provide steps to reliably reproduce it, open an issue in the [/mapbox-plugins-android repository](https://github.com/mapbox/mapbox-plugins-android) on GitHub and apply the bug label.
- If you have a feature request, open an issue in the [/mapbox-plugins-android repository](https://github.com/mapbox/mapbox-plugins-android) on GitHub, and apply the enhancement label.
- If you want to contribute, look over [our contribution guidelines](https://github.com/mapbox/mapbox-plugins-android/blob/master/CONTRIBUTING.md) and open a pull request with your changes.
