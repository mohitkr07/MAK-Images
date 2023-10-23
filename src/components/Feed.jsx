import React from 'react';
import {feedStyles} from './styles';
import {View} from 'react-native';
import ImgCard from './cards/ImgCard';

const Feed = () => {
  return (
    <View style={feedStyles.container}>
      <ImgCard />
    </View>
  );
};

export default Feed;
