import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FormConfirmation = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Form Submitted Successfully!</Text>
      <Text style={styles.message}>Thank you for your submission.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default FormConfirmation;
