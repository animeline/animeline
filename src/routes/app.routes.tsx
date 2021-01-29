import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import TabRoutes from './tab.routes';

const AppRoutes: React.FC = () => (
  <NavigationContainer>
    <TabRoutes />
  </NavigationContainer>
);

export default AppRoutes;
