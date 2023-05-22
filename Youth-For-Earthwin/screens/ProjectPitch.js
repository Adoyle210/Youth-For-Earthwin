import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import supabase from '../supabase';
import { useNavigation } from '@react-navigation/native';


const ProjectPitch = () => {
  const navigation = useNavigation();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    objectives: '',
    timeline: '',
    resources: '',
  });

  const { title, description, objectives, timeline, resources } = formData;

  const handleSubmit = async () => {
    try {
      const { data, error } = await supabase.from('project_data').insert([
        {
          title,
          description,
          objectives,
          timeline,
          resources,
        },
      ]);
  
      if (error) {
        console.error('Error saving form data:', error);
      } else {
        console.log('Form data saved successfully:', data);
        navigation.navigate('FormConfirmation');
      }
    } catch (error) {
      console.error('Error saving form data:', error);
    }
  };
  

  const handleChange = (key, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: value,
    }));
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
          onChangeText={(text) => handleChange('title', text)}
        />

        <Text style={styles.label}>Description:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter project description here"
          value={description}
          onChangeText={(text) => handleChange('description', text)}
          multiline={true}
          numberOfLines={4}
        />

        <Text style={styles.label}>Objectives:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter project objectives here"
          value={objectives}
          onChangeText={(text) => handleChange('objectives', text)}
          multiline={true}
          numberOfLines={4}
        />

        <Text style={styles.label}>Timeline:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter project timeline here"
          value={timeline}
          onChangeText={(text) => handleChange('timeline', text)}
          multiline={true}
          numberOfLines={4}
        />

        <Text style={styles.label}>Resources:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter project resources here"
          value={resources}
          onChangeText={(text) => handleChange('resources', text)}
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
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    alignItems: 'center',
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
  backButton: {
    width: 100,
    position: 'absolute',
    top: 10,
    left: 10,
  }
});

export default ProjectPitch;