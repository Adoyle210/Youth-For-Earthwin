import React, { useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import { supabase } from '../config/supabase'
import { Button, Input } from 'react-native-elements'
import "react-native-url-polyfill/auto"

export default function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
    
  // Allows for signing in with Email
  async function signInWithEmail() {
    // setLoading "pauses" the app while the function runs.
    setLoading(true)
    console.log({ email, password })

    // This is the general supabase function format we've found so far
    // Supabase is pretty jam-packed with different functions like this, check documentation for different funcs.
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    // Triggered if the above supabase request doesn't work and an error is returned.
    if (error) Alert.alert(error.message)
    // "unpause" the app
    setLoading(false)
  }

  // Allows for signing up with Email
  async function signUpWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    setLoading(false)
  }


  // This is what is actually displayed on the page.
  // I believe the formatting of this is exactly like what we were using before,
  // but we'll double check.
  return (
    <View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Input
          label="Email"
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize={'none'}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <Input
          label="Password"
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          autoCapitalize={'none'}
        />
      </View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Button title="Sign in" disabled={loading} onPress={() => signInWithEmail()} />
      </View>
      <View style={styles.verticallySpaced}>
        <Button title="Sign up" disabled={loading} onPress={() => signUpWithEmail()} /> 
      </View>
    </View>
  )
}

// Notice the function calls that occur onPress, 
// those are the functions we wrote above, being triggered on their respective button presses.

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
  mt20: {
    marginTop: 20,
  },
})