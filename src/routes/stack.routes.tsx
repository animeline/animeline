import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const {Navigator, Screen} = createStackNavigator();

import {Anime} from '../screens/Anime';
import {Search} from '../screens/Search';
import {Settings} from '../screens/Settings';

import {Onboarding} from '../screens/Onboarding';

import {TabRoutes} from './tab.routes';

export function StackRoutes() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Home" component={TabRoutes} />
      <Screen name="Onboarding" component={Onboarding} />
      <Screen name="Anime" component={Anime} options={{headerShown: true}} />
      <Screen name="Search" component={Search} options={{headerShown: true}} />
      <Screen
        name="Settings"
        component={Settings}
        options={{headerShown: true}}
      />
    </Navigator>
  );
}
