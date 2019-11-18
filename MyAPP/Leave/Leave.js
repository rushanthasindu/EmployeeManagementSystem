import React, { Component } from 'react'
import { 
   View,
   Text, 
   TouchableOpacity, 
   TextInput, 
   StyleSheet } from 'react-native'
import DatePicker from 'react-native-datepicker'
import Login from '../Login/Login'
import { Actions } from 'react-native-router-flux';
import {AsyncStorage} from 'react-native';
import axios from 'axios'
import LeaveForm from "./LeaveForm"
import Test from "./Test"

const Leave = (empId) => {
   console.log(empId.data);
 return (
    <LeaveForm id={empId.data}/>
   // <Test/>
      );
   
            }
export default Leave

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
})