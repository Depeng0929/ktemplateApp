import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';

import AppRoute from './src/routes/index';

function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <SafeAreaProvider>
        <AppRoute />
      </SafeAreaProvider>
    </TailwindProvider>
  );
}

export default App;
