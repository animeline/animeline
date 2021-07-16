import {ColorValue} from 'react-native';
import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

interface BackProps {
  bgColor: ColorValue;
}

export const Container = styled.View<BackProps>`
  width: 100%;
  height: 60px;

  padding: 0 20px;
  padding-horizontal: ${getStatusBarHeight() + 'px'};

  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  elevation: 5;

  background-color: ${props => String(props.bgColor) || props.theme.white};
`;

export const Title = styled.Text`
  margin-left: 25px;

  font-size: 20px;
  font-family: 'Jost Regular';

  color: ${props => props.theme['gray.500']};
`;
