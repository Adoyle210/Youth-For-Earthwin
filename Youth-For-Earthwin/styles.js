import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    height: 40, 
    textAlign: 'center', 
    width: 200, 
    borderColor: 'gray', 
    borderWidth: 1, 
    marginBottom:.5, 
    borderRadius: 5
  },
  ACInput: {
    height: 40,
    textAlign: 'center',
    width: 350,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5
  },
  backButton: {
    width: 100,
    position: 'absolute',
    top: 10,
    left: 10
  }
})

export default styles;
