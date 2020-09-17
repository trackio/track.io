import React, { useState, useEffect, useContext } from "react";
import Navbar from "./components/Layout/Navbar";
import ProfileTab from "./components/ProfileTab/ProfileTab";
import ApplicationList from "./components/Applications/ApplicationList/ApplicationList";
import "./App.css";
import { ProfileContext } from "./context/ProfileContext";

const App = () => {
  const [applicationStages, setApplicationStages] = useState([
    "applied",
    "in process",
    "offers",
  ]);

  const { fetchUserData } = useContext(ProfileContext);

  useEffect(() => {
    fetchUserData("https://jsonplaceholder.typicode.com/users");
  }, []);

  return (
    <div>
      <Navbar />
      <main className="main-container">
        <ProfileTab />
        <div className="applications-container">
          {applicationStages.map((stage, i) => (
            <ApplicationList stage={stage} key={`category_${i}`} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
