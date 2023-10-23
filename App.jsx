import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import Home from './src/components/Home';

const App = () => {
  const {height, width} = Dimensions.get('window');
  return (
    <View>
      <Home />
    </View>
  );
};

export default App;
