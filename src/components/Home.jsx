import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import Nav from './Nav';
import Feed from './Feed';
import Search from './Search';

const Home = ({navigation}) => {
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState();

  const fun = searchText => {
    setQuery(searchText);
    setShowSearch(true);
  };
  return (
    <View style={styles.container}>
      {/* <Nav InputSubmit={fun} /> */}
      {!showSearch && <Feed />}
      {showSearch && <Search searchText={query} />}
    </View>
  );
};

export default Home;
