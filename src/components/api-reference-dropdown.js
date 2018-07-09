import React from 'react';
import PopoverTrigger from '@mapbox/react-popover-trigger';
import { androidApiReferenceLinks } from '../data/android-api-reference-links.js';

class ApiReferenceDropdown extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  onPopoverOpen = () => {
    this.setState({ open: true });
  };

  onPopoverClose = () => {
    this.setState({ open: false });
  };

  render() {
    const popoverProps = {
      placement: 'bottom',
      themePopover: 'round shadow-darken25 scroll-auto px24 py12'
    };

    const apiReferences = androidApiReferenceLinks
      .filter(item => {
        return item.product === this.props.product;
      })
      .map(product => {
        const referenceList = product.references.map((reference, index) => {
          return (
            <div key={index}>
              <a href={`/android-docs${reference.path}`}>{reference.name}</a>
            </div>
          );
        });
        return referenceList;
      });

    return (
      <PopoverTrigger
        content={apiReferences}
        popoverProps={popoverProps}
        respondsToHover={true}
        onPopoverOpen={this.onPopoverOpen}
        onPopoverClose={this.onPopoverClose}
      >
        {this.props.children}
      </PopoverTrigger>
    );
  }
}

export { ApiReferenceDropdown };
