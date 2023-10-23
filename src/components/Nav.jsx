import React, {useState} from 'react';
import { StyleSheet } from 'react-native';
import {Text, TextInput, View} from 'react-native';
import {colors} from '../constants/color'

const Nav = ({InputSubmit}) => {
  const [searchText, setSearchText] = useState();

  const handleChangeSearch = (Text) => {
    setSearchText(Text);
  };

  const onSubmit = () => {
    InputSubmit(searchText);
  };

  return (
    <View style={navigation.container}>
      <TextInput
        placeholder="Search"
        onChangeText={handleChangeSearch}
        value={searchText}
        onSubmitEditing={onSubmit}
      />
    </View>
  );
};

const navigation = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    backgroundColor: colors.nav,
    display: 'flex',
    justifyContent: 'center',
  },
});

export default Nav;
