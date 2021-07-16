import React, {Ref} from 'react';
import {
  Keyboard,
  TextInput as RNTextInput,
  TouchableOpacity,
} from 'react-native';
import {DefaultTheme} from 'styled-components/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Container, TextInput} from './styles';

interface InputProps {
  theme: DefaultTheme;
  status: string;
  inputRef: Ref<RNTextInput>;
  onInputChange: (value: string) => void;
  onNavigateGoBack: () => void;
}

export function Input({
  theme,
  status,
  inputRef,
  onInputChange,
  onNavigateGoBack,
}: InputProps) {
  return (
    <Container>
      <TouchableOpacity onPress={onNavigateGoBack}>
        <Ionicons name="arrow-back" size={25} color={theme['gray.500']} />
      </TouchableOpacity>

      <TextInput
        ref={inputRef}
        style={[
          status === 'error' && {
            borderColor: theme['red-light.300'],
          },
          status === 'loading' && {
            borderColor: theme['gold.300'],
          },
        ]}
        placeholder="Digite uma palavra chave"
        placeholderTextColor={theme['gray.500']}
        onChangeText={onInputChange}
        onSubmitEditing={Keyboard.dismiss}
      />
    </Container>
  );
}
