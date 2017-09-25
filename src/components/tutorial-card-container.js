import React from 'react';
import PropTypes from 'prop-types';

class TutorialCardContainer extends React.Component {
  static propTypes = {
    tutorialTitle: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
  };

  constructor(props) {
    super(props);
    this.state = { expanded: true };
  }

  getTutorials(children) {
    const maxTutorialsShown = this.state.expanded ? children.length : 3;
    return children
      .slice(0, maxTutorialsShown)
      .map((child, index) => React.cloneElement(child, { key: index }));
  }

  handleClick = () => {
    this.setState(prevState => ({
      expanded: !prevState.expanded
    }));
  };

  render() {
    const id = this.props.tutorialTitle.replace(/ /g, '-').toLowerCase();
    const children = React.Children.toArray(this.props.children);

    return (
      <div id={id}>
        <div className="mb24">
          <div className="inline-block">
            <h2 className="txt-l">
              {this.props.tutorialTitle}
              <span className="inline-block pl6 opacity50">
                ({children.length})
              </span>
            </h2>
          </div>
        </div>
        <div className="mx-neg12">
          {this.getTutorials(children)}
        </div>
      </div>
    );
  }
}

export { TutorialCardContainer };
