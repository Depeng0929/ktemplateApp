import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Tabbar from './tab';
import Space from '../application/space';

const Stack = createNativeStackNavigator();

function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={Tabbar} />

        <Stack.Screen name="Space" component={Space} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppRoutes;
