import React, { Component } from 'react';
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
     </div>
    );
  }
}

export default App;
