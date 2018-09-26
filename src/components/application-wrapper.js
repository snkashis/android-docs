import React from 'react';
import { AppContext } from '../context.js';

if (typeof window !== 'undefined') {
  import(/* webpackChunkName: "assembly-js" */ '@mapbox/mbx-assembly/dist/assembly.js');
}

class ApplicationWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      preferredLanguage: 'java'
    };
    this.changeLanguage = nextLang => {
      this.setState({ preferredLanguage: nextLang });
    };
  }

  render() {
    const context = {
      platform: 'Android',
      languages: [
        {
          label: 'Java',
          value: 'java'
        },
        {
          label: 'Kotlin',
          value: 'kotlin'
        }
      ],
      preferredLanguage: this.state.preferredLanguage,
      changeLanguage: this.changeLanguage
    };
    return (
      <AppContext.Provider value={context}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default ApplicationWrapper;
