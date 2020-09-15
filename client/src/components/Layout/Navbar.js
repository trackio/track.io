import React from "react";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <nav className="nav">
      <header className="nav__header">Tracker.io</header>
      <ul className="nav__list">
        <li className="nav__item">My Network</li>
        <li className="nav__item">
          <i className="fas fa-search"></i>Search
        </li>
        <li className="nav__item">Paul Park</li>
      </ul>
    </nav>
  );
};

export default Navbar;
