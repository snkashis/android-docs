---
title: CircleLayer clustering
description: Use GeoJSON data and circle layers to visualize point data as circle clusters.
thumbnail: thumbnailCreateAndStyleDataClusters
topic: Add markers and infoWindows to the map
prependJs:
  - "import { VideoWithDeviceFrame } from '../../../components/video-with-device-frame'"
  - "import videoCreateAndStyleClusters from '../../../video/example-createandstyleclusters.mp4'"
  - "import ToggleableCodeBlock from '../../../components/toggleable-code-block'"
  - "import { rawJavaCode } from '../../../example-code/GeoJsonClusteringActivity.js'"
---

{{
  <VideoWithDeviceFrame 
    videoFile={videoCreateAndStyleClusters}
    rotation="horizontal"
    device="pixel-2"
  />
}}

<!-- Any notes about this example would go here.  -->

{{
  <ToggleableCodeBlock 
    java={rawJavaCode}
  />
}}
