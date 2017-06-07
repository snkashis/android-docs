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
        <svg class='flex-child align-middle icon--l'><use xlink:href='#icon-chevron-right'/></svg>
      </div>
    </div>
  </a>
</div>

Using Runtime styling, you're able to dynamically change the look and feel of your map in real time. Lighten or darken the map based on the time of day, personalize icons and the colors of parks based on your users’ activity, switch languages on the fly, or bump the size of labels based on user preferences to improve legibility. Style existing map data or mix in your own – Runtime Styling is performant even with massive datasets.

Runtime styling expands upon the design power of Mapbox Studio and exposes all the same properties and attributes directly to mobile developers in our SDK.

If you'd like to add simple annotations on your map quickly, you might want to make use of the [annotations offered](/map-sdk/overview/annotations/).

### Sources
Sources hold the data for layers to use in your map. There are a handful of different source types supported, choosing one depends on your data type. Adding a source won't instantly make data appear on the map because sources don't contain styling details like color or width. Layers refer to a source and give it a visual representation.

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
        <svg class='flex-child align-middle icon--l'><use xlink:href='#icon-chevron-right'/></svg>
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
        <svg class='flex-child align-middle icon--l'><use xlink:href='#icon-chevron-right'/></svg>
      </div>
    </div>
  </a>
</div>

