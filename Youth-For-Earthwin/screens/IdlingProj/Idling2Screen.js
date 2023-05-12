// import React from "react";
// import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

// function CalcEmissions() {
//     var form = document.forms["idleform"];
//     var newval = 0;
//     var count = 0;
//     console.log("Weird1...");
//     if(!form){

//         console.log("Weird...");
//         document.getElementById('totalEmm').innerHTML = "!ERR!";
//         return;
//     }
    
//     var tempnum = form?.elements["NumVehicles"];
//     if(tempnum.value.matches("[0-9.]*")){
//         new_val = parseFloat(tempnum.value);
//     } else {
//         document.getElementById('totalEmm').innerHTML = "!VAL";
//         return;
//     }

//     count = newval;

//     tempnum = form.elements["IdlingTime"];
//     if(tempnum.value.matches("[0-9]*")){
//         new_val = parseInt(tempnum.value);
//     } else {
//         document.getElementById('totalEmm').innerHTML = "!VAL";
//         return;
//     }

//     count = count * newval;

//     tempnum = form.elements["AvgEmissions"];
//     if(tempnum.value.matches("[0-9.]*")){
//         new_val = parseFloat(tempnum.value);
//     } else {
//         document.getElementById('totalEmm').innerHTML = "!VAL";
//         return;
//     }

//     tempval = form.elements["unit"];
//     if(tempval.value == "1"){
//         console.log("Testing...");
//         count = count * (newval/60) * 0.008887;
//         document.getElementById('totalEmm').innerHTML = count+" Metric Tonnes of CO2 Produced";
//     } else {
//         count = count * (newval/60);
//         document.getElementById('totalEmm').innerHTML = count+" Gallons of Gasoline Wasted";
//     }

//     return;

// }

// function Idling2Screen() {
//     // CalcEmissions();
//     return (
//         <View>
//             <form action="" id="idleform">
//         <fieldset>
//             <legend>Make your cake!</legend>
            
//             <br></br>
            
//             <input type="text" name="NumVehicles" defaultValue="5"
//             onChange={CalcEmissions()} />
//                 Number of Vehicles
//             <br></br>
//             <input type="text" name="IdlingTime" defaultValue="2"
//             onChange={CalcEmissions()} />
//                 Average Time Spent Idling (min)
//             <br></br>
//             <input type="text" name="AvgEmissions" defaultValue="10"
//             onChange={CalcEmissions()} />
//                 Average Emissions per vehicle (gal/hr)
//             <p>
//                 Display result in gallons or tonnes of CO2?
//             </p>

//             <select id="unit" name='unit' defaultValue="1" onChange={CalcEmissions()}>
//                 <option value="1">Metric tonnes of CO2</option>
//                 <option value="2">Gallons</option>
//             </select>
        
//             <div id="totalEmm"></div>
        
//             </fieldset>
//         </form>
//         </View>
        
//     )
// }

// export default Idling2Screen;
import React, { useState } from "react";
import { View, Text, TextInput, Picker, Button, StyleSheet } from "react-native";

function Idling2Screen() {
    const [numVehicles, setNumVehicles] = useState("");
    const [idlingTime, setIdlingTime] = useState("");
    const [avgEmissions, setAvgEmissions] = useState("");
    const [unit, setUnit] = useState("1");
    const [result, setResult] = useState("");

    const calcEmissions = () => {
        let newval = 0;
        let count = 0;

        if(numVehicles.match("[0-9.]*")){
            newval = parseFloat(numVehicles);
        } else {
            setResult("!VAL");
            return;
        }

        count = newval;

        if(idlingTime.match("[0-9]*")){
            newval = parseInt(idlingTime);
        } else {
            setResult("!VAL");
            return;
        }

        count = count * newval;

        if(avgEmissions.match("[0-9.]*")){
            newval = parseFloat(avgEmissions);
        } else {
            setResult("!VAL");
            return;
        }

        if(unit == "1"){
            count = count * (newval/60) * 0.008887;
            setResult(count + "Metric Tonnes of CO2 Produced");
        } else {
            count = count * (newval/60);
            setResult(count + "Gallons of Gasoline Wasted");
        }
    }

    return (
        <View>
            <Text style={styles.label}>Number of Vehicles</Text>
            <TextInput
                style={styles.input}
                value={numVehicles}
                onChangeText={setNumVehicles}
            />

            <Text style={styles.label}>Average Time Spent Idling (min)</Text>
            <TextInput
                style={styles.input}
                value={idlingTime}
                onChangeText={setIdlingTime}
            />

            <Text style={styles.label}>Average Emissions per vehicle (gal/hr)</Text>
            <TextInput
                style={styles.input}
                value={avgEmissions}
                onChangeText={setAvgEmissions}
            />

            <Text style={styles.label}>Display result in:</Text>
            <Picker
                style={styles.picker}
                selectedValue={unit}
                onValueChange={(itemValue) => setUnit(itemValue)}
            >
                <Picker.Item label="Metric tonnes of CO2" value="1" />
                <Picker.Item label="Gallons" value="2" />
            </Picker>
            
            <Button title="Calculate" onPress={calcEmissions} />
            <Text>{result}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 5,
        paddingHorizontal: 10,
    },
    picker: {
        height: 50,
        width: 200,
    }
});

export default Idling2Screen;
