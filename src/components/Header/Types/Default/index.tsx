import React from 'react';
import {TouchableOpacity} from 'react-native';
import {DefaultTheme} from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {LogoText} from '@assets/images/svg/logo-text';

import {Container} from './styles';

interface DefaultProps {
  theme: DefaultTheme;
  onNavigateToSettingsScreen: () => void;
}

export function Default({theme, onNavigateToSettingsScreen}: DefaultProps) {
  return (
    <Container>
      <LogoText width={110} height={80} />

      <TouchableOpacity onPress={onNavigateToSettingsScreen}>
        <Ionicons name="settings-outline" size={25} color={theme.white} />
      </TouchableOpacity>
    </Container>
  );
}
