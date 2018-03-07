import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mapbox/react-icon';
import { AppropriateImage } from './appropriate-image';
import * as constants from '../constants';

export class OverviewHeader extends React.PureComponent {
  static propTypes = {
    sdk: PropTypes.string.isRequired,
    versionConstant: PropTypes.string,
    changelogLink: PropTypes.string,
    sdkFeatures: PropTypes.arrayOf(PropTypes.string).isRequired,
    newFeature: PropTypes.arrayOf(PropTypes.bool).isRequired,
    ghLink: PropTypes.string.isRequired,
    imageId: PropTypes.string.isRequired,
    imageWidth: PropTypes.number
  };

  static defaultProps = {
    imageWidth: 360
  };

  render() {
    const { props } = this;
    let changelogLink = null;
    if (props.changelogLink) {
      let changelogLinkClasses = `link link--white opacity75 opacity100-on-hover txt-underline`;
      if (props.versionConstant) changelogLinkClasses += ' ml12';
      changelogLink = (
        <a className={changelogLinkClasses} href={props.changelogLink}>
          View changelog
        </a>
      );
    }

    const imageContainerClasses = `absolute top right hmax360 block-mxl none w${props.imageWidth}`;

    return (
      <div className="bg-gray-faint scroll-hidden mt6 wmax960 round-bold relative">
        <div
          className="bg-green py18 color-white round-t-bold clearfix pl24 pr24-until-mxl"
          style={{ minHeight: 100, paddingRight: props.imageWidth + 24 }}
        >
          <div
            style={{ marginTop: 20, marginRight: -12 }}
            className={imageContainerClasses}
          >
            <AppropriateImage imageId={this.props.imageId} />
          </div>
          <h2 className={'txt-h2-mm txt-h3'}>
            {props.sdk}
          </h2>
          <div className="txt-ms mt3">
            {props.versionConstant &&
              <span>
                <span>Current Version:</span>{' '}
                <span className="txt-bold">
                  v{constants[props.versionConstant]}
                </span>{' '}
              </span>}
            {changelogLink}
          </div>
        </div>
        <div>
          <div
            className="py18 pl24 pr24-until-mxl"
            style={{ paddingRight: props.imageWidth + 24 }}
          >
            <div className="grid txt-ms">
              {props.sdkFeatures.map((feature, i) =>
                <div
                  key={i}
                  className="col mb3 mt0 col--6-mxl col--12 flex-parent--center-cross flex-parent inline-block"
                >
                  <Icon name="check" themeIcon="color-green" />
                  <span className="color-dark pr6 pl6">
                    {feature}
                  </span>
                  {props.newFeature[i]
                    ? <span className="txt-xs txt-bold color-white align-middle px6 round-bold bg-green">
                        New
                      </span>
                    : ''}
                </div>
              )}
            </div>
            <div className="mt12 txt-ms">
              <a
                href={this.props.ghLink}
                className="link text-decoration-none flex-parent-inline flex-parent--center-cross txt-bold"
              >
                <div className="mr12">
                  <Icon name="github" />
                </div>
                Contribute on GitHub
                <Icon name="chevron-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
