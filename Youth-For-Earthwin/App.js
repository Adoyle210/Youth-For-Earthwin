import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
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
      <Text style={{ fontSize: 65, marginBottom: 10}}>Earthwin</Text>
      <Image
        source={{uri: 'https://picsum.photos/200'}}
        style={{width: 200, height: 200, marginBottom: 5}}
      />
      <TextInput style={{height: 40, textAlign: 'center', width: 200, borderColor: 'gray', borderWidth: 1, marginBottom:.5}} placeholder="Username" />
      <TextInput style={{height: 40, textAlign: 'center', width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 5}} placeholder="Password" />
      <StatusBar style="auto" />
      <TouchableOpacity style={{backgroundColor: 'green', width: 100, height: 40, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{color: 'white'}}>Log in</Text>
      </TouchableOpacity>
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
