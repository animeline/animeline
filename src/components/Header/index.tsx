import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {ColorValue, View} from 'react-native';
import {useTheme} from 'styled-components';

import {Default} from './Types/Default';
import {Back} from './Types/Back';

interface HeaderProps {
  type?: 'default' | 'back';
  bgColor?: ColorValue;
  hidden?: boolean;
}

export function Header({
  type = 'default',
  bgColor = 'white',
  hidden = true,
}: HeaderProps) {
  const route = useRoute();

  const navigation = useNavigation();

  const theme = useTheme();

  function handleNavigateToSettingsScreen() {
    navigation.navigate('Settings');
  }

  function handleNavigateGoBack() {
    navigation.goBack();
  }

  return (
    <View>
      {!hidden && type === 'default' && (
        <Default
          theme={theme}
          onNavigateToSettingsScreen={handleNavigateToSettingsScreen}
        />
      )}

      {!hidden && type === 'back' && (
        <Back
          theme={theme}
          bgColor={bgColor}
          routeName={route.name}
          onNavigateGoBack={handleNavigateGoBack}
        />
      )}
    </View>
  );
}
