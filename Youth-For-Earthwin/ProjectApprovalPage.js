import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Project Pitches</Text>
        <View style={styles.nav}>
          <TouchableOpacity style={styles.navLink}>
            <Text style={styles.navText}>Connect With Parents</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navLink}>
            <Text style={styles.navText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.projectProgress}>
        <Text style={styles.projectProgressTitle}>Project Progress</Text>
        <View style={styles.projectList}>
          <View style={styles.project}>
            <Text style={styles.projectTitle}>Project 1 Title</Text>
            <Text style={styles.projectDescription}>Project 1 Description</Text>
            <Text style={styles.projectPitch}>Project 1 Pitch by Student Name</Text>
            <TouchableOpacity style={styles.approveBtn}>
              <Text style={styles.approveBtnText}>Approve</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.denyBtn}>
              <Text style={styles.denyBtnText}>Deny</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.project}>
            <Text style={styles.projectTitle}>Project 2 Title</Text>
            <Text style={styles.projectDescription}>Project 2 Description</Text>
            <Text style={styles.projectPitch}>Project 2 Pitch by Student Name</Text>
            <TouchableOpacity style={styles.approveBtn}>
              <Text style={styles.approveBtnText}>Approve</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.denyBtn}>
              <Text style={styles.denyBtnText}>Deny</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.project}>
            <Text style={styles.projectTitle}>Project 3 Title</Text>
            <Text style={styles.projectDescription}>Project 3 Description</Text>
            <Text style={styles.projectPitch}>Project 3 Pitch by Student Name</Text>
            <TouchableOpacity style={styles.approveBtn}>
              <Text style={styles.approveBtnText}>Approve</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.denyBtn}>
              <Text style={styles.denyBtnText}>Deny</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Text>&copy;2023 Admin Profile</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E2D3',
  },
  header: {
    backgroundColor: '#96b885',
    color: '#fff',
    textAlign: 'center',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  nav: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navLink: {
    marginLeft: 20,
  },
  navText: {
    color: '#fff',
    textDecorationLine: 'underline',
  },
  projectProgress: {
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  projectProgressTitle: {
    fontSize:
  }
