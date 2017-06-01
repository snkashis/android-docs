import React from 'react';
import includes from 'underscore.string/include';

type Props = {
  exampleCategory: Object,
  exampleTitle: string
};

class ExampleCardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {expanded: false};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log("clicked");
    this.setState(prevState => ({
      expanded: !prevState.expanded
    }));
  }

  render() {
    var id = this.props.exampleTitle.replace(/ /g, '-').toLowerCase();
    return (
      <div className='py12 w-full inline-block flex-child flex-child--grow' id={id}>
      <div className='flex-parent--space-between-main flex-parent'>
      <div className='flex-child'>
      <div className='txt-l inline-block pl12'>{this.props.exampleTitle}</div>
      <div className='txt-l inline-block pb6 pl6 opacity50'>({this.props.exampleCategory.length})</div>
      </div>
      {this.props.exampleCategory.length > 3 &&
        <button onClick={this.handleClick} className='flex-child flex-parent--center-cross pb24 pl6 flex-parent bright-blue-color'>
        <span className='txt-s txt-bold'>Show all</span>
        <svg className='icon pl6'><use href={`#icon-chevron-${this.state.expanded ? 'up' : 'down'}`}/></svg>
        </button>}
        </div>
        <div className='grid'>
        {this.props.exampleCategory.slice(0, (this.state.expanded ? this.props.exampleCategory.length : 3)).map((example, i) => (
          <div key={i}>{example}</div>
        ))}
        </div>
        </div>
      )
    }
  }

  export { ExampleCardContainer };
