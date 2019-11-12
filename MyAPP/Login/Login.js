import React , { Component } from 'react'
import {
        StyleSheet, 
        TouchableOpacity,
        View,
        Text,
        TextInput,
        Button,
        TouchableHighlight,
        Image,
        AlertText,
        Alert 
        } from 'react-native';

import { Actions } from 'react-native-router-flux';
import {AsyncStorage} from 'react-native';

export default class Login extends Component {
    goToAbout = () => {
      Actions.home()
   }
   constructor(props) {
    super(props);
    state = {
      email   : 'rushanthasindu10@gmail.com',
      password: 'rushan',
      empId:0,
      data: [],
      isAuth: false,
      startDate: new Date,
      endDate:new Date,
      reason:'',
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
     ]
    }
  }

  storeEmpID = async (val) => {
      //console.log("value");
      try {
        await AsyncStorage.setItem('id', val);
      } catch (error) {
        // Error saving data
      }
    };
  
    


  componentDidMount = () => {
    // this.storeData();
    // this.retrieveData();
    // console.log("value");
    
    
    
    //fetch('http://192.168.8.100:3001/users/auth/?email=rushanthasindu10@gmail.com&password=rushan', {
    fetch('http://10.10.95.123:3001/users/auth/?email=rushanthasindu10@gmail.com&password=rushan', {
       method: 'GET'
    })
    .then((response) => response.json())
    .then((responseJson) => {
       //console.log(responseJson);
       this.setState({
          data: responseJson
       })
       
       if (this.state.data[0]){
       this. storeEmpID(this.state.data[0]._id);
        this.setState({
          empId: this.state.data[0]._id
       })
           Actions.home(this.state.empId)}
       else  Alert.alert("ERROR", "USERNAME OR PASSWORD ERROR");
      
    })
    .catch((error) => {
      this.setState({
        data: 0
     })
         Alert.alert("ERROR", "ERROR IN CONNECTION");
       //console.error(error);
    });
  

    //console.log(this.state.data[0]);
   


 }

  onClickListener = (viewId) => {

    Actions.home({text: 'Hello World'})
    //Alert.alert("Alert", "Button pressed "+viewId);
  }
  
  loginHandler = () => {
    //  fetch('http://192.168.1.100:3001/users/auth/?email='+this.state.email+'&password='+this.state.password+'', {
     // fetch('http://192.168.8.100:3001/users/auth/?email=rushanthasindu10@gmail.com&password=rushan', {
        fetch('http://192.168.8.100:3001/users/auth/?email=admin@gmail.com&password=admin123', {

    method: 'GET'
    })
    .then((response) => response.json())
    .then((responseJson) => {
       //console.log(responseJson);
       this.setState({
          data: responseJson
       })
       if (this.state.data[0])  Actions.home();
       else  Alert.alert("ERROR", "USERNAME OR PASSWORD ERROR");
       //console.log(this.state.data[0]);
    })
    .catch((error) => {
      this.setState({
        data: 0
     })
         Alert.alert("ERROR", "ERROR IN CONNECTION");
       //console.error(error);
    });
  
   
  }

  render() {

    return (
      <View style={styles.container}>
              <Image source = {require('./logo.png')} />
<View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
          <TextInput style={styles.inputs}
              placeholder="Password"
              secureTextEntry={true}
              underlineColorAndroid='transparent'
              onChangeText={(password) => this.setState({password})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.loginHandler()}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ba03fc',
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
});
 