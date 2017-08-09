import React from 'react';
import { routeTo } from '@mapbox/batfish/modules/route-to';

export function createRedirect(target) {
  return class Redirect extends React.Component {
    componentDidMount() {
      routeTo(target);
    }

    render() {
      return null;
    }
  };
}
