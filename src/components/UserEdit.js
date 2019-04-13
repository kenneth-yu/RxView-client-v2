import React from 'react'
import {connect} from 'react-redux'

class UserEdit extends React.Component{
  state = {
    name:"",
    age:"",
    ethnicity:"",
    country:"",
    gender:""
  }

  changeHandler = (event) =>{
    console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  clickHandler = (event) => {
    console.log(this.state.search)
  }

  render(){
    return(
      <div>
        <h2>User Edit</h2>
        <span>Name: </span><input type="text" onChange={this.changeHandler} name="name"/><br/>
        <span>Age: </span><input type="text" onChange={this.changeHandler} name="age"/><br/>
        <span>Ethnicity: </span><input type="text" onChange={this.changeHandler} name="ethnicity"/><br/>
        <span>Country: </span><input type="text" onChange={this.changeHandler} name="country"/><br/>
        <span>Gender: </span><input type="text" onChange={this.changeHandler} name="gender"/><br/>
        <input type="button" name="submit" onClick={this.clickHandler} value="Submit"/>
      </div>
    )
  }
}

export default UserEdit
