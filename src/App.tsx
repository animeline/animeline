import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import {Onboarding} from './components/Onboarding';

export function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return <Onboarding />;
}
