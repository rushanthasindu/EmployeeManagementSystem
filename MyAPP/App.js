import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Routes from './Routes.js'
import HttpExample from './http_example.js'

class reactTutorialApp extends Component {
   render() {
      return (
         <Routes />
      )
   }
}

// const App = () => {
//    return (
//       <HttpExample />
//    )
// }
// export default App
export default reactTutorialApp
AppRegistry.registerComponent('reactTutorialApp', () => reactTutorialApp)