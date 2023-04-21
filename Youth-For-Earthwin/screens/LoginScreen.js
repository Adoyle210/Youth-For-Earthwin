import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import Login from '../components/Auth.tsx';

const LoginScreen = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Login />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
