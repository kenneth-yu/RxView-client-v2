import React, { Component } from 'react';
import Dashboard from './containers/Dashboard';
import DrugShow from './components/DrugShow';
import { Route, Switch, withRouter } from 'react-router-dom';

// import './stylesheets/main.scss';

// import MyNavbar from './components/MyNavbar';


// import {Container} from 'react-bulma-components';



class App extends Component {
  state = {

  }

  render() {
    const {userSession} = this.state
    return (
      <div className='App'>
       <Switch>
         <Route path='/meds' component={DrugShow} />
         <Route path='/' component={Dashboard} />
       </Switch>
     </div>
    );
  }
}

export default App;
