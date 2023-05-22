import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FormConfirmation = () => {
  const navigation = useNavigation();

  const handleGoToProjectOverview = () => {
    navigation.navigate('ProjectOverview');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Form Submitted Successfully!</Text>
      <Text style={styles.message}>Thank you for your submission.</Text>
      
      <TouchableOpacity style={styles.link} onPress={handleGoToProjectOverview}>
        <Text style={styles.linkText}>Go to Project Overview</Text>
      </TouchableOpacity>
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
    marginBottom: 20,
  },
  link: {
    padding: 10,
  },
  linkText: {
    color: 'blue',
    fontSize: 16,
  },
});

export default FormConfirmation;
