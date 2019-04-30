import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/elementary"
          className={window.location.pathname === "/elementary" ? "nav-link active" : "nav-link"}
        >
          Elementary
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/research"
          className={window.location.pathname === "/research" ? "nav-link active" : "nav-link"}
        >
          Research
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/user"
          className={window.location.pathname === "/user" ? "nav-link active" : "nav-link"}
        >
          User
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;
