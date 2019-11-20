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
 
    state = {
      email   : '',
      password: '',
      empId:0,
      data: [],
      isAuth: false,
    
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
    

    //this.loginHandler();
    
    
    // //fetch('http://192.168.8.100:3001/users/auth/?email=rushanthasindu10@gmail.com&password=rushan', {
    // fetch('http://10.10.95.123:3001/users/auth/?email=rushanthasindu10@gmail.com&password=rushan', {
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
  

    // //console.log(this.state.data[0]);
   


 }

  onClickListener = (viewId) => {

    Actions.home({text: 'Hello World'})
    //Alert.alert("Alert", "Button pressed "+viewId);
  }
  
  loginHandler = () => {
    console.log(this.state.empId);
      //fetch('http://192.168.8.100:3001/users/auth/?email='+this.state.email+'&password='+this.state.password+'', {
    //  // fetch('http://192.168.8.100:3001/users/auth/?email=amantha10@gmail.com&password=amantha', {
      fetch('http://192.168.8.100:3001/users/auth/?email=admin@gmail.com&password=admin123', {
    //       fetch('http://192.168.8.100:3001/users/auth/?email='+this.state.email+'&password=admin123', {

    method: 'GET'
    })
    .then((response) => response.json())
    .then((responseJson) => {
       //console.log(responseJson);
       this.setState({
          data: responseJson
       })
        console.log(this.state.data[0]._id);
       if (this.state.data[0])  Actions.home(this.state.data[0]._id);
       else  Alert.alert("ERROR", "USERNAME OR PASSWORD ERROR");
      
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
          <Image style={styles.inputIcon} source={{uri: 'https://banner2.cleanpng.com/20180531/wxl/kisspng-avatar-computer-icons-logo-photographer-5b102d1e728c13.7251972015277867824692.jpg'}}/>
          <TextInput style={styles.inputs}
              placeholder="Email"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({email})}/>
        </View>
        
        <View style={styles.inputContainer}>
          <Image style={styles.inputIcon} source={{uri: 'data:image/png;base64,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'}}/>
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
    backgroundColor: 'lightblue',
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
 