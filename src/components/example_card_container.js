import React from 'react';
import includes from 'underscore.string/include';

type Props = {
  exampleCategory: Object,
  exampleTitle: string
};

export var ExampleCardContainer = React.createClass({


  getInitialState: function() {
        return {
            expanded: false
        };
    },
    handleClick: function() {
        this.setState({
            expanded: !this.state.expanded
        })
    },
  render: function() {
    var size = 3;
    var icon = 'down';
    var expand = this.state.expanded;
    if (expand) {
      size = this.props.exampleCategory.length;
      icon = 'up';
    } else {
      size = 3;
      icon = 'down';
    }

    return (
      <div className='pb12 w-auto inline-block'>
        <div className=''>

        <div className='clearfix'>
          <div className='txt-l inline-block pl12'>{this.props.exampleTitle}</div>
          <div className='txt-l inline-block pb6 pl6 opacity50'>({this.props.exampleCategory.length})</div>

            {this.props.exampleCategory.length > 3 &&
              <button onClick={this.handleClick} className='fr flex-parent--center-cross pb24 pl6 flex-parent bright-blue-color'>
                <span className='txt-s txt-bold'>Show all</span>
                <svg className='icon pl6'><use href={`#icon-chevron-${icon}`}/></svg>
              </button>}
            </div>
        </div>
          <div className=' grid'>
          {this.props.exampleCategory.slice(0, size).map((example, i) => (
            <div className='flex-child' key={i}>{example}</div>
          ))}
          </div>
      </div>
    )
  }
})
