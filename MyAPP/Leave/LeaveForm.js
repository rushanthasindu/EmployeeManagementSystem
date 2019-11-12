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

class LeaveForm extends Component {
    state = {
        empId:'0',
        startDate: new Date,
        endDate:new Date,
        reason:''
      }
  
   alertItemName = (item) => {
    alert(item.name)
 }

 handleStartDate = (text) => {
    this.setState({ startDate: text })
 }
  handleEndDate = (text) => {
    this.setState({ endDate: text })
 } 
 handleReason = (text) => {
      this.setState({ reason: text })
   }

   componentDidMount = () => {
    this.retrieveEmpID('id');
   // console.log(this.state.empId);

   }


    retrieveEmpID = async (v) => {
  
    try {
      const value = await AsyncStorage.getItem(v);
      if (value !== null) {
        // We have data!!
        
        this.setState({
            empId: value
         })
      
      }
    } catch (error) {
      // Error retrieving data
    } 
   
  };
 request = () => {


    // fetch('http://192.168.8.100:3001/users/auth/?email=rushanthasindu10@gmail.com&password=rushan', {
    //    method: 'GET'
    // })
    // .then((response) => response.json())
    // .then((responseJson) => {
    //    //console.log(responseJson);
    //    this.setState({
    //       data: responseJson
    //    })
       
    //    if (this.state.data[0]){
    //    this. storeEmpID(this.state.data[0]._id);
    //     this.setState({
    //       empId: this.state.data[0]._id
    //    })
    //        Actions.home(this.state.empId)}
    //    else  Alert.alert("ERROR", "USERNAME OR PASSWORD ERROR");
      
    // })
    // .catch((error) => {
    //   this.setState({
    //     data: 0
    //  })
    //      Alert.alert("ERROR", "ERROR IN CONNECTION");
    //    //console.error(error);
    // });
  



    axios.post('http://192.168.8.104:8000/leave/', {
    //    employeeId: this.state.empId,
    //    leaveStart:this.state.startDate,
    //    leaveEnd:this.state.endDate,
    //    reason: this.state.reason

       employeeId: "32456789098765e4wq",
       leaveStart:"fghjkl",
       leaveEnd:"dfghjk",
       reason:"hjkl;"
    },{
        "headers": {
          'Content-Type': 'application/json',
        }
     })
     .then(function (response) {
       console.log(response);
     })
     .catch(function (error) {
       console.log(error);
     });
 }

   render() {
      return (
        <View style = {styles.container}>
        <Text style={{color: 'white', fontSize: 20,}}>Start Date</Text>
         <DatePicker
            style={{width: 200}}
            date={this.state.startDate}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
                dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                },
                dateInput: {
                    marginLeft: 36
                }
                // ... You can check the source to find the other keys.
                }}
                onDateChange= {this.handleStartDate}/>
         <Text style={{color: 'white',fontSize: 20,}}>endDate Date</Text>
         <DatePicker
            style={{width: 200}}
            date={this.state.endDate}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
                dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                },
                dateInput: {
                    marginLeft: 36
                }
                // ... You can check the source to find the other keys.
                }}
                onDateChange= {this.handleStartDate}/>

                <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Reason"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleReason}/>
            





        <TouchableOpacity
           style = {styles.submitButton}
           onPress = {() => this.request()}>
           <Text style = {styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
     </View>
      )
   }
}
export default LeaveForm


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#ba03fc',
      justifyContent: 'center',
       paddingTop: 23
    },
    input: {
       margin: 15,
       width: 325,
       height: 40,
       color: 'black',
       borderColor: '#7a42f4',
       backgroundColor: '#FFF',
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