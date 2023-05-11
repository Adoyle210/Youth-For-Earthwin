import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../components/Auth'; 
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import ParentProfileScreen from '../screens/ParentProfile';
import ProjectPitch from '../screens/ProjectPitch';
import ProjectApprovalScreen from '../screens/ProjectApprovalScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Project Pitch" component={ProjectPitch} />
        <Stack.Screen name="Project Approval" component={ProjectApprovalScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
