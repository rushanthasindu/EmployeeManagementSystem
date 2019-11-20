import React, { Component } from 'react'
import { 
   View,
   Button ,
   Text, 
   Picker,
   TouchableOpacity, 
   TextInput, 
   StyleSheet } from 'react-native'
import DatePicker from 'react-native-datepicker'
import Login from '../Login/Login'
import { Actions } from 'react-native-router-flux';
import {AsyncStorage} from 'react-native';
import axios from 'axios'
import ModalDropdown from 'react-native-modal-dropdown';
class LeaveForm extends Component {
    state = {
        empId:'0',
        startDate: new Date,
        endDate:new Date,
        reason:'',
        user: '',
        type:''
      }
  
   alertItemName = (item) => {
    alert(item.name)
 }


 

 updateUser = (user) => {
   this.setState({ user: user })
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
   this.setState({
      empId: this.props.id
   })

   }

   typeHandler=(index)=>{
      if (index==0)  this.setState({type:"ALLOCATED"})
      else if (index==1)  this.setState({type:"HALFDAY"})
      else if (index==2)  this.setState({type:"SHORTLEAVE"})
      else if (index==3)  this.setState({type:"MEDICAL"})
      console.log("Test1");
   
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
  

  requestLeave=()=>{
   console.log("Test");

   
   axios.post('http://192.168.8.100:8000/leave/', {
      
         employeeId: this.state.empId,
         status: "NonApproved",
         approvedBy: "-",
         type: this.state.type,
         leaveStart:this.state.startDate,
         leaveEnd:this.state.endDate,
         reason: this.state.reason
      
    },{
        "headers": {
         "Accept": "application/json, text/plain, */*",
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

       
      
      console.log(this.props.id);
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
         <Text style={{color: 'white',fontSize: 20,}}>End Date</Text>
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
                }}
                onDateChange= {this.handleStartDate}/>

               <Text style={{color: 'white',fontSize: 20,}}>Leave Type</Text>
               <ModalDropdown
               style = {styles.input}
               options={
                  ['Allocated', 'Half Day', 'Short Leave', 'Medical']}
                  onSelect={(lable) => { this.typeHandler(lable); }}
               />
               <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Reason"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleReason}/>
             
       <TouchableOpacity
           style = {styles.submitButton}
           onPress = {this.requestLeave}>
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
      backgroundColor: 'lightblue',
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