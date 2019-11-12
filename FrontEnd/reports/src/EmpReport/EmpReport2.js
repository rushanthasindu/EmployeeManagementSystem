import React,{Component} from 'react';
import { BrowserRouter as Router,
   Switch,
   Route,
   Link,
   useParams
} from 'react-router-dom'
import './EmpReport.css'
import EmpReport3 from "./EmpReport3"
 import Chart from "./EmpRes"
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
      
//       if (this.state.selected !=""){
//          fetch('http://192.168.8.100:8000/project/'+this.state.selected, {
//      method: 'GET'
//   })
//   .then((response) => response.json())
//   .then((responseJson) => {
//      //console.log(responseJson);
//            this.setState({
//               data3: responseJson
//            })
//         console.log(this.state.data3);
//         })
//         .catch((error) => {
//            this.setState({
//            data3: '0'
//         })
//         });
//          return (
//          <p>{this.state.data3.projectId}</p>
//          )
//          }
   
      return (
         <Router>
             
         <div>
            <table  id="items">
    <thead>
    <tr>
      <th>Projecrt ID</th>
      <th>projec tName</th>
      <th>Project Manager</th>
      
      <th>Status</th>
      
      <th>Action</th>
     

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
              {item.completionRate} 
          </td>

          <td >
          <Link to={`/${item.projectId} `}>View</Link>          </td>
          
          </tr> 
          ))} 

   </tbody>
      
          </table>
       
         
      </div>
      <Switch>
          <Route path="/:id" children={<Child />} />
        </Switch>
    </Router>

      );
   }
}


function Child() {
   // We can use the `useParams` hook here to access
   // the dynamic pieces of the URL.
   let { id } = useParams();
 
   return (
     <div>
       
       <Chart headerProp = {id}/>
     </div>
   );
 }
export default App;
