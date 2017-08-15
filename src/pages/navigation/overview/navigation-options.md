---
title: "Navigation options"
description: "Mapbox Android Navigation SDK navigation options"
sideNavSections:
  - title: Adjusting step completion thresholds
  - title: Off-route threshold
---
# Navigation options

The set constants for navigation such as duration or distance an event must occur have been thoroughly tested, however, in some situations you might find yourself wanting to adjust these values to your liking. The `MapboxNavigtionOptions` object allows for tweaking of all the default values for maneuver zone thresholds, tolerance for offline, etc. The `MapboxNavigation` object constructor optionally takes in an instance of the `MapboxNavigtionOptions` object and uses the values set inside the options class until `MapboxNavigation`'s destroyed.

```java
MapboxNavigationOptions options = new MapboxNavigationOptions();
options.setManeuverZoneRadius(70);

navigation = new MapboxNavigation(this, Mapbox.getAccessToken(), options);
```

Below you'll find information on _some_ of the APIs exposed inside the options object that allows tweaking of the navigation behavior.

## Adjusting step completion thresholds

Two heuristics are considered if the user has completed the current step and are now on the next step. The first value that's adjustable is the `ManeuverZoneRadius` which the user must enter to count as completing a step. The value to set should be in unit meters. The other determining factor is the `MaxTurnCompletionOffset`. Adjusting this value to a smaller acceptable degree angle narrows the scope while increasing the value also increases the scope.

## Off-route threshold

Part of the off-route detection involves measuring the distance between the user's exact location and the snapped to route location. If the distance is greater then the set `MaximumDistanceOffRoute`, the user is potentially considered off route. This threshold can also be adjusted using the `MapboxNavigationOptions` object. You can also adjust the seconds before a reroute occurs by using the `setSecondsBeforeReroute()` API; the default is 3 seconds.
