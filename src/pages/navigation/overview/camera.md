---
title: "Camera Engine"
description: "Fine grain control over the map camera during your Android app navigation experience with the Mapbox Navigation SDK for Android. Click to learn how."
prependJs:
  - "import CodeLanguageToggle from '../../../components/code-language-toggle';"
  - "import ToggleableCodeBlock from '../../../components/toggleable-code-block';"
---

Before you begin reading this document, you might want to begin with [the general overview and basics of the map's camera](https://docs.mapbox.com/android/maps/overview/camera/).

`MapboxNavigation` creates a `SimpleCamera` by default that you can access with the
`MapboxNavigation#getCameraEngine()` method.

`SimpleCamera` extends from `Camera` and is required to provide values for bearing,
tilt, zoom, and a target `Point` given a `RouteInformation`.

A `RouteInformation` object can be created from a `DirectionsRoute`, `Location`, or `RouteProgress`.
Depending on which objects are provided, `SimpleCamera` will return a value for each camera method:

{{
<CodeLanguageToggle id="route-info" />
<ToggleableCodeBlock

java={`
RouteInformation.create(route, location, routeProgress);
`}

kotlin={`
RouteInformation.create(route, location, routeProgress)
`}

/>
}}


For example, if `RouteInformation` has a `DirectionsRoute`, the `SimpleCamera` will return the
`List` of `Point`s based on the route geometry for `Camera#overview(RouteInformation routeInformation)`:

{{
<CodeLanguageToggle id="route-bearing" />
<ToggleableCodeBlock

java={`
public List<Point> overview(RouteInformation routeInformation) {
  ...
  if (invalidCoordinates) {
    buildRouteCoordinatesFromRouteData(routeInformation);
  }
  return routeCoordinates;
}
`}

kotlin={`
fun overview(routeInformation: RouteInformation): List<Point>? {
	if (invalidCoordinates) {
	    buildRouteCoordinatesFromRouteData(routeInformation)
	}
	return routeCoordinates
}
`}

/>
}}

You can then use the returned `List` to update the `MapboxMap` camera.  In this case,
you can use the list to build a `LatLngBounds` that the camera will move to include:

{{
<CodeLanguageToggle id="route-camera" />
<ToggleableCodeBlock

java={`
Camera cameraEngine = navigation.getCameraEngine();

List<Point> routePoints = cameraEngine.overview(routeInformation);

LatLngBounds routeBounds = ...

CameraUpdateFactory.newLatLngBounds(routeBounds, padding[0], padding[1], padding[2], padding[3]);

mapboxMap.easeCamera(CameraUpdateFactory.newCameraPosition(position));
`}

kotlin={`
val cameraEngine = navigation.getCameraEngine()

val routePoints = cameraEngine.overview(routeInformation)

val routeBounds: LatLngBounds

CameraUpdateFactory.newLatLngBounds(routeBounds, padding[0], padding[1], padding[2], padding[3])

mapboxMap.easeCamera(CameraUpdateFactory.newCameraPosition(position))
`}

/>
}}

## Creating a custom `Camera`
The Navigation SDK provides a `SimpleCamera` by default. You're also able to create your
own `CameraEngine` and give it to the Navigation SDK like so: `MapboxNavigation#setCameraEngine(CameraEngine cameraEngine)`.

An example of this would be the `DynamicCamera` provided by the `libandroid-navigation-ui`
library. In [`DynamicCamera`](/android-docs/navigation/overview/navigation-ui/#navigationcamera), calculations are being made based on the user's location along the given route.
