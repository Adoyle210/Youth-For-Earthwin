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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = (text) => {
    setUsername(text);
  }
  const handlePassword = (text) => {
    setPassword(text);
  }
  const handleLogin = () => {
    console.log(`Username: ${username} Password: ${password}`);
}

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 65, marginBottom: 10}}>Earthwin</Text>
      <Image
        source={{uri: 'https://picsum.photos/200'}}
        style={{width: 200, height: 200, marginBottom: 10, borderRadius: 50}}
      />
      <TextInput style={{height: 40, textAlign: 'center', width: 200, borderColor: 'gray', borderWidth: 1, marginBottom:.5, borderRadius: 5}} placeholder="Username" onChangeText={handleUsername} value={username} />
      <TextInput style={{height: 40, textAlign: 'center', width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 20, borderRadius: 5}} placeholder="Password" onChangeText={handlePassword} value={password} secureTextEntry={true}/>
      <StatusBar style="auto" />
      <TouchableOpacity style={{backgroundColor: 'green', width: 100, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 50}} onPress={handleLogin}>
        <Text style={{color: 'white'}}>Log in</Text>
      </TouchableOpacity>
      <Text style={{marginTop: 15}}>Forgot password?</Text>

    </View>
  );
}

export default Login;
