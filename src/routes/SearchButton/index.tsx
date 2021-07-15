import React from 'react';
import {TouchableWithoutFeedback} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {DefaultTheme} from 'styled-components';

import {Container} from './styles';

interface SearchButtonProps {
  name: string;
  focused: boolean;
  theme: DefaultTheme;
  onPress: () => void;
}

export function SearchButton({name, theme, onPress}: SearchButtonProps) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Container>
        <Ionicons name={name} size={25} color={theme.white} />
      </Container>
    </TouchableWithoutFeedback>
  );
}
