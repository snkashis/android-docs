import React from 'react';
import PropTypes from 'prop-types';
import PopoverTrigger from '@mapbox/mr-ui/popover-trigger';
import Icon from '@mapbox/mr-ui/icon';

class ApiTabDropdown extends React.PureComponent {
  render() {
    const { props } = this;
    return (
      <PopoverTrigger
        content={props.dropdownContent}
        popoverProps={{
          placement: 'bottom',
          themePopover:
            'round shadow-darken25 scroll-auto scroll-styled bg-white px18 py12 none block-mm'
        }}
      >
        <div className="py0">
          API reference
          <Icon
            name="chevron-down"
            themeIcon="none inline-mm color-gray-light ml6 mb-neg3"
          />
          <Icon
            name="share"
            themeIcon="none-mm inline color-gray-light ml6 mb-neg3"
          />
        </div>
      </PopoverTrigger>
    );
  }
}

ApiTabDropdown.propTypes = {
  dropdownContent: PropTypes.node.isRequired
};

export default ApiTabDropdown;
