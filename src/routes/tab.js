import React from 'react';
import Home from '../application/Home';
import Mine from '../application/Mine';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';

AntDesignIcons.loadFont();

const Tab = createBottomTabNavigator();
const config = {
  Home: {
    icon: 'home',
  },
  Mine: {
    icon: 'user',
  },
};

function Tabbar() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName = config[route.name].icon;

          return <AntDesignIcons name={iconName} size={size} color={color} />;
        },
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Mine" component={Mine} />
    </Tab.Navigator>
  );
}

export default Tabbar;
