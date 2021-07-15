/* eslint-disable react-native/no-inline-styles */

import React, {ReactNode} from 'react';
import {
  ActivityIndicator,
  ColorValue,
  StatusBar,
  StatusBarProps,
  View,
} from 'react-native';

import {colors} from '@config/colors';

import {Header} from '@components/Header';

import {Container, Content} from './styles';

interface DefaultProps {
  children: ReactNode;
  header?: {
    type?: 'default' | 'back';
    bgColor?: ColorValue;
    hidden?: boolean;
  };
  loading?: boolean;
  statusBar?: StatusBarProps;
}

export function Default({
  children,
  header = {
    hidden: true,
  },
  loading = false,
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

      <Content>
        {loading ? (
          <View style={{flex: 1, justifyContent: 'center'}}>
            <ActivityIndicator size={70} color={colors.primary} />
          </View>
        ) : (
          children
        )}
      </Content>
    </Container>
  );
}
