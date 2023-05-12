import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, View, StyleSheet, Image } from "react-native";

const Profile = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.Container}>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate("Student Profile")}>
                <Image source={require('./user.png')} style={styles.buttonImageIconStyle}/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    Container:{
        alignSelf: 'flex-end',
    },
    buttonImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
    },
})

export default Profile;
