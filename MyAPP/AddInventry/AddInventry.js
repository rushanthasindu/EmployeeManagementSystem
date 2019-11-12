import React from 'react'
import { TouchableOpacity, Text,View,  StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

const Home = () => {
   const goToLeave = () => {
      Actions.leave()
   }
   const goToInventry = () => {
    Actions.inventry()
 }
 const goToAddInventry = () => {
    Actions.addInventry()
 }
//    onPress = {goToAbout}  style = {{ margin: 128 }}
   return (
      <View tyle = {styles.container}  >
         <TouchableOpacity onPress = {goToLeave} >
            <Text style = {styles.btn1}>
               Leave
            </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToInventry}>
            <Text style = {styles.btn2}>
               Inventry
            </Text>
         </TouchableOpacity>
        <TouchableOpacity onPress={goToAddInventry}>
        <Text style = {styles.btn3}>
               New Inventry
            </Text>
        </TouchableOpacity>
      </View >
      
   )
}
export default Home


const styles = StyleSheet.create ({
    container: {
        marginTop: 75,
       alignItems: 'center',
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