---
title: Navigation SDK
path: /navigation/overview/
---
# Navigation SDK

> Navigation is still in beta; API breaking changes might occur without a major release.

The navigation SDK's built on top of our Directions API and contains logic needed to get timed navigation instructions. The calculations use the user's current location and compare it to the current route that the user's traversing to provide critical information at any given moment.

### Support and contributions

- Reach out through [Stack Overflow](https://stackoverflow.com/questions/tagged/mapbox+android) or [the Mapbox contact page](https://www.mapbox.com/contact/) if you are looking for support with using this SDK.
- If you have found a bug and can provide steps to reliably reproduce it, open an issue in the [/mapbox-navigation-android repository on Github](https://github.com/mapbox/mapbox-navigation-android/issues). Make sure to apply the bug label to your issue as well.
- If you have a feature request, open an issue in the /mapbox-navigation-android repository on Github and use the feature tag.
- If you want to contribute to this SDK, please read [our contribution guidelines](https://github.com/mapbox/mapbox-navigation-android/blob/master/CONTRIBUTING.md) and then open a pull request with your changes.

### API reference
All public methods in the Navigation SDK project are well documented and can be either viewed inside of the source code or directly on the Javadoc (linked below). If you are using an older version of the SDK, you can still access the Javadoc by replacing the URL's version number with the one that you are using inside of your application.

- [{navigationVersion} Navigation SDK Javadoc]() <!-- TODO -->

### Access tokens
An access token is necessary to use the Navigation SDK. Manage your access tokens in [your account settings](https://www.mapbox.com/account/apps/) to retrieve current tokens and generate new ones. You should create a new token for each of your apps, which will help you track usage and decrease disruption if a token needs to be revoked.

You'll want to pass in the access token when constructing a new `MapboxNavigation` object. Read [this document](https://www.mapbox.com/help/create-api-access-token/) to learn more about access tokens.

```java
MapboxNavigation navigation = new MapboxNavigation(this, MAPBOX_ACCESS_TOKEN);
```

## Installation
Before starting to develop your application with the Navigation SDK, you'll need to add the SDK as a dependency. Note that while we show how to insert the stable version of the SDK inside your project, you can also use the nightly build/snapshot or the beta version, if one is available. You can find the following dependency given below in the MavenCentral repository.

1. Start Android Studio
2. Open up your application's `build.gradle`
3. Make sure that your project's `minSdkVersion` is at API 15 or higher
4. Under dependencies, add a new build rule for the latest `mapbox-android-navigation`
5. Click the Sync Project with Gradle Files near the toolbar in Studio.

> **Note:** If your application is close or exceeds the 65k method count limit, you can mitigate this problem by enabling ProGuard. ProGuard directives are included in the Android dependencies to preserve the required classes.

```groovy
repositories {
  mavenCentral()
}

dependencies {
  compile 'com.mapbox.mapboxsdk:mapbox-android-navigation:{navigationVersion}'
}
```

### Permissions
The Navigation SDK makes use of the Android manifest merge feature to reduce the need to include any Navigation SDK required things inside of your application's manifest file. You'll need to include _either_ the Fine **or** Coarse location permission, for navigation to work properly. The user location permission should also be checked during runtime using the [PermissionManager](/mapbox-services/latest/telemetry/#permissionsmanager).

> **Note:** For best navigation results, it's strongly recommended using the fine location permission which gives a more precise fix on the user's current location.

```xml
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
```

## MapboxNavigation object
You will find Most of the navigation APIs inside the `MapboxNavigation` class including fetching the route, starting and ending the navigation session, and attaching listeners for events that you'd like to handle. Assign and initialize a new instance of `MapboxNavigation` inside your navigation activity. When initializing, you'll need to pass in a `Context` and your Mapbox access token. Read the access token section in this [getting started](#access-tokens) document to learn how to get a free access token.

```java
MapboxNavigation navigation = new MapboxNavigation(this, MAPBOX_ACCESS_TOKEN);
```

### LocationEngine
Navigation requires the user's location to run; this is done using the `LocationEngine` class introduced in Mapbox Services 2.0. Visit the [`LocationEngine`](/mapbox-services/2.0.1/telemetry/#locationengine) documentation for detailed instructions on how to use this class. You'll need to set up an instance of a location engine and pass it into the `MapboxNavigation` object.

```java
LocationEngine locationEngine = LostLocationEngine.getLocationEngine(this);
navigation.setLocationEngine(locationEngine);
```

### Requesting a route
Now that you have created a way for the `MapboxNavigation` object to get the user's location, the other thing it will need is a route. Call `getRoute` passing in an origin, destination, and a callback to handle the response. If you've ever worked with [Retrofit](http://square.github.io/retrofit/), the callback here will look familiar since this is what we are using under the hood. Inside the onResponse, you can draw the directions route on a map or present time and distance using the full directions response.

```java
// From Mapbox to The White House
Position origin = Position.fromLatLng(38.90992, -77.03613);
Position destination = Position.fromLatLng(38.8977, -77.0365);

navigation.getRoute(origin, destination, new Callback<DirectionsResponse>() {
  @Override
  public void onResponse(
    Call<DirectionsResponse> call, Response<DirectionsResponse> response) {

  }

  @Override
  public void onFailure(Call<DirectionsResponse> call, Throwable t) {

  }
});
```

### Lifecycle methods
Inside your application's activity, you'll want to override the onDestroy lifecycle method and remove any navigation listeners you are using and end the navigation session. Doing this prevents any memory leaks from occurring but still allows navigation to run in the background if your user goes to their home screen for example.

```java
@Override
protected void onDestroy() {
  super.onDestroy();
  // Remove all navigation listeners being used
  navigation.removeAlertLevelChangeListener(this);
  navigation.removeNavigationEventListener(this);
  navigation.removeProgressChangeListener(this);
  navigation.removeOffRouteListener(this);

  // End the navigation session
  navigation.endNavigation();
}
```
