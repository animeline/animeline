import React from 'react';

import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome';

import {Container, Label} from './styles';

export interface IButton {
  focused: boolean;
  onPress?: () => void;
}

const SearchButton: React.FC<IButton> = ({onPress, focused}) => (
  <Container>
    <FontAwesome5Icons
      name="search"
      size={10}
      color={focused ? '#000' : '#fff'}
    />
    <Label focused={focused}>Pagar</Label>
  </Container>
);

export default SearchButton;
