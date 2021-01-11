/* tslint:disable */
/* eslint-disable */

import React, { CSSProperties, DOMAttributes, FunctionComponent } from 'react';
import { getIconColor } from './helper';

interface Props extends DOMAttributes<SVGElement> {
  size?: number;
  color?: string | string[];
  style?: CSSProperties;
  className?: string;
}

const DEFAULT_STYLE: CSSProperties = {
  display: 'block',
};

const IconlocationMini: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M783.36 468.48c0 33.664-6.016 65.92-17.024 95.68-4.8 14.72-28.608 74.88-121.216 180.8a426.304 426.304 0 0 1-81.344 70.848c-34.176 23.168-78.144 20.672-112-2.816-32.768-22.72-72.768-53.376-98.496-83.392-76.096-88.768-99.328-146.112-105.152-163.456A276.48 276.48 0 1 1 783.36 468.48zM506.88 364.8a103.68 103.68 0 1 1 0 207.36 103.68 103.68 0 0 1 0-207.36z"
        fill={getIconColor(color, 0, '#000000')}
      />
    </svg>
  );
};

IconlocationMini.defaultProps = {
  size: 12,
};

export default IconlocationMini;
