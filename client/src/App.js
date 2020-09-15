import React from "react";
import Navbar from "./components/Layout/Navbar";
import ProfileTab from "./components/ProfileTab/ProfileTab";
import ApplicationList from "./components/Applications/ApplicationList/ApplicationList";
import "./App.css";

function App() {
  const applicationStages = ["applied", "in process", "offers"];
  return (
    <div>
      <Navbar />
      <main className="main-container">
        <ProfileTab />
        <div className="applications-container">
          {applicationStages.map((stage) => (
            <ApplicationList stage={stage} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
