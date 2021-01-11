/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import Taro from '@tarojs/taro';

interface Props {
  name: 'delete' | 'location_mini' | 'tool-link' | 'dengshanbao' | 'edit' | 'arrow_right' | 'tuozhuai' | 'arrow_left' | 'add' | 'arrow_up' | 'arrow_down' | 'close' | 'tool-mockup' | 'tool-text' | 'location_flag';
  size?: number;
  color?: string | string[];
  style?: React.CSSProperties;
}

const IconFont: FunctionComponent<Props> = (props) => {
  const { name, size, color, style } = props;

  // @ts-ignore
  return <iconfont name={name} size={parseFloat(Taro.pxTransform(size))} color={color} style={style} />;
};

IconFont.defaultProps = {
  size: 12,
};

export default IconFont;
