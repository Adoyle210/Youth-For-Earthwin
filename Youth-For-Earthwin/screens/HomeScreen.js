import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import Menu from '../components/Menu';
import Profile from "../components/Profile";


const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.homeTop}>
                <View style={styles.ProfileStyle}>
                    <Profile/>
                </View>
                <Text style={styles.mainHeader}>Home Screen</Text>
                <View style={styles.leftContainer}>
                    <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate("Gather Group")}>
                    <Image source={require('../assets/group.png')} style={styles.image}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.rightContainer}>
                    <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate("Project Pitch")}>
                    <Image source={require('../assets/project.png')} style={styles.image}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.leftContainer}>
                    <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate("Funding")}>
                    <Image source={require('../assets/funds.png')} style={styles.image}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.rightContainer}>
                    <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate("Final Step")}>
                    <Image source={require('../assets/flag.png')} style={styles.image}/>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={styles.MenuStyle}>
                    {/* <View style={styles.lineStyle}> </View> */}
                    <Menu/>
                    {/* <View style={[styles.lineStyle, {
                        marginVerical: 20,
                    }]}> </View> */}
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
        // fontWeight: 'bold',
    },
    textstyle: {
        fontSize: 20,
        color: "#344055",
    },
    lineStyle: {
        marginBottom: 10,
        borderWidth: 0.5,
        borderColor: "grey",
    },
    ProfileStyle: {
        alignSelf: 'flex-end',
    },
    leftContainer: {
        alignSelf: 'flex-start',
        justifyContent: "center",
        alignItems: "center",
    },
    rightContainer: {
        alignSelf: 'flex-end',
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 200/2
    }
});

export default HomeScreen;
  