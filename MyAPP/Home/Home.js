import React from 'react'
import { TouchableOpacity, Text,View,  StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Login from '../Login/Login'
import {AsyncStorage} from 'react-native';
import { Image } from 'react-native'
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
        

         <SocialIcon
  title='       Inventry        '
  button
  large
  style=' padding: 205'
 
  type='instagram'
  onPress={goToInventry}
/>

<SocialIcon
  title='       Leave        '
  button
  large
  style=' padding: 205'
 
  type='codepen'
  onPress={goToLeave}
/>
  
 
      </View >
      
   )
}
export default Home


const styles = StyleSheet.create ({
    container: {
      flex: 1,
      justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: '#ba03fc',
      
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
    }
 })