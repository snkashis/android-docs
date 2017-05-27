import React from 'react';
import includes from 'underscore.string/include';

type Props = {
  exampleTitle: string,
  exampleDescription: string,
  difficulty: string,
  exampleImg: string,
  exampleUrl: string
};

class ExampleCard extends React.Component {
  props: Props;

  render() {
    var difficultyImageUrl;

    if (includes(this.props.difficulty, 'advanced')) {
      difficultyImageUrl = '../../../assets/imgs/advanced-icon.png'
    } else if (includes(this.props.difficulty, 'intermediate')) {
      difficultyImageUrl = '../../../assets/imgs/intermediate-icon.png'
    } else {
      difficultyImageUrl = '../../../assets/imgs/intro-icon.png'
    }
    return (
      <div className='ml12 mr12 pt24 inline-block'>
      <a className='remove-text-decoration' href={this.props.exampleUrl}>
        <div className='transition example-card shadow-darken10-on-hover round-b'>
          <div>
            <img className='round bg-gray-dark' src={this.props.exampleImg} />
            <img className='pl6' src={difficultyImageUrl} />
          </div>
          <div>
            <div className='pl6 pr6 txt-m mt-neg6 gray-dark'>{this.props.exampleTitle}</div>
            <div className='pl6 pr6 pb6 txt-s pt6 gray-dark opacity75'>{this.props.exampleDescription}</div>
          </div>
        </div>
        </a>
      </div>
    );
  }
}

export {ExampleCard};
