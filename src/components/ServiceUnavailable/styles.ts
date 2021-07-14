import styled from 'styled-components/native';

export const Container = styled.View`
  margin-horizontal: 30px;

  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  margin-top: 10px;

  font-size: 25px;
  font-family: 'Jost Medium';
`;

export const Description = styled.Text`
  margin: 20px 0;

  font-size: 16px;
  font-family: 'Jost Regular';

  color: ${props => props.theme.gray['500']};
`;
