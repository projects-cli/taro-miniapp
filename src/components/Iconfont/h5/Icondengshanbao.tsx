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

const Icondengshanbao: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M330.930473 128.24969a192.010477 192.010477 0 0 1 362.139054 0H767.92866a127.96433 127.96433 0 0 1 127.96433 127.96433v447.875155a191.946495 191.946495 0 0 1-191.946495 191.946495H320.053505a191.946495 191.946495 0 0 1-191.946495-191.946495V256.21402a127.96433 127.96433 0 0 1 127.96433-127.96433h74.859133zM512 64.267525a127.96433 127.96433 0 0 1 110.81711 63.982165H401.18289A127.96433 127.96433 0 0 1 512 64.267525z m255.92866 127.96433H256.07134a63.982165 63.982165 0 0 0-63.982165 63.982165v63.982165h639.82165V256.21402a63.982165 63.982165 0 0 0-63.982165-63.982165z m63.982165 191.946495h-127.96433v191.946495h-63.982165V384.17835H384.03567v191.946495H320.053505V384.17835H192.089175v319.910825a127.96433 127.96433 0 0 0 127.96433 127.96433h383.89299a127.96433 127.96433 0 0 0 127.96433-127.96433V384.17835z"
        fill={getIconColor(color, 0, '#000000')}
      />
    </svg>
  );
};

Icondengshanbao.defaultProps = {
  size: 12,
};

export default Icondengshanbao;
