// styles.js
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'red',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
});

export const navigation = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    backgroundColor: 'blue',
    display: 'flex',
    justifyContent: 'center',
  },
});

export const feedStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: 'fit-content',
    flexGrow: 1,
    backgroundColor: 'green',
    display: 'flex',
    alignItems: 'center',
  },
});
