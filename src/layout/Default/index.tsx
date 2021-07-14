import React, {ReactNode} from 'react';
import {StatusBar, StatusBarProps} from 'react-native';

import {colors} from '../../config/colors';

import {Header} from '../../components/Header';

import {Container, Content} from './styles';

interface DefaultProps {
  children: ReactNode;
  showHeader?: boolean;
  statusBar?: StatusBarProps;
}

export function Default({
  children,
  showHeader = false,
  statusBar = {
    backgroundColor: colors.primary,
  },
}: DefaultProps) {
  return (
    <Container>
      <StatusBar {...statusBar} />

      {showHeader && <Header />}

      <Content>{children}</Content>
    </Container>
  );
}
