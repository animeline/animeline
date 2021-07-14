import React, {ReactNode} from 'react';
import {ActivityIndicator, TouchableOpacityProps} from 'react-native';
import {useTheme} from 'styled-components';

import {Container, Text} from './styles';

interface ButtonProps extends TouchableOpacityProps {
  children: ReactNode;
  variant?: 'primary' | 'transparent';
  size?: 'sm' | 'lg';
  loading?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'sm',
  loading = false,
  ...rest
}: ButtonProps) {
  const theme = useTheme();

  return (
    <Container
      activeOpacity={0.6}
      variant={variant}
      size={size}
      loading={loading}
      disabled={loading ? true : false}
      {...rest}>
      <Text variant={variant}>
        {loading ? (
          <ActivityIndicator
            size={size === 'sm' ? 25 : 30}
            color={variant === 'primary' ? '#FFFFFF' : theme.primary}
          />
        ) : (
          children
        )}
      </Text>
    </Container>
  );
}
