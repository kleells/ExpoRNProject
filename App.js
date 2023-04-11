import {  } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.mainContainer}>
        <View style={styles.containerThree} />
        <View style={styles.containerTwo} />
        <View style={styles.containerOne} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 200,
    height: 500,
  },
  containerOne: {
    width: 100,
    height: 400,
    backgroundColor: '#AC009C'
  },
  containerThree: {
    width: 100,
    height: 400,
    backgroundColor: '#51424E'
  },
  containerTwo: {
    width: 100,
    height: 400,
    backgroundColor: '#B8A6B4'
  },
});
