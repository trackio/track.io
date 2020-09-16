import React, { useState } from "react";
import "./Application.css";
import Popup from "../../Popup/Popup";

const Application = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`application ${props.application.categoryGroup}`}
        onClick={togglePopup}
      >
        <p className="application__company">{props.application.companyName}</p>
        <p className="application__title">{props.application.jobTitle}</p>
      </div>
      {isOpen && (
        <Popup
          handleClose={togglePopup}
          categoryGroup={props.application.categoryGroup}
        />
      )}
    </>
  );
};

export default Application;
