import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {useTheme} from 'styled-components';
import {useNavigation} from '@react-navigation/native';

import {Default} from '@layout/Default';

import {Content} from './styles';

export function Home() {
  const theme = useTheme();

  const navigation = useNavigation();

  return (
    <Default
      showHeader
      statusBar={{
        backgroundColor: theme.primary,
        barStyle: 'default',
      }}>
      <Content>
        <TouchableOpacity onPress={() => navigation.navigate('Anime')}>
          <Text>Navegar para o Anime</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Onboarding')}>
          <Text>Navegar para o Onboarding</Text>
        </TouchableOpacity>
      </Content>
    </Default>
  );
}
