import React, { useState } from "react";
import "./Application.css";
import Popup from "../../Popup/Popup";

const Application = ({ application }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`application ${application.categoryGroup}`}
        onClick={togglePopup}
      >
        <p className="application__company">{application.companyName}</p>
        <p className="application__title">{application.jobTitle}</p>
      </div>
      {isOpen && <Popup handleClose={togglePopup} application={application} />}
    </>
  );
};

export default Application;
