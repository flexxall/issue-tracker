import React from "react";
import { Row, Col, Card, CardText, CardSubtitle } from 'reactstrap';
import AddIssue from '../AddIssue/AddIssue.js'

import './CurrentIssue.css';

function CurrentIssue(props) {
  console.log("Test " + AddIssue.description)
  return (
    <div className="current-issues">
      <Card className="col-12">
        <Row className="pt-2">
          <Col className="col-sm-10">
            <CardText>Assigned To: <span>Username firstname lastname</span></CardText>
          </Col>
          <Col className="col-sm-2">Close Issue</Col>          
        </Row>
        <Row className="pt-2">
          <CardText>Priority: <span>High</span></CardText>
        </Row>
        <Row className="pt-2">
          <CardSubtitle className="text-left">Description</CardSubtitle>
        </Row>
        <Row className="pt-2">
          <CardText className="description-text">
            Short description of the project and the issues that is being
            reported. Disregard any spelling errors in here. Just more text
            to fill up a few lines of text so there is some body to the issues
            reported.
          </CardText>
        </Row>
      </Card>
      <Card className="col-12">
      <Row className="pt-2">
          {AddIssue.props}
        </Row>
      </Card>
    </div>
  );
}

export default CurrentIssue;
