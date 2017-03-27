---
title: Offline
path: /map-sdk/5.0.1/offline/
---

In many cases, you might find your user base spends most of their time off the grid causing issues since the map by default downloads tiles from the internet. Using the Maps SDK you are able to download and store pre-selected regions for usage when the device isn't connected to the internet. The result of downloading the map is a fully functional map using your styles, tiles, and other resources.

### Limitations

An app can download multiple regions for offline use, but the total offline download is capped at a maximum tile count “ceiling” across all downloaded regions. The tile ceiling is set to 6,000 tiles by default but can be raised for paid plans. Use our [Tile Count Estimator](https://www.mapbox.com/labs/offline-estimator/) to calculate the number of tiles required by your offline use case. Six thousand tiles covers a region roughly the size of Greater London within the M25 at zoom levels 0–15 or the contiguous United States at zoom levels 0–9. The size of these tiles on disk will vary according to the selected style.

There is no limit to the number of offline regions that may be created. Your Mapbox-powered application will reuse tiles and resources that are required by multiple regions, conserving network traffic and disk space.

There is also no limit to the download speed of offline regions, nor to disk space used by offline resources. The effective limits will depend on the storage capacity of the mobile device and the speed of the network to which it is connected.

Our [terms of service](https://www.mapbox.com/tos/#[YmcMYmns]) do not allow you or an end user to redistribute offline maps downloaded from Mapbox servers.

> **Note:** while your user is connected to the internet, the offline regions will update themselves to the latest data automatically.

## Defining a region

Before a region can be used offline, the resources necessary for that region must be downloaded. Based on the parameters you specify when creating the region, the SDK calculates all necessary resources such as fonts, styles, and vector tiles covering the region. If more then one region in the offline database contains the fonts and styles, these will not be re-downloaded when another region is downloaded.

First you'll need to get the `offlineManager` instance, define the region to download, and finally create the definition object. It's important to note a few things:

- The offline map style _must_ match the one being used for your `mapView`.
- The definition needs the devices screen density, it's best to get this from the activities resources.
- The bounds used for the download must not go over the 6,000 tile limit.

```java
// Set up the OfflineManager
offlineManager = OfflineManager.getInstance(SimpleOfflineMapActivity.this);

// Create a bounding box for the offline region
LatLngBounds latLngBounds = new LatLngBounds.Builder()
  .include(new LatLng(37.7897, -119.5073)) // Northeast
  .include(new LatLng(37.6744, -119.6815)) // Southwest
  .build();

// Define the offline region
OfflineTilePyramidRegionDefinition definition = new OfflineTilePyramidRegionDefinition(
  mapboxMap.getStyleUrl(),
  latLngBounds,
  10,
  20,
  MainActivity.this.getResources().getDisplayMetrics().density);
```

### Metadata
TODO

## Download a region
Now that the bounds and definition object have been created, you can use the offlineManager to create an asynchronous download calling `createOfflineRegion`. You'll need to pass in the definition and metadata objects we create in the previous sections. This will provide you with two methods, `onCreate` and `onError`, onError occurs if there is an error starting or while downloading the region. The `onCreate` method provides a `offlineRegion` object which you can use to monitor the download and even display the progress to your users. If you need to pause a download, you can use the `offlineRegion.setDownloadState()` to handle this.

```java
// Create the region asynchronously
offlineManager.createOfflineRegion(definition, metadata,
  new OfflineManager.CreateOfflineRegionCallback() {
    @Override
    public void onCreate(OfflineRegion offlineRegion) {
      offlineRegion.setDownloadState(OfflineRegion.STATE_ACTIVE);

      // Monitor the download progress using setObserver
      offlineRegion.setObserver(new OfflineRegion.OfflineRegionObserver() {
        @Override
        public void onStatusChanged(OfflineRegionStatus status) {

          // Calculate the download percentage
          double percentage = status.getRequiredResourceCount() >= 0
          ? (100.0 * status.getCompletedResourceCount() / status.getRequiredResourceCount()) :
          0.0;

          if (status.isComplete()) {
            // Download complete
            Log.d(TAG, "Region downloaded successfully.");
          } else if (status.isRequiredResourceCountPrecise()) {
            Log.d(TAG, percentage);
          }
        }

        @Override
        public void onError(OfflineRegionError error) {
          // If an error occurs, print to logcat
          Log.e(TAG, "onError reason: " + error.getReason());
          Log.e(TAG, "onError message: " + error.getMessage());
        }

        @Override
        public void mapboxTileCountLimitExceeded(long limit) {
          // Notify if offline region exceeds maximum tile count
          Log.e(TAG, "Mapbox tile count limit exceeded: " + limit);
        }
      });
    }

  @Override
  public void onError(String error) {
    Log.e(TAG, "Error: " + error);
  }
});
```

## Managing downloaded regions


## Add inside a service
