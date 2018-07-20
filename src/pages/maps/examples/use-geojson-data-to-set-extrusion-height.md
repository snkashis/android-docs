---
title: Use GeoJSON data to set extrusion height
description: Use data-driven styling and GeoJSON data to set extrusions' heights
thumbnail: thumbnailUseGeojsonDataToSetExtrusionHeight
topic: 3D
prependJs:
  - "import { VideoWithDeviceFrame } from '../../../components/video-with-device-frame'"
  - "import videoGeojsonMarathonExtrusion from '../../../video/example-marathon-geojson-extrusion.mp4'"
  - "import ToggleableCodeBlock from '../../../components/toggleable-code-block'"
  - "import { MarathonExtrusionActivity } from '../../../example-code/MarathonExtrusionActivity.js'"

---

{{
  <VideoWithDeviceFrame 
    videoFile={videoGeojsonMarathonExtrusion}
    rotation="horizontal"
    device="pixel-2"
  />
}}


<!-- Any notes about this example would go here.  -->

{{
  <ToggleableCodeBlock 
    codeSnippet={MarathonExtrusionActivity}
  />
}}
