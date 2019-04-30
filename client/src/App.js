import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Elementary from "./pages/Elementary";
import Research from "./pages/Research";
import User from "./pages/User";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/elementary" component={Elementary} />
        <Route exact path="/research" component={Research} />
        <Route path="/user" component={User} />
      </div>
    </Router>
  );
}

export default App;
