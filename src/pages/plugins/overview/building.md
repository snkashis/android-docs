---
title: "Building"
description: "Mapbox Android Building Plugin"
sideNavSections:
  - title: "Add the building plugin"
  - title: "Customization"
---

# Building

Support for extrusions was added with `5.1.0` of the Map SDK, unlocking the possibility to display 3D buildings on your favorite map style. The building plugin extends this functionality and makes it even easier to add buildings to a map style. To install, head over to the [Mapbox Plugin Overview](/android-docs/plugins/overview/) page which will walk you through adding the dependency.

## Add the building plugin

The Building Plugin requires no additional permissions and initialized by passing in both the map view and `mapboxMap` objects that you'd like the building layer to show on. In addition to the required params, you also have the option to provide a layer ID which you'd like the buildings to appear below. Once initialized, setting `setVisibility()` to true will result in the building layer getting added on top of your map style.

```java
buildingPlugin = new BuildingPlugin(mapView, mapboxMap);
buildingPlugin.setVisibility(true);
```

## Customization

While the building plugin provides default values which look good for most use cases, you might find yourself wanting to customize the look of the buildings to match a map style. Several APIs are available for changing building color, opacity, what zoom level buildings should start appearing, etc. The table below provides information on the current APIs useful for customization.

| API | Description |
| --- | --- |
| `setMinZoomLevel` | This is the minimum zoom level where buildings will start to show. useful to limit showing buildings at higher zoom levels. |
| `setColor` | Change the building color to any Android color int value. |
| `setOpacity` | Float value between 0.0 and 1.0 representing the opacity of the buildings. 1.0 being solid and 0.0 being invisible. |

<!-- #### Light -->
