import styled, {css} from 'styled-components/native';

const sizes = {
  sm: css`
    padding: 10px 36px;
  `,
  lg: css`
    padding: 16px 46px;
  `,
};

const variants = {
  button: {
    primary: css``,
    transparent: css``,
  },
  text: {
    primary: css``,
    transparent: css``,
  },
};

interface ButtonProps {
  variant?: 'primary' | 'transparent';
  size?: 'sm' | 'lg';
  loading?: boolean;
}

export const Container = styled.TouchableOpacity<ButtonProps>`
  align-items: center;
  justify-content: center;

  border-radius: 8px;

  background-color: ${props => props.theme.primary};

  ${props =>
    props.disabled &&
    css`
      opacity: 0.6;
    `}

  ${props => props.size && sizes[props.size]}
  ${props => props.variant && variants.button[props.variant]}
`;

interface TextProps {
  variant?: 'primary' | 'transparent';
}

export const Text = styled.Text<TextProps>`
  font-size: 20px;
  font-family: 'Jost Bold';

  color: ${props => props.theme.white};
`;
