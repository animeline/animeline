import styled from 'styled-components/native';

export const Container = styled.View`
  width: 60px;
  height: 60px;

  align-items: center;
  justify-content: center;

  border-radius: 30px;

  background-color: ${props => props.theme.primary};
`;
