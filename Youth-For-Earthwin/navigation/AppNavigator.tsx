import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Session } from '@supabase/supabase-js';

import Account from '../components/Account';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import ProjectApprovalScreen from '../screens/ProjectApprovalScreen';
import ProjectPitch from '../screens/ProjectPitch';
import ProjectOverview from '../ProjectOverview';
import ParentProfile from '../screens/ParentProfile';
import StudentProfile from '../screens/StudentProfile';
import ForgotPassword from '../ForgotPassword';

const Stack = createStackNavigator();

interface AppNavigatorProps {
  session: Session | null;
}

const AppNavigator: React.FC<AppNavigatorProps> = ({ session }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {session && session.user ? (
          <>
            <Stack.Screen name="Account" component={Account} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
            <Stack.Screen name="Project Approval" component={ProjectApprovalScreen} />
            <Stack.Screen name="Project Pitch" component={ProjectPitch} />
            <Stack.Screen name="Project Overview" component={ProjectOverview} />
            <Stack.Screen name="Parent Profile" component={ParentProfile} />
            <Stack.Screen name="Student Profile" component={StudentProfile} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Forgot Password" component={ForgotPassword} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;