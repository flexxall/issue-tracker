import React, { useEffect, useState } from "react";
import { Row, Col, Card, CardText, CardSubtitle } from 'reactstrap';

import './CurrentIssue.css';

function CurrentIssue() {

  const [issues, setIssue] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:5000/currentIssue')
      .then((res) => res.json())
      .then((issue) => setIssue([...issue]))
  }, [])

  return (
    <div className="current-issues">
      {issues.map((issue) =>
        <Card className="col-12" key={issue._id}>
          <Row className="pt-2">
            <Col className="col-sm-10">
              <CardText>Assigned to: <span>{issue.forDev}</span></CardText>
            </Col>
            <Col className="col-sm-2">Close Issue</Col>
          </Row>
          <Row className="pt-2">
            <CardText>Priority: <span>{issue.priority}</span></CardText>
          </Row>
          <Row className="pt-2">
            <CardSubtitle className="text-left">Description</CardSubtitle>
          </Row>
          <Row className="pt-2">
            <CardText className="description-text">
              {issue.description}
            </CardText>
          </Row>
        </Card>
      )}
    </div>
  )
}

export default CurrentIssue;
