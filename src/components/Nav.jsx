import React, {useState} from 'react';
import {navigation} from './styles';

import {Text, TextInput, View} from 'react-native';

const Nav = () => {
  const [searchText, setSearchText] = useState();

  const handleChangeSearch = e => {
    setSearchText(e.target.value);
  };
  return (
    <View style={navigation.container}>
      <TextInput
        placeholder="Search"
        onChangeText={handleChangeSearch}
        value={searchText}
      />
    </View>
  );
};

export default Nav;
