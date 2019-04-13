import React, { Component } from "react";
import { withRouter } from "react-router-dom";

const DrugShow = props => {
  return (
    <div className="showDrugContainer">
      <h1 className="drug_name">Drug Name</h1>
      <img src="" alt="the drug"/>
      <h2>Side Effects</h2>
      <li>this is a side effect</li>
    </div>
  );
};
export default withRouter(DrugShow);
