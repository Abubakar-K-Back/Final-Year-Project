import React from 'react'
import SignUp from "./SignUp";
import Login from './Login'
import Navigations from './Navigations'
import Main from './Main'
import BarChart from './BarChart'
import { Route, Switch, Redirect,BrowserRouter as Router, Link } from 'react-router-dom';
import Dashboard from './Dashboard'
import Broker from './Broker'
import BrokerList from './BrokerList'
import HBL from './Companies/Hbl'
import Meezan from './Companies/Meezan'
import Attock from './Companies/Attock'
import Honda from './Companies/Honda'
import Fatima from './Companies/Fatima'
import Dcl from './Companies/DCL'
import Kasb from './Companies/KASB'
import Del from './Companies/DEL'
import Kapco from './Companies/KAPCO'
import Jsbl from './Companies/JSBL';

function App() {
  return (
    <>
    <Router>
      <Switch>
          <Route exact path="/">
            <Main/>
          </Route>

          <Route exact path="/Login">
            <Login/>
          </Route>

          <Route exact path="/Broker">
            <BrokerList/>
          </Route>


          <Route exact path="/SignUp">
            <SignUp/>
          </Route>

          <Route exact path="/Dashboard">
            <Dashboard/>
          </Route>


          <Route exact path="/HBL">
            <HBL/>
          </Route>

          <Route exact path="/Fatima">
            <Fatima/>
          </Route>
          
          <Route exact path="/Attock">
            <Attock/>
          </Route>
          
          <Route exact path="/Meezan">
            <Meezan/>
          </Route>
          
          <Route exact path="/DEL">
            <Del/>
          </Route>
          
          <Route exact path="/Kapco">
            <Kapco/>
          </Route>

          
          <Route exact path="/dcl">
            <Dcl/>
          </Route>


          <Route exact path="/Honda">
            <Honda/>
          </Route>

          
          <Route exact path="/Jsbl">
            <Jsbl/>
          </Route>

          <Route exact path="/kasb">
            <Kasb/>
          </Route>
      </Switch>

    </Router>
    </>
  );
}

export default App;
