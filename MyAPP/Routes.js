import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from './Home/Home.js'
import Login from './Login/Login.js'
import Leave from './Leave/Leave.js'
import Inventry from './Inventry/Inventry.js'
import AddInventry from './AddInventry/AddInventry.js'
   
const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "login" component = {Login} title = "Login" initial = {true} />
         <Scene key = "home" component = {Home} title = "Home" />
         <Scene key = "leave" component = {Leave} title = "Leave" />
         <Scene key = "inventry" component = {Inventry} title = "Inventry" />
         <Scene key = "addInventry" component = {AddInventry} title = "Add Inventry" />

      </Scene>  
   </Router>
)
export default Routes