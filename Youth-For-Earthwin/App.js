import React, { useState } from 'react';
import Login from './Login.js';
import ForgotPassword from './ForgotPassword.js';
import AccountCreation from './AccountCreation.js';
import ProjectOverview from './ProjectOverview.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="AccountCreation" component={AccountCreation} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="ProjectOverview" component={ProjectOverview} />
          </Stack.Navigator>
        </NavigationContainer>    
  );
}
