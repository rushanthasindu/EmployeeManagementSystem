import React from 'react';
import {Line,Bar} from 'react-chartjs-2';

class App extends React.Component {
   constructor(props) {
      super(props);
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
      datasets: [
        {
          label: 'My First dataset',
          fill: false,
          lineTension: 0.1,
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
          data: ''
        }
      ]
    };
    this.state = {
      data1: '',
      data: '',
      dl:[],
      dl1:[],
      dl2:[],
      dl3:[],
      dl4:[]
   }
}
    componentDidMount(){
      fetch('http://192.168.8.100:3001/app', {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
         //console.log(responseJson);
         this.setState({
            data1: responseJson
         })
         console.log(this.state.data1.s1);
         
      })
      .catch((error) => {
         console.error(error);
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
            
            data: responseJson
         })
        
         dataList.push(parseInt(responseJson[props.id].allocated));
         dataList.push(parseInt(responseJson[props.id].shortLeave));
         dataList.push(parseInt(responseJson[props.id].halfDay));
         dataList.push(parseInt(responseJson[props.id].medical));
        
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
      <this.BarGraph id={0}/>
      
     
    


     </div>

     
   
      );
   }
}

export default App;