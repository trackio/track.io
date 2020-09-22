import React, { useContext } from "react";
import Application from "../Application/Application";
import "./ApplicationList.css";
import { ProfileContext } from "../../../context/ProfileContext";

const ApplicationList = (props) => {
  const { applications } = useContext(ProfileContext);

  return (
    <div className="applications__group">
      <div className="applications__group-header">
        <div className="category__title">{props.stage}</div>
        <button className="btn__add">
          <span>+</span>
        </button>
      </div>
      <div className="applications">
        {applications
          .filter((application) => {
            return application.categoryGroup === props.stage;
          })
          .map((application) => (
            <>
              <Application key={application.id} application={application} />
            </>
          ))}
      </div>
    </div>
  );
};

export default ApplicationList;
