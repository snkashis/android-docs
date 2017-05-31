/* @flow */
import React from 'react';
import { DeviceAndroid } from '../svg/components/device_android';

type Props = {
  children?: ReactNode,
  width: number,
  extraClasses?: string
};

class AndroidFrame extends React.Component {
  props: Props;

  static defaultProps = {
    width: 300
  };

  render() {
    // Value represents the ratio of height to width. This is for IE11 which
    // requires an explicit height to be set on SVGs.
    const height = this.props.width * 1.9320987654;

    const containerClass = 'relative ' + (this.props.extraClasses ? this.props.extraClasses : '');
    return (
      <div className={containerClass}>
        <DeviceAndroid title="" role="presentation" style={{ height: height, width: this.props.width }} />
        <div className="in-android-frame absolute clip border round border--2 border-gray-dark">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export { AndroidFrame };
