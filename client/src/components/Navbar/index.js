import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import styles from "./style.css";


function Navbar() {
  return (
    <div>

    <ul class="nav">
      
      <li class="nav-item">
        <a href="/" class="link">Home</a>
      </li>

      <li class="nav-item">
        <a href="/login" class="link">Log In</a>
      </li>
      
      <li class="nav-item">
        <a href="/subjects" class="link">Subjects</a>
      </li>
      
      <li class="nav-item">
        <a href="/research" class="link">Research</a>
      </li>
      
      <li class="nav-item">
        <a href="/myproject" class="link">My Project</a>
      </li>

      <li class="nav-item">
        <a href="/dashboard" class="link"> dashboard</a>
      </li>
    
    </ul>
    </div>
  );
}

export default Navbar;
