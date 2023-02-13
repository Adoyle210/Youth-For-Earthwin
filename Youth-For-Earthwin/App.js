import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Image 
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 65}}>Earthwin </Text>
      <Image
        source={{uri: 'https://picsum.photos/200'}}
        style={{width: 200, height: 200}}
      />
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
