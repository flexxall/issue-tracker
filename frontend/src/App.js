import React from "react";
import { Container } from "reactstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import Footer from "./components/Footer/Footer";
//import IssueTracker from "./components/IssueTracker/IssueTracker.js";
import AddIssue from "./components/AddIssue/AddIssue";
import CurrentIssue from "./components/CurrentIssue/CurrentIssue";
import Login from "./components/Login/Login.js";
import Register from "./components/Register/Register.js";
//import DevIssue from "./components/DevIssue/DevIssue";

import "./App.css";
import UpdateIssue from "./components/UpdateIssue/UpdateIssue.js";

function App() {
  return (
    <Container>
      <Router>
        <Header />

        <div>
          <Route path="/" component={LandingPage} exact />
          <Route path="/login" component={() => <Login />} />
          <Route path="/register" component={() => <Register />} />
          <Route path="/issues" component={() => <CurrentIssue />} />
          <Route path="/addIssue" component={() => <AddIssue />} />
          <Route path="/issue/:id" component={UpdateIssue} />
        </div>

        <Footer />
      </Router>
    </Container>
  );
}

export default App;
