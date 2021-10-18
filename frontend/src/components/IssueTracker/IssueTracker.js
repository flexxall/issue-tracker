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
import { Link, useHistory } from "react-router-dom";
import AddIssue from "../AddIssue/AddIssue";
import CurrentIssue from "../CurrentIssue/CurrentIssue";
import DevIssue from "../DevIssue/DevIssue";
import Logo from "../../media/images/logo.png";
import { useDispatch } from "react-redux";
import { logout } from "../../actions/userActions";

import "./IssueTracker.css";

function IssueTracker() {
  const history = useHistory();
  const dispatch = useDispatch();

  //const userLogin = useSelector((state) => state.userLogin);
  //const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    history.push("/");
  };

  const [activeTab, setActiveTab] = useState("1");

  const toggleTab = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="issue-container">
      <Row className="issue-banner">
        <Col>
          <Link to="/">
            <img src={Logo} className="logo-sm float-start" alt="logo" />
          </Link>
        </Col>
        <Col>
          <Link to="/">
            <Button
              onClick={logoutHandler}
              className="logout float-end"
              color="info"
            >
              Logout
            </Button>
          </Link>
        </Col>
      </Row>
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
    </div>
  );
}

export default IssueTracker;
