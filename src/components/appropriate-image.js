const appropriateImagesReact = require('@mapbox/appropriate-images-react');
import imageConfig from '../../conf/image-config.js';

// See https://github.com/mapbox/appropriate-images-react#appropriateimage
const AppropriateImage = appropriateImagesReact.scopeAppropriateImage(
  imageConfig,
  {
    transformUrl: url => require(`../img/dist/${url}`)
  }
);

export { AppropriateImage };
