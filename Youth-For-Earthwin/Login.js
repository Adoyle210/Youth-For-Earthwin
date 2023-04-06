import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Image,
  // Font, 
  TouchableOpacity,
  Button 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles.js';
import supabase from './supabase.js';

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
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 65, marginBottom: 10}}>Earthwin</Text>
      <Image
        source={{uri: 'https://picsum.photos/200'}}
        style={{width: 200, height: 200, marginBottom: 10, borderRadius: 50}}
      />
      <TextInput style={styles.inputBox} placeholder="Username" onChangeText={handleUsername} value={username} />
      <TextInput style={styles.inputBox} placeholder="Password" onChangeText={handlePassword} value={password} secureTextEntry={true}/>
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.submitButton} onPress={handleLogin}>
        <Text style={{color: 'white'}}>Log in</Text>
      </TouchableOpacity>
      <Button
        title="Forgot Password"
        onPress={() => navigation.navigate('ForgotPassword')}     // TODO: Edit styling
      />
      <Button
        title="Create an Account"
        onPress={() => navigation.navigate('AccountCreation')}    // TODO: Edit styling
      />
    </View>
  );
}

export default Login;
