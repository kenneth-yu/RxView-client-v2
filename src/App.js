import React, { Component } from 'react';
import Dashboard from './containers/Dashboard'
// import './stylesheets/main.scss';
// import MyNavbar from './components/MyNavbar';
// import {Container} from 'react-bulma-components';

class App extends Component {

  render() {
    return (
      <div className="App">
      <Dashboard/>
     </div>
    );
  }
}

export default App;
