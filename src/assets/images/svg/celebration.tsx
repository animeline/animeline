import React from 'react';
import {SvgXml, SvgProps} from 'react-native-svg';

import CelebrationSvg from './celebration.svg';

export function Celebration({...rest}: SvgProps) {
  return <SvgXml xml={CelebrationSvg} {...rest} />;
}
