import React from 'react';
import {View, Text} from 'react-native';

import {styles} from './styles';

interface OnboardingProps {}

export function Onboarding({}: OnboardingProps) {
  return (
    <View>
      <Text style={styles.text}>Olá meu nome é Zev</Text>
    </View>
  );
}
