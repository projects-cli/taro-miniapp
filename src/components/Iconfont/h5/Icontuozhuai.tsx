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

const Icontuozhuai: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M192 320m16 0l608 0q16 0 16 16l0 0q0 16-16 16l-608 0q-16 0-16-16l0 0q0-16 16-16Z"
        fill={getIconColor(color, 0, '#000000')}
      />
      <path
        d="M192 480m16 0l608 0q16 0 16 16l0 0q0 16-16 16l-608 0q-16 0-16-16l0 0q0-16 16-16Z"
        fill={getIconColor(color, 1, '#000000')}
      />
      <path
        d="M192 640m16 0l608 0q16 0 16 16l0 0q0 16-16 16l-608 0q-16 0-16-16l0 0q0-16 16-16Z"
        fill={getIconColor(color, 2, '#000000')}
      />
    </svg>
  );
};

Icontuozhuai.defaultProps = {
  size: 12,
};

export default Icontuozhuai;
