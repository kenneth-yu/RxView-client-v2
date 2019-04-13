import React from 'react'
import {connect} from 'react-redux'

class UserEdit extends React.Component{
  render(){
    return(
      <div>
        <h2>User Edit</h2>
        <span>Name: </span><input type="text" name="name"/><br/>
        <span>Age: </span><input type="text" name="age"/><br/>
        <span>Ethnicity: </span><input type="text" name="ethnicity"/><br/>
        <span>Country: </span><input type="text" name="country"/><br/>
        <span>Gender: </span><input type="text" name="gender"/><br/>
        <input type="button" name="submit" value="Submit"/>
      </div>
    )
  }
}

export default UserEdit
