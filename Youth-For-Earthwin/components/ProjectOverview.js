import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Alert } from "react-native";
import supabase from '../supabase';


const ProjectOverview = () => {
  const navigation = useNavigation();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      // Fetch project data from the database using Supabase
      const { data, error } = await supabase.from('project_data').select('title');

      if (error) {
        console.error('Error fetching projects:', error);
      } else {
        // Update the state with the fetched project data
        setProjects(data);
      }
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const handleNewProject = () => {
    navigation.navigate('ProjectPitch'); // Navigate back to the ProjectPitch screen
  };

  const handleItemPress = async (item) => {
    try {
      // Fetch the project details from the database using Supabase
      const { data, error } = await supabase
        .from('project_data')
        .select('*')
        .eq('id', item.id)
        .single();
  
      if (error) {
        console.error('Error fetching project details:', error);
      } else {
        // Display the project details
        console.log('Project Details:', data);
        // You can set the project details in the component's state or display them directly in the UI
      }
    } catch (error) {
      console.error('Error fetching project details:', error);
    }
  };  

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleItemPress(item)}>
      <View style={styles.projectBox}>
        <Text>{item.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Project Overview</Text>
      </View>
      <View style={styles.content}>
        {projects.length > 0 ? (
          <FlatList
            data={projects}
            renderItem={renderItem}
          />
        ) : (
          <Text>No projects</Text>
        )}
      </View>
      <TouchableOpacity onPress={handleNewProject} style={styles.addButton}>
        <Text style={styles.submitButtonText}>New Project</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  projectBox: {
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  addButton: {
    backgroundColor: '#96b885',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ProjectOverview;
