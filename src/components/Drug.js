import React, { Component } from "react";

class Drug extends Component {
  render() {
    let side_effects = this.props.drug.side_effects.map(side => (
      <li>{side.description}</li>
    ));
    return (
      <div className="showDrugContainer">
        <h1 className="drug_name">{this.props.drug.generic_name}</h1>
        <h4>{this.props.drug.brand_name}</h4>
        <p>Type: {this.props.drug.drug_type}</p>
        <h2>Side Effects</h2>
        <ul>{side_effects}</ul>
      </div>
    );
  }
}

export default Drug;
