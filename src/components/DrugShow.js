import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getTheMeds } from "../Redux/Actions";

class DrugShow extends Component {
  componentDidMount() {
    this.props.getTheMeds();
  }

  render() {
    console.log(this.props.drugs);
    return (
      <div className="showDrugContainer">
        <h1 className="drug_name">Drug Name</h1>
        <img src="" alt="the drug" />
        <h2>Side Effects</h2>
        <li>this is a side effect</li>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    drugs: state.drugs
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTheMeds: () => dispatch(getTheMeds())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrugShow);
