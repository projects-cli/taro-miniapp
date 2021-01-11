/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';

export type IconNames = 'delete' | 'location_mini' | 'tool-link' | 'dengshanbao' | 'edit' | 'arrow_right' | 'tuozhuai' | 'arrow_left' | 'add' | 'arrow_up' | 'arrow_down' | 'close' | 'tool-mockup' | 'tool-text' | 'location_flag';

export interface IconProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
  style?: React.CSSProperties;
}

const IconFont: FunctionComponent<IconProps> = () => {
  return null;
};

export default IconFont;
