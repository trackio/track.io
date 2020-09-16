import React, { useState } from "react";
import Navbar from "./components/Layout/Navbar";
import ProfileTab from "./components/ProfileTab/ProfileTab";
import ApplicationList from "./components/Applications/ApplicationList/ApplicationList";
import "./App.css";

const App = () => {
  const [ applicationStages, setApplicationStages ] = useState(["applied", "in process", "offers"]);
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
}

export default App;
