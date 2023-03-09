import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Alert } from "react-native";
import styles from "./styles.js";

class ProjectOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    }
  }

  handleNewProject = () => {
    Alert.prompt(
      "New Project",
      "Pick a name for your new project",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "OK",
          onPress: (text) => {
            this.setState({
              projects: [...this.state.projects, {key: text}]
            });
          }
        }
      ]
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Project Overview</Text>
        </View>
      </View>
    )
  }
}

export default ProjectOverview;