import { Text, View, TextInput, Button, ScrollView, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import {Picker} from '@react-native-picker/picker';
import RadioForm from 'react-native-simple-radio-button';
import StyleSheet from './Styles';

export default function App() {

  const [weight, setWeight] = useState(0);
  const [bottlesArray, setBottlesArray] = useState([]);
  const [timesArray, setTimesArray] = useState([]);
  const [bottles, setBottles] = useState(0);
  const [times, setTimes] = useState(1);
  const [gender, setGender] = useState('male');
  const [alcLevel, setAlcLevel] = useState(0);

  useEffect(() => {
    const bottles = Array();
    const times = Array();

    for (let i = 1; i < 31; i++) {
      bottles.push({id: i});
    }
    setBottlesArray(bottles);

    for (let i = 1; i < 25; i++) {
      times.push({id: i});
    }
    setTimesArray(times);

  }, [])

  const genders = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'}
  ]
 
  const calculate = (weight, bottles, time) => {
    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const gramsLeft = grams - (burning * time);
    
    if (weight === 0 || weight === "") {
      showAlert();
    } else {
      if (gender === "male") {
        const alcLevel = gramsLeft / (weight * 0.7);
        if (alcLevel < 0) {
          setAlcLevel(0);
        } else {
          setAlcLevel(alcLevel);
        }
        
      } else {
        const alcLevel = gramsLeft / (weight * 0.6);
        if (alcLevel < 0) {
          setAlcLevel(0);
        } else {
          setAlcLevel(alcLevel);
        }
    }
    }
  };

  const alcLevelColor = () => {
    if (alcLevel.toFixed(2) == 0.00) {
      return (
        <Text style={StyleSheet.alcLevelLow}>{alcLevel.toFixed(2)}</Text>
      )
    } else if (alcLevel.toFixed(2) > 0 && alcLevel.toFixed(2) < 0.5) {
      return (
        <Text style={StyleSheet.alcLevelMedium}>{alcLevel.toFixed(2)}</Text>
      )
    } else {
      return (
        <Text style={StyleSheet.alcLevelHigh}>{alcLevel.toFixed(2)}</Text>
      )
    }
  }
  
  const showAlert = () => {
      Alert.alert(
        "Alcometer",
        "Please enter your weight.",
        [
          {
            text: "Ok"
          }
        ]
      );
  };

  return (
    <View style={StyleSheet.container}>
     <ScrollView>

      <Text style={StyleSheet.title}>Alcometer</Text>

      <Text style={StyleSheet.header}>Weight</Text>
      <TextInput 
      style={StyleSheet.input} 
      keyboardType='number-pad'
      onChangeText={text => setWeight(text)}
      placeholder="Enter your weight"
      >
      
      </TextInput>

      <Text style={StyleSheet.header}>Bottles</Text>
      <Picker
        style={StyleSheet.picker}
        selectedValue={bottles}
        onValueChange={(itemValue) =>
        setBottles(itemValue)
      }>
      {bottlesArray.map((item, index) => (
        <Picker.Item key={index} label={item.id + " bottles"} value={item.id}/>
      ))
      }
      </Picker>

      <Text style={StyleSheet.header}>Time</Text>
      <Picker
        style={StyleSheet.picker}
        selectedValue={times}
        onValueChange={(itemValue) =>
        setTimes(itemValue)
      }>
      {timesArray.map((item, index) => (
        <Picker.Item key={index} label={item.id + " hours"} value={item.id}/>
      ))
      }
      </Picker>

      <Text style={StyleSheet.header}>Gender</Text>

      <RadioForm
        style={StyleSheet.radio}
        buttonSize = {8}
        radio_props={genders}
        initial={0}
        onPress={(value) => {setGender(value)}}
      />

      {alcLevelColor()}

      <Button title="Calculate" onPress={() => calculate(weight, bottles, times)}></Button>
      </ScrollView>
    </View>

   
  );
}