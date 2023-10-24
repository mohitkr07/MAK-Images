import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {StyleSheet} from 'react-native';
import Nav from './Nav';
import Feed from './Feed';
import Search from './Search';
import {colors} from '../constants/color';

const Home = ({navigation}) => {
  return <Feed />;
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.bodyBackground,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
});

export default Home;
