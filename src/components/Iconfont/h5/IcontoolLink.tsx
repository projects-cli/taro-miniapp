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

const IcontoolLink: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M395.52 454.144a159.552 159.552 0 0 0-118.528 46.72l-67.84 67.968a160 160 0 1 0 226.24 226.24l67.904-67.84a159.616 159.616 0 0 0 41.664-153.6l-60.992 60.992c-3.84 17.28-12.416 33.856-25.92 47.36l-67.84 67.84a96 96 0 1 1-135.808-135.744l67.84-67.904c11.136-11.072 24.32-18.944 38.272-23.424l64.768-64.832a160.64 160.64 0 0 0-29.696-3.776z m80.896 25.088l0.512-0.576 40.064-40a32 32 0 0 1 45.248 45.248L436.032 610.112a32 32 0 1 1-45.248-45.248l38.464-38.528 47.168-47.104z m142.72 6.528c-3.84 12.544-10.752 24.384-20.672 34.304l-25.6 25.664a159.552 159.552 0 0 0 150.592-42.432l67.84-67.84a160 160 0 1 0-226.304-226.304l-67.84 67.84a159.616 159.616 0 0 0-42.24 151.36l25.92-25.92c9.792-9.792 21.44-16.64 33.792-20.544 1.92-21.76 11.136-42.944 27.776-59.584l67.84-67.904a96 96 0 1 1 135.808 135.744l-67.84 67.84a95.616 95.616 0 0 1-59.072 27.776z"
        fill={getIconColor(color, 0, '#000000')}
      />
    </svg>
  );
};

IcontoolLink.defaultProps = {
  size: 12,
};

export default IcontoolLink;
