import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ParentProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Student Parent Profile</Text>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.parentProfile}>
        <View style={styles.profilePictureContainer}>
          <Image style={styles.profilePicture} source={{uri: "https://via.placeholder.com/150"}} />
          <TouchableOpacity style={styles.uploadPictureButton}>
            <Text style={styles.uploadPictureButtonText}>Change Profile Picture</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Parent Name</Text>
          <Text>Email: parentemail@example.com</Text>
          <Text>Child's Name: Child Name</Text>
          <Text>Child's School: School Name</Text>
          <Text>Child's Grade: Grade Level</Text>
        </View>
        <View style={styles.progress}>
          <Text style={styles.progressHeader}>Child's Progress</Text>
          <View style={styles.progressList}>
            <Text>Project 1: Completed</Text>
            <Text>Project 2: In Progress</Text>
            <Text>Project 3: Not Started</Text>
          </View>
        </View>
        <View style={styles.connectWith}>
          <Text style={styles.connectWithHeader}>Connect With</Text>
          <View style={styles.connectWithList}>
            <TouchableOpacity style={styles.connectWithButton}>
              <Text style={styles.connectWithButtonText}>Admin</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.connectWithButton}>
              <Text style={styles.connectWithButtonText}>Other Parents</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Text>&copy;2023 Student Parent Profile</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E6E2D3",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#96b885",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerText: {
    color: "#fff",
    fontSize: 24,
  },
  navButton: {
    backgroundColor: "#96b885",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  navButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  parentProfile: {
    padding: 40,
    alignItems: "center",
  },
  profilePictureContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profilePicture: {
    width: 200,
    height: 200,
    borderRadius: 100
  }
});

export default ParentProfileScreen