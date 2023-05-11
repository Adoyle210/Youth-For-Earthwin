import React, { useState } from 'react';
import { styles } from 'react-native';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const UserProfile = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [objectives, setObjectives] = useState('');
  const [timeline, setTimeline] = useState('');
  const [resources, setResources] = useState('');

  const handleSubmit = () => {
    // Add code to submit form data here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Project Outline</Text>
      <View style={styles.formContainer}>
        <Text style={styles.label}>Title:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter project title here"
          value={title}
          onChangeText={(text) => setTitle(text)}
        />

        <Text style={styles.label}>Description:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter project description here"
          value={description}
          onChangeText={(text) => setDescription(text)}
          multiline={true}
          numberOfLines={4}
        />

        <Text style={styles.label}>Objectives:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter project objectives here"
          value={objectives}
          onChangeText={(text) => setObjectives(text)}
          multiline={true}
          numberOfLines={4}
        />

        <Text style={styles.label}>Timeline:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter project timeline here"
          value={timeline}
          onChangeText={(text) => setTimeline(text)}
          multiline={true}
          numberOfLines={4}
        />

        <Text style={styles.label}>Resources:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter project resources here"
          value={resources}
          onChangeText={(text) => setResources(text)}
          multiline={true}
          numberOfLines={4}
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E2D3',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  formContainer: {
    maxWidth: 800,
    alignSelf: 'center',
  },
  label: {
    fontWeight: 'bold',
    marginTop: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: '#96b885',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    fontSize: 16,
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#96b885',
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default UserProfile;
