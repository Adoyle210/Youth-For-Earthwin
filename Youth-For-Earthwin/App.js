import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput style={{height: 40, textAlign: 'center', width: 200, borderColor: 'gray', borderWidth: 1}} placeholder="Username" />
      <TextInput style={{height: 40, textAlign: 'center', width: 200, borderColor: 'gray', borderWidth: 1}} placeholder="Password" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
