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
    marginBottom: 5, 
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
  submitButton: {
    backgroundColor: 'green',
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginBottom: 10,
    marginTop: 10
  },
  backButton: {
    width: 100,
    position: 'absolute',
    top: 10,
    left: 10,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: 'green',
    width: 125,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginBottom: 10,
    marginTop: 10
  },
  header: {
    backgroundColor: 'green',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 20,
    width: '100%',
  },
  subheader: {
    fontSize: 15,
    marginBottom: 10,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  projectBox: {
    width: 350,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#333',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
})

export default styles;
