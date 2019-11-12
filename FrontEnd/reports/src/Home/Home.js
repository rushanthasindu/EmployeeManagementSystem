import React ,{Component}from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import EmpReport from "../EmpReport/EmpReport"
import LeaveReport from "../LeaveReport/LeaveReport"
import InventryReport from "../InventryReport/InventryReport"
import EmpReport2 from "../EmpReport/EmpReport2"
import LeaveReport2 from "../LeaveReport/LeaveReport2"
import InventryReport2 from "../InventryReport/InventryReport2"


class Home extends Component {
  render(){
  return (
    <Router>
      <div>
    
          <button >
            <Link to="/EmpReport">Employee Report</Link>
          </button>
          <button>
            <Link to="/LeaveReport">Leave Report 1</Link>
          </button>
          <button>
            <Link to="/InventryReport">Inventry Report </Link>
          </button>

          <button>
            <Link to="/EmpReport2">Project Report</Link>
          </button>
          <button>
            <Link to="/LeaveReport2">Leave Report 2</Link>
          </button>
          <button>
            <Link to="/InventryReport2">Inventry Report 2 </Link>
          </button>
          <div>
            <a href="http://192.168.8.100:3000/logout">Logout</a>
          </div>
          <div>
            <a href="http://192.168.8.100:3000/">Home</a>
          </div>
         
    

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
          <Route path="/InventryReport">
             <InventryReport />
          </Route>

          <Route exact path="/EmpReport2">
            <EmpReport2 />
          </Route>
          <Route path="/LeaveReport2">
           <LeaveReport2 />
          </Route>
          <Route path="/InventryReport2">
            <InventryReport2 />
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

