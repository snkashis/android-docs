import React from 'react';
import PropTypes from 'prop-types';
import TabList from '@mapbox/mr-ui/tab-list';
import ApiTabDropdown from './api-dropdown';
import { listTabs } from '../util/list-tabs';
import listSubfolders from '@mapbox/batfish/data/list-subfolders';
import { androidApiReferenceLinks } from '../data/android-api-reference-links';
import _ from 'lodash';

class TopNavTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0
    };
  }

  componentDidMount() {
    this.throttledHandleWindowResize();
    window.addEventListener('resize', this.throttledHandleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.throttledHandleWindowResize);
  }

  throttledHandleWindowResize = _.throttle(() => {
    this.setState({
      width: document.body.clientWidth
    });
  }, 200);
  render() {
    const { props } = this;
    const dropdownItems = androidApiReferenceLinks[props.product].map(
      (link, index) => {
        return (
          <li key={index}>
            <a href={link.href}>{link.label}</a>
          </li>
        );
      }
    );
    let apiDropdownMenu = [];
    if (dropdownItems.length > 1) {
      if (this.state.width > 640) {
        apiDropdownMenu = [
          {
            label: (
              <ApiTabDropdown dropdownContent={<ul>{dropdownItems}</ul>} />
            ),
            id: 'api',
            href: '#'
          }
        ];
      } else {
        apiDropdownMenu = androidApiReferenceLinks[props.product].map(item => {
          return {
            label: item.label,
            id: item.id,
            href: item.href
          };
        });
        apiDropdownMenu.unshift({
          label: 'API reference',
          id: 'api',
          href: '#',
          disabled: true
        });
      }
    } else {
      apiDropdownMenu = [
        {
          label: 'API reference',
          id: 'api',
          href: androidApiReferenceLinks[props.product][0].href
        }
      ];
    }

    // Determine the contents and style of the TopNavTabs
    const allTabs = listTabs(props.product, listSubfolders, apiDropdownMenu);
    return <TabList items={allTabs} activeItem={props.activeTab} />;
  }
}

TopNavTabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  product: PropTypes.string.isRequired
};

export default TopNavTabs;
