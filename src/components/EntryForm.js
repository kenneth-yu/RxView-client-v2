import React from 'react'

class Entry extends React.Component{
  state = {
    comments: "",
    date: ""
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
        <h2>New Entry</h2>
        <span>Comments: </span>
        <input type="textarea" name="comments" onChange={this.changeHandler} value={this.state.value}/>
        <input type="textarea" name="date" onChange={this.changeHandler} value={this.state.value}/>
        <input type="button" name="submit" onClick={this.clickHandler} value="Submit"/>
      </div>
    )
  }
}

export default Entry
