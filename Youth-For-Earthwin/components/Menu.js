import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";

const Menu = () => {
    const navigation = useNavigation();

    //see more button effects at https://codesandbox.io/s/github/necolas/react-native-web/tree/0.19.3/packages/react-native-web-examples?from-embed=&initialpath=/pressable&file=/pages/pressable/index.js
    const [eventLog, updateEventLog] = React.useState([]);
    


    const handleEvent = (eventName) => {
    return () => {
        const limit = 10;
        updateEventLog((state) => {
            const nextState = state.slice(0, limit - 1);
            nextState.unshift(eventName);
            return nextState;
        });
        };
    };

    return (
        <View style={styles.menuContainer}>

            <Pressable   
                onPress={() => navigation.navigate("Project Approval")}
                onHoverIn={handleEvent('onHoverIn') }
                style={(state) => [
                    styles.menuButton,
                    state.hovered && styles.menuButtonHover,
                ]}
                > 
                <View>
                    <Image 
                        source={require('../assets/planning.png')} 
                        style={{ width: 50, height: 60, marginTop: 1, marginBottom: 1, alignSelf: 'center', }}>
                    </Image>
                    <Text>
                        Project Planning
                    </Text>
                </View>
            </Pressable>

            <Pressable   
                onPress={() => navigation.navigate("Idling1")}
                onHoverIn={handleEvent('onHoverIn') }
                style={(state) => [
                    styles.menuButton,
                    state.hovered && styles.menuButtonHover,
                ]}
                > 
                <View>
                    <Image 
                        source={require('../assets/bulb.png')} 
                        style={{ width: 50, height: 60, marginTop: 1, marginBottom: 1, alignSelf: 'center', }}>
                    </Image>
                    <Text>
                        Example Project
                    </Text>
                </View>
            </Pressable>

        </View>
    );
};

const styles = StyleSheet.create({
    menuContainer:{
        // flexDirection: "row",
        flexDirection: 'row',

        // justifyContent: 'space-around',
    },
    textStyle: {
        textTransform: "uppercase",
        marginBottom: 50,
    },
    menuButton:{
        width: '50%',
        paddingBottom: 15,
        paddingTop: 10,
        // display: 'flex',
        color: 'black',
        border: '2px solid #4CAF50',
        borderTopColor: 'black',
        marginTop: '2%',
        
    },
    menuButtonHover:{ 
        backgroundColor: 'lightgrey',
    },
})

export default Menu;
