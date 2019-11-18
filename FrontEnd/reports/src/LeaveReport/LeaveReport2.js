import React,{Component} from 'react';
import './EmpReport.css';
import Leaves from './Leaves';
import {Line,Bar} from 'react-chartjs-2';

class App extends React.Component {
   state = {
      data:[],
      data1:[],
    halfDay:"",
    shortleave:"",
    allocated:"",
    auth:true,
    medical:""

      
  };

  componentDidMount() {
   //alert(' UserName: ' + this.state.userName+'Password: ' + this.state.password);
   fetch('http://192.168.8.100:3001/leave/empLeaveList', {
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
        
        }

 
   
 

 
   
      
   
   BarGraph=(props)=>{
      // const dataList= [];
      const dataList= [];
      
      fetch('http://192.168.8.100:3001/leave/empLeave?empId='+this.props.id, {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson);
         this.setState({
            
            data1: responseJson
         })
        
         dataList.push(parseInt(this.state.data1['allocated']));
         dataList.push(parseInt(this.state.data1['shortLeave']));
         dataList.push(parseInt(this.state.data1['halfDay']));
         dataList.push(parseInt(this.state.data1['hamedicallfDay']));
        
         this.setState({ 
            dl: dataList
         })
      })
      .catch((error) => {
         console.error(error);
      });
      
      // this.state.data.map(item => (
         // console.log(this.state.data[0].appName);
      //)
         
         // );
         console.log(this.state.dl);

      const  data = {
          labels: ['Allocated', 'Short Leave', 'Half Day', 'Medical'],
          datasets: [
            {
              label: 'Employee Heave Summary',
              fill: false,
              lineTension: 1,
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: 'rgba(75,192,192,1)',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgba(75,192,192,1)',
              pointHoverBorderColor: 'rgba(220,220,220,1)',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: this.state.dl
            }
          ]
        };
        return (
         <div>
         
      <div>
     <Bar
      id={0}
        data={data}
        height={250}
        options={{
          maintainAspectRatio: false
        }}
     /> 
    </div>
     </div>
      );

    }
  
   render() {
      return (

         <div>
            <div>
            <table  id="items">
         {this.state.data.map(item => (
            <tr > 
               <td>
                  <h3>EMPLOYEE ID : {item.employeeId}</h3>
                  <table  id="items">
                     <tr>
                        <th>Allocated</th>
                        <td> {item.allocated}</td>
                       
                     </tr>
                     <tr>
                        <th>Half Day</th>
                        <td>{item.halfDay}</td>
                       
                     </tr>
                     <tr>
                        <th>Short Leave</th>
                        <td>{item.shortLeave}</td>
                       
                     </tr>
                     <tr>
                        <th>Medical</th>
                        <td>{item.medical}</td>
                       
                     </tr>
                  </table>
                  
               </td >
               <td >
                  <h3>EMPLOYEE Name : {item.firstName} {item.lastName}</h3> 
                   <this.BarGraph id={item.empId}/>
                  </td >
            
            </tr>

           
         ))}
         </table>
           </div>  
    {/*
    <tbody>
          {this.state.data.map(item => (
          <h3>EMPLOYEE ID : {item.empId}</h3>
         // item.role=='ADMIN' || item.role=='MINERSTAFF' ?(""):(
          <tr > 
            <td >
               
               <br/>
              {this.func1(item.empId)} 
          </td>
          <td > 
             <h3>EMPLOYEE ID :  {item.firstName}  {item.lastName}</h3>
             {/* <this.BarGraph id={item.empId}/> */}
          {/* </td> */}
          {/* </tr> */}
          
          
          
          {/* )))}  */}

   {/* </tbody> */}
      
          {/* </table> */} 
         </div>
      );
   }
}
export default App;