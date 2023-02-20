import React from "react";
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function AccountCreation() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Create an account</Text>
      <View style={styles.backButton} >
        <Button
          title="Back to Login"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
      <TextInput style={styles.textInput} placeholder="First Name" />
      <TextInput style={styles.textInput} placeholder="Last Name" />
      <TextInput style={styles.textInput} placeholder="Username" />
      <TextInput style={styles.textInput} placeholder="Password" secureTextEntry={true}/>
      <TextInput style={styles.textInput} placeholder="Confirm Password" secureTextEntry={true}/>
      <TextInput style={styles.textInput} placeholder="Email" />
      <TextInput style={styles.textInput} placeholder="Phone Number" />
      <Button
        title="Create Account"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    textAlign: 'center',
    width: 350,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5
  },
  backButton: {
    width: 100,
    position: 'absolute',
    top: 10,
    left: 10
  }
});

export default AccountCreation;