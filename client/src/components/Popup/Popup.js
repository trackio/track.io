import React, { useState, useContext } from "react";
import "./Popup.css";
import { ProfileContext } from "../../context/ProfileContext";

const Popup = ({ application, handleClose }) => {
  const [appData, setAppData] = useState(application);

  const { applications, setApplications } = useContext(ProfileContext);

  const submitData = (e) => {
    e.preventDefault();
    let copyApp = [...applications];
    copyApp.map((app) => {
      if (app.id === appData.id) {
        app.companyName = appData.companyName;
        app.jobTitle = appData.jobTitle;
      }
      return app;
    });
    handleClose();
    setApplications(copyApp);
  };

  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={handleClose}>
          x
        </span>
        <form className="application__update-form" onSubmit={submitData}>
          <input
            value={appData.companyName}
            className="input"
            onChange={(e) =>
              setAppData({ ...appData, companyName: e.target.value })
            }
          />
          <input
            value={appData.jobTitle}
            className="input"
            onChange={(e) =>
              setAppData({ ...appData, jobTitle: e.target.value })
            }
          />
          <button
            type="submit"
            className={`btn__update box${appData.categoryGroup}`}
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
