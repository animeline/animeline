import React from 'react';
import {SvgXml, SvgProps} from 'react-native-svg';

import LogoTextSvg from './logo-text.svg';

export function LogoText({...rest}: SvgProps) {
  return <SvgXml xml={LogoTextSvg} {...rest} />;
}
