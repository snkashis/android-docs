import React from 'react';
import { DeviceAndroid } from '../svg/components/device_android';
import {AndroidFrame} from './android_frame';

type Props = {
  sdk: string,
  version: string,
  changelogLink: string,
  featureListColumnOne: string,
  featureListColumnTwo: string,
  ghLink: stringhttps
};

class OverviewHeader extends React.Component {
  props: Props;

  render() {
    return (<div>
    <div>
      <div className={'sdk-card bg-green round-t p18 clip relative'}>
        <div>
        <h2 className={'txt-h2-mm txt-fancy txt-h3'}>{this.props.sdk}</h2>
        <p className={'txt-m mt6'}>Current version <strong>v{this.props.version}</strong> <a href={this.props.changelogLink}>View changelog</a></p>
        </div>
      </div>
      <div className={'grid bg-gray-faint hmax180-mm'}>
      <div className={'round-b p24 pb0 col-6'}>

          {this.props.featureListColumnOne}

      </div>
      <div className={'round-b p24 pb0 col-6'}>
        {this.props.featureListColumnTwo}
      </div>
      </div>
      <div className={'block p12 bg-gray-faint'}>
      <a href={this.props.ghLink} className={'link-icon ml36 link-li flex-parent-inline flex-parent--center-cross'}><svg className={'icon'}><use href='#icon-github'/></svg><strong>Contribute on Github</strong><svg className={'icon'}><use href='#icon-chevron-right'/></svg></a></div>
    </div></div>
    );
  }
}

export { OverviewHeader };
