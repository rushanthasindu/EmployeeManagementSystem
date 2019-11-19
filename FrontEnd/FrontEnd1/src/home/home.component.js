import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';  
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import AppBar from '../_components/appbar';
import Nav from '../_components/nav'; 
import { blackColor, whiteColor } from '../styles/material-dashboard-react';
import logo from './giphy admin.gif'; // with import
import {Line,Bar} from 'react-chartjs-2';
import './home.css';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1, 
  },
  appFrame: {
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
  'appBar-left': {
    marginLeft: drawerWidth,
  },
  'appBar-right': {
    marginRight: drawerWidth,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: whiteColor,
    padding: theme.spacing.unit * 3,
  },
});


class Home extends Component {
  state={
    data:[],
    halfDay:"",
    shortleave:"",
    allocated:"",
    medical:"",
    datalist:''

  }


  componentDidMount() {
    const userID = localStorage.getItem("userId") ;
    const dl=[];
    fetch('http://192.168.8.100:3001/leave/empLeave?empId='+userID, {
      method: 'GET'
   })
   .then((response) => response.json())
   .then((responseJson) => {
      console.log(responseJson["shortLeave"]);
      this.setState({
         data: responseJson
      })
       dl.push(parseInt(responseJson["shortLeave"]));
       dl.push(parseInt(responseJson["halfDay"]));
       dl.push(parseInt(responseJson["medical"]));
       dl.push(parseInt(responseJson["allocated"]));

       this.setState({ 
        dataList: dl
     })
     console.log(this.state);

//       this.setState({
//         halfDay: responseJson["shortLeave"]
//      })
    
//      this.setState({
//       shortleave: responseJson["shortLeave"]
//    })

//    this.setState({
//     allocated: responseJson["shortLeave"]
//  })
//  this.setState({
//   medical: responseJson["shortLeave"]
// })
     
      console.log(this.state.data['shortLeave']);
   })
   .catch((error) => {
       this.setState({
        data: '0'
     })
     this.setState({auth:true })
     //console.log(this.state.data);
   });
        
  } 


  BarGraph1=(props)=>{
     const dl= [];
     dl.push(7-parseInt(this.state.data.shortLeave));
     dl.push(7-parseInt(this.state.data.halfDay));
     dl.push(7-parseInt(this.state.data.medical));
     dl.push(14-parseInt(this.state.data.allocated));
    
    // this.state.data.map(item => (
       // console.log(this.state.data[0].appName);
    //)
       
       // );
       console.log(dl);
       

    const  data = {
        labels: ['ShortLeave', 'Halfday', 'Medical', 'Annual Leaves'],
        datasets: [
          {
            label: '',
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
            data: dl
          }
        ]
      };
      return (
       <div>
       
    <div>
    
    
    


    <Bar
      id={0}
      data={data}
      height={350}
      options={{
        maintainAspectRatio: false
      }}
   /> 
  </div>
   </div>
    );

  }

   render() {
   
  
     const { classes } = this.props;
     
    const userRole = localStorage.getItem("userRole") || "ADMIN";

    if (userRole=="ADMIN")
    return (

      <div className={classes.root}>
          <div className={classes.appFrame}>
          <AppBar/>
          <Nav />
          <main className={classes.content}>
              <div className={classes.toolbar} />
              
              <img src={logo}  height="600px"/>
          </main>
       </div>
      </div>
    
    );
 
    else
      return (

        <div className={classes.root}>
            <div className={classes.appFrame}>
            <AppBar/>
            <Nav />
            <main className={classes.content}>
                <div className={classes.toolbar} />
               
                <table  id="items" >
   
                      <thead>

                      <tr>
                                <th>Annual Leaves</th>
                                <td>{this.state.data['allocated']}</td>
                              </tr>
                              <tr>
                              <th>Cassual Leaves</th>
                              <td>{this.state.data['shortLeave']}</td>
                              </tr>
                            <tr>
                              <th>Sick Leaves</th>
                              <td>{this.state.data['halfDay']}</td>
                              </tr>
                            <tr>
                              <th>Mdicals</th>
                              <td>{this.state.data['medical']}</td>
                            </tr>
                            
                     
                        </thead>
                 </table>
                 <this.BarGraph1 id={0}/>
            </main>
         </div>
        </div>
      
      );
   }
}

  
Home.propTypes = {
      classes: PropTypes.object.isRequired,
};
    
  
function mapStateToProps(state) {
    return state;
}


const connectedHomePage = withRouter(connect(mapStateToProps, null, null, {
    pure: false
})(withStyles(styles)(Home)));

export { connectedHomePage as Home };
  