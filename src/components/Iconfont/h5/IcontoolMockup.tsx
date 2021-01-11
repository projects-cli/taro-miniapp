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

const IcontoolMockup: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M192 229.632C192 208.832 208.832 192 229.632 192h301.184c20.8 0 37.632 16.832 37.632 37.632v301.184a37.632 37.632 0 0 1-37.632 37.632H229.632A37.632 37.632 0 0 1 192 530.816V229.632zM606.08 229.632c0-20.8 16.896-37.632 37.696-37.632h150.592c20.8 0 37.632 16.832 37.632 37.632v301.184a37.632 37.632 0 0 1-37.632 37.632h-150.592a37.632 37.632 0 0 1-37.632-37.632V229.632zM229.632 606.08A37.632 37.632 0 0 0 192 643.84v150.592c0 20.8 16.832 37.632 37.632 37.632h564.736a37.632 37.632 0 0 0 37.632-37.632v-150.592a37.632 37.632 0 0 0-37.632-37.632H229.632z"
        fill={getIconColor(color, 0, '#000000')}
      />
    </svg>
  );
};

IcontoolMockup.defaultProps = {
  size: 12,
};

export default IcontoolMockup;
