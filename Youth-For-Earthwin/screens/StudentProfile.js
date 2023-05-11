import React, { useState } from 'react';
import { styles } from 'react-native';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const StudentProfile = () => {
  // const [profilePicture, setProfilePicture] = useState(require('./default-profile-picture.jpg'));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Profile Page</Text>
      {/* <TouchableOpacity onPress={() => setProfilePicture(require('./new-profile-picture.jpg'))}>
        <Image source={profilePicture} style={styles.profilePicture} />
      </TouchableOpacity> */}
      <View style={styles.profileInfo}>
        <Text style={styles.name}>Student Name</Text>
        <Text style={styles.school}>School Name</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Enter Project</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Enter School</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Edit Project Partners</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Connect with Friends</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  title: {
    fontSize: 36,
    textAlign: 'center',
    marginTop: 20,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#96b885',
    alignSelf: 'center',
    marginVertical: 50,
  },
  profileInfo: {
    alignItems: 'center',
    marginBottom: 30,
  },
  name: {
    fontSize: 24,
  },
  school: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#96b885',
  },
  button: {
    padding: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#ffffff',
    backgroundColor: 'transparent',
  },
  buttonText: {
    fontSize: 16,
    color: '#E6E2D3',
    textAlign: 'center',
  },
});

export default StudentProfile;
