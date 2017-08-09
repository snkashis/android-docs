import React from 'react';
import PropTypes from 'prop-types';

export class NavbarDropdownMenu extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
      })
    ).isRequired
  };

  render() {
    const itemEls = this.props.items.map(item => {
      return (
        <li key={item.text}>
          <a href={item.url} className="color-blue-on-hover">
            {item.text}
          </a>
        </li>
      );
    });

    return (
      <div className="txt-m txt-bold py6 px6 wmin180">
        <div className="color-gray-light mb6">
          {this.props.title}
        </div>
        <ul>
          {itemEls}
        </ul>
      </div>
    );
  }
}
