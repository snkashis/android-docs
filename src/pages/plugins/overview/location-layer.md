---
title: "Location Layer"
description: "Mapbox Android Location Layer Plugin"
sideNavSections:
  - title: "Setup permissions"
  - title: "Lifecycles"
  - title: "Add the location layer"
  - title: "Usage with navigation"
  - title: "Customization"
---
# Location Layer

A popular, often critical feature is showing the users current location as an annotation to give a reference point on the map. This plugin makes use of the latest [runtime styling](/android-docs/map-sdk/overview/runtime-styling/) features to display the location icons/markers within the map itself rather than on top as an Android view. This brings several fixes and performance improvements previously experienced when using the now deprecated `MyLocationView`.

To install, head over to the [Mapbox Plugin Overview](/android-docs/plugins/overview/) page which will walk you through adding the dependency.

## Setup permissions

Before using the location layer plugin, you'll need to include either the coarse _or_ fine location permission inside your applications manifest.

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.example.myapp" >
  ...
  <!-- Coarse location -->
  <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION"/>

  <!-- Or fine location -->
  <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
  ...
</manifest>
```

If your application's targeting Android 6.0 (API 23) or higher, you'll want to use the new permissions model which request permissions at runtime rather than during the installation process. It's important to request the permission either during the application startup or when the location layer gets initialized. [PermissionsManager](/android-docs/mapbox-services/overview/telemetry/#permissionsmanager) is a utility offered as part of the Mapbox Services package inside the Map SDK and streamlines the permission request process.

## Lifecycles

It's important to include the location layer `onStart()` and `onStop()` lifecycle events in their respective activity methods. This prevents memory leaks from occurring and reduces battery consumption. The plugin has support for the new `LifecycleObserver` APIs, by adding the plugin as a lifecycle observer in your activity, you won't need to handle the lifecycles manually.

## Add the location layer

To initialize the Location layer plugin, you'll need to pass in both the map view and the `mapboxMap` object. Depending on whether or not you'd like the Location Layer to track the user's location automatically or not, you can either pass in a locationEngine or `null`. If no location engines provided, you are responsible for updating the location position manually using `forceLocationUpdate()`.

```java
locationLayerPlugin = new LocationLayerPlugin(mapView, mapboxMap, locationEngine);
```

There are several location layer modes inside the plugin which are useful for different app needs. Once the plugin's initialized, you'll want to enable it by setting the location mode through `setLocationLayerEnabled()` passing in the mode type. A table's provided below with a short description of each state the location layer can be in at any given time. When first initialized the default state will be `NONE`.

| Mode | Description |
| --- | --- |
| `NONE` | The default state when the plugins first initialized, locations not shown on the map and location events get ignored. |
| `TRACKING` | Displays a blue icon by default which marks the devices current location. An accuracy ring's also drawn on the map. |
| `COMPASS` | Identical to the tracking mode except a compass listeners attached which displays on the map as a chevron/arrow icon surrounding the default blue icon.  |
| `NAVIGATION` | A unique marker icon specific to a navigation session. By default, this icon's larger and has an arrow centered pointing in the location bearing direction. No accuracy ring's shown in this mode. |

## Usage with navigation

Another difference between the Location Layer plugin versus the `MyLocationView` is the inclusion of support for navigation usage. Once a navigation session's started using the [Mapbox Navigation SDK](/android-docs/navigation/overview/), a few adjustments will need to be made to the Location Layer plugin to improve the performance and behavior. First, the mode must be changed to `NAVIGATION` so the icon displays and works in the most optimal way.

If you plan to use the snapped location provided by the navigation SDK, you'll need to use `locationLayerPlugin.setLocationEngine()` to `null` to prevent location coordinates that aren't snapped to update the icon location. Instead, you'll need to add `forceLocationUpdate()` inside the navigation SDKs `onProgressChange()` callback which _does_ provided the snapped location.

Once a navigation sessions complete, you can return to the plugin's previous state by passing back in your locationEngine and changing the mode back to the previous mode.

## Customization

The plugin allows for several customizations such as drawables, opacities, and more by passing in a style either while constructing the plugin or using the provided `applyStyle()` API. For example, if you'd like to change the location layer icon from the default blue to red, I'd first need to generate a new icon drawable showing the change, add the drawable to my project, and then create a new style with the parentLayout being `LocationLayer`. The snippet below shows all the currently customizable attributes.

```xml
<style name="CustomLocationLayer" parent="LocationLayer">
  <item name="foregroundDrawable">@drawable/custom_user_icon</item>
  <item name="backgroundDrawable">@drawable/mapbox_user_stroke_icon</item>
  <item name="bearingDrawable">@drawable/mapbox_user_bearing_icon</item>
  <item name="navigationDrawable">@drawable/mapbox_user_puck_icon</item>
  <item name="accuracyAlpha">0.15</item>
  <item name="accuracyColor">@color/mapbox_plugin_location_layer_blue</item>
</style>
```
