import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mapbox/react-icon';
import { AppropriateImage } from './appropriate-image';
import { DifficultyLevel } from './difficulty-level';

class TutorialCard extends React.Component {
  static propTypes = {
    tutorialUrl: PropTypes.string.isRequired,
    tutorialImgID: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
    tutorialTitle: PropTypes.string.isRequired,
    tutorialDescription: PropTypes.string.isRequired
  };

  render() {
    return (
      <a
        className="color-gray-dark transition shadow-darken10-on-hover round clip mb24 inline-block mx12 wmax-full"
        href={this.props.tutorialUrl}
        style={{ width: '100%', verticalAlign: 'top' }}
      >
        <div>
          <div className="bg0-gray-dark mb12">
            <AppropriateImage imageId={this.props.tutorialImgID} />
          </div>
        </div>
        <div className="px6 pb6">
          <div className="mb6">
            <DifficultyLevel difficulty={this.props.difficulty} />
          </div>
          <div className="mb6 txt-m inline-block">
            {this.props.tutorialTitle}
            <Icon name="turn-right" themeIcon="color-gray" inline={true} />
          </div>
          <div className="txt-s opacity75">
            {this.props.tutorialDescription}
          </div>
        </div>
      </a>
    );
  }
}

export { TutorialCard };
