import React from "react";
import './SubHeading.css';

function SubHeading(props) {
  return (
    <div className="subheading">
      <h2>{props.name}</h2>
    </div>
  );
}

export default SubHeading;