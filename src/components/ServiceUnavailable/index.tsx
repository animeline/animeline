import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useTheme} from 'styled-components';
import {useNavigation} from '@react-navigation/native';

import {Button} from '../Button';

import {Container, Title, Description} from './styles';

export function ServiceUnavailable() {
  const theme = useTheme();

  const navigation = useNavigation();

  function handleNavigateToHomeScreen() {
    navigation.navigate('Home');
  }

  return (
    <Container>
      <FontAwesome5 name="frown" size={70} color={theme['gray.500']} />

      <Title>Whoops!</Title>

      <Description>
        No momento esta página está indisponível ou não foi criada.
      </Description>

      <Button onPress={handleNavigateToHomeScreen}>Voltar ao início</Button>
    </Container>
  );
}
