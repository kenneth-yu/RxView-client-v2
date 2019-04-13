import React from 'react'
import {appConfig} from '../utils/constants';
import {UserSession, isUserSignedIn } from 'blockstack';
import Login from '../components/Login';
import Logout from '../components/Logout';
import ViewProfile from '../components/ViewProfile';
<<<<<<< HEAD
import RxForm from '../components/RxForm';
import EntryForm from '../components/EntryForm';
import UserEdit from '../components/UserEdit'
import { Route, Switch } from "react-router-dom";
=======
import {connect} from 'react-redux';
>>>>>>> 55bf41ed314db98e21a4faf9434ef05ab2fdf0dd

class Dashboard extends React.Component{
  state = {
    search: ""
  }

  changeHandler = (event) =>{
    this.setState({
      [event.target.name]: event.target.value
    })
  } 

  clickHandler = (event) => {
    console.log(this.state.search)
  }

  render(){
    const {userSession} = this.props
    return(
      <Switch>
        <Route path='/newprescription' component={RxForm}/>
        <Route path='/newentry' component={EntryForm}/>
        <Route path='/useredit' component={UserEdit}/>
      <div>
        <input name="search" type="text" value={this.state.search} onChange={this.changeHandler}/>
        <input name="searchBtn" type="button" value="Search" onClick ={this.clickHandler}/>
        { isUserSignedIn() ? <Logout userSession={userSession}/>
        : <Login userSession={userSession} /> }
        { isUserSignedIn() ? <ViewProfile/> : null}
      </div>
      </Switch>
    )
  }
}

const mapStateToProps = state => ({
  userSession: state.userSession
})

export default connect(mapStateToProps)(Dashboard)
