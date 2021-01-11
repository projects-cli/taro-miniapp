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

const Icondelete: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M507.264 128A386.048 386.048 0 0 1 896 516.736C896 724.096 724.096 896 507.264 896 299.904 896 128 724.096 128 516.736 128 299.904 299.904 128 507.264 128z m95.232 248.256a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 1 1-45.248-45.248L466.752 512 376.256 421.504a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496z"
        fill={getIconColor(color, 0, '#000000')}
      />
    </svg>
  );
};

Icondelete.defaultProps = {
  size: 12,
};

export default Icondelete;
