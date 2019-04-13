import React, { Component } from "react";
import Dashboard from "./containers/Dashboard";
// import './stylesheets/main.scss';
// import MyNavbar from './components/MyNavbar';
// import {Container} from 'react-bulma-components';
import { Router, Switch, withRouter } from "react-router-dom";
import DrugShow from "./components/DrugShow";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Router exact path="/meds" component={Dashboard} />
          <Router exact path="/" component={Dashboard} />
        </Switch>
      </div>
    );
  }
}

export default App;
