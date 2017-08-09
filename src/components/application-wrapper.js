import React from 'react';

// Do not import during the static build (in Node) when window is not defined.
if (typeof window !== 'undefined') {
  import(/* webpackChunkName: "assembly-js" */ '@mapbox/mapbox-assembly/dist/assembly.js');
}

class ApplicationWrapper extends React.Component {
  render() {
    return this.props.children;
  }
}

export default ApplicationWrapper;
