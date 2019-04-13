import React from 'react'
import {connect} from 'react-redux'

class RxForm extends React.Component{
  state = {
    dosage: ""
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
        <h2>New Prescription</h2>
        <div class="form-group">
        <input type="text" name="dosage" className="form-control" onChange={this.changeHandler} value={this.state.dosage} placeholder="Dosage..."/>
        </div>
        <input type="button" clickHandler={this.clickHandler} name="submit" value="Submit"/>
      </div>
    )
  }
}

// const mapStateToProps = () =>{
//   allDrugs: allDrugs
// }

export default (RxForm)
