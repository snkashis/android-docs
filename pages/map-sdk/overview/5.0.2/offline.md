---
title: Offline
path: /map-sdk/5.0.2/offline/
---

Often, you might find your user base spends most of its time off the grid. This causes issues because the map downloads tiles from the internet by default. The Maps SDK enables you to download and store pre-selected regions for usage when the device isn't connected to the internet. The result of downloading the map is a fully functional map using your styles, tiles, and other resources.

### Limitations

An app can download multiple regions for offline use, but the total offline download is capped at a maximum tile count “ceiling” across all downloaded regions. The tile ceiling is set to 6,000 tiles by default but can be raised [for paid plans](https://www.mapbox.com/pricing/). Use our [Tile Count Estimator](https://www.mapbox.com/labs/offline-estimator/) to calculate the number of tiles required by your offline use case. Six thousand tiles covers a region roughly the size of Greater London within the M25 at zoom levels 0–15 or the contiguous United States at zoom levels 0–9. The size of these tiles on disk will vary according to the selected style.

The Maps SDK places no limit to the number of offline regions that may be created. Your Mapbox-powered application will reuse tiles and resources that are required by multiple regions. This conserves network traffic and disk space.

The SDK also places no limit to the download speed of offline regions, nor to disk space used by offline resources. The effective limits will depend on the storage capacity of the mobile device and the speed of the network to which it is connected.

Our [terms of service](https://www.mapbox.com/tos/#[YmcMYmns]) do not allow you or an end user to redistribute offline maps downloaded from Mapbox servers.

> **Note:** The offline regions will update themselves to the latest data automatically while your user is connected to the internet.

## Defining a region

Before a region can be used offline, the resources necessary for that region must be downloaded. Based on the parameters you specify when creating the region, the SDK calculates all necessary resources such as fonts, styles, and vector tiles covering the region. If more then one region in the offline database contains the fonts and styles, these will not be re-downloaded when another region is downloaded.

First, you'll need to get the `offlineManager` instance, define the region to download, and finally create the definition object. It's important to note a few things:

- The offline map style _must_ match the one being used for your `mapView`.
- The definition needs the devices screen density. It's best to get this from the activities resources.
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
Providing a metadata object is encourage with at least a region name so that various regions your users download will be distinguishable. Besides the region name, you can store any arbitrary binary region information you'd like. The contents are opaque to the SDK implementation and won't affect your offline region download, it only stores and retrieves a byte array.

```java
// Implementation that uses JSON to store Yosemite National Park as the offline region name.
byte[] metadata;
try {
  JSONObject jsonObject = new JSONObject();
  jsonObject.put(JSON_FIELD_REGION_NAME, "Yosemite National Park");
  String json = jsonObject.toString();
  metadata = json.getBytes(JSON_CHARSET);
} catch (Exception exception) {
  Log.e(TAG, "Failed to encode metadata: " + exception.getMessage());
  metadata = null;
}
```

Besides creating the metadata, you can also update the information stored, allowing your users for example, to update the region name. To do this, the `offlineManager` object provides a methods called `updateMetadata` which takes in both the updated metadata byte array and a callback to be notified when the update is completed or an error occurs.

## Download a region
Now that the bounds and definition object have been created, you can use the offlineManager to create an asynchronous download calling `createOfflineRegion`. You'll need to pass in the definition and metadata objects we created in both the [Defining a region](#defining-a-region) and [metadata](#metadata) sections. This will provide you with two methods, `onCreate` and `onError`. onError occurs if an error starting or while downloading the region occurs. The `onCreate` method provides a `offlineRegion` object which you can use to check the download and even display the progress to your users. If you need to pause a download, you can use the `offlineRegion.setDownloadState()` to handle this.

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
Once you or your user has downloaded a region, the Maps SDK provides a few options to handle gathering list, positioning the camera inside the downloaded region, and a method for deletion of a region.

### List offline regions
The listing of regions is useful for presenting downloaded information to your user or gathering information inside the code itself. The `offlineManager` offers a `listOfflineRegions` method which provides both a method `onList` and `onError`. Use the `OfflineRegion` array to do all the actions on a specific region.

```java
// Get the region bounds and zoom and move the camera.
LatLngBounds bounds = ((OfflineTilePyramidRegionDefinition)
  offlineRegions[regionSelected].getDefinition()).getBounds();
double regionZoom = ((OfflineTilePyramidRegionDefinition)
  offlineRegions[regionSelected].getDefinition()).getMinZoom();

// Create new camera position
CameraPosition cameraPosition = new CameraPosition.Builder()
  .target(bounds.getCenter())
  .zoom(regionZoom)
  .build();

// Move camera to new position
map.moveCamera(CameraUpdateFactory.newCameraPosition(cameraPosition));
```

### Delete region
To remove an offline region from the database, you'll need to first receive the list of offline regions as explained in the [earlier section](#list-offline-regions). The `onList` method will provide you with an array of the present offline regions downloaded on the device, this object being the `offlineRegions`. You'll then use this object to select the region to be deleted and call `delete` on it which will provide you with a callback to be notified when the region is successfully deleted or if an error occurs.

> **Note:** Deleting a region will result in also removing the least-recently requested resources not required by other regions, until the database shrinks below a certain size.

```java
offlineRegions[0].delete(new OfflineRegion.OfflineRegionDeleteCallback() {
  @Override
  public void onDelete() {
    // Once the region is deleted, remove the
    // progressBar and display a toast
    progressBar.setVisibility(View.INVISIBLE);
    progressBar.setIndeterminate(false);
    Toast.makeText(OfflineManagerActivity.this, "Region deleted", Toast.LENGTH_LONG).show();
  }

  @Override
  public void onError(String error) {
    progressBar.setVisibility(View.INVISIBLE);
    progressBar.setIndeterminate(false);
    Log.e(TAG, "Error: " + error);
  }
});
```

<!-- TODO ## Add inside a service -->
