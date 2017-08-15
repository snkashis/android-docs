---
title: "Route Progress object"
description: "Mapbox Android Navigation SDK RouteProgress object"
sideNavSections:
  - title: "On progress change"
  - title: "RouteProgress object"
---

# Route Progress object

The `RouteProgress` class contains all the user's progress information along the route, including leg and steps. This object's provided inside `AlertLevelChangeListener` and `ProgressChangeListener`, allowing you to get distance measurements, the percentage of route complete, current step index, and much more.

## On progress change

Like tracking user location changes, this listener's invoked every time the user's location changes but provides an updated RouteProgress object. It is strongly encouraged to use this listener since you can typically refresh most of your application's user interface. An example of this will be if you are displaying the user's current progress until the user needs to do the next maneuver. Every time this listener's invoked, you can update your view with the new information from `RouteProgress`.

Besides receiving information about the route progress, the callback also provides you with the user's current location which can provide their current speed, bearing, etc. If you have the snap to route enabled, the location object will be updated to give the snapped coordinates.

```java
navigation.addProgressChangeListener(new ProgressChangeListener() {
      @Override
      public void onProgressChange(Location location, RouteProgress routeProgress) {

      }
    });
```

## RouteProgress object

`RouteProgress` contains two subclasses for leg and step information, the tables below provide a full list of the APIs exposed.

| RouteProgress APIs          | Description           |
| --------------------------- |:---------------------:|
| getAlertUserLevel           | The most recent alert level provided by the AlertLevelChangeListener. |
| getRoute                    | The route acquired from the directions API and being used for navigation. |
| getDistanceRemaining        | The total distance the user has traveled along the route.   |
| usersCurrentSnappedPosition | Provides the users location snapped to the current route they are navigating on. |
| getLegIndex                 | The route's current leg index that the user's on.      |
| getCurrentLeg               | The route's current leg as a `routeLeg` object.    |
| getDistanceTraveled         | Total distance the user has traveled along the entire route. |
| getDurationRemaining        | The estimated duration remaining till the user arrives at their destination. |
| getFractionTraveled         | A `float` value between 0 and 1 giving the total percentage the user has completed in the navigation session.
| getCurrentLegProgress | returns the `LegProgress` object with information specific to the current route leg. You can also access step information through this object. |

| LegProgress APIs            | Description           |
| --------------------------- |:---------------------:|
| getCurrentStepProgress      | returns the `stepProgress` object with information specific to the current route step. |
| getStepIndex                | The route's current step index the user's on.      |
| getDistanceTraveled         | Total distance the user has traveled along the current leg. |
| getDurationRemaining        | The estimated duration remaining till the user reaches the last maneuver in current route leg. |
| getFractionTraveled         | A `float` value between 0 and 1 giving the total percentage the user has traveled along the current route leg. |
| getDistanceRemaining        | The total distance the user has traveled along the current leg.   |
| getPreviousStep             | Get the previous step the user traversed along, if the user is still on the first step, this will return null. |
| getCurrentStepProgress      |  Returns the current step the user is traversing along. |
| getUpComingStep             | Get the next/upcoming step immediately after the current step. If the user is on the last step on the last leg, this will return null since a next step doesn't exist. |

| StepProgress APIs           | Description           |
| --------------------------- |:---------------------:|
| getDistanceTraveled         | Total distance the user has traveled along the current step. |
| getDurationRemaining        | The estimated duration remaining till the user reaches the next step maneuver. |
| getFractionTraveled         | A `float` value between 0 and 1 giving the total percentage the user has traveled along the current step. |
| getDistanceRemaining        | The total distance the user has traveled along the current step.   |
