---
title: "Traffic"
description: "Mapbox Android Traffic Plugin"
sideNavSections:
  - title: "Add traffic"
  - title: "Traffic colors"
---

# Traffic

The Mapbox Traffic Plugin adds a real-time traffic layer to any Mapbox base map. If you want to display a traffic layer inside your application, you only need to include the dependency in your project and initialize the plugin. Various shades of colors indicate the congestion level for any given part of a road segment. If not enough traffic data available for a given road, no road information will be shown.

Similar to other plugins, a third optional parameter in the traffic plugin's constructor which is useful for specifying the layer in which you want the traffic to display below. If the layer ID's missing in the third parameter, the plugin will attempt to place the traffic below all symbol layers so that text and icons on the map are still visible on top of the traffic lines. It is always a good idea to pass in a string ID rather than relying on the Plugin to attempt to place the traffic below a symbol layer since it isn't guaranteed to work properly.

To install, head over to the [Mapbox Plugin Overview](/android-docs/plugins/overview/) page which will walk you through adding the dependency.

## Add traffic

Since the Traffic Plugin requires the `mapboxMap` object, it's necessary to initialize the plugin either inside `onMapReady` (recommended) or in another place you know the `mapboxMap` will not be null. Once initialized, `trafficPlugin.setVisibility()` to true will enable the traffic. You can use `isVisible()` which returns a boolean true if the traffic's visible, otherwise false.

```java
@Override
public void onMapReady(MapboxMap mapboxMap) {
  TrafficPlugin trafficPlugin = new TrafficPlugin(mapView, mapboxMap);
  trafficPlugin.setVisibility(true); // Enable the traffic view
}
```

## Traffic colors

The table below provides information for each color displayed in the traffic layer and what the corresponding congestion level is.

| Color | Hex value | Congestion level |
| --- | --- | --- |
| Green | `#39c66d` | Low |
| Yellow | `#ff8c1a` | Moderate |
| Orange | `#ff0015` | Heavy |
| Red | `#981b25` | Severe |
