import * as constants from '../constants';

export const androidApiReferenceLinks = [
  {
    product: 'maps',
    references: [
      {
        name: 'Maps SDK for Android',
        path: `/api/map-sdk/${constants.MAP_SDK_VERSION}/index.html`
      }
    ]
  },
  {
    product: 'plugins',
    references: [
      {
        name: 'Location layer',
        path: `/api/plugins/locationlayer/${
          constants.LOCATION_LAYER_PLUGIN_VERSION
        }/index.html`
      },
      {
        name: 'Building',
        path: `/api/plugins/building/${
          constants.BUILDING_PLUGIN_VERSION
        }/index.html`
      },
      {
        name: 'Places',
        path: `/api/plugins/places/${
          constants.PLACES_PLUGIN_VERSION
        }/index.html`
      },
      {
        name: 'Traffic',
        path: `/api/plugins/traffic/${
          constants.TRAFFIC_PLUGIN_VERSION
        }/index.html`
      },
      {
        name: 'Offline',
        path: `/api/plugins/offline/${
          constants.OFFLINE_PLUGIN_VERSION
        }/index.html`
      },
      {
        name: 'Localization',
        path: `/api/plugins/localization/${
          constants.LOCALIZATION_PLUGIN_VERSION
        }/index.html`
      },
      {
        name: 'China',
        path: `/api/plugins/china/${constants.CHINA_PLUGIN_VERSION}/index.html`
      }
    ]
  },
  {
    product: 'java',
    references: [
      {
        name: 'mapbox-java-core',
        path: `/api/mapbox-java/libjava-core/${
          constants.JAVA_SDK_VERSION
        }/index.html`
      },
      {
        name: 'mapbox-java-geojson',
        path: `/api/mapbox-java/libjava-geojson/${
          constants.JAVA_SDK_VERSION
        }/index.html`
      },
      {
        name: 'mapbox-java-turf',
        path: `/api/mapbox-java/libjava-turf/${
          constants.JAVA_SDK_VERSION
        }/index.html`
      },
      {
        name: 'mapbox-java-services',
        path: `/api/mapbox-java/libjava-services/${
          constants.JAVA_SDK_VERSION
        }/index.html`
      }
    ]
  },
  {
    product: 'navigation',
    references: [
      {
        name: 'navigation',
        path: `/api/navigation-sdk/navigation/${
          constants.NAVIGATION_VERSION
        }/index.html`
      },
      {
        name: 'navigation-ui',
        path: `/api/navigation-sdk/navigation-ui/${
          constants.NAVIGATION_VERSION
        }/index.html`
      }
    ]
  },
  {
    product: 'core',
    references: [
      {
        name: 'Core',
        path: `/api/telemetry/libcore/${constants.CORE_VERSION}/index.html`
      }
    ]
  }
];
