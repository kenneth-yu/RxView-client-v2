import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getTheMeds } from "../Redux/Actions";
import Drug from "./Drug";

class DrugShow extends Component {
  componentDidMount() {
    this.props.getTheMeds();
  }

  render() {
    const theDrugs = this.props.drugs.map(drug => {
      return <Drug key={drug.id} drug={drug} />;
    });
    console.log(this.props.drugs);
    return <div>{theDrugs}</div>;
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
