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

const Iconclose: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M767.68 269.888a41.6 41.6 0 0 0-58.88 0L512 466.752 315.136 269.888a41.6 41.6 0 0 0-58.88 58.88l196.928 196.8-183.296 183.296a41.6 41.6 0 1 0 58.88 58.88L512 584.32l183.296 183.296a41.6 41.6 0 1 0 58.816-58.88L570.816 525.632l196.864-196.864a41.6 41.6 0 0 0 0-58.816z"
        fill={getIconColor(color, 0, '#000000')}
      />
    </svg>
  );
};

Iconclose.defaultProps = {
  size: 12,
};

export default Iconclose;
