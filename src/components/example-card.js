import React from 'react';
import PropTypes from 'prop-types';
import { AppropriateImage } from './appropriate-image';
import { DifficultyLevel } from './difficulty-level';

class ExampleCard extends React.Component {
  static propTypes = {
    exampleUrl: PropTypes.string.isRequired,
    exampleImgID: PropTypes.string.isRequired
  };

  render() {
    return (
      <a
        className="color-gray-dark transition shadow-darken10-on-hover round clip mb24 inline-block mx12 wmax-full"
        href={this.props.exampleUrl}
        style={{ width: 260, verticalAlign: 'top' }}
      >
        <div>
          <div className="bg0-gray-dark mb12">
            <AppropriateImage imageId={this.props.exampleImgID} />
          </div>
        </div>
        <div className="px6 pb6">
          <div className="mb6">
            <DifficultyLevel difficulty={this.props.difficulty} />
          </div>
          <div className="mb6 txt-m">
            {this.props.exampleTitle}
          </div>
          <div className="txt-s opacity75">
            {this.props.exampleDescription}
          </div>
        </div>
      </a>
    );
  }
}

export { ExampleCard };
