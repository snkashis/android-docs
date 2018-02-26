---
title: "Annotations"
description: "Mapbox Maps SDK annotations"
sideNavSections:
  - title: "Markers"
  - title: "Info window"
  - title: "Polyline and polygons"
prependJs:
  - "import { Floater } from '../../../components/floater';"
---

# Annotations

The Mapbox Maps SDK for Android provides several different ways to mark a single point, add a line between many points, or draw a polygon. Often, these objects are drawn either on top of the map or in some cases, within the map itself. This document walks you through how to add high-level objects. If you'd like more control over annotations, make sure to check out the [runtime styling](/map-sdk/overview/runtime-styling/) documentation.

## Markers

Markers are useful when identifying a single point on the map. The SDK comes with a default marker icon which can be configured to fit your specific needs. APIs are exposed to optionally change this icon to any bitmap image you wish. To create a marker for you map, you are only required to provide a `LatLng` position which defines where the marker will be placed on the map. Call `mapboxMap.addMarker()` to actually add the marker to the map.

```java
mapboxMap.addMarker(new MarkerOptions()
  .position(new LatLng(48.85819, 2.29458))
  .title("Eiffel Tower")
  );
```

{{
  <Floater
    url="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/annotations/AnimatedMarkerActivity.java"
    title="Marker views"
    category="example"
    text="Control more marker behavior using the MarkerView API which extends a typical Android view."
  />
}}

Besides providing the position, you can also add a title and snippet which display inside of an [info window](#info-window). The info window is displayed when users tap on the marker and close when they tap outside of the info window.

Add a list of markers using `mapboxMap.addMarkers()` if you have many markers or are loading them from a GeoJSON file.

### Removing markers

The Mapbox Android SDK comes with two methods for removing markers. If you'd like to remove a particular marker, use `mapboxMap.removeMarker()` while passing in the marker object to be removed. If you would like to remove _all_ markers, call the `mapboxMap.clear()` method. Note that this will also remove any polylines and polygons you’ve added to your map.

### Customize marker icon

You can specify a custom icon by using the `IconFactory` object and passing it to the marker. The default marker icon's used if you don’t specify an icon while creating your marker. The anchoring of the marker will be in the center, meaning if you have an icon with a point, you'll need to add padding to the bottom of the image.

Place your custom marker image in your project’s drawable folder and note its file name. In the example below, the custom icon’s image file's called `blue_marker.png`

```java
// Create an Icon object for the marker to use
IconFactory iconFactory = IconFactory.getInstance(MainActivity.this);
Icon icon = iconFactory.fromResource(R.drawable.blue_marker);

// Add the marker to the map
mapboxMap.addMarker(new MarkerViewOptions()
  .position(new LatLng(-37.821648, 144.978594))
  .icon(icon));
```

### Capturing marker events

The Mapbox Maps SDK for Android provides a handy listener for capturing when a user taps on a marker. By default, all markers come with an onMarkerClick event listener for displaying and hiding info windows. You can override this default event listener and set your own with the `setOnMarkerClickListener` method.

To display a toast message with the clicked marker’s title, listen for a click event with `setOnMarkerClickListener` and finally call `Toast.makeText()`. To prevent displaying a toast message and an info window at the same time, return true at the end:

```java
mapboxMap.setOnMarkerClickListener(new MapboxMap.OnMarkerClickListener() {
  @Override
  public boolean onMarkerClick(@NonNull Marker marker) {
    Toast.makeText(MainActivity.this, marker.getTitle(), Toast.LENGTH_LONG).show();
    return true;
  }
});
```

### Update a marker

{{
  <Floater
    url="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/annotations/AnimatedMarkerActivity.java"
    title="Animate marker"
    category="example"
    text="Use a ValueAnimator to animate a marker between two positions."
  />
}}

If you have intentions to update a marker rather than completely removing it, the SDK provides a few update methods. Using these mean less boilerplate code and an increase in performance since you are only updating the marker. Using these update APIs, you can create animating markers using a [ValueAnimator](https://developer.android.com/reference/android/animation/ValueAnimator.html) for example. The APIs for updating either the marker position or icon bitmap are found inside of your marker object reference.

```java
// Change the marker location
marker.setPosition(new LatLng(-37.822884, 144.981916));

// Update the marker icon
marker.setIcon(icon);
```

## Polyline and polygons

Adding a line or polygon to your map is like adding a marker. Due to the nature of these objects, different APIs are exposed, such as polygon color or line width. Instead of taking in a single position,  bundle all your LatLng's inside a List and then pass them in using the `addAll()` API.

```java
// Draw polyline on the map
mapboxMap.addPolyline(new PolylineOptions()
  .addAll(points)
  .color(Color.parseColor("#3bb2d0"))
  .width(2));

// Draw a polygon on the map
mapboxMap.addPolygon(new PolygonOptions()
  .addAll(polygon)
  .fillColor(Color.parseColor("#3bb2d0")));
```
