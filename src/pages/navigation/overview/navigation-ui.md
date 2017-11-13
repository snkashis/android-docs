---
title: "Navigation turn-by-turn UI"
description: "Mapbox Android Navigation SDK Drop-in UI"
sideNavSections:
  - title: "Install the Navigation UI SDK"
  - title: "Launch the UI"
  - title: "Custom Views"
prependJs:
  - "import { NAVIGATION_VERSION } from '../../../constants';"
---

# Navigation turn-by-turn UI

Mapbox Navigation gives you all the tools that you need to add turn-by-turn navigation to your apps.

Get up and running in a few minutes with our drop-in turn-by-turn navigation, or build a more custom turn-by-turn navigation app with our UI components.

## Install the Navigation UI SDK

Before developing your app with the Navigation UI components, you'll need to add the SDK as a dependency.  This dependency is different from the one used to compile the core Navigation SDK, but it will still include everything from the core library. Note that while we show how to insert the stable version of the SDK inside your project, you can also use the nightly build/snapshot or the beta version if one is available. You can find the dependency given below in the MavenCentral repository.

```groovy
repositories {
  mavenCentral()
}

dependencies {
  compile ('com.mapbox.mapboxsdk:mapbox-android-navigation-ui:{{ NAVIGATION_VERSION }}') {
    transitive = true
  }
}
```

## Launch the UI

With either a `DirectionsRoute` from `NavigationRoute` or two `Point` objects (origin and destination), you can launch the UI with `NavigationLauncher` from within your `Activity`:

```java
 Point origin = Point.fromLngLat(-77.03613, 38.90992);
 Point destination = Point.fromLngLat(-77.0365, 38.8977);

 // Pass in your Amazon Polly pool id for speech synthesis using Amazon Polly
 // Set to null to use the default Android speech synthesizer
 String awsPoolId = "your_cognito_pool_id";

 boolean simulateRoute = true;

 // Call this method with Context from within an Activity
 NavigationLauncher.startNavigation(this, origin, destination,
   awsPoolId, simulateRoute);
```

## Custom Views

#### NavigationView

New for `0.7.0`, the turn-by-turn UI has been refactored to be a `View`.  This means you can inflate the entire
navigation UI in your `Activity` or `Fragment` rather than using `NavigationLauncher`.

To use this implementation, there is some setup you have to do to ensure the `View` works properly:

##### Step 1
The `NavigationView` has lifecycle methods to ensure the `View` properly handles Android configuration changes or user interactions.  You must also call `navigationView.getNavigationAsync(this);` when `NavigationView` is inflated and `NavigationView#onCreate()` has been called.  Calling `getNavigationAsync()` will ultimately call `onNavigationReady()` once all components for the `View` have been properly initialized.

``` java
@Override
protected void onCreate(@Nullable Bundle savedInstanceState) {
  super.onCreate(savedInstanceState);
  setContentView(R.layout.activity_navigation);
  navigationView = findViewById(R.id.navigationView);
  navigationView.onCreate(savedInstanceState);
  navigationView.getNavigationAsync(this);
}

@Override
protected void onStart() {
  super.onStart();
  navigationView.onStart();
}

@Override
public void onResume() {
  super.onResume();
  navigationView.onResume();
}

@Override
public void onPause() {
  super.onPause();
  navigationView.onPause();
}

@Override
public void onLowMemory() {
  super.onLowMemory();
  navigationView.onLowMemory();
}

@Override
protected void onStop() {
  super.onStop();
  navigationView.onStop();
}

@Override
protected void onDestroy() {
  super.onDestroy();
  navigationView.onDestroy();
}

@Override
public void onBackPressed() {
  // If the navigation view didn't need to do anything, call super
  if (!navigationView.onBackPressed()) {
    super.onBackPressed();
  }
}

@Override
protected void onSaveInstanceState(Bundle outState) {
  navigationView.onSaveInstanceState(outState);
  super.onSaveInstanceState(outState);
}

@Override
protected void onRestoreInstanceState(Bundle savedInstanceState) {
  super.onRestoreInstanceState(savedInstanceState);
  navigationView.onRestoreInstanceState(savedInstanceState);
}
```

##### Step 2
Your `Activity` or `Fragment` must implement `NavigationViewListener`. This interface includes callbacks for the start and end of the turn-by-turn UI.  `onNavigationReady()` is your cue to start navigation with `NavigationView#startNavigation()` and `onNavigationFinished()` is your cue for if the navigation session has ended or a user has cancelled the UI:

``` java
@Override
public void onNavigationReady() {
  navigationView.startNavigation(this);
}

@Override
public void onNavigationFinished() {
  finish();
}
```

#### InstructionView

You also have the option to add the custom `View`s used in the turn-by-turn UI to your XML.
The top `View` that displays the maneuver image, instruction text, and sound button is called `InstructionView`.

```xml
<com.mapbox.services.android.navigation.ui.v5.instruction.InstructionView
        android:id="@+id/instructionView"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"/>
```

Once inflated in your `Activity`, the `InstructionView` can be updated with a `RouteProgress` object inside a `ProgressChangeListener`.  
The `View` will handle formatting and set the data:

```java
@Override
public void onProgressChange(Location location, RouteProgress routeProgress) {
  instructionView.update(routeProgress);
}
```

Please make sure to set our default theme: `R.style.NavigationViewLight` (or create your own) and set it in your `Activity` or `Fragment` before `super.onCreate()`.  The custom `View`s will now look for the attributes in the default theme to set text and background colors:

```java
@Override
protected void onCreate(Bundle savedInstanceState) {
  setTheme(R.style.NavigationViewLight);
  super.onCreate(savedInstanceState);
  setContentView(R.layout.activity_navigation);
  ...
}
```

#### NavigationMapRoute

You can use `NavigationMapRoute` to draw the route line on your map.  Instantiate it with a
`MapView` and `MapboxMap`, then add a `DirectionsRoute` from our Directions API.  The `DirectionsRoute` will automatically be added (even in off-route scenarios) if you instantiate with `MapboxNavigation`.  You can also style the route with a given style:

```java
NavigationMapRoute mapRoute = new NavigationMapRoute(MapboxNavigation navigation, MapView mapView,
                                                     MapboxMap mapboxMap, int styleRes);

```

The given style will determine route color, congestion colors, and the route scale:

```xml
<style name="NavigationMapRoute">
    <!-- Colors -->
    <item name="routeColor">@color/mapbox_navigation_route_layer_blue</item>
    <item name="routeModerateCongestionColor">@color/mapbox_navigation_route_layer_congestion_yellow</item>
    <item name="routeSevereCongestionColor">@color/mapbox_navigation_route_layer_congestion_red</item>
    <item name="routeShieldColor">@color/mapbox_navigation_route_shield_layer_color</item>

    <!-- Scales -->
    <item name="routeScale">1.0</item>
</style>
```
