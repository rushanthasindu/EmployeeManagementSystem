import React, { Component } from 'react';
import { Text, Image, View, StyleSheet, ScrollView ,TouchableOpacity} from 'react-native';
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
      visible:false
      
   }
   alertItemName = (item) => {
      alert(item.description)
   }

   componentDidMount = () => {
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
         <View>
            {
               this.state.items.map((item, index) => (
                  <TouchableOpacity
                     key = {index}
                     style = {styles.item}
                     onPress = {() => this.alertItemName(item)}>
                     <Text style = {styles.text}>
                        {item.description}
                     </Text>
                  </TouchableOpacity>
               ))
            }
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
      margin: 2,
      borderColor: '#2a4944',
      borderWidth: 1,
      backgroundColor: '#d2f7f1'
   },
   text: {
      color: '#4f603c'
   }
})