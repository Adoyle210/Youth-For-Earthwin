import React from "react";
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function AccountCreation() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Account Creation</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

export default AccountCreation;