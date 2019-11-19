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
      dl4:[],
      info:[]
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
      const info=[];
      
      
      fetch('http://192.168.8.100:3001/app', {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
         //console.log(responseJson);
         this.setState({
            
            data: responseJson
         })
         info.push(responseJson[props.id].appName);
         info.push(responseJson[props.id].downloads);
         info.push(responseJson[props.id].earnings);
         dataList.push(parseInt(responseJson[props.id].s1));
         dataList.push(parseInt(responseJson[props.id].s2));
         dataList.push(parseInt(responseJson[props.id].s3));
         dataList.push(parseInt(responseJson[props.id].s4));
         dataList.push(parseInt(responseJson[props.id].s5));
         this.setState({ 
            dl2: dataList
         })
         this.setState({ 
            info: info
         })
      })
      .catch((error) => {
         console.error(error);
      });
      
      // this.state.data.map(item => (
         // console.log(this.state.data[0].appName);
      //)
         
         // );
      

      const  data = {
          labels: ['1 star', '2 Star', '3 Star', '4 Star', '5 Star'],
          datasets: [
            {
              label: 'My First dataset',
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
              data: this.state.dl2
            }
          ]
        };
        console.log(this.state.info[0]);
        return (
         <div>
         
      <div>
      <h2>{this.state.info[0]}</h2>
            <table  id="items" >
    <thead>
    <tr>
      <th>Downloads</th>
      <td>{this.state.info[1]}</td>
    </tr>
    <tr>

       
      
      <th>Earnings</th>
      <td>{this.state.info[2]}</td>
    </tr>
    </thead>
    </table>
      
      


      <Bar
      id={props.id}
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
      <this.BarGraph id={1}/>
      <this.BarGraph id={2}/>
      <this.BarGraph id={3}/>
      <this.BarGraph id={4}/>
      <this.BarGraph id={5}/>
      <this.BarGraph id={6}/>
      <this.BarGraph id={7}/>

     
      

     </div>

     
   
      );
   }
}

export default App;