import 'react-native-url-polyfill/auto';
import { useState, useEffect } from 'react';
import { supabase } from './config/supabase';
import { SafeAreaView, StyleSheet } from 'react-native'; // Import StyleSheet
import { Session } from '@supabase/supabase-js';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//screens
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import ProjectApprovalScreen from './screens/ProjectApprovalScreen';
import ProjectPitch from './screens/ProjectPitch';
import ProjectOverview from './ProjectOverview';
import ParentProfile from './screens/ParentProfile';
import StudentProfile from './screens/StudentProfile';

const Stack = createNativeStackNavigator();

export default function App() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        {session && session.user ? (
          <Account key={session.user.id} session={session} />
        ) : (
          <LoginScreen />
        )}
        {/* <Stack.Navigator initialRouteName="Home">     
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Details" component={DetailsScreen}/>
          <Stack.Screen name="Project Approval" component={ProjectApprovalScreen}/>
          <Stack.Screen name="Project Pitch" component={ProjectPitch}/>
          <Stack.Screen name="Parent Profile" component={ParentProfile} />
          <Stack.Screen name="Student Profile" component={StudentProfile} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator> */}
      </SafeAreaView>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
