import React from "react";
import { appConfig } from "../utils/constants";
import { UserSession } from "blockstack";
import Login from "../components/Login";
import Logout from "../components/Logout";
import ViewProfile from "../components/ViewProfile";

class Dashboard extends React.Component {
  state = {
    search: ""
  };

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }; // I added a space

  clickHandler = event => {
    console.log(this.state.search);
  };

  render() {
    const { userSession } = this.props;
    return (
      <div>
        <input
          name="search"
          type="text"
          value={this.state.search}
          onChange={this.changeHandler}
        />
        <input
          name="searchBtn"
          type="button"
          value="Search"
          onClick={this.clickHandler}
        />
        {userSession.isUserSignedIn() ? (
          <Logout userSession={userSession} />
        ) : (
          <Login userSession={userSession} />
        )}
        {userSession.isUserSignedIn() ? <ViewProfile /> : null}
      </div>
    );
  }
}

export default Dashboard;
