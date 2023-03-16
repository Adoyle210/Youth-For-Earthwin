// import React, { useState } from 'react';
// // import Login from './Login.js';
// // import ForgotPassword from './ForgotPassword.js';
// // import AccountCreation from './AccountCreation.js';
// // import ProjectOverview from './ProjectOverview.js';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// import Auth from './components/Auth.tsx';

// const Stack = createStackNavigator();

// export default function App() {
//   return (
//         <NavigationContainer>
//           <Stack.Navigator>
//             {/* <Stack.Screen name="Login" component={Auth} /> */}
//             <Stack.Screen name="AccountCreation" component={Auth} />
//             {/* <Stack.Screen name="ForgotPassword" component={ForgotPassword} /> */}
//             {/* <Stack.Screen name="ProjectOverview" component={ProjectOverview} /> */}
//           </Stack.Navigator>
//         </NavigationContainer>    
//   );
// }

import 'react-native-url-polyfill/auto'
import { useState, useEffect } from 'react'
import { supabase } from './config/supabase'
import Auth from './components/Auth'
import Account from './components/Account'
import { View } from 'react-native'
import { Session } from '@supabase/supabase-js'
import 'react-native-url-polyfill/auto';

export default function App() {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <View>
      {session && session.user ? <Account key={session.user.id} session={session} /> : <Auth />}
    </View>
  )
}
