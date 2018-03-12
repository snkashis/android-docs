---
title: "Telemetry"
description: "Mapbox telemetry library for Android"
sideNavSections:
  - title: "Installation"
  - title: "PermissionsManager"
  - title: "PermissionsListener"
  - title: "LocationEngine"
  - title: "Getting location updates"
  - title: "Last location"
  - title: "Mock location engine"
prependJs:
  - "import { TELEMETRY_VERSION } from '../../../constants';"
---

# Telemetry

The Mapbox telemetry library for Android collects anonymous data about the map and device location to continuously update and improve your maps, directions, travel times, and search. We collect anonymous data about how users interact with the map to help developers build better location based applications.

Location telemetry is critical to improving the map. We use the data to discover missing roads, determine turn restrictions, build speed profiles, and improve OpenStreetMap.

The library includes many utilities, such as `locationEngine` or `permissionManager`, that you can use in your projects. The telemetry module has no dependencies on any of the other Mapbox Java modules and only depends on having the Android API plugin inside your project.

> Find out more information about telemetry on [our website's dedicated Telemetry page](https://www.mapbox.com/telemetry/).

### Installation

To start developing your application using the Mapbox telemetry library for Android, you'll need to first decide which installation method works best for you. The SDK is fully compatible with Android using Gradle.

## Gradle

1. Start Android Studio
2. Open up your applications `build.gradle`
3. Make sure your projects `minSdkVersion` is at API 14 or higher
4. Under dependencies add a new build rule for the latest mapbox-android-services
5. Click on `Sync Project with Gradle Files` near the toolbar in Studio

```groovy
implementation 'com.mapbox.mapboxsdk: mapbox-android-telemetry:{{ TELEMETRY_VERSION }}'
```

> **Note:** ProGuard directives are included in the Android dependencies to preserve the required classes.


## PermissionsManager

Your application will need to request permission during runtime, if your Android project is built targeting API level 23 or higher. Handling this directly in your activity produces a bunch of boilerplate and can oftentimes be hard to get correct. That's where the `PermissionsManager` class comes into play. With the `PermissionsManager` class, you can check whether the user has granted location permission and request permissions if the user hasn't granted them yet.

You'll notice that once you have set up your permission manager, you will still need to override your activity's `onRequestPermissionsResult` and call the `permissionsManager`'s same method.

> **Note:** The `PermissionsManager` can be used for requesting additional permissions and not only location.

```java
permissionsManager = new PermissionsManager(<a new PermissionsListener>);
if (!permissionsManager.areLocationPermissionsGranted(this)) {
  permissionsManager.requestLocationPermissions(this);
}

@Override
public void onRequestPermissionsResult(
int requestCode, @NonNull String[] permissions, @NonNull int[] grantResults) {
  permissionsManager.onRequestPermissionsResult(requestCode, permissions, grantResults);
}
```

### PermissionsListener

The `permissionsListener` needs to also be set up and passed into the `PermissionsManager` constructor. You'll notice that it overrides two methods, `onExplanationNeeded` and `onPermissionResult`. An explanation isn't required but strongly encouraged to allow the user to understand why you are requesting this permission.

The permission result is invoked once the user decides whether to allow or deny the permission. A boolean value is given, which you can use to write an if statement. Both cases should be handled correctly. Continue with your permission sensitive logic if the user approves. Otherwise, if the user denies, it's good to display a message which tells the user that permission is required for your application to work.

```java
PermissionsListener permissionsListener = new PermissionsListener() {
  @Override
  public void onExplanationNeeded(List<String> permissionsToExplain) {

  }

  @Override
  public void onPermissionResult(boolean granted) {
    if (granted) {
      // Permission sensitive logic called here
    } else {
      // User denied the permission
    }
  }
};
```

## LocationEngine

If your application needs location information, the `locationEngine` can help you get this information while also simplifying the process and being flexible enough to use different services. The LocationEngine found in the telemetry module now supports the following location providers:

- [LOST](https://github.com/mapzen/lost/)
- Google Play Services
- Android Location
- Mock Location Engine

> **Note:** if you are using our Android Maps SDK, you can also set the locationEngine equal to the `LocationSource.getLocationEngine(this);` and it will use the same location engine used by the maps SDK. This eliminates the need to create a new locationEngine from scratch.

### Getting location updates

To start off, it's required to either include the mapbox-android-services or copy over the [LostLocationEngine class](https://github.com/mapbox/mapbox-events-android/blob/c4e28e8ec737fbbad543d495b084b5da86cf1b80/liblocation/src/main/java/com/mapbox/android/core/location/LostLocationEngine.java) into your project. You'll then want to initialize a new instance of LocationEngine, activate it, and optionally add a location listener. Inside the `onConnected` you can begin requesting for location updates or wait for the proper time to do so.

```java
LocationEngine locationEngine = new LocationEngineProvider(this).obtainBestLocationEngineAvailable();
locationEngine.activate();
locationEngine.addLocationEngineListener(new LocationEngineListener() {
  @Override
  public void onConnected() {
    locationEngine.requestLocationUpdates();
  }

  @Override
  public void onLocationChanged(Location location) {

  }
});
```

Rather than adding the LocationEngineListener like above, you can also implement the `LocationEngineListener` interface and override `onConnected()` and `onLocationChanged()`.

To prevent your application from having a memory leak, it is a good idea to stop requesting location updated inside your activity's `onStop` method and continue requesting them in `onStart`.

### Last location

If your application needs to quickly get a user location, you can call the `getLastLocation` which will return the user's last position. You can then use the location object returned to decide the timing the location was given.

> **Note:** Careful with requesting the users last location since the location has the possibility of being null.

```java
Location lastLocation = locationEngine.getLastLocation();
if (lastLocation != null) {
  // Location logic here
}
```

### Mock location engine

The telemetry library also has [a `MockLocationEngine` class](https://github.com/mapbox/mapbox-events-android/blob/master/liblocation/src/main/java/com/mapbox/android/core/location/MockLocationEngine.java) for you to create a fake location engine. 