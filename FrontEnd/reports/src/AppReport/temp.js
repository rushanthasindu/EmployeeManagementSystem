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

     BarGraph1=(props)=>{
      // const dataList= [];
      const dataList= [];
      
      fetch('http://192.168.8.100:3001/app', {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
         //console.log(responseJson);
         this.setState({
            
            data: responseJson
         })
        
         dataList.push(parseInt(responseJson[props.id].s1));
         dataList.push(parseInt(responseJson[props.id].s2));
         dataList.push(parseInt(responseJson[props.id].s3));
         dataList.push(parseInt(responseJson[props.id].s4));
         dataList.push(parseInt(responseJson[props.id].s5));
         this.setState({ 
            dl2: dataList
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


    BarGraph2=(props)=>{
      // const dataList= [];
      const dataList= [];
      
      fetch('http://192.168.8.100:3001/app', {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
         //console.log(responseJson);
         this.setState({
            
            data: responseJson
         })
        
         dataList.push(parseInt(responseJson[props.id].s1));
         dataList.push(parseInt(responseJson[props.id].s2));
         dataList.push(parseInt(responseJson[props.id].s3));
         dataList.push(parseInt(responseJson[props.id].s4));
         dataList.push(parseInt(responseJson[props.id].s5));
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


    BarGraph3=(props)=>{
      // const dataList= [];
      const dataList= [];
      
      fetch('http://192.168.8.100:3001/app', {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
         //console.log(responseJson);
         this.setState({
            
            data: responseJson
         })
        
         dataList.push(parseInt(responseJson[props.id].s1));
         dataList.push(parseInt(responseJson[props.id].s2));
         dataList.push(parseInt(responseJson[props.id].s3));
         dataList.push(parseInt(responseJson[props.id].s4));
         dataList.push(parseInt(responseJson[props.id].s5));
         this.setState({ 
            dl3: dataList
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
              data: this.state.dl3
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



    BarGraph=(props)=>{
      // const dataList= [];
      const dataList= [];
      
      fetch('http://192.168.8.100:3001/app', {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
         //console.log(responseJson);
         this.setState({
            
            data: responseJson
         })
        
         dataList.push(parseInt(responseJson[props.id].s1));
         dataList.push(parseInt(responseJson[props.id].s2));
         dataList.push(parseInt(responseJson[props.id].s3));
         dataList.push(parseInt(responseJson[props.id].s4));
         dataList.push(parseInt(responseJson[props.id].s5));
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
    
    
    BarGraph1=(props)=>{
      // const dataList= [];
      const dataList= [];
      
      fetch('http://192.168.8.100:3001/app', {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
         //console.log(responseJson);
         this.setState({
            
            data: responseJson
         })
        
         dataList.push(parseInt(responseJson[props.id].s1));
         dataList.push(parseInt(responseJson[props.id].s2));
         dataList.push(parseInt(responseJson[props.id].s3));
         dataList.push(parseInt(responseJson[props.id].s4));
         dataList.push(parseInt(responseJson[props.id].s5));
         this.setState({ 
            dl1: dataList
         })
      })
      .catch((error) => {
         console.error(error);
      });
      
      // this.state.data.map(item => (
         // console.log(this.state.data[0].appName);
      //)
         
         // );
         console.log(this.state.dl1);

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
              data: this.state.dl1
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


            <h2>App1</h2>
            <table  id="items" >
    <thead>
    <tr>
      <th>Downloads</th>
      <td>580</td>
    </tr>
    <tr>

       
      
      <th>Earnings</th>
      <td>$150</td>
    </tr>
    </thead>
    </table>
      <this.BarGraph id={0}/>
      <h2>App2</h2>
      <table  id="items" >
    <thead>
    <tr>
      <th>Downloads</th>
      <td>50</td>
    </tr>
    <tr>

       
      
      <th>Earnings</th>
      <td>$10</td>
    </tr>
    </thead>
    </table>
      <this.BarGraph1 id={1}/>
      <h2>App3</h2>
      <table  id="items" >
    <thead>
    <tr>
      <th>Downloads</th>
      <td>1000</td>
    </tr>
    <tr>

       
      
      <th>Earnings</th>
      <td>$250</td>
    </tr>
    </thead>
    </table>
      <this.BarGraph2 id={2}/>
    

      <h2>App3</h2>
      <table  id="items" >
    <thead>
    <tr>
      <th>Downloads</th>
      <td>26</td>
    </tr>
    <tr>

       
      
      <th>Earnings</th>
      <td>$20</td>
    </tr>
    </thead>
    </table>
      <this.BarGraph3 id={3}/>
    


     </div>

     
   
      );
   }
}

export default App;