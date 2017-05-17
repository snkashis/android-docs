---
title: Map SDK
path: /map-sdk/5.0.0/getting-started/
---

## Introduction

The Mapbox Maps SDK is an open source toolset for displaying maps inside your application. A demo app is available on the Google Play Store that includes a bunch of examples, including the ones referenced throughout this documentation.

### Support and contributions

- If you are looking for support using this SDK, either reach out through [Stack Overflow](https://stackoverflow.com/questions/tagged/mapbox+android) or through our [contact page](https://www.mapbox.com/contact/).
- If you have found a bug, and can provide steps to reliably reproduce it, open an issue in the /mapbox-gl-native repository on Github and apply the bug label.
- If you have a feature request, open an issue in the /mapbox-gl-native repository on Github, and apply the feature label.
- If you want to contribute, look over our contribution guild lines and open a pull request with your changes.

### API reference
All public methods in the Maps SDK project are well documented and can be either viewed inside the source code or directly on the Javadoc (linked below). If you are using a older version of the SDK, you can still access the Javadoc by replacing the URL's version number to the one you are using inside your application.

- [5.0.0 Maps SDK Javadoc](https://www.mapbox.com/android-docs/api/map-sdk/5.0.0/index.html)

### Access tokens
An access token is necessary to use the Maps SDK. Your access tokens can be managed in [your account settings](https://www.mapbox.com/account/apps/), where you can retrieve current tokens and generate new ones. You should create a new token for each of your apps, which will help you track usage and decrease disruption in the event a token needs to be revoked.

You'll want to place the access token inside your application object inside the `onCreate()` method. To learn more about access tokens, read [this document](https://www.mapbox.com/help/create-api-access-token/).

```java
public class MyApplication extends Application {

  @Override
  public void onCreate() {
    super.onCreate();

    // Mapbox Access token
    Mapbox.getInstance(getApplicationContext(), "<your access token>");
  }
}
```

## Installation
To start developing your application using the Maps SDK, a few steps must be taken before beginning. Note that while we should how to add the stable version of the SDK inside your project, you can also use the nightly build/snapshot or the beta version, if one is available. The dependency given below can be found on MavenCentral.

1. Start Android Studio
2. Open up your applications `build.gradle`
3. Make sure your projects `minSdkVersion` is at API 15 or higher
4. Under dependencies add a new build rule for the latest mapbox-android-sdk
5. Click the Sync Project with Gradle Files near the toolbar in Studio

> **Note:** If your application is close or exceeds the 65k method count limit, you can mitigate this problem by enabling ProGuard inside your application. ProGuard directives are included in the Android dependencies to preserve the required classes.

```groovy
repositories {
  mavenCentral()
}

dependencies {
  compile ('com.mapbox.mapboxsdk:mapbox-android-sdk:5.0.0@aar'){
      transitive=true
  }
}
```

### Permissions
Starting in 5.0, we are making use of the Manifest merge feature which reduces the need to include any Maps SDK required things inside your application's manifest file. If you plan to display the users location on the map or get user location information you'll need to include either the Fine or Coarse location permission. The user location permission should also be checked during runtime using the PermissionManager.

```xml
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
```

### Lifecycle methods
The MapView contains its own lifecycle methods for managing Android's OpenGL lifecycle that must be called directly from the containing Activity. In order for your app to correctly call the MapView's lifecycle methods, you must override the following lifecycle methods in the Activity that contains the MapView and call the respective MapView method. For example, in the onStart lifecycle, you'll call `mapView.onStart()`.

```java
onCreate();
onStart();
onResume();
onPause();
onStop();
onSaveInstanceState();
onLowMemory();
onDestroy();
```

### XML layout
You can optionally include the MapView inside your activities layout or build the MapView dynamically inside your application. We also provide a MapFragment and SupportMapFragment object which makes setting up significantly easier.

```xml
<com.mapbox.mapboxsdk.maps.MapView
  android:id="@+id/mapView"
  android:layout_width="match_parent"
  android:layout_height="match_parent"
  mapbox:mapbox_styleUrl="@string/mapbox_style_mapbox_streets" />
```

<!-- TODO link to dynamically add a map example -->
