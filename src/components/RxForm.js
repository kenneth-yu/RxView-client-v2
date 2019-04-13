import React from 'react'
import {connect} from 'react-redux'

class RxForm extends React.Component{
  render(){
    return(
      <div>
        <h2>New Prescription</h2>
        <input type="text" name="dosage"/>
        <input type="button" name="submit" value="Submit"/>
      </div>
    )
  }
}

// const mapStateToProps = () =>{
//   allDrugs: allDrugs
// }

export default RxForm
