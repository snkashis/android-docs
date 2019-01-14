import React from 'react';
import { AppContext } from '../context.js';

if (typeof window !== 'undefined') {
  import(/* webpackChunkName: "assembly-js" */ '@mapbox/mbx-assembly/dist/assembly.js');
}

class ApplicationWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      preferredLanguage: 'java',
      userAccessToken: undefined
    };
    this.changeLanguage = nextLang => {
      this.setState({ preferredLanguage: nextLang });
    };
  }

  componentDidMount() {
    MapboxPageShell.afterUserCheck(() => {
      this.setState({
        userAccessToken: MapboxPageShell.getUserPublicAccessToken()
      });
    });
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
      changeLanguage: this.changeLanguage,
      userAccessToken: this.state.userAccessToken
    };
    return (
      <AppContext.Provider value={context}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default ApplicationWrapper;
