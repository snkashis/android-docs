import * as constants from '../constants';

export const androidApiReferenceLinks = {
  maps: [
    {
      label: 'Maps SDK for Android',
      id: 'maps',
      href: `/api/map-sdk/${constants.MAP_SDK_VERSION}/index.html`
    }
  ],
  plugins: [
    {
      label: 'Location layer',
      id: 'location',
      href: `/api/plugins/locationlayer/${
        constants.LOCATION_LAYER_PLUGIN_VERSION
      }/index.html`
    },
    {
      label: 'Building',
      id: 'building',
      href: `/api/plugins/building/${
        constants.BUILDING_PLUGIN_VERSION
      }/index.html`
    },
    {
      label: 'Places',
      id: 'places',
      href: `/api/plugins/places/${constants.PLACES_PLUGIN_VERSION}/index.html`
    },
    {
      label: 'Traffic',
      id: 'traffic',
      href: `/api/plugins/traffic/${
        constants.TRAFFIC_PLUGIN_VERSION
      }/index.html`
    },
    {
      label: 'Offline',
      id: 'offline',
      href: `/api/plugins/offline/${
        constants.OFFLINE_PLUGIN_VERSION
      }/index.html`
    },
    {
      label: 'Localization',
      id: 'localization',
      href: `/api/plugins/localization/${
        constants.LOCALIZATION_PLUGIN_VERSION
      }/index.html`
    },
    {
      label: 'China',
      id: 'china',
      href: `/android-docs/api/plugins/china/${
        constants.CHINA_PLUGIN_VERSION
      }/china-release/index.html`
    }
  ],
  java: [
    {
      label: 'mapbox-java-core',
      id: 'java-core',
      href: `/api/mapbox-java/libjava-core/${
        constants.JAVA_SDK_VERSION
      }/index.html`
    },
    {
      label: 'mapbox-java-geojson',
      id: 'java-geojson',
      href: `/api/mapbox-java/libjava-geojson/${
        constants.JAVA_SDK_VERSION
      }/index.html`
    },
    {
      label: 'mapbox-java-turf',
      href: `/api/mapbox-java/libjava-turf/${
        constants.JAVA_SDK_VERSION
      }/index.html`
    },
    {
      label: 'mapbox-java-services',
      id: 'java-services',
      href: `/api/mapbox-java/libjava-services/${
        constants.JAVA_SDK_VERSION
      }/index.html`
    }
  ],
  navigation: [
    {
      label: 'navigation',
      id: 'navigation',
      href: `/api/navigation-sdk/navigation/${
        constants.NAVIGATION_VERSION
      }/index.html`
    },
    {
      label: 'navigation-ui',
      id: 'navigation-ui',
      href: `/api/navigation-sdk/navigation-ui/${
        constants.NAVIGATION_VERSION
      }/index.html`
    }
  ],
  core: [
    {
      label: 'Core',
      id: 'core',
      href: `/api/telemetry/libcore/${constants.CORE_VERSION}/index.html`
    }
  ]
};
