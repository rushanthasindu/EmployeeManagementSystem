import React from 'react'
import { TouchableOpacity, Text,View,  StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
 import ScrollView from './ScrollView';
import PromptExample from "./Prompt"



const Home = () => {
//   console.log ("test");
//     fetch('http://192.168.8.100/inventry/', {
//          method: 'GET'
//       })
//       .then((response) => response.json())
//       .then((responseJson) => {
//          console.log(responseJson);
//         //  this.setState({
//         //     items: responseJson
//         //  })
//       })
//       .catch((error) => {
//          console.error(error);
//       });

//    onPress = {goToAbout}  style = {{ margin: 128 }}
   return (
   
       <PromptExample/>
      
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