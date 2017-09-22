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

Mapbox Navigation gives you all the tools that you need to add turn-by-turn navigation to your apps.

Get up and running in a few minutes with our drop-in turn-by-turn navigation, or build a more custom turn-by-turn navigation app with our UI components.

![](src/img/src/turn-by-turn.gif)

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

With either a `DirectionsRoute` from `NavigationRoute` or two `Position` objects (origin and destination), you can launch the UI with `NavigationLauncher` from within your `Activity`:

```java
 Position origin = Position.fromCoordinates(-77.03613, 38.90992);
 Position destination = Position.fromCoordinates(-77.0365, 38.8977);

 // Pass in your Amazon Polly pool id for speech synthesis using Amazon Polly
 // Set to null to use the default Android speech synthesizer
 String awsPoolId = "your_cognito_pool_id";

 boolean simulateRoute = true;

 // Call this method with Context from within an Activity
 NavigationLauncher.startNavigation(this, origin, destination,
   awsPoolId, simulateRoute);
```

## Custom Views

#### InstructionView

You also have the option to add the custom `View`s used in the turn-by-turn UI to your own XML.
The top `View` that displays the maneuver image, instruction text, and sound button is called `InstructionView`.

```xml
<com.mapbox.services.android.navigation.ui.v5.instruction.InstructionView
        android:id="@+id/instructionView"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"/>
```

Once inflated in your `Activity`, you can add the `InstructionView` as a `ProgressChangeListener` / `OffRouteListener`.  Once you start navigation, the progress data will begin populating the `View`.

```java
navigation.addProgressChangeListener(instructionView);
navigation.addOffRouteListener(instructionView);
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
