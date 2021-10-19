import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header.js";
import WelcomePage from "./components/WelcomePage/WelcomePage.js";
import IssueTracker from "./components/IssueTracker/IssueTracker.js";
import AddIssue from "./components/AddIssue/AddIssue";
//import CurrentIssue from "./components/CurrentIssue/CurrentIssue";
import Login from "./components/Login/Login.js";
import Register from "./components/Register/Register.js";
//import DevIssue from "./components/DevIssue/DevIssue";

import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Route path="/" component={WelcomePage} exact />
        <Route path="/login" component={() => <Login />} />
        <Route path="/register" component={() => <Register />} />
        <Route path="/issues" component={() => <IssueTracker />} />
        <Route path="/addIssue" component={() => <AddIssue />} />
      </div>
    </Router>
  );
}

export default App;
