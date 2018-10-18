import React from 'react';
import PropTypes from 'prop-types';
import AppropriateImage from './appropriate-image';

class PixelTwoVertical extends React.Component {
  render() {
    const { props } = this;
    return (
      <div className="relative">
        <div className="top left right align-center absolute">
          <AppropriateImage
            className="mt0 pt12-mm pt6 px6 w360-mm w240"
            imageId="pixel2FrameVertical"
          />
        </div>
        <AppropriateImage
          className="block mx-auto pt90-mm pt60 px12-mm px30 w300-mm w240 pb120"
          imageId={props.imageId}
        />
      </div>
    );
  }
}

PixelTwoVertical.propTypes = {
  imageId: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export { PixelTwoVertical };
