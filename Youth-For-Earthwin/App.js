import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import Login from './Login.js';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Image,
  // Font, 
  TouchableOpacity 
} from 'react-native';

// TODO - Add fonts
// const fetchFonts = () => {
//   return Font.loadAsync({
//     'Ecofont Vera Sans': require('./fonts/ecofont-vera-sans/ecofont_vera_sans_regular.ttf'),
//   });
// };


export default function App() {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
