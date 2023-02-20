import React from "react";
import { View, Text, Button, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function AccountCreation() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Create an account</Text>
      <Button
        title="Back to Login"
        onPress={() => navigation.navigate('Login')}
      />
      <TextInput style={{height: 40, textAlign: 'center', width: 350, borderColor: 'gray', borderWidth: 1, marginBottom: 10, borderRadius: 5}} placeholder="First Name" />
      <TextInput style={{height: 40, textAlign: 'center', width: 350, borderColor: 'gray', borderWidth: 1, marginBottom:10, borderRadius: 5}} placeholder="Last Name" />
      <TextInput style={{height: 40, textAlign: 'center', width: 350, borderColor: 'gray', borderWidth: 1, marginBottom:10, borderRadius: 5}} placeholder="Username" />
      <TextInput style={{height: 40, textAlign: 'center', width: 350, borderColor: 'gray', borderWidth: 1, marginBottom: 10, borderRadius: 5}} placeholder="Password" secureTextEntry={true}/>
      <TextInput style={{height: 40, textAlign: 'center', width: 350, borderColor: 'gray', borderWidth: 1, marginBottom: 10, borderRadius: 5}} placeholder="Confirm Password" secureTextEntry={true}/>
      <TextInput style={{height: 40, textAlign: 'center', width: 350, borderColor: 'gray', borderWidth: 1, marginBottom: 10, borderRadius: 5}} placeholder="Email" />
      <TextInput style={{height: 40, textAlign: 'center', width: 350, borderColor: 'gray', borderWidth: 1, marginBottom: 10, borderRadius: 5}} placeholder="Phone Number" />
      <Button
        title="Create Account"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

export default AccountCreation;