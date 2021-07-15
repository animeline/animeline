import React, {ReactNode} from 'react';
import {StatusBar, StatusBarProps} from 'react-native';

import {colors} from '@config/colors';

import {Header} from '@components/Header';

import {Container, Content} from './styles';

interface DefaultProps {
  children: ReactNode;
  header?: {
    type?: 'default' | 'back' | 'input';
    bgColor?: ColorValue;
    hidden?: boolean;
  };
  statusBar?: StatusBarProps;
}

export function Default({
  children,
  header = {
    hidden: true,
  },
  statusBar = {
    backgroundColor: colors.primary,
  },
}: DefaultProps) {
  return (
    <Container>
      <StatusBar {...statusBar} />

      <Header
        type={header.type}
        bgColor={header.bgColor}
        hidden={header.hidden}
      />

      <Content>{children}</Content>
    </Container>
  );
}
