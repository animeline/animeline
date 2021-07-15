import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {ThemeProvider} from 'styled-components';
import {QueryClientProvider} from 'react-query';

import {colors} from '../config/colors';

import {Routes} from '../routes';

import {queryClient} from '../services/queryClient';

export function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={colors}>
        <Routes />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
