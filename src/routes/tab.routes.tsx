import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import EntypoIcons from 'react-native-vector-icons/Entypo';

import SearchButton from '../components/SearchButton';

import Home from '../pages/Home';

const Tab = createBottomTabNavigator();

interface IIcon {
  [key: string]: {
    lib: any;
    name: string;
  };
}

const icons: IIcon = {
  Home: {
    lib: EntypoIcons,
    name: 'home',
  },
  Categories: {
    lib: EntypoIcons,
    name: 'home',
  },
  Search: {
    lib: EntypoIcons,
    name: 'home',
  },
  Bookmarks: {
    lib: EntypoIcons,
    name: 'home',
  },
  Profile: {
    lib: EntypoIcons,
    name: 'home',
  },
};

const TabRoutes: React.FC = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({color, size}) => {
        const {lib: Icon, name} = icons[String(route.name)];

        if (route.name === 'Search') {
          return <SearchButton />;
        }

        return <Icon name={name} color={color} size={size} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#FFF',
      style: {
        borderTopColor: '#F34343',

        backgroundColor: '#F34343',
      },
    }}>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        title: 'Início',
        // tabBarIcon: ({size}) => <EntypoIcons name="home" size={size} />,
      }}
    />
    <Tab.Screen name="Categories" component={Home} />
    <Tab.Screen name="Search" component={Home} options={{title: ''}} />
    <Tab.Screen name="Bookmarks" component={Home} />
    <Tab.Screen name="Profile" component={Home} />
  </Tab.Navigator>
);

export default TabRoutes;
