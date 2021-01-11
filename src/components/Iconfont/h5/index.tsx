/* tslint:disable */
/* eslint-disable */

import React, { CSSProperties, DOMAttributes, FunctionComponent } from 'react';
import Icondelete from './Icondelete';
import IconlocationMini from './IconlocationMini';
import IcontoolLink from './IcontoolLink';
import Icondengshanbao from './Icondengshanbao';
import Iconedit from './Iconedit';
import IconarrowRight from './IconarrowRight';
import Icontuozhuai from './Icontuozhuai';
import IconarrowLeft from './IconarrowLeft';
import Iconadd from './Iconadd';
import IconarrowUp from './IconarrowUp';
import IconarrowDown from './IconarrowDown';
import Iconclose from './Iconclose';
import IcontoolMockup from './IcontoolMockup';
import IcontoolText from './IcontoolText';
import IconlocationFlag from './IconlocationFlag';

export type IconNames = 'delete' | 'location_mini' | 'tool-link' | 'dengshanbao' | 'edit' | 'arrow_right' | 'tuozhuai' | 'arrow_left' | 'add' | 'arrow_up' | 'arrow_down' | 'close' | 'tool-mockup' | 'tool-text' | 'location_flag';

interface Props extends DOMAttributes<SVGElement> {
  name: IconNames;
  size?: number;
  color?: string | string[];
  style?: CSSProperties;
  className?: string;
}

const IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'delete':
      return <Icondelete {...rest} />;
    case 'location_mini':
      return <IconlocationMini {...rest} />;
    case 'tool-link':
      return <IcontoolLink {...rest} />;
    case 'dengshanbao':
      return <Icondengshanbao {...rest} />;
    case 'edit':
      return <Iconedit {...rest} />;
    case 'arrow_right':
      return <IconarrowRight {...rest} />;
    case 'tuozhuai':
      return <Icontuozhuai {...rest} />;
    case 'arrow_left':
      return <IconarrowLeft {...rest} />;
    case 'add':
      return <Iconadd {...rest} />;
    case 'arrow_up':
      return <IconarrowUp {...rest} />;
    case 'arrow_down':
      return <IconarrowDown {...rest} />;
    case 'close':
      return <Iconclose {...rest} />;
    case 'tool-mockup':
      return <IcontoolMockup {...rest} />;
    case 'tool-text':
      return <IcontoolText {...rest} />;
    case 'location_flag':
      return <IconlocationFlag {...rest} />;

  }

  return null;
};

export default IconFont;
