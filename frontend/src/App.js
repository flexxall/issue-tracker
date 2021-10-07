import React, { useState } from "react"
import AddIssue from './components/AddIssue/AddIssue'
import CurrentIssue from './components/CurrentIssue/CurrentIssue'
import Login from './components/Login/Login'
import DevIssue from './components/DevIssue/DevIssue'
import { Modal, ModalHeader, CardBody, Button, Nav, NavItem, NavLink, TabContent, TabPane, Card, Row, Col } from 'reactstrap'

import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('1')
  const [modal, setModal] = useState(false)

  const toggleTab = tab => {
    if (activeTab !== tab) setActiveTab(tab)
  }

  const toggleModal = () => setModal(!modal)

  /* handleLogin(event) {
      this.toggleModal();
      this.props.loginUser({username: this.username.value, password: this.password.value});
      event.preventDefault();

  }

  handleLogout() {
      this.props.logoutUser();
  } */

  return (
    <div className="App">
      <h1>Issue Tracker</h1>
      <div className="issue-container">
        <Col className="col-sm-4 offset-9">
          <Button color="info" onClick={toggleModal}>Login</Button>
          <Modal isOpen={modal} contentClassName="loginModal">
            <ModalHeader toggle={toggleModal} charCode="Y"/>
              <Card className="modalCard">
              <CardBody>
                <Login />
              </CardBody>
            </Card>
          </Modal>
        </Col>
        <Nav tabs>
          <NavItem className="btn">
            <NavLink
              className={activeTab === '1' ? "active" : ""}
              onClick={() => { toggleTab('1'); }}
            >
              Current Issues
            </NavLink>
          </NavItem>
          <NavItem className="btn">
            <NavLink
              className={activeTab === '2' ? "active" : ""}
              onClick={() => { toggleTab('2'); }}
            >
              Add Issue
            </NavLink>
          </NavItem>
          <NavItem className="btn">
            <NavLink
              className={activeTab === '3' ? "active" : ""}
              onClick={() => { toggleTab('3'); }}
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
    </div>
  );
}

export default App