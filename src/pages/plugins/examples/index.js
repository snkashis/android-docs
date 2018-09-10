/*---
title: 'Examples'
description: 'Working code examples of Mapbox Plugins for Android'
product: 'plugins'
---*/

import React from 'react';
import AndroidExamplesPage from '../../../components/android-examples-page';

export default class PluginsExamplesPage extends React.PureComponent {
  render() {
    return <AndroidExamplesPage frontMatter={this.props.frontMatter} />;
  }
}
