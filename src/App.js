import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Dashboard from './containers/Dashboard';
import {appConfig} from './utils/constants';
import {UserSession} from 'blockstack';
import {connect} from 'react-redux';
import {loadUserSession} from './Redux/Actions';

class App extends Component {
  state = {
    userSession: new UserSession({appConfig})
  }

  componentDidMount = async () => {
    const {userSession} = this.state
    console.log("XX", userSession);
    this.props.loadUserSession(userSession)
    if (!userSession.isUserSignedIn() && userSession.isSignInPending() ) {
      const userData = await userSession.handlePendingSignIn()
      console.log("userData", userData);
      window.location="/"
    }
  }

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

const mapDispatchToProps = dispatch => ({
  loadUserSession: (userSession) => dispatch(loadUserSession(userSession))
})

export default connect(null, mapDispatchToProps)(App);
