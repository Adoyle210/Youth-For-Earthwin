import React, { useState } from 'react';
import Login from './Login.js';
import ForgotPassword from './ForgotPassword.js';
import AccountCreation from './AccountCreation.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

// TODO - Add fonts
// const fetchFonts = () => {
//   return Font.loadAsync({
//     'Ecofont Vera Sans': require('./fonts/ecofont-vera-sans/ecofont_vera_sans_regular.ttf'),
//   });
// };


export default function App() {
  return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="AccountCreation" component={AccountCreation} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          </Stack.Navigator>
        </NavigationContainer>    
  );
}
