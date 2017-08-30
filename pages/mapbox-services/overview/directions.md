---
title: "Directions"
description: "Android Mapbox Services SDK Directions API"
sideNavSections:
  - title: "Building and making requests"
  - title: "API response"
---

# Directions

The Directions API delivers routes for navigating the world. Driving, walking, and cycling directions are all possible for you to request, retrieve, and use in your Android project however you would like. 

The API is a wrapper for the Mapbox Directions API and it is specifically for Java/Android developers/users.

The Directions API does not return estimated time of arrival (ETA). If you would like ETAs for your Android project, please review [the Mapbox Matrix API](https://www.mapbox.com/android-docs/mapbox-services/overview/directions-matrix/). The Matrix API returns ETAs but _not_ route geometries or distances like the Directions API does.

The Directions API can be completely used on its own to get routes and other directional information. You should also know that [the Mapbox Navigation SDK](https://www.mapbox.com/android-docs/navigation/overview/) is built on top of and includes the Directions API. **Use the Mapbox Java Services dependency if you want to use the Mapbox Directions API without using the entire Mapbox Navigation SDK.**

```groovy
compile 'com.mapbox.mapboxsdk:mapbox-java-services:{masVersion}'
```

Make sure to have a look at the API documentation if you want [more information](https://www.mapbox.com/api-documentation/#directions).

Along with the API documentation, you can also view [the Directions example in the Mapbox Android demo app](https://github.com/mapbox/mapbox-android-demo/blob/eadaf3a81c01f1390753dbe24b560f77d117ec27/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/mas/DirectionsActivity.java) to see how to use the Directions API.



### Directions request

Before requesting and receiving the Directions response, you'll need to use the `MapboxDirections` builder to set the request parameters. Building the request requires an origin `Position` object, a destination `Position` object.

[Our API documentation has a list of all of the ways that you customize the Directions request](https://www.mapbox.com/android-docs/api/mapbox-java/libjava-services/2.2.1/com/mapbox/services/api/directions/v5/DirectionsCriteria.html)


Directions API requests for driving, walking, and cycling routes can specify up to 25 total waypoints along the route.  

Requests using the driving-traffic profile can specify up to 3 waypoints.

- Traffic coverage for the driving-traffic profile is available in supported geographies. Requests to this profile revert to driving profile results for areas without traffic coverage.
- Maximum 60 requests per minute
- Computing route alternatives is not supported on the driving-traffic profile.

The In order to correctly send all of the required and optional parameters to the Directions API

- Talk about Builder
- required parameters
- important optional params
- different profiles
- alternative routes (ordered by descending recommendation rank. May contain at most two routes.)
- bearings and continue straight and how that effects the route

```java
 MapboxDirections client = new MapboxDirections.Builder()
      .setOrigin(origin)
      .setDestination(destination)
      .setOverview(DirectionsCriteria.OVERVIEW_FULL)
      .setProfile(DirectionsCriteria.PROFILE_DRIVING)
      .setAccessToken(Mapbox.getAccessToken())
      .build();
```

### Directions response

If the call was successful, you can access the API's returned response inside of `onResponse`.


- not all request have a result, go through potential outcomes (usage of `code`)
- waypoints inside response (original points snapped to route and with additional info)

Like all API calls inside of Mapbox Services, the response will come inside a Retrofit callback. 

- convert line geometry to a lineString

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
