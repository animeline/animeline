// @ts-ignore

import styled from 'styled-components/native';

import {IButton} from '.';

export const Container = styled.View`
  width: 60px;
  height: 60px;

  align-items: center;
  justify-content: center;

  border-radius: 30px;
`;

export const Label = styled.Text<IButton>`
  font-size: 12px;
  color: ${({focused}) => (focused ? '#000' : '#fff')};
`;
