import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 38px;
  font-family: 'Roboto Bold';

  text-align: center;

  color: ${props => props.theme['gray.500']};
`;

export const ImageContainer = styled.View`
  margin: 16px 0;
`;

export const Description = styled.Text`
  padding-horizontal: 28px;

  font-size: 18px;
  font-family: 'Jost Regular';

  text-align: center;

  color: ${props => props.theme['gray.500']};
`;
