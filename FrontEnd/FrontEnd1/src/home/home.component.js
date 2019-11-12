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
    medical:""

  }


  componentDidMount() {
    const userID = localStorage.getItem("userId") ;

    fetch('http://192.168.8.100:3001/leave/empLeave?empId='+userID, {
      method: 'GET'
   })
   .then((response) => response.json())
   .then((responseJson) => {
      console.log(responseJson["shortLeave"]);
      this.setState({
         data: responseJson
      })
      //console.log();
      this.setState({
        halfDay: responseJson["shortLeave"]
     })
     this.setState({
      shortleave: responseJson["shortLeave"]
   })
   this.setState({
    allocated: responseJson["shortLeave"]
 })
 this.setState({
  medical: responseJson["shortLeave"]
})
     
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
                <Typography>{'Home'}</Typography>
                <table  id="items" >
   
                      <thead>

                      <tr>
                                <th>Allocated Leaves</th>
                                <td>{this.state.data['allocated']}</td>
                              </tr>
                              <tr>
                              <th>Short Leaves</th>
                              <td>{this.state.data['shortLeave']}</td>
                              </tr>
                            <tr>
                              <th>Halfdays</th>
                              <td>{this.state.data['halfDay']}</td>
                              </tr>
                            <tr>
                              <th>medicals</th>
                              <td>{this.state.data['medical']}</td>
                            </tr>
                            
                     
                        </thead>
                 </table>
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
  