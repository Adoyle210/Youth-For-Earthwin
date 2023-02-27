import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles.js";

const ForgotPassword = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Forgot Password</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}>
        <Text>Go to Login</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ForgotPassword;