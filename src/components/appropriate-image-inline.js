import React from 'react';
import PropTypes from 'prop-types';
import appropriateImagesGetUrl from '@mapbox/appropriate-images-get-url';
import omit from '@mapbox/frontend-util-omit';
import imageConfig from '../../conf/image-config';

export class AppropriateImageInline extends React.PureComponent {
  static propTypes = {
    imageId: PropTypes.string.isRequired
  };

  render() {
    const url = appropriateImagesGetUrl({
      imageConfig,
      imageId: this.props.imageId
    });
    const scopedUrl = require(`../img/dist/${url}`);
    const imgProps = omit(this.props, ['imageId']);
    return <img src={scopedUrl} {...imgProps} />;
  }
}
