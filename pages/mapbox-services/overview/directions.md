---
title: "Directions"
description: "Android Mapbox Services SDK Directions API"
sideNavSections:
  - title: "Building and making requests"
  - title: "API response"
---

# Directions

- talk about how it's a wrapper for the mb directions api specifically for java/android users
- multiple waypoints between origin and final destination (up to 25 except traffic)
- point out the navigation SDK
- link to api documentation

- link to directions request example

The Directions API delivers routes for navigating the world. Driving, walking, and cycling directions are all possible for you to request, retrieve, and use in your Android project however you would like.



The Directions API does not return estimated time of arrival (ETA). If you'd like ETAs, please review [the Mapbox Matrix API](https://www.mapbox.com/android-docs/mapbox-services/overview/directions-matrix/), which returns ETAs but not route geometries or distances.

Make sure to have a look at the API documentation if you want [more information](https://www.mapbox.com/api-documentation/#directions).



### Directions request

Before requesting and receiving the Directions response, you'll need to use the `MapboxDirections` builder to set the request parameters. Building the request requires an origin `Position` object, a destination `Position` object.

[Our API documentation has a list of all of the ways that you customize the Directions request](https://www.mapbox.com/android-docs/api/mapbox-java/libjava-services/2.2.1/com/mapbox/services/api/directions/v5/DirectionsCriteria.html)

```java
 MapboxDirections client = new MapboxDirections.Builder()
      .setOrigin(origin)
      .setDestination(destination)
      .setOverview(DirectionsCriteria.OVERVIEW_FULL)
      .setProfile(DirectionsCriteria.PROFILE_DRIVING)
      .setAccessToken(Mapbox.getAccessToken())
      .build();
```

- Requests using driving, walking, and cycling profiles can specify up to 25 total waypoints along the route.
- Requests using the driving-traffic profile can specify up to 3 waypoints.

- Traffic coverage for the driving-traffic profile is available in supported geographies. Requests to this profile revert to driving profile results for areas without traffic coverage.
- Maximum 60 requests per minute
- Computing route alternatives is not supported on the driving-traffic profile.

- Talk about Builder
- required parameters
- important optional params
- different profiles
- alternative routes (ordered by descending recommendation rank. May contain at most two routes.)
- bearings and continue straight and how that effects the route

- code snippet

### Directions response

Like all API calls inside of Mapbox Services, the response will come inside a Retrofit callback. If the call was successful, you can access the API's returned response inside of `onResponse`.

```java
    client.enqueueCall(new Callback<DirectionsResponse>() {
      @Override
      public void onResponse(Call<DirectionsResponse> call, Response<DirectionsResponse> response) {
       
      }

      @Override
      public void onFailure(Call<DirectionsResponse> call, Throwable throwable) {

      }
    });
```

- not all request have a result, go through potential outcomes (usage of `code`)
- waypoints inside response (original points snapped to route and with additional info)
- retrofit
- convert line geometry to a lineString

- code snippet

#### Legs

- discuss what could cause 2 or more legs in a response (rare)
- annotations

#### Steps

- getting the step object
- getting step instructions
- intersections


#### Maneuvers

- how to get step maneuver object from response
- point out that maneuvers happen generally at first coordinate in step
- modifier and type
- instructions
- lanes object
