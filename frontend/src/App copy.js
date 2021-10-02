import React, { useState } from "react";
import AddIssue from './components/AddIssue/AddIssue';
import CurrentIssue from './components/CurrentIssue/CurrentIssue';
import DevIssue from './components/DevIssue/DevIssue';
import { Nav, NavItem, NavLink, TabContent, TabPane,  Card, Row, Col} from 'reactstrap';


import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div className="App">
      <h1>Issue Tracker</h1>
      <div className="issue-container">
        <Nav tabs>
          <NavItem className="btn">
            <NavLink
              className={activeTab === '1' ? "active" : ""}
              onClick={() => { toggle('1'); }}
            >
              Current Issues
            </NavLink>
          </NavItem>
          <NavItem className="btn">
            <NavLink
              className={activeTab === '2' ? "active" : ""}
              onClick={() => { toggle('2'); }}
            >
              Add Issue
            </NavLink>
          </NavItem>
          <NavItem className="btn">
            <NavLink
              className={activeTab === '3' ? "active" : ""}
              onClick={() => { toggle('3'); }}
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

export default App;
//https://www.youtube.com/watch?v=3Q_QqpG-VvA