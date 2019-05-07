import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import styles from "./style.css";


function Navbar() {
  return (
    <div>

    <ul class="nav">
      
      <li class="nav-item">
        <Link to="/" class="link">Home</Link>
      </li>

      <li class="nav-item">
        <Link to="/login" class="link">Log In</Link>
      </li>
      
      <li class="nav-item">
        <Link to="subjects" class="link">Subjects</Link>
      </li>
      
      <li class="nav-item">
        <Link to="/research" class="link">Research</Link>
      </li>
      
      <li class="nav-item">
        <Link to="/myproject" class="link">My Project</Link>
      </li>

      <li class="nav-item">
        <Link to="/dashboard" class="link"> dashboard</Link>
      </li>
    
    </ul>
    </div>
  );
}

export default Navbar;
