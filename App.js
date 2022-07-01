/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/application/Home';
import Mine from './src/application/Mine';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{title: '首页'}} component={Home} />
        <Stack.Screen name="Mine" options={{title: '我的'}} component={Mine} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
