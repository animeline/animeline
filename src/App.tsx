import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {ThemeProvider} from 'styled-components';

import {colors} from './config/colors';

import {Routes} from './routes';

export function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ThemeProvider theme={colors}>
      <Routes />
    </ThemeProvider>
  );
}
