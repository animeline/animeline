import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from 'styled-components';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Home} from '../screens/Home';
import {Categories} from '../screens/Categories';
import {Bookmarks} from '../screens/Bookmarks';
import {Offline} from '../screens/Offline';

import {SearchButton} from './SearchButton';

const {Navigator, Screen} = createBottomTabNavigator();

interface Icon {
  type: {
    filled?: string;
    outline?: string;
  };
  library?: any;
}

type ObjectIcons = Record<string, Icon>;

export function TabRoutes() {
  const theme = useTheme();

  const icons: ObjectIcons = {
    Home: {
      type: {filled: 'home', outline: 'home-outline'},
      library: Ionicons,
    },
    Categories: {
      type: {filled: 'list', outline: 'list-outline'},
      library: Ionicons,
    },
    Quest: {type: {outline: 'search-outline'}},
    Bookmarks: {
      type: {filled: 'heart', outline: 'heart-outline'},
      library: Ionicons,
    },
    Offline: {
      library: Ionicons,
      type: {filled: 'cloud-download', outline: 'cloud-download-outline'},
    },
  };

  return (
    <Navigator
      screenOptions={({route, navigation}) => {
        const {type, library: Icon} = icons[route.name];

        return {
          tabBarIcon: ({color, size, focused}) => {
            if (route.name === 'Quest') {
              function handleNavigateToSearchScreen() {
                navigation.navigate('Search');
              }

              return (
                <SearchButton
                  name={String(type.outline)}
                  focused={focused}
                  theme={theme}
                  onPress={handleNavigateToSearchScreen}
                />
              );
            }

            return (
              <Icon
                name={focused ? type?.filled : type?.outline}
                size={size}
                color={color}
              />
            );
          },
        };
      }}
      tabBarOptions={{
        style: {
          height: 65,
          paddingTop: 10,
          paddingBottom: 10,
          borderTopColor: 'rgba(255, 255, 255, 0.2)',
        },
        labelStyle: {
          fontSize: 12,
          fontFamily: 'Roboto Medium',
        },
        activeTintColor: theme.primary,
        inactiveTintColor: theme.gray['500'],
      }}>
      <Screen
        name="Home"
        component={Home}
        options={{
          title: 'Início',
        }}
      />

      <Screen
        name="Categories"
        component={Categories}
        options={{
          title: 'Categorias',
        }}
      />

      <Screen name="Quest" component={Component} options={{title: ''}} />

      <Screen
        name="Bookmarks"
        component={Bookmarks}
        options={{
          title: 'Favoritos',
        }}
      />

      <Screen
        name="Offline"
        component={Offline}
        options={{
          title: 'Offline',
        }}
      />
    </Navigator>
  );
}
