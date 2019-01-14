import React from 'react';
import { AppContext } from '../context.js';

export default class UserAccessToken extends React.Component {
  render() {
    function getUserAccessToken(context) {
      if (context.userAccessToken !== undefined) return context.userAccessToken;
      return 'YOUR_MAPBOX_ACCESS_TOKEN';
    }
    return <AppContext.Consumer>{getUserAccessToken}</AppContext.Consumer>;
  }
}
