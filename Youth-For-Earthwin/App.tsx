import 'react-native-url-polyfill/auto';
import { useState, useEffect } from 'react';
import { supabase } from './config/supabase';
import LoginScreen from './screens/LoginScreen';
import Account from './components/Account';
import { SafeAreaView, StyleSheet } from 'react-native'; // Import StyleSheet
import { Session } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

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
      {session && session.user ? (
        <Account key={session.user.id} session={session} />
      ) : (
        <LoginScreen />
      )}
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
