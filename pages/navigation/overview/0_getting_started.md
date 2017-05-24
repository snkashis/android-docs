---
title: Navigation SDK
path: /navigation/overview/
---
The Navigation SDK's built on top of our Directions API and contains logic needed to get timed navigation instructions. The calculations use the user's current location and compare it to the current route that the user's traversing to provide critical information at any given moment.

### Install the Navigation SDK
Before starting to develop your application with the Navigation SDK, you'll need to add the SDK as a dependency. Note that while we show how to insert the stable version of the SDK inside your project, you can also use the nightly build/snapshot or the beta version, if one is available. You can find the following dependency given below in the MavenCentral repository.

#### Add the dependency

1. Start Android Studio
2. Open up your application's `build.gradle`
3. Make sure that your project's `minSdkVersion` is at API 15 or higher
4. Under dependencies, add a new build rule for the latest `mapbox-android-navigation`
5. Click the Sync Project with Gradle Files near the toolbar in Studio.

```groovy
repositories {
  mavenCentral()
}

dependencies {
  compile 'com.mapbox.mapboxsdk:mapbox-android-navigation:{navigationVersion}'
}
```

#### Get an access token
If you don't have a Mapbox account, sign up for one [here](https://www.mapbox.com/signup/), then navigate to the [token page](https://www.mapbox.com/studio/account/tokens/) in Mapbox Studio and copy your **default public token** to your clipboard. After you've added the Navigation SDK as a dependency inside your Android project, open the `string.xml` file, create a new string, and paste the access token. Then to pass this into the Navigation SDK.

```java
@Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    MapboxNavigation navigation = new MapboxNavigation(this, "<access token>");

    ...

  }
```

#### Setup permissions
The Navigation SDK makes use of the Android manifest merge feature to reduce the need to include any Navigation SDK required things inside of your application's manifest file. You'll need to include _either_ the Fine **or** Coarse location permission, for navigation to work properly. The user location permission should also be checked during runtime using the [PermissionManager](/mapbox-services/latest/telemetry/#permissionsmanager).

For best navigation results, it's strongly recommended using the fine location permission which gives a more precise fix on the user's current location.

```xml
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
```

#### Requesting a route
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

### MapboxNavigation object
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
