import React, {useState} from 'react';
import {
  Button,
  Dimensions,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Home from './src/components/Home';
import Search from './src/components/Search';
import {colors} from './src/constants/color';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

const App = () => {
  const [searchText, setSearchText] = useState();

  const handleChangeSearch = Text => {
    setSearchText(Text);
  };

  const onSubmit = () => {
    InputSubmit(searchText);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={({navigation, route}) => ({
            title: 'MAK Images',
            headerStyle: {backgroundColor: colors.nav},
            headerTintColor: '#fff',
            headerRight: () => (
              <TextInput
                style={{
                  backgroundColor: 'red',
                  minWidth: 160,
                  fontSize: 15,
                  borderRadius: 3,
                  height: 40,
                  backgroundColor: colors.inputBg,
                  color: colors.searchColor,
                }}
                placeholderTextColor={colors.placeholderColor}
                onChangeText={handleChangeSearch}
                onSubmitEditing={() => {
                  navigation.navigate('Search', {
                    Param: searchText,
                  });
                }}
                placeholder="Search"
              />
            ),
          })}
        />
        <Stack.Screen
          name="Search"
          options={({navigation, route}) => ({
            title: searchText,
            headerStyle: {backgroundColor: colors.nav},
            headerTintColor: '#fff',
          })}
          component={Search}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const XYZ = ({route, navigation}) => {

//   const {itemId, Param} = route.params

//   return (
//     <View style={{backgroundColor: 'red', height: '100%', width: '100%'}}>
//       <Text>{Param}</Text>
//     </View>
//   );
// };

export default App;
