---
title: "Navigation options"
description: "Mapbox Android Navigation SDK navigation options"
sideNavSections:
  - title: Adjusting step completion thresholds
  - title: Off-route threshold
  - title: Creating a custom notification
---
# Navigation options

The set constants for navigation such as duration or distance an event must occur, have been thoroughly tested. However, you might find yourself wanting to adjust these values to your liking in some situations. The `MapboxNavigtionOptions` object allows for tweaking all of the default values for maneuver zone thresholds, tolerance for offline, etc. The `MapboxNavigation` object constructor optionally takes in an instance of the `MapboxNavigtionOptions` object and uses the values set inside of the options class until `MapboxNavigation`'s destroyed.

The `MapboxNavigationOptions` class uses a `builder()` to set any required default values.
You can then adjust any variables needed in the class before passing your options to `MapboxNavigation`.
```java
MapboxNavigationOptions options = MapboxNavigationOptions.builder()
  .maneuverZoneRadius(70)
  .build();

navigation = new MapboxNavigation(this, Mapbox.getAccessToken(), options);
```

Here is additional information on _some_ of the APIs that are exposed inside of the options object which allows tweaking of the navigation behavior.

## Adjusting step completion thresholds

Two heuristics are considered if the user has completed the current step and are now on the next step. The first value that's adjustable is the `ManeuverZoneRadius` which the user must enter to count as completing a step. _The value to set should be in unit meters_. The other determining factor is the `MaxTurnCompletionOffset`. Adjusting this value to a smaller acceptable degree angle narrows the scope. Increasing the value also increases the scope.

## Off-route threshold

Part of the off-route detection involves measuring the distance between the user's exact location and the snapped-to-route location. The user is potentially considered off route if the distance is greater then the set `MaximumDistanceOffRoute`. This threshold can also be adjusted using the `MapboxNavigationOptions` object. You can also adjust the seconds before a reroute occurs by using the `setSecondsBeforeReroute()` API. The default is three seconds.

## Creating a custom notification

You can also pass in a custom notification when creating `MapboxNavigtionOptions`. This notificiation will show once navigation begins.

```java
CustomNavigationNotification customNavigationNotification = new CustomNavigationNotification(this);
MapboxNavigationOptions options = MapboxNavigationOptions.builder()
  .navigationNotification(customNavigationNotification)
  .build();
```

Your notification must implement `NavigationNotification`:

```java
public class CustomNavigationNotification implements NavigationNotification {

  private static final int CUSTOM_NOTIFICATION_ID = 91234821;

  private Notification customNotification;
  private NotificationCompat.Builder customNotificationBuilder;
  private NotificationManager notificationManager;
  private int numberOfUpdates;

  public CustomNavigationNotification(Context context) {
    // Get the notification manager to update your notification
    notificationManager = (NotificationManager) context.getSystemService(Context.NOTIFICATION_SERVICE);

    // Store the builder to update later
    customNotificationBuilder = new NotificationCompat.Builder(context, NAVIGATION_NOTIFICATION_CHANNEL)
      .setSmallIcon(R.drawable.ic_navigation)
      .setContentTitle("Custom Navigation Notification")
      .setContentText("Display your own content here!");

    // Build the notification
    customNotification = customNotificationBuilder.build();
  }

  @Override
  public Notification getNotification() {
    return customNotification;
  }

  @Override
  public int getNotificationId() {
    return CUSTOM_NOTIFICATION_ID;
  }

  @Override
  public void updateNotification(RouteProgress routeProgress) {
    // Update the builder with a new number of updates
    customNotificationBuilder.setContentText("Number of updates: " + numberOfUpdates++);

    // Notify the notification manager
    notificationManager.notify(CUSTOM_NOTIFICATION_ID, customNotificationBuilder.build());
  }
}
```

The method `NavigationNotification#updateNotification(RouteProgress routeProgress)` will be called
every time that the Navigation SDK creates a new `RouteProgress` update. This is your opportunity
to change anything in your notification that you'd like to update. Use a `NotificationManager` and
your notification id you provided, to notify the manager.
