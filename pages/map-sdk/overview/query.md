---
title: Query Map Features
path: /map-sdk/overview/query-map/
---
# Query Map Features

The Map SDK gives you the tools to query the map layers to get a list of GeoJSON features which hold valuable information used for rendering the map. An example usage of this can be to query where the user clicks/taps the map and determine if they selected a POI displaying on the map. You can then move through the provided GeoJSON Feature to get the properties which holds the POI name as a `String`. It's important to consider that querying a map won't always return the information you are looking for, therefore, it is possible to receive a Feature list with 0 items in it.

<div class="fr flex-parent">
  <a href="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/query/QueryFeatureActivity.java" class="text-decoration-none flex-child--no-shrink mt6 color-blue-on-hover note-card flex-child-mxl">
    <div class="border round wmax360 border--gray-light flex-parent">
      <div class="flex-child p12">
        <div class="txt-s txt-bold">
          Query at point
          <span class="txt-xs txt-bold align-middle px6 color-blue round bg-blue-faint">EXAMPLE</span>
        </div>
        <div class="txt-s mt3 mb0 color-gray">
          Query the rendered map to get the properties at a specific location.
        </div>
      </div>
      <div class="flex-child flex-child--no-shrink w18 fr border-l border--gray-light flex-parent flex-parent--center-cross">
        <svg class='flex-child align-middle icon--l'><use xlink:href='#icon-chevron-right'/></svg>
      </div>
    </div>
  </a>
</div>

Querying the map can be done considering a specific point on the screen or by first constructing a bounding box and receiving all the features found within that region. Aside from layers, it is also possible to query the source for specific information matching your query regardless if the items actually being displayed on the map.

Since the features come from tiled vector data or GeoJSON data that is converted to tiles internally, feature geometries may be split or duplicated across tile boundaries and, as a result, features may appear multiple times in query results. For example, suppose there is a highway running through the bounding rectangle of a query. The results of the query will be those parts of the highway that lie within the map tiles covering the bounding rectangle, even if the highway extends into other tiles, and the portion of the highway within each map tile will be returned as a separate feature. Similarly, a point feature near a tile boundary may appear in multiple tiles due to tile buffering.

### Query rendered features
A common usage for querying the map is to acquire information at a specific position the user is looking at. The point must be viewable inside the user devices viewport and fully rendered before you can access any information. Querying the map only accepts a screen pixel value instead of LatLng so in many cases you'll need to convert beforehand. In the snippet below, the maps clicked on which provides a LatLng we use to query the map and get the properties at that location.

```java
@Override
public void onMapClick(@NonNull LatLng point) {

  // Convert LatLng coordinates to screen pixel and only query the rendered features.
  final PointF pixel = mapboxMap.getProjection().toScreenLocation(point);
  List<Feature> features = mapboxMap.queryRenderedFeatures(pixel);

  // Get the first feature within the list if one exist
  if (features.size() > 0) {
    Feature feature = features.get(0);

    // Ensure the feature has properties defined
    if (feature.getProperties() != null) {
      for (Map.Entry<String, JsonElement> entry : feature.getProperties().entrySet()) {
        // Log all the properties
        Log.d(TAG, String.format("%s = %s", entry.getKey(), entry.getValue()));
      }
    }
  }
}
```

#### Query features inside a bounding box


#### Query & Modify GeoJSON Sources


### Alter layers using the querying features
