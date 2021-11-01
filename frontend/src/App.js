import React, { useState } from "react";
import { Container } from "reactstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import Footer from "./components/Footer/Footer";
import CurrentIssue from "./components/CurrentIssue/CurrentIssue";
import AddIssue from "./components/AddIssue/AddIssue";
import UpdateIssue from "./components/UpdateIssue/UpdateIssue.js";
import MyIssues from "./components/MyIssues/MyIssues";
import CompletedIssues from "./components/CompletedIssues/CompletedIssues";
import Login from "./components/Login/Login.js";
import Register from "./components/Register/Register.js";

import "./App.css";
import Profile from "./components/Profile/Profile";

function App() {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <Container>
      <Router>
        <Header setSearch={setSearch} />
        <div>
          <Route path="/" component={LandingPage} exact />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={Profile} />
          <Route
            path="/issues"
            component={() => <CurrentIssue search={search} />}
          />
          <Route path="/addIssue" component={AddIssue} />
          <Route path="/issue/:id" component={UpdateIssue} />
          <Route path="/myIssues" component={MyIssues} />
          <Route path="/completedIssues" component={CompletedIssues} />
        </div>
        <Footer />
      </Router>
    </Container>
  );
}

export default App;
