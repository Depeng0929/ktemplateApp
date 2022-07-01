import React from 'react';
import {Text, View} from 'react-native';
import {Button} from '@rneui/themed';
import {AirbnbRating} from '@rneui/themed';
import {useTailwind} from 'tailwind-rn';

function Home({navigation}) {
  const tailwind = useTailwind();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home</Text>
      <Text style={tailwind('text-blue-600 mt-16')}>Hello world</Text>
      <AirbnbRating />
      <Button
        title="Go to Space"
        onPress={() => navigation.navigate('Space')}
      />
      <Button
        style={tailwind('mt-4')}
        title="Go to Mine"
        onPress={() => navigation.navigate('Mine')}
      />
    </View>
  );
}

export default Home;
