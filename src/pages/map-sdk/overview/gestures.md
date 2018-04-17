---
title: "Gestures"
description: "Detecting gestures in the Mapbox Maps SDK for Android"
sideNavSections:
  - title: "Overview"
  - title: "Interaction"
  - title: "Mapbox Gestures for Android"
---

## Overview
The Mapbox Maps SDK for Android uses the [Mapbox Gestures for Android library](https://github.com/mapbox/mapbox-gestures-android) under the hood to perform gestures detection based on user's input.

## Interaction
In order to react to the user's input, you can register several different listeners that will be notified whenever a user interacts with a Mapbox map.

`OnMapClickListener`:
```java
mapboxMap.addOnMapClickListener(new MapboxMap.OnMapClickListener() {
  @Override
  public void onMapClick(@NonNull LatLng point) {
    // user clicked on the map
  }
});
```

`OnMoveListener`:
```java
mapboxMap.addOnMoveListener(new MapboxMap.OnMoveListener() {
  @Override
  public void onMoveBegin(MoveGestureDetector detector) {
    // user started moving the map
  }
  @Override
  public void onMove(MoveGestureDetector detector) {
    // user is moving the map
  }
  @Override
  public void onMoveEnd(MoveGestureDetector detector) {
    // user stopped moving the map
  }
});
```
You can see a `MoveGestureDetector` object being passed in the callbacks above. This class is the underlying detector from the Mapbox Gestures for Android library.

Other popular listener interfaces that you can implement are:
 - `OnMapLongClickListener` fires when the map is touched and a single finger is held down on the map.
 - `OnRotateListener` fires when the map is rotated.
 - `OnScaleListener` fires when the map is zoomed in or out.
 - `OnShoveListener`, fires when map is tilted.
 
## Mapbox Gestures for Android
To get the `AndroidGesturesManager` object which holds references to all of the gesture detectors, use:
```java
AndroidGesturesManager gesturesManager = mapboxMap.getGesturesManager();
```

Refer to the [Mapbox Gestures for Android library's documentation](https://github.com/mapbox/mapbox-gestures-android) for more information on advanced operations such as:
 - Manipulation of gesture thresholds
 - Interrupting and enabling/disabling gesture detectors
 - Gesture filtering
