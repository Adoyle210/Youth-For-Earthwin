import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles.js";

const ForgotPassword = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Forgot your password?</Text>
      </View>
      <Text style={styles.subheader}>Enter your email address below and we'll send you a link to reset your password.</Text>
      <TextInput style={styles.ACInput} placeholder="Email" />
      <TouchableOpacity style={styles.submitButton}>
        <Text style={{color: 'white'}}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Login")}>
        <Text>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ForgotPassword;