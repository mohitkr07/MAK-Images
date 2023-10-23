import React from 'react';
import {StyleSheet} from 'react-native';
import {Image, Text, View, TouchableOpacity} from 'react-native';


const ImgCard = () => {
  const handleButtonPress = () => {
    console.log('Button Pressed');
  };
  return (
    <View style={cardStyles.container}>
      <View style={cardStyles.imgDisp}>
        <Image
          source={require('../Images/5.jpg')}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }}
        />
      </View>
      <View style={cardStyles.imgDetails}>
        <View style={cardStyles.imgLikes}>
          <Text style={{marginRight: 4}}>500</Text>
          <Text>Downloads</Text>
        </View>
        <TouchableOpacity onPress={handleButtonPress} style={cardStyles.button}>
          <Text style={cardStyles.buttonText}>Custom Button</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const cardStyles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: '#fff',
  },
  imgDisp: {
    width: '100%',
    overflow: 'scroll',
    maxHeight: 300,
  },
  imgDetails: {
    width: '100%',
    height: 60,
    backgroundColor: 'grey',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    alignItems: 'center',
  },
  imgLikes: {
    display: 'flex',
    flexDirection: 'row',
  },
  button: {
    width: 150,
    height: '95%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});

export default ImgCard;
