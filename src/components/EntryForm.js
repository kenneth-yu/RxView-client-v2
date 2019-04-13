import React from 'react'

class Entry extends React.Component{
  state = {
    comments: ""
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
      <div className="rx_form">
        <h2>New Entry</h2>
        <div class="form-group">
          <input type="textarea" name="comments" className="form-control" onChange={this.changeHandler} value={this.state.value} placeholder="Comments..."/>
          <input type="button" name="submit" className="btn btn-info" onClick={this.clickHandler} value="Submit" placeholder="Submit"/>
        </div>
      </div>
    )
  }
}


export default Entry
