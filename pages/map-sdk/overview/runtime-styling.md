---
title: Runtime Styling
path: /map-sdk/overview/runtime-styling/
---
# Runtime Styling

<div class="fr flex-parent">
  <a href="https://www.mapbox.com/mapbox-gl-js/style-spec/" class="text-decoration-none flex-child--no-shrink mt6 color-blue-on-hover note-card flex-child-mxl">
    <div class="border round wmax360 border--gray-light flex-parent">
      <div class="flex-child p12">
        <div class="txt-s txt-bold">
          Style Spec Info
          <span class="txt-xs txt-bold align-middle px6 color-purple round bg-purple-faint">GUIDE</span>
        </div>
        <div class="txt-s mt3 mb0 color-gray">
          View a full list of the features in runtime styling not specific to Android.
        </div>
      </div>
      <div class="flex-child flex-child--no-shrink w18 fr border-l border--gray-light flex-parent flex-parent--center-cross">
        <svg class='flex-child align-middle icon--l'><use href='#icon-chevron-right'/></svg>
      </div>
    </div>
  </a>
</div>

Using Runtime styling, your able to dynamically change the look and feel of your map in real time. Lighten or darken the map based on the time of day, personalize icons and the colors of parks based on your users’ activity, switch languages on the fly, or bump the size of labels based on user preferences to improve legibility. Style existing map data or mix in your own – Runtime Styling is performant even with massive datasets.

Runtime styling expands upon the design power of Mapbox Studio and exposes all the same properties and attributes directly to mobile developers in our SDK.

### Sources
Sources hold the data to be used inside a layer in your map. There are a handful of different source types supported, choosing one depends on your data type. Adding a source won't instantly make data appear on the map because sources don't contain styling details like color or width. Layers refer to a source and give it a visual representation.

When creating a new source, two parameters are required, a source ID (String) and the source date.

