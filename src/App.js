import React, { Component } from 'react';
import Dashboard from './containers/Dashboard'
import { Route, Switch } from "react-router-dom";
// import './stylesheets/main.scss';
// import MyNavbar from './components/MyNavbar';
// import {Container} from 'react-bulma-components';

class App extends Component {

  render() {
    return (
    <div className="App">
      <Switch>
        <Route path='/' component={Dashboard}/>
      </Switch>
    </div>
    );
  }
}

export default App;
