import React, { Component } from "react";
import { Row, Col, Card, CardText, CardSubtitle } from 'reactstrap';
import axios from 'axios'

import './CurrentIssue.css';

const api = axios.create({
  baseURL: "http://localhost:5000/currentIssue",
  headers: {
    "Content-type": "application/json"
  }
})

class CurrentIssue extends Component {

  state = {
    issues: []
  }

  constructor() {
    super()
    api.get('/').then(res => {
      console.log(res.data)
      this.setState({ issues: res.data })
    })
  }

  render() {
    return (
      <div className="current-issues">
        {this.state.issues.map(issue =>
          <Card className="col-12" key={issue._id}>
            <Row className="pt-2">
              <Col className="col-sm-10">
                <CardText>Assigned to: <span >{issue.forDev}</span></CardText>
              </Col>
              <Col className="col-sm-2">Close Issue</Col>
            </Row>
            <Row className="pt-2">
              <CardText>Priority: <span >{issue.priority}</span></CardText>
            </Row>
            <Row className="pt-2">
              <CardSubtitle className="text-left">Description</CardSubtitle>
            </Row>
            <Row className="pt-2">
              <CardText className="description-text" >
                {issue.description}
              </CardText>
            </Row>
          </Card>
        )}
      </div>
    )
  }
}

export default CurrentIssue;
