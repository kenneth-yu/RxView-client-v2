import React, { Component } from 'react';
<<<<<<< HEAD
import Dashboard from './containers/Dashboard';
import {appConfig} from './utils/constants';
import {UserSession} from 'blockstack';


class App extends Component {
  state = {
    userSession: new UserSession({appConfig})
  }

    componentDidMount = async () => {
      const {userSession} = this.state
      if (!userSession.isUserSignedIn() && userSession.isSignInPending() ) {
        const userData = await userSession.handlePendingSignIn()
        window.location="/"
      }
    }

  render() {
    return (
      <div className="App">
      <Dashboard userSession={this.state.userSession}/>
=======
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
>>>>>>> 087f3d315015bc5e4c72eec21aa580c5ab257c7a
     </div>
    );
  }
}

export default App;
