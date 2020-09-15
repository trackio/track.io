import React from "react";
import "./Application.css";

const Application = (props) => {
  return (
    <div className="application">
      <p>{props.application.companyName}</p>
      <p>{props.application.jobTitle}</p>
    </div>
  );
};

export default Application;
