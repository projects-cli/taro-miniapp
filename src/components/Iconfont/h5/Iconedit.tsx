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

const Iconedit: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M861.44 157.44a41.6 41.6 0 0 0-58.88 0L454.208 505.792a41.6 41.6 0 0 0 58.88 58.816l348.352-348.352a41.6 41.6 0 0 0 0-58.88z"
        fill={getIconColor(color, 0, '#000000')}
      />
      <path
        d="M233.6 320c0-47.744 38.656-86.4 86.4-86.4h256a41.6 41.6 0 0 0 0-83.2H320A169.6 169.6 0 0 0 150.4 320v384A169.6 169.6 0 0 0 320 873.6h384A169.6 169.6 0 0 0 873.6 704V440.896a41.6 41.6 0 1 0-83.2 0V704A86.4 86.4 0 0 1 704 790.4H320A86.4 86.4 0 0 1 233.6 704V320z"
        fill={getIconColor(color, 1, '#000000')}
      />
    </svg>
  );
};

Iconedit.defaultProps = {
  size: 12,
};

export default Iconedit;
