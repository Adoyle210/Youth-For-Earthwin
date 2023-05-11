import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const Menu = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.menuContainer}>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate("Details")}>
                <Text> Details </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate("Project Approval")}>
                <Text> Project Approval </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate("Project Pitch")}>
                <Text> Project Pitches </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate("Login")}>
                <Text> Login </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate("Template Project")}>
                <Text> Template Project </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    menuContainer:{
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    textStyle: {
        textTransform: "uppercase",
        marginBottom: 50,

    }
})

export default Menu;
