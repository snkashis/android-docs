---
title: "Directions API"
description: "Android Mapbox Services SDK Directions API"
sideNavSections:
  - title: "Building and making requests"
  - title: "API response"
---

# Directions

The Directions API returns all travel times between many points. The API will always return the duration on the fastest route. Durations between points may not be symmetric (for example A to B may have a different duration than B to A), as the routes may differ by direction due to one-way streets or turn restrictions. The Matrix API returns durations in seconds. 

Mapbox Directions API will show you how to get where you're going. With the Directions API, you can:

calculate optimal driving, walking, and cycling routes
produce turn-by-turn instructions
produce routes with up to 25 coordinates anywhere on earth



 Make sure to have a look at the API documentation if you want [more information](https://www.mapbox.com/api-documentation/#directions).

This API allows you to build tools that efficiently check the reachability of coordinates from each other, filter points by travel time, or run your own algorithms for solving optimization problems.

The standard limit for request are a maximum 60 requests per minute and maximum 25 input coordinates. For example you can request a symmetric 25x25 matrix, an asymmetric 1x24 matrix with distinct coordinates or a 12x24 where sources and destinations share some coordinates. 

## Building and making requests

Before requesting and receiving the Directions response, you'll need to use the `MapboxDirections` builder to set the request parameters. Building the request requires an origin `Position` object, a destination `Position` object, , the type of directions profile (driving, walking, etc.), and a Mapbox access token.

```java
 MapboxDirections client = new MapboxDirections.Builder()
      .setOrigin(origin)
      .setDestination(destination)
      .setOverview(DirectionsCriteria.OVERVIEW_FULL)
      .setProfile(DirectionsCriteria.PROFILE_DRIVING)
      .setAccessToken(Mapbox.getAccessToken())
      .build();
```

## API response

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
