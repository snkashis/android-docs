---
title: Navigation Events
path: /navigation/overview/latest/navigation-events/
---
# Navigation Events

Chances are, if you are using the Navigation SDK, you'll want to listen in to events such as when the user makes progress along the route or when the user goes off-route. Listeners help you provide the user with instructions at the proper times. At the bare minimum, it is strongly encouraged to use the `OnProgressChange` listener, which is called every time the user's locations updated.

### NavigationRunning

The event callback is handy for being notified when the navigation session has started, the user has canceled the session, or the user has arrived at their final destination. From this information, you can decide when to show navigation notifications, know when it's safe to stop requesting user location updates, and much more.

```java
navigation.addNavigationEventListener(new NavigationEventListener() {
  @Override
  public void onRunning(boolean running) {

  }
});
```

### AlertLevelChange

Listening in to the alertLevelChange is useful for correctly getting the timing of user notifications while the user is traversing along the route. The listener only notifies you when the user's reached a particular point along the current step that they are on. The alert thresholds can be adjusted using the `MapboxNavigationOptions` while developing and are based on time (in seconds) until the user reaches the next maneuver.

| Alert level                         | Description           |
| --------------------------- |:-------------:|
| `DEPART_ALERT_LEVEL` | Occurs when the user first leaves the origin and shouldn't be invoked again for the rest of the navigation session. |
| `LOW_ALERT_LEVEL` | Invoked right after the user does a maneuver and they have started traversing along a new step. |
| `MEDIUM_ALERT_LEVEL` | Occurs when the user's x seconds away from their next maneuver. By default, this happens 70 seconds from the next maneuver. |
| `HIGH_ALERT_LEVEL` | Useful to know when the user's about to do the next maneuver on the route. By default, this happens 15 seconds from the next maneuver. |
| `ARRIVE_ALERT_LEVEL` | Occurs when the user has performed the last maneuver along the route and reached their final destination. |
| `NONE_ALERT_LEVEL` | Used as the starting alert when a navigation session has started. |

```java
navigation.addAlertLevelChangeListener(new AlertLevelChangeListener() {
  @Override
  public void onAlertLevelChange(int alertLevel, RouteProgress routeProgress) {
    switch (alertLevel) {
      case HIGH_ALERT_LEVEL:
        Toast.makeText(MainActivity.this, "HIGH", Toast.LENGTH_LONG).show();
        break;
      case MEDIUM_ALERT_LEVEL:
        Toast.makeText(MainActivity.this, "MEDIUM", Toast.LENGTH_LONG).show();
        break;
      case LOW_ALERT_LEVEL:
        Toast.makeText(MainActivity.this, "LOW", Toast.LENGTH_LONG).show();
        break;
      case ARRIVE_ALERT_LEVEL:
        Toast.makeText(MainActivity.this, "ARRIVE", Toast.LENGTH_LONG).show();
        break;
      case NONE_ALERT_LEVEL:
        Toast.makeText(MainActivity.this, "NONE", Toast.LENGTH_LONG).show();
        break;
      case DEPART_ALERT_LEVEL:
        Toast.makeText(MainActivity.this, "DEPART", Toast.LENGTH_LONG).show();
        break;
    }
  }
});
```

### OnProgressChange

Like tracking user location changes, this listener's invoked every time the user's location changes but provides an updated RouteProgress object. It is strongly encouraged to use this listener since you can typically refresh most of your application's user interface. An example of this will be if you are displaying the user's current progress until the user needs to do the next maneuver. Every time this listener's invoked, you can update your view with the new information from `RouteProgress`.

Besides receiving information about the route progress, the callback also provides you with the user's current location which can provide their current speed, bearing, etc. If you have the snap to route enabled, the location object will be updated to give the snapped coordinates.

```java
navigation.addProgressChangeListener(new ProgressChangeListener() {
      @Override
      public void onProgressChange(Location location, RouteProgress routeProgress) {

      }
    });
```

### UserOffRoute

During the navigation session, you can listen into the listener which gets invoked once when the user location moves outside the threshold. You can adjust this threshold using the `MapboxNavigationOptions` object, the default's 50 meters. Inside the callback, you can alert the user and reroute them if needed using `updateRoute()`.

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
