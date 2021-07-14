import {Animated} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  height: 50px;

  flex-direction: row;
`;

interface DotProps {
  selected?: boolean;
}

export const Dot = styled(Animated.View)<DotProps>`
  margin-horizontal: 8px;

  width: 10px;
  height: 10px;

  border-radius: 5px;

  background-color: ${props => props.theme.gray['500']};
`;
