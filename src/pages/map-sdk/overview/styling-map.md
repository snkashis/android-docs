---
title: "Styling the map"
description: "Learn how to use the Mapbox Maps SDK for Android to change your map style to a custom style or a pre-made style made by the talented Mapbox cartography team."
sideNavSections:
  - title: "Changing the default style"
  - title: "Using a custom Mapbox Studio style"
---

# Styling the map

The maps SDK allows full customization when it comes to displaying your map. This means you can brand the map with the colors, icons, and fonts that match your apps UI. The customization can either be done using [Mapbox Studio](https://www.mapbox.com/help/studio-manual/) or during runtime using the [Runtime Styling APIs](/android-docs/map-sdk/overview/runtime-styling/).

## Changing the default style

As powerful as styling the map can be, to get started using the Maps SDK, it offers six professional styles that will look great in your app:

- **Mapbox Streets:** Mapbox Streets is a comprehensive, general-purpose map that emphasizes legible styling of road and transit networks.
- **Outdoor:** Mapbox Outdoors is a general-purpose map with curated datasets and specialized styling tailored to hiking, biking, and the most adventurous use cases.
- **Light and Dark:** Mapbox Light and Mapbox Dark are subtle, full-featured maps designed to provide geographic context while highlighting the data on your analytics dashboard, data visualization, or data overlay.
- **Satellite:** is our full global base map that is perfect as a blank canvas or an overlay for your own data.
- **Satellite Streets:** combines our Mapbox Satellite with vector data from Mapbox Streets. The comprehensive set of road, label, and POI information brings clarity and context to the crisp detail in our high-resolution satellite imagery.
- **Traffic:** Visually show realtime traffic using either the provided day or night traffic styles.

The [style URLs](https://www.mapbox.com/help/define-style-url) for these map styles are accessible because they're `public static final String` in the `Style` class of the Mapbox Maps SDK for Android. Here's how you'd set the map to the pre-made Mapbox Dark style:

Programatically in Java:

```java
mapView.setStyleUrl(Style.DARK);
```

In a XML layout file:

```xml
mapbox:mapbox_styleUrl="@string/mapbox_style_dark"
```

## Using a custom Mapbox Studio style


Find your custom map styles in [Mapbox Studio's Styles page](https://www.mapbox.com/studio/styles/).

To use a custom map style in your project, paste a [style URL](https://www.mapbox.com/help/define-style-url) into [the `MapView`'s `mapbox_styleUrl` attribute](https://github.com/mapbox/mapbox-gl-native/blob/master/platform/android/MapboxGLAndroidSDK/src/main/res/values/attrs.xml#L6) of your activity's XML layout file.

```xml
mapbox:mapbox_styleUrl="MAP_STYLE_URL_HERE"
```

If you would like to change the map style later on, call `MapboxMap.setStyleUrl()` with the new style and your map will update.

```java
mapboxMap.setStyleUrl(MAP_STYLE_URL_HERE);
```

If a custom map style isn't loading on the device, make sure that:

- you're using a valid Mapbox access token
- [the map style is actually published](https://www.mapbox.com/help/studio-manual-styles/#publish-style)
- [the map style has been made public](https://www.mapbox.com/help/studio-manual-styles/#make-public-or-private)