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

const IconlocationFlag: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M288 192a32 32 0 0 0-32 32v576a32 32 0 0 0 64 0v-576a32 32 0 0 0-32-32z m140.608 19.136a32 32 0 0 0-44.608 29.44v286.912a32 32 0 0 0 44.608 29.44l334.72-143.488a32 32 0 0 0 0-58.88L428.672 211.2z"
        fill={getIconColor(color, 0, '#000000')}
      />
    </svg>
  );
};

IconlocationFlag.defaultProps = {
  size: 12,
};

export default IconlocationFlag;
