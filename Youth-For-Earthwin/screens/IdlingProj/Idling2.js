import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

function CalcEmissions() {
    var form = document.forms["idleform"];
    var newval = 0;
    var count = 0;
    console.log("Weird1...");
    if(!form){

        console.log("Weird...");
        document.getElementById('totalEmm').innerHTML = "!ERR!";
        return;
    }
    
    var tempnum = form?.elements["NumVehicles"];
    if(tempnum.value.matches("[0-9.]*")){
        new_val = parseFloat(tempnum.value);
    } else {
        document.getElementById('totalEmm').innerHTML = "!VAL";
        return;
    }

    count = newval;

    tempnum = form.elements["IdlingTime"];
    if(tempnum.value.matches("[0-9]*")){
        new_val = parseInt(tempnum.value);
    } else {
        document.getElementById('totalEmm').innerHTML = "!VAL";
        return;
    }

    count = count * newval;

    tempnum = form.elements["AvgEmissions"];
    if(tempnum.value.matches("[0-9.]*")){
        new_val = parseFloat(tempnum.value);
    } else {
        document.getElementById('totalEmm').innerHTML = "!VAL";
        return;
    }

    tempval = form.elements["unit"];
    if(tempval.value == "1"){
        console.log("Testing...");
        count = count * (newval/60) * 0.008887;
        document.getElementById('totalEmm').innerHTML = count+" Metric Tonnes of CO2 Produced";
    } else {
        count = count * (newval/60);
        document.getElementById('totalEmm').innerHTML = count+" Gallons of Gasoline Wasted";
    }

    return;

}

function Idling2Screen() {
    // CalcEmissions();
    return (
        <View>
            <form action="" id="idleform">
        <fieldset>
            <legend>Make your cake!</legend>
            
            <br></br>
            
            <input type="text" name="NumVehicles" defaultValue="5"
            onChange={CalcEmissions()} />
                Number of Vehicles
            <br></br>
            <input type="text" name="IdlingTime" defaultValue="2"
            onChange={CalcEmissions()} />
                Average Time Spent Idling (min)
            <br></br>
            <input type="text" name="AvgEmissions" defaultValue="10"
            onChange={CalcEmissions()} />
                Average Emissions per vehicle (gal/hr)
            <p>
                Display result in gallons or tonnes of CO2?
            </p>

            <select id="unit" name='unit' defaultValue="1" onChange={CalcEmissions()}>
                <option value="1">Metric tonnes of CO2</option>
                <option value="2">Gallons</option>
            </select>
        
            <div id="totalEmm"></div>
        
            </fieldset>
        </form>
        </View>
        
    )
}

export default Idling2Screen;