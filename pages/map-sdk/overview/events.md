---
title: Events
path: /map-sdk/overview/events/
---
# Events
The Map SDK provides various ways to listen to map events. The majority of listeners the SDK offers are listed below, however, you'll occasionally find other listeners specific to their coresponding API which can also be used. 

### Map click & long click events
Click (tap) events can be setup through the `MapboxMap` object and invoke a callback each time the event occurs. In both cases, the callback provides a `LatLng` where the user click occurred on the map. To add a onClick listener to your map, add the following snippet inside your applications code:

```java
mapboxMap.setOnMapClickListener(new MapboxMap.OnMapClickListener() {
  @Override
  public void onMapClick(@NonNull LatLng point) {
    String string = String.format(Locale.US, "User clicked at: %s", point.toString())
    Toast.makeText(MainActivity.this, string, Toast.LENGTH_LONG).show();
  }
});
```

#### Convert from screen pixel
In occassions when you need to know the corresponding location on the screen where the user gesture occurred, you can convert the LatLng point to screen pixels. The MapboxMap object provides the `Projection` from the map which allows you to convert between `LatLng` coordinates to screen pixel using `mapboxMap.getProjection().toScreenLocation(<LatLng>);`. The reverse can be done when you have a screen location in pixels and need to convert it to a corisponding `LatLng` object.

A frequent usecase for converting the values between `LatLng` and pixel coordinates is when you'd like to query a map layer or source in order to, for example, determine whether or not the users clicked on a POI. You can read more on how to do this in the [Query map features]() documentation.

### Camera change events
The maps camera represents the view looking down on the maps flat plane. In almost all cases, you'll be interacting with the camera to adjust the maps starting zoom and position. The user also has the ability to manipulate the camera by performing gestures on the map such as pinch to zoom, two finger scroll to tilt, and single finger move to adjust the position.

The Map SDK provides a handful of camera change listeners which can be used to be notified of any or specific camera movements. Different camera listeners are provided to determine if the camera movement was caused by a user gesture, built-in API animations, or a developer-controlled movement. The snippet below shows the various camera listeners avaliable:

```java
mapboxMap.setOnCameraMoveStartedistener(new MapboxMap.OnCameraMoveStartedListener() {

  private final String[] REASONS = {"REASON_API_GESTURE", "REASON_DEVELOPER_ANIMATION", "REASON_API_ANIMATION"};

  @Override
  public void onCameraMoveStarted(int reason) {
    String string = String.format(Locale.US, "OnCameraMoveStarted: %s", REASONS[reason - 1])
    Toast.makeText(MainActivity.this, string, Toast.LENGTH_LONG).show();
  }
});

mapboxMap.setOnCameraMoveListener(new MapboxMap.OnCameraMoveListener() {
  @Override
  public void onCameraMove() {
    Toast.makeText(MainActivity.this, "onCameraMove", Toast.LENGTH_LONG).show();
  }
});

mapboxMap.setOnCameraMoveCancelListener(new MapboxMap.OnCameraMoveCanceledListener() {
  @Override
  public void onCameraMoveCanceled() {
    Toast.makeText(MainActivity.this, "onCameraMoveCanceled", Toast.LENGTH_LONG).show();
  }
});

mapboxMap.setOnCameraIdleListener(new MapboxMap.OnCameraIdleListener() {
  @Override
  public void onCameraIdle() {
    Toast.makeText(MainActivity.this, "onCameraIdle", Toast.LENGTH_LONG).show();
  }
});
```


### Marker and info window events

### Map change events
