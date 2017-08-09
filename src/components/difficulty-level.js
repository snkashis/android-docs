import classnames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const difficulties = {
  intro: {
    string: 'Intro',
    colorClassName: 'green',
    meterLevel: 1,
    renderedMeter: null
  },
  intermediate: {
    string: 'Intermediate',
    colorClassName: 'orange',
    meterLevel: 2,
    renderedMeter: null
  },
  advanced: {
    string: 'Advanced',
    colorClassName: 'red',
    meterLevel: 3,
    renderedMeter: null
  }
};

class DifficultyLevel extends React.PureComponent {
  static propTypes = {
    difficulty: PropTypes.oneOf(['intro', 'intermediate', 'advanced'])
      .isRequired
  };

  getDifficultyMeter(difficultyDefinition) {
    const meterLevels = [' ', ' ', ' '].map((_filler, index) => {
      const shouldFill = index + 1 <= difficultyDefinition.meterLevel;
      const classes = classnames('inline-block', {
        [`bg-${difficultyDefinition.colorClassName}`]: shouldFill,
        'bg-gray-light': !shouldFill
      });

      return (
        <div
          className={classes}
          key={index}
          style={{
            borderRadius: 1,
            height: 8,
            marginRight: 4,
            width: 6
          }}
        />
      );
    });

    return (
      <div className="inline-block mr3">
        {meterLevels}
      </div>
    );
  }

  render() {
    const difficultyDefinition = difficulties[this.props.difficulty];

    if (!difficultyDefinition.renderedMeter) {
      // Cache the result to avoid constructing the meter again.
      difficultyDefinition.renderedMeter = (
        <div
          className={`txt-s txt-bold align-middle color-${difficultyDefinition.colorClassName}`}
        >
          {this.getDifficultyMeter(difficultyDefinition)}
          {difficultyDefinition.string}
        </div>
      );
    }

    return difficultyDefinition.renderedMeter;
  }
}

export { DifficultyLevel };
