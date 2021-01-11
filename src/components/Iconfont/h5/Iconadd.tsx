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

const Iconadd: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M521.6 160a41.6 41.6 0 0 0-41.6 41.6V480H201.6a41.6 41.6 0 0 0 0 83.2H480v259.2a41.6 41.6 0 1 0 83.2 0V563.2h259.2a41.6 41.6 0 1 0 0-83.2H563.2V201.6a41.6 41.6 0 0 0-41.6-41.6z"
        fill={getIconColor(color, 0, '#000000')}
      />
    </svg>
  );
};

Iconadd.defaultProps = {
  size: 12,
};

export default Iconadd;
