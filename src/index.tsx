import React from 'react';
import {View, StatusBar} from 'react-native';

import Routes from './routes';

const App: React.FC = () => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1}}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Routes />
    </View>
  );
};

export default App;