A benefit of having your data inside a GeoJSON source is that you can update, remove, or add additional features inside the source at any time, providing a solution to animating data in your map through the Runtime Styling API. For example, using an Android [ValueAnimator](https://developer.android.com/reference/android/animation/ValueAnimator.html), you can move a feature by updating its coordinates within the GeoJSON data.

<!-- NOTE link to GoJSON plugin -->

### Layers
While sources hold the data, layers are used to style and display the information. Several layer types are offered depending on your source geometry. Except for layers of the background type, each layer needs to refer to a source. You can optionally filter features and then define how those features are styled.

Each layer offers a `setProperties` API which can be used to style the layer in many different ways. Note that instead of creating different layers depending on certain cases inside your source data, it's recommended to use data-driven styling instead to reduce the number of layers the map needs to render.

#### Background
The background layer type is unique in that it doesn't require a source. Background layers can be a solid color or a pattern.

```java
BackgroundLayer backgroundLayer = new BackgroundLayer("background-layer");
backgroundLayer.setProperties(
  PropertyFactory.backgroundColor(Color.BLUE)
);
```

#### Fill
Fill layers have an enclosed shape geometry that can be useful for marking areas on a map. The geometry's similar to a line layer consisting of a series of coordinates in a particular order with the first and last points having the same coordinate.

```java
FillLayer fillLayer = new FillLayer("layer-id", "source-id");
fillLayer.setProperties(
  PropertyFactory.fillColor(Color.GREEN)
);
```
To alter the shape of the geometry once you have added it, the layer can remain with no changes needed, only the source it's using should be updated. The layer will always display the latest updates inside its source.

<!-- NOTE will a none enclosed polygon fill be closed automatically? -->
<!-- NOTE talk about mapboxMap.getLayers(); -->
<!-- NOTE talk about mapboxMap.addLayerBelow(); -->

#### Line

<div class="fr flex-parent">
  <a href="https://github.com/mapbox/mapbox-android-demo/blob/master/MapboxAndroidDemo/src/main/java/com/mapbox/mapboxandroiddemo/examples/styles/LineLayerActivity.java" class="text-decoration-none flex-child--no-shrink mt6 color-blue-on-hover note-card flex-child-mxl">
    <div class="border round wmax360 border--gray-light flex-parent">
      <div class="flex-child p12">
        <div class="txt-s txt-bold">
          Create and Display Line Layer
          <span class="txt-xs txt-bold align-middle px6 color-purple round bg-purple-faint">GUIDE</span>
        </div>
        <div class="txt-s mt3 mb0 color-gray">
          Build a GeoJSON FeatureCollection with the line geometry and then display it on the map using a line layer.
        </div>
      </div>
      <div class="flex-child flex-child--no-shrink w18 fr border-l border--gray-light flex-parent flex-parent--center-cross">
        <svg class='flex-child align-middle icon--l'><use xlink:href='#icon-chevron-right'/></svg>
      </div>
    </div>
  </a>
</div>

A series of coordinates can be combined to create a line segment that shows on a map. Between each pair of coordinates, a line segment's created which gets drawn straight and connects the two points.

<!-- NOTE add something visual here building the line layer? -->

Before beginning, you'll want to ensure that the Source your layer will be using has lineStrings as part of its geometry, an example creating this can be seen in the GeoJSON source section. Once the source has been created and added to the map, a lineLayer can be initiated, and properties can be set.

```java
LineLayer lineLayer = new LineLayer("line-layer", "line-source");

// The layer properties for our line. This is where we make the line dotted, set the
// color, etc.
lineLayer.setProperties(
  PropertyFactory.lineDasharray(new Float[]{0.01f, 2f}),
  PropertyFactory.lineCap(Property.LINE_CAP_ROUND),
  PropertyFactory.lineJoin(Property.LINE_JOIN_ROUND),
  PropertyFactory.lineWidth(5f),
  PropertyFactory.lineColor(Color.parseColor("#e55e5e"))
);

mapboxMap.addLayer(lineLayer);
```

#### Symbol
Symbol layers indicate a single position on the map with either an icon or text label. Similar to GL Markers and Marker Views, the symbol layer can represent the same data and offers the most power for in map displaying. To begin with, we will show how to add a marker image to the map and then display it as your symbol layer.

```java
Bitmap icon = BitmapFactory.decodeResource(getResources(), R.drawable.my_marker_icon);
mapboxMap.addImage("my-marker-image", icon);

SymbolLayer symbolLayer = new SymbolLayer("layer-id", "source-id");
symbolLayer.setProperties(
  PropertyFactory.iconImage("my-marker-image")
);

mapboxMap.addLayer(symbolLayer);
```

Not only can symbol layers mark locations on the map using an image, but they can also display text directly on the map. Text symbol layers are done in a similar process to the image snippet given above, only the properties of the layer change.

```java
SymbolLayer selectedMarker = new SymbolLayer("selected-marker-layer", "selected-marker")
  .withProperties(
    PropertyFactory.textField("Mapbox"),
    PropertyFactory.textColor(Color.BLACK),
    PropertyFactory.textOpacity(0.5f)
  );

mapboxMap.addLayer(selectedMarker);
```

<!-- NOTE build an example showing how to display text stored in source property -->

#### Raster
Raster layers are typically a collection of images that display on top of the base map tiles. While Vector tiles are preferred, satellite imagery or legacy map styles render as a raster layer.

```java
RasterSource rasterSource = new RasterSource("source-id", "mapbox://mapbox.u8yyzaor");
mapboxMap.addSource(rasterSource);

RasterLayer rasterLayer = new RasterLayer("layer-id", "source-id");
mapboxMap.addLayer(rasterLayer);
```

#### Circle
Circle layers have a single center coordinate which comes from the source data. It's a geographically accurate projection of a circle on the Earth's surface drawn on the map. A few default properties are provided but can be overriddenwhen the layers first created.

```java
VectorSource vectorSource = new VectorSource("source-id", "mapbox://mapbox.2opop9hr");
mapboxMap.addSource(vectorSource);

CircleLayer circleLayer = new CircleLayer("layer-id", "source-id");
circleLayer.setSourceLayer("museum-cusco");
museumsLayer.setProperties(
  PropertyFactory.visibility(Property.VISIBLE),
  PropertyFactory.circleRadius(8f),
  PropertyFactory.circleColor(Color.argb(1, 55, 148, 179))
);
```

### Filtering
A filter selects specific features from a layer. A filter is an array of one of the following forms:

| API             | Description                                                   |
|-----------------|---------------------------------------------------------------|
| `Filter.notIn`  | Check the property is not within the given set                |
| `Filter.in`     | Check the property is within the given set                    |
| `Filter.lte`    | Check the property equals or does not exceeds the given value |
| `Filter.lt`     | Check the property does not exceed the given value            |
| `Filter.gte`    | Check the property exceeds or equals the given value          |
| `Filter.gt`     | Check the property exceeds the given value                    |
| `Filter.neq`    | Check the property does not equal the given value             |
| `Filter.eq`     | Check the property equals the given value                     |
| `Filter.notHas` | Check the property's existence, negated                       |
| `Filter.has`    | Check the property's existence                                |
| `Filter.none`   | Groups a collection of statements in an 'none' relationship   |
| `Filter.any`    | Groups a collection of statements in an 'any' relationship    |
| `Filter.all`    | Groups a collection of statements in an 'all' relationship    |

A key must be a string that identifies a feature property or a special key. Read [more on filters here](https://www.mapbox.com/mapbox-gl-js/style-spec/#types-filter)

#### Modify Properties
Sources and layers aren't immutable and therefore, can be modified anytime during the map render. For example, to alter the fill color of a layer after it's been added to the map, you use the `mapboxMap` object to get the layer and set the property.

```java
FillLayer fillLayer = (FillLayer) mapboxMap.getLayer("fill-layer-id");
if (fillLayer != null) {
  fillLayer.setProperties(
    PropertyFactory.fillColor(Color.GREEN)
  );
}
```

In a GeoJSON source, you are able to modify, add, remove, or replace the FeatureCollection like so:

```java
GeoJsonSource geoJsonSource = (GeoJsonSource) mapboxMap.getSource("geojson-source-id");
if (geoJsonSource != null) {
  geoJsonSource.setGeoJson(myFeatureCollection);
}
```

#### Capturing click events:
Layers are not clickable and don't expose any event listeners for you to handle user input. Instead, the map querying feature described in a separate doc go over how to detect when a user has clicked on a polygon inside your fill layer for example.
