import React, { Component } from "react";

import Dashboard from "./containers/Dashboard";
import DrugShow from "./components/DrugShow";
import { appConfig } from "./utils/constants";
import { UserSession } from "blockstack";
import { Route, Switch, withRouter } from "react-router-dom";
class App extends Component {
  state = {
    userSession: new UserSession({ appConfig })
  };

  componentDidMount = async () => {
    const { userSession } = this.state;
    if (!userSession.isUserSignedIn() && userSession.isSignInPending()) {
      const userData = await userSession.handlePendingSignIn();
      window.location = "/";
    }
  };

  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/meds" component={DrugShow} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </div>
    );
  }
}

export default App;
