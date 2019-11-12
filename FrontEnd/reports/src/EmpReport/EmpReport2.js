import React,{Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './EmpReport.css'
import EmpReport3 from "./EmpReport3"

class App extends React.Component {
   constructor(props) {
      super(props);
   this.state = {

      data:[],
      data2:[],
      data3:[],
      selected:""
  };
  this.changeProjectId = this.changeProjectId.bind(this);


}

  componentDidMount() {
   //alert(' UserName: ' + this.state.userName+'Password: ' + this.state.password);
   fetch('http://192.168.8.100:8000/project/', {
     method: 'GET'
  })
  .then((response) => response.json())
  .then((responseJson) => {
     //console.log(responseJson);
           this.setState({
              data: responseJson
           })
        //console.log(this.state.data);
        })
        .catch((error) => {
           this.setState({
           data: '0'
        })
        });

        fetch('http://192.168.8.100:8000/employee/', {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
         //console.log(responseJson);
               this.setState({
                  data2: responseJson
               })
            //console.log(this.state.data);
            })
            .catch((error) => {
               this.setState({
               data2: '0'
            })
            });
            

        
        }

      //   changeProjectId = changeProjectId.bind(this);
        changeProjectId=(event)=>{
         
            this.setState({
             selected: "awdsa"
          });

         //  alert(event);
        }
        
  
   render() {
      
      if (this.state.selected !=""){
         fetch('http://192.168.8.100:8000/project/'+this.state.selected, {
     method: 'GET'
  })
  .then((response) => response.json())
  .then((responseJson) => {
     //console.log(responseJson);
           this.setState({
              data3: responseJson
           })
        console.log(this.state.data3);
        })
        .catch((error) => {
           this.setState({
           data3: '0'
        })
        });
         return (
         <p>{this.state.data3.projectId}</p>
         )
         }
   
      return (
         <div>
            <table  id="items">
    <thead>
    <tr>
      <th>Employee ID</th>
      <th>Name</th>
      <th>Address</th>
      <th>Email</th>

      <th>Status</th>
      <th>Number Of projects Done</th>
      <th>Role</th>

    </tr>
    </thead>
    <tbody>
          {this.state.data.map(item => (
          <tr > 
            <td >
              {item.projectId} 
          </td>
          <td >
              {item.projectName}  
          </td>
          <td >
              {
this.state.data2.map(item2 => (
   item2._id===item.allocation[0]?(item2.firstName):(<p></p>)

)
)
              }                                                                                                 
          </td>
          <td >
              {item.type} 
          </td>
          
          <td >
              {item.comment} 
          </td>
          <td >
              {item.completionRate} 
          </td>

          <td >
          <button onClick = {
             
             this.changeProjectId()}>CLICK</button>
{/*  
              <button onClick={
               this.setState({
                  selected: "awdsa"
               })
            }
              >View</button> */}
          </td>
          
          </tr> 
          ))} 

   </tbody>
      
          </table>
         </div>
      );
   }
}
export default App;