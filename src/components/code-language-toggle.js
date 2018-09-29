import React from 'react';
import PropTypes from 'prop-types';
import ControlToggleSet from '@mapbox/react-control-toggle-set';
import { AppContext } from '../context.js';

export default class CodeLanguageToggle extends React.Component {
  constructor(props) {
    super(props);
    this.unconnectedToggle = this.unconnectedToggle.bind(this);
  }
  unconnectedToggle = context => {
    return (
      <ControlToggleSet
        id={this.props.id}
        themeToggleGroup="bg-blue py3 px3 my12"
        themeToggle="txt-s py3 toggle--white toggle--active-blue"
        onChange={value => {
          context.changeLanguage(value);
        }}
        value={context.preferredLanguage}
        options={context.languages}
      />
    );
  };

  render() {
    return <AppContext.Consumer>{this.unconnectedToggle}</AppContext.Consumer>;
  }
}

CodeLanguageToggle.propTypes = {
  id: PropTypes.string
};
