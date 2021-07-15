import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  width: 100%;
  height: 60px;

  padding: 0 10px;
  padding-horizontal: ${getStatusBarHeight() + 'px'};

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${props => props.theme.primary};
`;
