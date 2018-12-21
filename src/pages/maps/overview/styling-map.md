---
title: "Styling the map"
description: "Learn how to use the Mapbox Maps SDK for Android to change your map style to a custom style or a pre-made style made by the talented Mapbox cartography team."
prependJs:
  - "import CodeLanguageToggle from '../../../components/code-language-toggle';"
  - "import ToggleableCodeBlock from '../../../components/toggleable-code-block';"

---

The Maps SDK for Android allows full customization of the look of the map. You can choose one of Mapbox's core styles designed by our cartographers or create a custom map style by adjusting the map's colors, icons, and fonts to match your application's UI or company's brand.

There are two approaches to customizing the look of the map: creating a custom map style with Mapbox Studio and loading it into your application or updating map features at runtime using the Maps SDK for Android.

Using runtime styling, you're able to dynamically change the look and feel of your map in real time. Lighten or darken the map based on the time of day, personalize icons and the colors of parks based on your users’ activity, switch languages on the fly, or bump the size of labels based on user preferences to improve legibility.

## Changing the map style

You can either change the map style URL via XML or change it programatically. If you want to set it in XML, paste your style URL into your `MapView` object's `mapbox:mapbox_styleUrl` XML attribute. If you want to change the map style programatically, call `mapboxMap.setStyleUrl()` with the style URL as the parameter.

**XML:**
```xml
<com.mapbox.mapboxsdk.maps.MapView
        android:id="@+id/mapView"
        android:layout_width="match_parent"
        android:layout_height="match_parent"
        mapbox:mapbox_styleUrl="@string/mapbox_style_mapbox_streets"/>
```

**Programatically:**
{{
<CodeLanguageToggle id="setting-style-url-java" />
<ToggleableCodeBlock

java={`
mapboxMap.setStyleUrl(uniqueStyleUrl);
`}

kotlin={`
mapboxMap.setStyleUrl(uniqueStyleUrl)
`}

/>
}}


## Default Mapbox styles

As powerful as styling the map can be, to get started using the Maps SDK, it offers six professional styles that will look great in your project:

1. **Mapbox Streets:** Mapbox Streets is a comprehensive, general-purpose map that emphasizes legible styling of road and transit networks.
2. **Outdoor:** Mapbox Outdoors is a general-purpose map with curated datasets and specialized styling tailored to hiking, biking, and the most adventurous use cases.
3. **Light and Dark:** Mapbox Light and Mapbox Dark are subtle, full-featured maps designed to provide geographic context while highlighting the data on your analytics dashboard, data visualization, or data overlay.
4. **Satellite:** is our full global base map that is perfect as a blank canvas or an overlay for your own data.
5. **Satellite Streets:** combines our Mapbox Satellite with vector data from Mapbox Streets. The comprehensive set of road, label, and POI information brings clarity and context to the crisp detail in our high-resolution satellite imagery.
6. **Traffic:** Visually show realtime traffic using either the provided day or night traffic styles.

[The Maps SDK's `Style` class](https://github.com/mapbox/mapbox-gl-native/blob/master/platform/android/MapboxGLAndroidSDK/src/main/java/com/mapbox/mapboxsdk/constants/Style.java) has `private static final String`s of the Mapbox styles' URLs so that you can conveniently reference the styles when you have to pass the style URL through the `setStyleUrl()` method or other methods in your project. For example:

{{
<CodeLanguageToggle id="dark-style-string" />
<ToggleableCodeBlock

java={`
String mapboxDarkStyleUrl = Style.DARK;
`}

kotlin={`
val mapboxDarkStyleUrl = Style.DARK
`}
/>
}}


## Retrieving a map layer

Retrieving a map layer is the first step to adjusting the visual look of the map in real time. Every map style has a stack of map layers and each layer has an id. In the professionally-designed `Mapbox Streets` style, layers in that style have ids such as `place-island`, `building-line`, `water`, `park`, and `state-label-md`.

{{
<CodeLanguageToggle id="getting-layer" />
<ToggleableCodeBlock

java={`
Layer singleLayer = mapboxMap.getLayer(UNIQUE_LAYER_ID);
`}

kotlin={`
val singleLayer = mapboxMap.getLayer(UNIQUE_LAYER_ID)
`}

/>
}}

You can view the map style's layer order and layer ids in Mapbox Studio. Another way to view this information is by printing out each layer ID to your Android logcat once the map has been loaded on the device.

{{
<CodeLanguageToggle id="printing-layer-ids" />
<ToggleableCodeBlock

java={`
mapView.getMapAsync(new OnMapReadyCallback() {
@Override
	public void onMapReady(MapboxMap mapboxMap) {

		for (Layer singleLayer : mapboxMap.getLayers()) {
		  Log.d(TAG, "onMapReady: layer id = " + singleLayer.getId());
		}

	}
});
`}

kotlin={`
mapView.getMapAsync {

	for (singleLayer in it.layers) {
	    Log.d(TAG, "onMapReady: layer id = " + singleLayer.getId())
	}

}
`}

/>
}}

Once you have an invidual map layer, you can then use [data-driven styling](/android-docs/maps/overview/data-driven-styling/) and [expressions](/android-docs/maps/overview/expressions/) to adjust the layer's properties. For example, here's how you'd use runtime styling to change the `park` layer's green color to a deeper green color:

{{
<CodeLanguageToggle id="changing-park-layer" />
<ToggleableCodeBlock

java={`
button.setOnClickListener(new View.OnClickListener() {
@Override
	public void onClick(View view) {
		
		mapboxMap.getLayers("park").setProperties(
		PropertyFactory.fillColor(Color.parseColor("#0e6001")));
		
	}
});
`}

kotlin={`
button.setOnClickListener { 

	mapboxMap.getLayers("park").setProperties(
PropertyFactory.fillColor(Color.parseColor("#0e6001"))) 
}
          
`}
/>
}}

## Style-related events

Changing the map's style triggers a "map event". Read [the map change event documentation](https://www.mapbox.com/android-docs/maps/overview/events/#map-change-events) for more information about the events and how to display or re-display data on your map _after_ a map style has finished loading.