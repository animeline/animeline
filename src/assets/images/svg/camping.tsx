import React from 'react';
import {SvgXml, SvgProps} from 'react-native-svg';

import CampingSvg from './camping.svg';

export function Camping({...rest}: SvgProps) {
  return <SvgXml xml={CampingSvg} {...rest} />;
}
