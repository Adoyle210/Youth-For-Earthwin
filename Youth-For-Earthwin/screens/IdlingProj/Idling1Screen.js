import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

function Idling1Screen() {
    const navigation = useNavigation();
    return (
      <View>
        <View style={styles.LeftBox}>
            <Text style={styles.ScreenTitle}>Details Screen</Text>
            <Text style={styles.SubTitle}>The First EarthWin Project</Text>
            <Text style={styles.TextStyle}>
                EarthWin projects rely on a simple idea: 
                <Text style={styles.TextStyleBold}> Local efforts result in global change. </Text>
                With that mindset, a small group of students in [YEAR] 
                set out to make a small change at their local school in Bend, Oregon.
                {'\n\n'}
                They realized that parents, idling in the parking lot while waiting 
                to pick up or drop off their children, were leaving their cars on, 
                wasting gas and polluting the air near their school.
                {'\n\n'}
                With the help of EarthWin, these students set out to measure the issue, 
                determine a solution, speak out, and eventually change their school.
                {'\n\n'}
                Follow along with their process to see what a real EarthWin project can look like!
            </Text>
        </View>

        <Text> {'\n\n'} </Text>

        <View style={styles.LeftBox}>
            <Text style={styles.SubTitle}>Starting your Project</Text>
            <Text style={styles.TextStyle}>EarthWin projects are broken up into small 
                steps to help students check in and stay on task. Our students in Bend
                broke their project up into the following steps:
            </Text>
        </View>

        <View>
            <View style={styles.FiveBox1}>
                <Text style={styles.TextStyle}> 
                    <Text style={styles.TextStyleBold}>Gather a group:</Text>
                        {'\n\n'}
                        While EarthWin projects can be completed alone, 
                        real world change is best accomplished in teams.
                        {'\n\n'}
                        Look to classmates, friends, community members, and other
                        environmentally conscious groups to find people who may be 
                        interested in joining. 
                </Text>
            </View>
            <View style={styles.FiveBox2}>
                <Text style={styles.TextStyle}>
                    <Text style={styles.TextStyleBold}>Decide on your problem and goal:</Text>
                        {'\n\n'}
                        You'll want to be sure to pick an impactful, achievable, 
                        and relevant goal that your group is interested and motivated to complete.
                        {'\n\n'}
                        For this project, our students in Bend decided to work with their school
                        to install "No Idling" signs, along with changing the schools rules regarding
                        idling vehicles in the parking lot.
                </Text>
            </View>
            <View style={styles.FiveBox3}>
                <Text style={styles.TextStyle}>
                    <Text style={styles.TextStyleBold}>Connect with people who can help:</Text>
                        {'\n\n'}
                        While you may have a group of motivated individuals and a task to accomplish,
                        the fact is that students won't be able to achieve everything on their own.
                        {'\n\n'}
                        EarthWin always emphasizes that students go out and find help, first in the form
                        of an advisor who works with their school, then via community members who can help
                        get the word out, fundraise, or volunteer.
                </Text>    
            </View>
            <View style={styles.FiveBox4}>
                <Text style={styles.TextStyle}>
                    <Text style={styles.TextStyleBold}>Spread the word:</Text>
                        {'\n\n'}
                        Telling people what you're trying to accomplish is the next big step. 
                        It's important that people are aware, otherwise they won't be able to help!
                        {'\n\n'}
                        Educating others can be really difficult, and students are more than encouraged
                        to seek help from EarthWin and their advisor to help create materials such as signs,
                        flyers, petitions, and even social media posts via EarthWin approved apps.
                </Text>
            </View>
            <View style={styles.FiveBox5}>
                <Text style={styles.TextStyle}>
                    <Text style={styles.TextStyleBold}>Audit and Measure:</Text>
                        {'\n\n'}
                        Having evidence to back the necessity of your plan is key. Learning what to measure,
                        and how to measure it, is an important part of the EarthWin process.
                        {'\n\n'}
                        The ideas that we aim to instill in students aren't just a strong sense of environmental
                        values, but also a strong ability to reason, deduce, measure, and analyze on their own.  
                </Text>
            </View>
        </View>

        <Text> {'\n\n'} </Text>

        <View style={styles.MiddleBox}>
            <Text style={styles.SubTitleMiddle}>Applying to the Real World</Text>
            <Text style={styles.TextStyle}>
                Our students in Bend followed these five steps, and after taking measurements spanning approximately 
                a week, were able to present a full plan to their school district to solve the idling issues at their school.

                Click below to see how the students of Bend measured the impact of the idling vehicles on their school!
                </Text>
            <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate("Idling2")}>
                <Text> Continue </Text>
            </TouchableOpacity>
        </View>
        


      </View>
      
    );
};

const styles = StyleSheet.create({
    ScreenTitle:{
        color: '#61dafb',
        fontSize: 30,
        marginBottom: 36,
    },
    SubTitle:{
        color: '#61dafb',
        fontSize: 20,
        paddingHorizontal: 15,
    },
    SubTitleMiddle:{
        color: '#61dafb',
        fontSize: 20,
        textAlign: 'center',
    },
    SubTitleRA:{
        textAlign: 'right',
        color: '#61dafb',
        fontSize: 20,
        paddingHorizontal: 15,
    },
    TextStyle: {
        marginTop: 6,
        marginHorizontal: 5,
        padding: 10,
        borderRadius: 8,
        color: '#666',
        backgroundColor: '#eaeaea',
    },
    TextStyleBold: {
        fontWeight: 'bold',   
    },
    LeftBox: {
        marginRight: "33%",
    },
    MiddleBox: {
        marginRight: "16%",
        marginLeft: "16%",
    },
    RightBox: {
        // textAlign: 'right',
        marginLeft: "33%",
    },
    FiveBox1: {
        marginRight: "60%",
    },
    FiveBox2: {
        marginRight: "50%",
        marginLeft: "10%",
    },
    FiveBox3: {
        marginRight: "30%",
        marginLeft: "30%",
    },
    FiveBox4: {
        marginRight: "10%",
        marginLeft: "50%",
    },
    FiveBox5: {
        marginLeft: "60%",
    },
})

export default Idling1Screen;