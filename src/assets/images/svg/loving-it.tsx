import React from 'react';
import {SvgXml, SvgProps} from 'react-native-svg';

import LovingItSvg from './loving-it.svg';

export function LovingIt({...rest}: SvgProps) {
  return <SvgXml xml={LovingItSvg} {...rest} />;
}
