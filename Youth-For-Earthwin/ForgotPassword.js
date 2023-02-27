import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

const ForgotPassword = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Forgot Passwfsord</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}>
        <Text>Go to Login</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ForgotPassword;