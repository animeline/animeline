/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {ColorValue, TouchableOpacity} from 'react-native';
import {DefaultTheme} from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Container, Title} from './styles';

interface BackProps {
  theme: DefaultTheme;
  bgColor: ColorValue;
  routeName: string;
  onNavigateGoBack: () => void;
}

export function Back({theme, bgColor, routeName, onNavigateGoBack}: BackProps) {
  return (
    <Container bgColor={bgColor}>
      <TouchableOpacity onPress={onNavigateGoBack}>
        <Ionicons name="arrow-back" size={25} color={theme['gray.500']} />
      </TouchableOpacity>

      <Title>{routeName}</Title>
    </Container>
  );
}
