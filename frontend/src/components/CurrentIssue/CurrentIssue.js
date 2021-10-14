import axios from "axios";
import React, { useEffect, useState } from "react";
import { Row, Col, Card, CardText, CardSubtitle, Button } from "reactstrap";

import "./CurrentIssue.css";

function CurrentIssue() {
  const [issues, setIssue] = useState([]);

  const fetchIssues = async () => {
    const { data } = await axios.get("/issues");
    setIssue(data);
  };

  useEffect(() => {
    fetchIssues();
  }, []);

  return (
    <div className="current-issues">
      {issues.map((issue) => (
        <Card key={issue._id}>
          <Row className="pt-1 px-2">
            <Col className="">
              <CardText>
                Assigned to: <span>{issue.forDev}</span>
              </CardText>
            </Col>
            <Col className="">
              <Button
                href={`/issues/${issue._id}`}
                className="float-end"
                color="warning"
                size="sm"
              >
                Edit Issue
              </Button>
            </Col>
          </Row>
          <Row className="pt-1 pb-2 px-2">
            <CardText>
              Priority: <span>{issue.priority}</span>
            </CardText>
          </Row>
          <Row className="pt-1 px-2">
            <CardSubtitle className="text-left">Description</CardSubtitle>
          </Row>
          <Row className="pt-2">
            <CardText className="description-text">
              {issue.description}
            </CardText>
          </Row>
          <Row className="pt-2">
            <footer className="footer">Created on {issue.createdAt}</footer>
          </Row>
        </Card>
      ))}
    </div>
  );
}

export default CurrentIssue;
