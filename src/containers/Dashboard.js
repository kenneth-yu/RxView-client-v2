import React from 'react'
import {appConfig} from '../utils/constants';
import {UserSession, isUserSignedIn } from 'blockstack';
import Login from '../components/Login';
import Logout from '../components/Logout';
import ViewProfile from '../components/ViewProfile';
import RxForm from '../components/RxForm';
import EntryForm from '../components/EntryForm';
import UserEdit from '../components/UserEdit'
import { Route, Switch } from "react-router-dom";
import {connect} from 'react-redux';
import ProfilePage from '../components/ProfilePage';

class Dashboard extends React.Component {
  state = {
    search: "",
    userSession: new UserSession({appConfig})
  }

  componentDidMount = async () => {
    const {userSession} = this.state
    if (!userSession.isUserSignedIn() && userSession.isSignInPending() ) {
      const userData = await userSession.handlePendingSignIn()
      window.location="/"

      // if (!userData.username) {
      //   throw new Error('This app requires a username.')
      // } else {
      //   window.location = "/"
      // }
    }
  }

  changeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  clickHandler = event => {
    console.log(this.state.search);
  };

  render(){
    const {userSession} = this.state
    return(
      <Switch>
        <Route path='/myprofile' render={() => <ProfilePage userSession={userSession}/>}/>
        <Route path='/newprescription' component={RxForm}/>
        <Route path='/newentry' component={EntryForm}/>

        <Route path='/useredit' render={() => <UserEdit userSession={userSession}/> }/>
      <div className="rx_form">
      <h1 className="logo"><span>Rx</span>View</h1>
        <input name="search" className="form-control" type="text" value={this.state.search} onChange={this.changeHandler} placeholder="Search..."/>

        <input name="searchBtn" type="button" value="Search" onClick ={this.clickHandler}/>
        { userSession.isUserSignedIn() ? <Logout userSession={userSession}/>
        : <Login userSession={userSession} /> }
        { userSession.isUserSignedIn() ? <ViewProfile/> : null}
      </div>
      </Switch>
    )
  }
}

const mapStateToProps = state => ({
  // userSession: state.userSession
})

export default connect(mapStateToProps)(Dashboard);
