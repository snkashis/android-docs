---
title: "Off-Route detection"
description: "Mapbox Android Navigation SDK off-route detection"
---

# Off-Route detection

A default off-route detection class is included inside the Navigation SDK which measures the distance from the users actual location to the one you'd expect the user to be and where they should be. If the measured distance is greater than the set threshold, the `userOffRoute` callback will get invoked. It is within the `OffRouteListener` that you can handle a reroute event by using `navigation.updateRoute()`.

The threshold for determining if the users off-route can be adjusted in the `MapboxNavigationOptions` object, the default's 50 meters. In addition the off-route callback, by default, is placed on a timer to not cause a constant rerouting loop, however, this value can also be adjusted in the options class; the default is 3 seconds.

```java
navigation.addOffRouteListener(new OffRouteListener() {
      @Override
      public void userOffRoute(Location location) {
        Position newOrigin = Position.fromCoordinates(location.getLongitude(), location.getLatitude());
    navigation.updateRoute(newOrigin, destination, new Callback<DirectionsResponse>() {
      @Override
      public void onResponse(Call<DirectionsResponse> call, Response<DirectionsResponse> response) {
        // Remove the old route and redraw new one here
      }

      @Override
      public void onFailure(Call<DirectionsResponse> call, Throwable throwable) {
        // Log any failure that might occur here
      }
    });
  }
});
```
