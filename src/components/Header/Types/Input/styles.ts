import styled from 'styled-components/native';
import {lighten} from 'polished';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  width: 100%;
  height: 60px;

  padding: 0 20px;
  padding-horizontal: ${getStatusBarHeight() + 'px'};

  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  elevation: 5;

  background-color: ${props => props.theme.white};
`;

export const Title = styled.Text`
  margin-left: 25px;

  font-size: 20px;
  font-family: 'Jost Regular';

  color: ${props => props.theme['gray.500']};
`;

export const TextInput = styled.TextInput`
  height: 40px;

  padding: 0 15px;
  margin-left: 10px;

  font-size: 16px;
  font-family: 'Roboto Regular';

  color: ${props => props.theme.black};

  border-radius: 4px;
`;
