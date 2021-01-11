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

const IconarrowDown: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M226.56 354.56a41.6 41.6 0 0 1 58.88 0L512 581.12l226.56-226.56a41.6 41.6 0 1 1 58.88 58.88l-256 256a41.6 41.6 0 0 1-58.88 0l-256-256a41.6 41.6 0 0 1 0-58.88z"
        fill={getIconColor(color, 0, '#000000')}
      />
    </svg>
  );
};

IconarrowDown.defaultProps = {
  size: 12,
};

export default IconarrowDown;
