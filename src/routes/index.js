import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../application/Home';
import Mine from '../application/Mine';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export function AppRoute() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{title: '首页'}} component={Home} />
        <Stack.Screen name="Mine" options={{title: '我的'}} component={Mine} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppRoute;
