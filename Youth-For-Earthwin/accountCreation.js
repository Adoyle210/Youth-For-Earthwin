import React from "react";
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles.js'

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
      <TextInput style={styles.ACInput} placeholder="First Name" />
      <TextInput style={styles.ACInput} placeholder="Last Name" />
      <TextInput style={styles.ACInput} placeholder="Username" />
      <TextInput style={styles.ACInput} placeholder="Password" secureTextEntry={true}/>
      <TextInput style={styles.ACInput} placeholder="Confirm Password" secureTextEntry={true}/>
      <TextInput style={styles.ACInput} placeholder="Email" />
      <TextInput style={styles.ACInput} placeholder="Phone Number" />
      <Button
        title="Submit"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

export default AccountCreation;