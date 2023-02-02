import React, { useState } from "react";
import { Container } from "reactstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import Footer from "./components/Footer/Footer";
import CurrentIssue from "./components/CurrentIssue/CurrentIssue";
import AddIssue from "./components/AddIssue/AddIssue";
import UpdateIssue from "./components/UpdateIssue/UpdateIssue";
import EditIssue from "./components/EditIssue/EditIssue";
import MyIssues from "./components/MyIssues/MyIssues";
import CompletedIssues from "./components/CompletedIssues/CompletedIssues";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

import "./App.css";
import Profile from "./components/Profile/Profile";

function App() {
  const [search, setSearch] = useState("");
  return (
    <Container>
      <BrowserRouter>
        <Header setSearch={setSearch} />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/issues"
            element={<CurrentIssue search={search} />}
          />
          <Route path="/addIssue" element={<AddIssue />} />
          <Route path="/updateIssue/:id" element={<UpdateIssue />} />
          <Route path="/editIssue/:id" element={<EditIssue />} />
          <Route path="/myIssues" element={<MyIssues />} />
          <Route path="/completedIssues" element={<CompletedIssues />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Container>
  );
}

export default App;
