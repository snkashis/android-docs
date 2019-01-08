---
title: "Off-Route Detection"
description: "The Mapbox Navigation SDK for Android offers off-route detection for your Android app's navigation experience. Read this documentation to learn how."
prependJs:
  - "import CodeLanguageToggle from '../../../components/code-language-toggle';"
  - "import ToggleableCodeBlock from '../../../components/toggleable-code-block';"
---

A default off-route detection class, `OffRouteDetector`, is included in the Navigation SDK. This class uses our internal route-following library to run a series of calculations using the incoming `Location` and the current `DirectionsRoute` to determine if a user has strayed too far from the route.

The `OffRouteListener` can be used to handle reroute events. Listen for when a user goes off route using the `OffRouteListener`, fetch a new `DirectionsRoute`, and use `MapboxNavigation#startNavigation(DirectionsRoute)` with the fresh route to restart navigation.

{{
<CodeLanguageToggle id="off-route-callback" />
<ToggleableCodeBlock

java={`
navigation.addOffRouteListener(new OffRouteListener() {
  @Override
  public void userOffRoute(Location location) {
    NavigationRoute.builder(this)
      .accessToken(Mapbox.getAccessToken())
      .origin(newOrigin)
      .destination(destination)
      .build().getRoute(new Callback<DirectionsResponse>() {
        @Override
        public void onResponse(Call<DirectionsResponse> call, Response<DirectionsResponse> response) {
          // Update MapboxNavigation here with new route
          // MapboxNavigation#startNavigation
        }

        @Override
        public void onFailure(Call<DirectionsResponse> call, Throwable t) {

        }
       });
  }
});
`}

kotlin={`
navigation?.addOffRouteListener {
  NavigationRoute.builder(this)
  	.accessToken(Mapbox.getAccessToken()!!)
  	.origin(newOrigin)
  	.destination(destination)
  	.build().getRoute(object : Callback<DirectionsResponse> {
    	override fun onResponse(call: Call<DirectionsResponse>, response: Response<DirectionsResponse>) {
    	        // Update MapboxNavigation here with new route
    	        // MapboxNavigation#startNavigation
    	}

    	override fun onFailure(call: Call<DirectionsResponse>, t: Throwable) {

    	}
    })
}
`}
/>
}}

If you would like to provide your own implementation for `OffRoute` detection, you can replace the default `OffRouteDetector` class.
To do this, create your own class that extends from `OffRoute` and set this new class using `MapboxNavigation#setOffRouteEngine(OffRoute)`:

{{
<CodeLanguageToggle id="off-route-custom" />
<ToggleableCodeBlock

java={`
  OffRoute myOffRouteEngine = new OffRoute() {
    @Override
    public boolean isUserOffRoute(Location location, RouteProgress routeProgress, MapboxNavigationOptions options) {
      // User will never be off-route
      return false;
    }
  };
  // MapboxNavigation
  navigation.setOffRouteEngine(myOffRouteEngine);
`}

kotlin={`
  val myOffRouteEngine = object : OffRoute() {
    override fun isUserOffRoute(location: Location, routeProgress: RouteProgress, options: MapboxNavigationOptions): Boolean {
      // User will never be off-route
      return false
    }
  }
  // MapboxNavigation
  navigation.offRouteEngine = myOffRouteEngine
`}
/>
}}
