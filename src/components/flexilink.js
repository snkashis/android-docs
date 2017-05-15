/* @flow */
import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Link } from 'react-router';
import isReactPage from './is_react_page';

type Props = {
  children?: ReactNode,
  to: string,
  // Currently we only need query to work for sign-in links
  // from the sign-up pages ... so, dynamic routes
  query?: Object
};

class Flexilink extends React.Component {
  props: Props;

  static contextTypes = {
    // PropTypes are necessary for context
    flexilinkAnchorsOnly: PropTypes.bool
  };

  render() {
    if (this.context.flexilinkAnchorsOnly || !isReactPage(this.props.to)) {
      const cleanedProps = _.omit(this.props, ['to']);
      return (
        <a href={this.props.to} {...cleanedProps}>
          {this.props.children}
        </a>
      );
    }

    const cleanedProps = _.omit(this.props, ['to', 'query']);
    const targetLocation = {
      pathname: this.props.to,
      query: this.props.query
    };

    return (
      <Link to={targetLocation} {...cleanedProps}>
        {this.props.children}
      </Link>
    );
  }
}

export { Flexilink };
