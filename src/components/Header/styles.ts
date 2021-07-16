import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  width: 100%;
  height: 60px;

  padding: 0 20px;
  padding-horizontal: ${getStatusBarHeight() + 'px'};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  elevation: 5;

  background-color: ${props => props.theme.primary};
`;

export const Title = styled.Text`
  margin-left: 25px;

  font-size: 20px;
  font-family: 'Jost Regular';

  color: ${props => props.theme['gray.500']};
`;
