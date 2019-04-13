import React, { Component } from 'react';
import Dashboard from './containers/Dashboard'
// import './stylesheets/main.scss';

// import MyNavbar from './components/MyNavbar';


// import {Container} from 'react-bulma-components';



class App extends Component {
  state = {

  }

  // componentDidMount = async () => {
  //   const {userSession} = this.state
  //   if (!userSession.isUserSignedIn() && userSession.isSignInPending() ) {
  //     const userData = await userSession.handlePendingSignIn()
  //     window.location="/"
  //
  //     // if (!userData.username) {
  //     //   throw new Error('This app requires a username.')
  //     // } else {
  //     //   window.location = "/"
  //     // }
  //   }
  // }

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
