import React, { Component } from 'react';
import { Text, Image,Button, View, StyleSheet, ScrollView ,TextInput,TouchableOpacity} from 'react-native';
import PopupDialog from 'react-native-popup-dialog';
import Modal, { ModalContent } from 'react-native-modals';


class ScrollViewExample extends Component {
   state = {
      names: [
         {'name': 'Ben', 'id': 1},
         {'name': 'Susan', 'id': 2},
         {'name': 'Robert', 'id': 3},
         {'name': 'Mary', 'id': 4},
         {'name': 'Daniel', 'id': 5},
         {'name': 'Laura', 'id': 6},
         {'name': 'John', 'id': 7},
         {'name': 'Debra', 'id': 8},
         {'name': 'Aron', 'id': 9},
         {'name': 'Ann', 'id': 10},
         {'name': 'Steve', 'id': 11},
         {'name': 'Olivia', 'id': 12}
      ],
      items:[],
      visible:false,
      itemId:'',
      itemCode:'',
      itemDescription:'',
      qty:''
   }
   alertItemName = (item) => {
      alert(item.description)
   }

   handleqty = (text) => {
      this.setState({ qty: text })
   }
   passData = () => {
      // fetch('http://192.168.8.100:3001/inventry/getItem/?itemID='+this.state.itemId+'&qty='+this.state.itemId, {
         fetch('http://192.168.8.100:3001/inventry/getItem?itemID='+this.state.itemId+'&qty='+this.state.qty, {

         method: 'GET'
         })
         .then((response) => response.json())
         .then((responseJson) => {
            //console.log(responseJson);
            this.setState({
               visible: false 
            })
            
         })
         .catch((error) => {
           this.setState({
            visible: false 
          })
              Alert.alert("ERROR", "ERROR ");
            //console.error(error);
         });
       
        
   }
   componentDidMount = () => {
     // fetch('http://10.10.73.1:3001/inventry/', {
        fetch('http://192.168.8.100:3001/inventry/', {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
         //console.log(responseJson);
         this.setState({
            items: responseJson
         })
      })
      .catch((error) => {
         console.error(error);
      });
      console.log(this.state.items);
   }


   render() {
      return (
         

         <View style={styles.container}>
            {
                this.state.items.map((item, index) => (
         <TouchableOpacity
            style={styles.item}
            key = {index}
           onPress={() => {
             this.setState({ 
                visible: true,
                itemDescription:item.description,
                itemId:item._id,
               itemCode:item.itemCode
                
             });
           }}
         >

            <Text style = {styles.text}>
                                 {item.description}
               </Text>

                     </TouchableOpacity>

         
                ))
      }
         
         <Modal
           visible={this.state.visible}
           onTouchOutside={() => {
             this.setState({ visible: false });
           }}
         >
           <ModalContent>
              <Text style = {styles.h1}>Alert</Text>
              <Text style = {styles.h2}>Item Code {this.state.itemCode}</Text>
               <Text style = {styles.h2}>Item Name {this.state.itemDescription}</Text>
               <TextInput style = {styles.input}
               // underlineColorAndroid = "transparent"
               placeholder = "Quantity"
               keyboardType='numeric'
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleqty}/>
                     
                     <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.passData()
               }>
               <Text style = {styles.submitButtonText}> Submit </Text>
            </TouchableOpacity>
          
           </ModalContent>
         </Modal>
       </View>
        
      )
   }
}
export default ScrollViewExample

const styles = StyleSheet.create ({
   item: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 30,
      margin: 5,
      borderColor: '#2a4944',
      borderWidth: 1,
      backgroundColor: '#d2f7f1'
   },
   input: {
      
      margin: 15,
      height: 40,
      borderColor: '#000',
      paddingLeft: 30,
      borderWidth: 1
   },
   text: {
      color: '#4f603c'
   },
    submitButton: {
      backgroundColor: 'blue',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   },
   h1: {
      color: '#4f603c',
      fontSize:40
   },

   h3: {
      color: '#4f603c',
      fontSize:20
   },
   h2: {
      color: '#4f603c',
      fontSize:25
   }
})