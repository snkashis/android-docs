/*---
title: 'Android Map SDK Tutorials'
description: 'Mapbox Android Map SDK Tutorials'
sideNavSections:
  - title: "Getting started"
---*/

import React from 'react';
import { withLocation } from '@mapbox/batfish/modules/with-location';

import { TutorialCard } from '../../../components/tutorial-card';
import { TutorialCardContainer } from '../../../components/tutorial-card-container';
import PageShell from '../../../components/page-shell';

let MapSdkTutorialsLayout = class MapSdkTutorialsLayout extends React.Component {
  render() {
    return (
      <PageShell frontMatter={this.props.frontMatter}>
        <TutorialCardContainer tutorialTitle="Getting started">
          <TutorialCard
            tutorialTitle="First steps with the Mapbox Android SDK"
            tutorialDescription="Walk through installing the Mapbox Android SDK, getting a map on the screen, and changing the style."
            difficulty="intermediate"
            tutorialImgID="tutorialsFirstStepsIntro"
            tutorialUrl="https://www.mapbox.com/help/first-steps-android-sdk/"
          />
          <TutorialCard
            tutorialTitle="Runtime styling for Android"
            tutorialDescription="Create a map for Android and change its layers' properties with the press of a button."
            difficulty="intermediate"
            tutorialImgID="tutorialsRuntimeIntro"
            tutorialUrl="https://www.mapbox.com/help/android-runtime-styling-intro/"
          />
          <TutorialCard
            tutorialTitle="Data-driven styling for Android"
            tutorialDescription="Create a map for Android that styles a circle layer based on a data attribute."
            difficulty="intermediate"
            tutorialImgID="tutorialsDDSIntro"
            tutorialUrl="https://www.mapbox.com/help/android-dds-circle-layer/"
          />
          <TutorialCard
            tutorialTitle="Build a store locator for Android"
            tutorialDescription="Build a store locator to integrate into an Android application."
            difficulty="intermediate"
            tutorialImgID="tutorialsStoreLocatorIntro"
            tutorialUrl="https://www.mapbox.com/help/android-store-locator/"
          />
        </TutorialCardContainer>
      </PageShell>
    );
  }
};

MapSdkTutorialsLayout = withLocation(MapSdkTutorialsLayout);
export default MapSdkTutorialsLayout;
