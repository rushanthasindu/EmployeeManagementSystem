import React from 'react'
import { TouchableOpacity, Text,View,  StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Login from '../Login/Login'
import {AsyncStorage} from 'react-native';
import { Image ,TouchableHighlight,} from 'react-native'
import {
   Button
 } from 'react-native-elements'

 import { SocialIcon } from 'react-native-elements'
const Home = (empId) => {

  console.log(empId.data);
   const goToLeave = () => {
      Actions.leave(empId.data)
   }
   const goToInventry = () => {
    Actions.inventry(empId.data)
 }
 const goToAddInventry = () => {
    Actions.addInventry(empId.data)
 }
 // console.log(empId.data);
//    onPress = {goToAbout}  style = {{ margin: 128 }}
   return (
      <View style = {styles.container}  >


   <Text style={{color: 'white', fontSize: 20,}}>{empId.dat}</Text>

         <Image source = {require('./logo.png')} />

         {/* <TouchableOpacity onPress = {goToLeave} >
            <Text style = {styles.btn1}>
               Leave  
            </Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity onPress={goToInventry}>
            <Text style = {styles.btn2}>
               Inventry
            </Text>
         </TouchableOpacity> */}
        

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={goToInventry}>
          <Text style={styles.loginText}>Inventry</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={goToLeave}>
          <Text style={styles.loginText}>Leave</Text>
        </TouchableHighlight>
        

 
      </View >
      
   )
}
export default Home


const styles = StyleSheet.create ({
    container: {
      flex: 1,
      justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: 'lightblue',
      
    },
    btn1: {
        marginTop: 75,
       borderWidth: 1,
       padding: 25,
       borderColor: 'black',
       backgroundColor: 'red'
    },
    btn2: {
        marginTop: 25,
       borderWidth: 1,
       padding: 25,
       borderColor: 'black',
       backgroundColor: 'green'
    },
    btn3: {
        marginTop: 25,
       borderWidth: 1,
       padding: 25,
       borderColor: 'black',
       backgroundColor: 'blue'
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:250,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    inputIcon:{
      width:30,
      height:30,
      marginLeft:15,
      justifyContent: 'center'
    },
    buttonContainer: {
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
    },
    loginButton: {
      backgroundColor: "#00b5ec",
    },
    loginText: {
      color: 'white',
    }
 })