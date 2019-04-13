import React, { Component } from 'react';
import Dashboard from './containers/Dashboard'
// import './stylesheets/main.scss';

// import MyNavbar from './components/MyNavbar';
import Login from './components/Login';
import Logout from './components/Logout';

// import {Container} from 'react-bulma-components';

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

      if (!userData.username) {
        throw new Error('This app requires a username.')
      } else {
        window.location = "/"
      }
    }
  }
  // { !userSession.isUserSignedIn() ? <Logout userSession={userSession}/>
  // : <Login userSession={userSession} /> }

  render() {
    const {userSession} = this.state
    return (
      <div className="App">
      <Dashboard/>
     </div>
    );
  }
}

export default App;
