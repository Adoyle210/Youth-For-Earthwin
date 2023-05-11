import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Button,
  Alert,
} from 'react-native';
import  supabase  from '../supabase';
import styles from '../styles.js';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmail = (text) => {
    setEmail(text);
  };

  const handlePassword = (text) => {
    setPassword(text);
  };

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
    setLoading(false);
    if (error) {
      Alert.alert(error.message);
    } else {
      navigation.navigate('Home');
    }
    
  }

  async function signUpWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 65, marginBottom: 10 }}>Earthwin</Text>
      <Image
        source={{ uri: 'https://picsum.photos/200' }}
        style={{ width: 200, height: 200, marginBottom: 10, borderRadius: 50 }}
      />
      <TextInput
        style={styles.inputBox}
        placeholder="Email"
        onChangeText={handleEmail}
        value={email}
        autoCapitalize={'none'}
      />
      <TextInput
        style={styles.inputBox}
        placeholder="Password"
        onChangeText={handlePassword}
        value={password}
        secureTextEntry={true}
        autoCapitalize={'none'}
      />
      <TouchableOpacity
        style={styles.submitButton}
        onPress={signInWithEmail}
        disabled={loading}
      >
        <Text style={{ color: 'white' }}>Sign in</Text>
      </TouchableOpacity>
      <Button
        title="Sign up"
        onPress={signUpWithEmail}
        disabled={loading}
      />
    </View>
  );
};

export default Login;
