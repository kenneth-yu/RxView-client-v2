import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Dashboard from './containers/Dashboard';
import {appConfig} from './utils/constants';
import {UserSession} from 'blockstack';
import {connect} from 'react-redux';
import {loadUser} from './Redux/Actions';

class App extends Component {
  state = {
    userSession: new UserSession({appConfig})
  }

  componentDidMount = async () => {
    const {userSession} = this.state
    console.log("compdidmount, userSession:", userSession.isUserSignedIn());
    this.props.loadUser(userSession)
    // this.props.loadUser(userSession.loadUserData() )

    if (!userSession.isUserSignedIn() && userSession.isSignInPending() ) {
      const thing = await userSession.handlePendingSignIn()
      // console.log("userSession", userSession);
      window.location="/"
    }
  }

  render() {
    const {userSession} = this.state
    return (
    <div className="App">
      <Switch>
        <Route path='/' render={() => <Dashboard userSession={userSession}/> }/>
      </Switch>
    </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loadUser: (userSession) => dispatch(loadUser(userSession))
})

export default connect(null, mapDispatchToProps)(App);
