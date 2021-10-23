import React, { useEffect } from "react";
import { Row, Col, Card, CardText, CardSubtitle, Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getUserIssues } from "../../redux/actions/issuesActions";
import IssueTracker from "../../components/IssueTracker/IssueTracker";
import Loading from "../Loading";
import ErrorMessage from "../ErrorMessage";

import "../CurrentIssue/CurrentIssue.css";

function MyIssue() {
  const dispatch = useDispatch();
  const history = useHistory();

  const myIssues = useSelector((state) => state.myIssues);
  const { loading, issues, error } = myIssues;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(getUserIssues());
    if (!userInfo) {
      history.push("/");
    }
  }, [dispatch, history, userInfo]);

  return (
    <div className="issue-container">
      <IssueTracker title="My Issues">
        <Card className="current-issues">
          {error && <ErrorMessage color="danger">{error}</ErrorMessage>}
          {loading && <Loading />}
          {issues?.map((issue) => (
            <Card key={issue._id} className="mb-2">
              <Row className="pt-1 px-2">
                <Col>
                  <CardText>
                    Assigned to: <span>{issue.forDev}</span>
                  </CardText>
                </Col>
                <Col>
                  <Link to={`/issue/${issue._id}`}>
                    <Button
                      className="edit-button float-end"
                      color="warning"
                      size="sm"
                    >
                      Edit Issue
                    </Button>
                  </Link>
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
        </Card>
      </IssueTracker>
    </div>
  );
}

export default MyIssue;