#### Vector
Vector source tiles must be in [Mapbox Vector Tile format](https://www.mapbox.com/developers/vector-tiles/). All layers that use a vector source must specify a "source-layer" value. For vector tiles hosted by Mapbox, the "url" value should be of the form `mapbox://mapid`.

```java
// Adding a vector source layer
VectorSource vectorSource = new VectorSource("vector-source", "mapbox://mapbox.mapbox-terrain-v2");
mapboxMap.addSource(vectorSource);
```

#### Raster
Raster source tiles can be added to your map if they are in TileJSON format. If hosted by Mapbox, the "url" value should be of the form `mapbox://mapid`.

```java
// Adding a raster source layer
RasterSource rasterSource = new RasterSource("raster-source", "mapbox://mapbox.u8yyzaor");
mapboxMap.addSource(rasterSource);
```

#### GeoJson

<div class="fr flex-parent">
  <a href="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/styles/LineLayerActivity.java" class="text-decoration-none flex-child--no-shrink mt6 color-blue-on-hover note-card flex-child-mxl">
    <div class="border round wmax360 border--gray-light flex-parent">
      <div class="flex-child p12">
        <div class="txt-s txt-bold">
          Add a GeoJSON source
          <span class="txt-xs txt-bold align-middle px6 color-blue round bg-blue-faint">EXAMPLE</span>
        </div>
        <div class="txt-s mt3 mb0 color-gray">
          Create a GeoJSON feature collection dynamically and then add it as a map source.
        </div>
      </div>
      <div class="flex-child flex-child--no-shrink w18 fr border-l border--gray-light flex-parent flex-parent--center-cross">
        <svg class='flex-child align-middle icon--l'><use href='#icon-chevron-right'/></svg>
      </div>
    </div>
  </a>
</div>

Adding a GeoJSON source can be done in a few different ways. Providing a URL to the GeoJSON raw data hosted online (or locally inside the assets folder for example) or you can build your own GeoJSON feature collection directly inside the code. The snippets of code below show the different ways to add a GeoJSON source to your map.

Add a GeoJSON source from URL:
```java
URL geoJsonUrl = new URL("https://url-to-geojson-file.geojson");
GeoJsonSource geoJsonSource = new GeoJsonSource("geojson-source", geoJsonUrl);
mapboxMap.addSource(geoJsonSource);
```

Load a locally stored GeoJSON file and add it to your map as a source:
```java
// Either use the method provided below or your preferred way of loading in a JSON file.
private String loadJsonFromAsset(String filename) throws IOException {
  // loads in GeoJSON files from the assets folder.
  InputStream is = getAssets().open(filename);
  int size = is.available();
  byte[] buffer = new byte[size];
  is.read(buffer);
  is.close();
  return new String(buffer, "UTF-8");
}

GeoJsonSource source = new GeoJsonSource("geojson-source", loadJsonFromAsset("local_file.geojson"));
mapboxMap.addSource(indoorBuildingSource);
```

Create a GeoJSON feature collection and then add it to your map:
```java
// Create a list to store our line coordinates.
List routeCoordinates = new ArrayList<Position>();
routeCoordinates.add(Position.fromCoordinates(-118.394391, 33.397676));
routeCoordinates.add(Position.fromCoordinates(-118.370917, 33.391142));

// Create the LineString from the list of coordinates and then make a GeoJSON
// FeatureCollection so we can add the line to our map as a layer.
LineString lineString = LineString.fromCoordinates(routeCoordinates);
FeatureCollection featureCollection =
  FeatureCollection.fromFeatures(new Feature[]{Feature.fromGeometry(lineString)});

GeoJsonSource geoJsonSource = new GeoJsonSource("geojson-source", featureCollection);
mapboxMap.addSource(geoJsonSource);
```

<div class="fr flex-parent">
  <a href="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/styles/LineLayerActivity.java" class="text-decoration-none flex-child--no-shrink mt6 color-blue-on-hover note-card  flex-child-mxl">
    <div class="border round wmax360 border--gray-light flex-parent">
      <div class="flex-child p12">
        <div class="txt-s txt-bold">
          Runtime Animations
          <span class="txt-xs txt-bold align-middle px6 color-red round bg-red-faint">TUTORIAL</span>
        </div>
        <div class="txt-s mt3 mb0 color-gray">
          Android tutorial walking through various ways to animate map sources and layers.
        </div>
      </div>
      <div class="flex-child flex-child--no-shrink w18 fr border-l border--gray-light flex-parent flex-parent--center-cross">
        <svg class='flex-child align-middle icon--l'><use href='#icon-chevron-right'/></svg>
      </div>
    </div>
  </a>
</div>

A benefit of having your data inside a GeoJSON source is that you can update, remove, or add additional features inside the source at anytime. This provides a solution to animating data in your map through the Runtime Styling API. For example, using an Android [ValueAnimator](https://developer.android.com/reference/android/animation/ValueAnimator.html), you can move a feature by updating it's coordinates within the GeoJSON data.

<!-- TODO add to animation tutorial
```java
private void animateSource() {
ValueAnimator locationAnimator = ValueAnimator.ofObject(new PointEvaluator(),
  Point.fromCoordinates(new double[] {previousLocation.getLongitude(), previousLocation.getLatitude()}),
  Point.fromCoordinates(new double[] {location.getLongitude(), location.getLatitude()})
    );

locationAnimator.setDuration(1000);
locationAnimator.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() {
  @Override
  public void onAnimationUpdate(ValueAnimator animation) {
    if (locationGeoJsonSource != null) {
      locationGeoJsonSource.setGeoJson(FeatureCollection.fromFeatures(
        new Feature[] {Feature.fromGeometry((Point) animation.getAnimatedValue())}
      ));
    }
  }
});
locationAnimator.start();
}

// Method is used to interpolate the user icon animation.
private static class PointEvaluator implements TypeEvaluator<Point> {
  @Override
  public Point evaluate(float fraction, Point startValue, Point endValue) {
    return Point.fromCoordinates(new double[] {
      startValue.getCoordinates().getLongitude() + (
        (endValue.getCoordinates().getLongitude() - startValue.getCoordinates().getLongitude()) * fraction),
      startValue.getCoordinates().getLatitude() + (
        (endValue.getCoordinates().getLatitude() - startValue.getCoordinates().getLatitude()) * fraction)
    });
  }
}
``` -->

<!-- link to GoJSON plugin -->

### Layers

#### Background

#### Fill

#### Line

#### Symbol

#### Raster

#### Circle

### Image
