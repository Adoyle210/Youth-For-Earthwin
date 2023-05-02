import 'react-native-url-polyfill/auto';
import { useState, useEffect } from 'react';
import { supabase } from './config/supabase';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Session } from '@supabase/supabase-js';
import AppNavigator from './navigation/AppNavigator';

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
    <SafeAreaView style={styles.container}>
      <AppNavigator session={session} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
