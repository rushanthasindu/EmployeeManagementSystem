import React ,{Component}from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import EmpReport from "../EmpReport/EmpReport"
import LeaveReport from "../LeaveReport/LeaveReport"

import EmpReport2 from "../EmpReport/EmpReport2"// Project Report
import LeaveReport2 from "../LeaveReport/LeaveReport2"
import AppReport2 from "../AppReport/AppReport2"


class Home extends Component {
  render(){
  return (
    <Router>
      <div>
          <button>
            <a href="http://192.168.8.100:3000/">Home</a>
          </button>
          <button >
            <Link to="/EmpReport">Employee Report</Link>
          </button>
          <button>
            <Link to="/LeaveReport">Applied Leaves Report</Link>
          </button>
     <button>
            <Link to="/LeaveReport2">Employee Leave Report</Link>
          </button>
          <button>
            <Link to="/EmpReport2">Project Report</Link>
          </button>
          
          <button>
            <Link to="/AppReport2">App Report </Link>
          </button>
          <button>
            <a href="http://192.168.8.100:3000/logout">Logout</a>
          </button>
          
         
    

        <hr />
        
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/EmpReport">
            <EmpReport />
          </Route>
          <Route path="/LeaveReport">
           <LeaveReport />
          </Route>
          

          <Route exact path="/EmpReport2">
            <EmpReport2 />
          </Route>
          <Route path="/LeaveReport2">
           <LeaveReport2 />
          </Route>
          <Route path="/AppReport2">
            <AppReport2 />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
}
export default Home
// You can think of these components as "pages"
// in your app.

