import React, { useEffect } from "react";
import { Row, Col, Card, CardText, CardSubtitle, Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { devIssues } from "../../redux/actions/issuesActions";
import Loading from "../Loading";
import ErrorMessage from "../ErrorMessage";

import "./DevIssue.css";

function DevIssue() {
  const dispatch = useDispatch();

  const currentIssues = useSelector((state) => state.currentIssues);
  const { loading, issues, error } = currentIssues;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const history = useHistory();

  useEffect(() => {
    dispatch(devIssues());
    if (!userInfo) {
      history.push("/");
    }
  }, [dispatch, history, userInfo]);

  return (
    <div className="current-issues">
      {error && <ErrorMessage color="danger">{error}</ErrorMessage>}
      {loading && <Loading />}
      {issues?.reverse().map((issue) => (
        <Card key={issue._id}>
          <Row className="pt-1 px-2">
            <Col>
              <CardText>
                Assigned To: <span>{issue.forDev}</span>
              </CardText>
            </Col>
            <Col>
              <Button
                href={`/issues/${issue._id}`}
                className="edit-button float-end"
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
            <footer className="footer">
              Created on {issue.createdAt.substring(0, 10)}
            </footer>
          </Row>
        </Card>
      ))}
    </div>
  );
}

export default DevIssue;
