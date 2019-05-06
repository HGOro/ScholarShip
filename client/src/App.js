import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Subject from "./pages/Guest/Subject/Subject";
import Research from "./pages/Research";
import MyProject from "./pages/MyProject";
import Dashboard from "./pages/User/Dashboard/Dashboard";
import Mathematics from "./pages/Guest/Subject/Mathematics"
import LogIn from './pages/Guest/Home/LogIn';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/subjects" component={Subject} />
        <Route exact path="/math" component={Mathematics} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/research" component={Research} />
        <Route exact path="/myproject" component={MyProject} />
        <Route path="/dashboard" component={Dashboard} />
      </div>
    </Router>
  );
}

export default App;
