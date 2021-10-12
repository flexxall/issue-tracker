import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Button,
} from "reactstrap";
import AddIssue from "../AddIssue/AddIssue";
import CurrentIssue from "../CurrentIssue/CurrentIssue";
import DevIssue from "../DevIssue/DevIssue";
import Logo from "./logo.png";

import "../../App.css";

function IssueTracker() {
  const [activeTab, setActiveTab] = useState("1");
  //const [modal, setModal] = useState(false);

  const toggleTab = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="App">
      <img src={Logo} className="logo-sm" alt="logo" />
      <div className="issue-container">
        <Nav tabs>
          <NavItem className="btn">
            <NavLink
              className={activeTab === "1" ? "active" : ""}
              onClick={() => {
                toggleTab("1");
              }}
            >
              Current Issues
            </NavLink>
          </NavItem>
          <NavItem className="btn">
            <NavLink
              className={activeTab === "2" ? "active" : ""}
              onClick={() => {
                toggleTab("2");
              }}
            >
              Add Issue
            </NavLink>
          </NavItem>
          <NavItem className="btn">
            <NavLink
              className={activeTab === "3" ? "active" : ""}
              onClick={() => {
                toggleTab("3");
              }}
            >
              My Issues
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <Card body>
                  <CurrentIssue />
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <Card body>
                  <AddIssue />
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
                <Card body>
                  <DevIssue />
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
        <Col>
          <Button className="mt-4" href="/" color="info" size="lg">
            Logout
          </Button>
        </Col>
      </div>
    </div>
  );
}

export default IssueTracker;
