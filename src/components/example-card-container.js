import React from 'react';
import PropTypes from 'prop-types';

class ExampleCardContainer extends React.Component {
  static propTypes = {
    exampleTitle: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
  };

  constructor(props) {
    super(props);
    this.state = { expanded: false };
  }

  getExamples(children) {
    const maxExamplesShown = this.state.expanded ? children.length : 3;
    return children
      .slice(0, maxExamplesShown)
      .map((child, index) => React.cloneElement(child, { key: index }));
  }

  getShowAllButton(exampleLength) {
    if (exampleLength > 3) {
      const iconID = this.state.expanded ? 'up' : 'down';
      const text = this.state.expanded ? 'Show fewer' : 'Show all';

      return (
        <button
          onClick={this.handleClick}
          className="flex-child flex-parent--center-cross pl6 flex-parent link"
        >
          <span className="txt-s txt-bold">
            {text}
          </span>
          <svg className="icon pl6">
            <use xlinkHref={`#icon-chevron-${iconID}`} />
          </svg>
        </button>
      );
    }
  }

  handleClick = () => {
    this.setState(prevState => ({
      expanded: !prevState.expanded
    }));
  };

  render() {
    const id = this.props.exampleTitle.replace(/ /g, '-').toLowerCase();
    const children = React.Children.toArray(this.props.children);

    return (
      <div id={id}>
        <div className="mb24">
          <div className="inline-block">
            <h2 className="txt-l">
              {this.props.exampleTitle}
              <span className="inline-block pl6 opacity50">
                ({children.length})
              </span>
            </h2>
          </div>
          <div className="inline-block ml24">
            {this.getShowAllButton(children.length)}
          </div>
        </div>
        <div className="mx-neg12">
          {this.getExamples(children)}
        </div>
      </div>
    );
  }
}

export { ExampleCardContainer };
