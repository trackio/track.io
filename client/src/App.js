import React from "react";
import Navbar from "./components/Layout/Navbar";
import ProfileTab from "./components/ProfileTab/ProfileTab";
import CategoryList from "./components/Categories/CategoryList/CategoryList";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <ProfileTab />
        <CategoryList />
        <CategoryList />
        <CategoryList />
      </main>
    </div>
  );
}

export default App;
