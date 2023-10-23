import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import Nav from './Nav';
import Feed from './Feed';

const Home = () => {
  return (
    <View style={styles.container}>
      <Nav />
      <Feed />
    </View>
  );
};


export default Home;
