import React from 'react';
import { DeviceAndroid } from '../svg/components/device_android';
import {AndroidFrame} from './android_frame';

type Props = {
  sdk: string,
  version: string,
  changelogLink: string,
  sdkFeatures: string,
  ghLink: stringhttps,
  deviceImg: string,
  imgWidth: width,
  newFeature: bool
};

class OverviewHeader extends React.Component {
  props: Props;

  static defaultProps = {
    imgWidth: 360
  };

  render() {
    return (
      <div className="bg-gray-faint clip mt12 wmax960 round-bold">
          <div className="bg-green py18 px24 color-white round-t-bold">
            <h2 className={'txt-h2-mm txt-h3'}>{this.props.sdk}</h2>
            <div className="txt-ms mt3">
              <span>Current Version:</span>
              {' '}
              <span className="txt-bold">v{this.props.version}</span>
              {' '}
              <a className="link ml12 link--white opacity75 opacity100-on-hover txt-underline" href={this.props.changelogLink}>View changelog</a>
            </div>
          </div>
          <div className="flex-parent">
            <div className="px24 flex-child py18">
              <div className="grid txt-ms">
                {this.props.sdkFeatures.map((feature, i) => (
                  <div key={i} className="col mb3 mt0 col--6-mxl col--12 flex-parent--center-cross flex-parent icon-android-green inline-block">
                    <svg className={'icon'}><use href='#icon-check'/></svg>
                    <span className="color-dark pr6 pl6">{feature}</span>{this.props.newFeature[i] ? <span className="txt-xs txt-bold color-white align-middle px6 round-bold bg-green">New</span> : ''}
                  </div>
                ))}
              </div>
              <div className="mt12 txt-ms">
                <a href={this.props.ghLink} className="bright-blue-color text-decoration-none flex-parent-inline flex-parent--center-cross txt-bold">
                  <svg className={'icon mr12'}><use href='#icon-github'/></svg>
                  Contribute on Github
                  <svg className={'icon'}><use href='#icon-chevron-right'/></svg>
                </a>
              </div>
            </div>
            <div
              style={{ marginTop: -90, marginBottom: -60 }}
              className={`pr36 pl12 relative w${this.props.imgWidth} hmax360 flex-child block-mxl none clip flex-child--no-shrink`}>
              <div className="">
                <img className="pr36 pl12 flex-child block-mxl none clip flex-child--no-shrink absolute" src={this.props.deviceImg} />
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export { OverviewHeader };
