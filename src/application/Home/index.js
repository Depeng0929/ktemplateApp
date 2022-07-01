import React from 'react';
import {Button, Text, View} from 'react-native';

function Home({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home</Text>

      <Button title="Go to Home" onPress={() => navigation.navigate('Mine')} />
    </View>
  );
}

export default Home;
