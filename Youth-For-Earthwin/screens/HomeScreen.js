import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import Menu from '../components/Menu';


const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.homeTop}>
                <Text style={styles.mainHeader}>Home Screen</Text>
                {/* <Button title="Go to Details" onPress={() => navigation.navigate('Details')}/>
                <Button title="Go to Project Approval" onPress={() => navigation.navigate('Project Approval')}/>
                <Button title="Go to Project Pitches" onPress={() => navigation.navigate('Project Pitch')}/>
                <Button title="Go to Parent Profile" onPress={() => navigation.navigate('Parent Profile')}/>
                <Button title="Go to Student Profile" onPress={() => navigation.navigate('Student Profile')}/>
                <Button title="Go to Project Overview" onPress={() => navigation.navigate('Project Overview')}/> */}
            </View>
            <View style={styles.MenuStyle}>
                    <View style={styles.lineStyle}> </View>
                    <Menu/>
                    <View style={[styles.lineStyle, {
                        marginVerical: 20,
                    }]}> </View>
            </View>
         </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        height: "100%",
        display: "flex",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        backgroundColor: "#fff",
        textAlign: "center",
    },
    homeTop: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
    },
    mainHeader: {
        fontSize: 30,
        color: "#344055",
        textTransform: "uppercase",
        fontFamily: "Nunito_600SemiBold",
    },
    lineStyle: {
        marginBottom: 10,
        borderWidth: 0.5,
        borderColor: "grey",
    },
});

export default HomeScreen;
  