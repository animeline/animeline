import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  background-color: ${props => props.theme.white};
`;

export const Content = styled.SafeAreaView`
  flex: 1;
`;
