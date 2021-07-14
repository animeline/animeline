import React from 'react';
import {SvgXml, SvgProps} from 'react-native-svg';

import HelloSvg from './hello.svg';

export function Hello({...rest}: SvgProps) {
  return <SvgXml xml={HelloSvg} {...rest} />;
}
