import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardSubtitle, CardText, Col, Row } from "reactstrap";
import IssueTracker from "../IssueTracker/IssueTracker";
import Loading from "../Loading";
import ErrorMessage from "../ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { listIssuesAction } from "../../redux/actions/issuesActions";

const CompletedIssues = ({ history }) => {
  const dispatch = useDispatch();

  const currentIssues = useSelector((state) => state.currentIssues);
  const { loading, issues, error } = currentIssues;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    dispatch(listIssuesAction());
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
          {issues &&
            issues
              ?.filter((filteredIssue) => filteredIssue.isCompleted === true)
              .map((issue) => (
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
                    <CardSubtitle className="text-left">
                      Description
                    </CardSubtitle>
                  </Row>
                  <Row className="pt-2">
                    <CardText className="description-text">
                      {issue.description}
                    </CardText>
                  </Row>
                  <Row className="pt-2">
                    <footer className="footer">
                      Created on {issue.createdAt.substring(0, 10)} / Updated on{" "}
                      {issue.updatedAt.substring(0, 10)}
                    </footer>
                  </Row>
                </Card>
              ))}
        </Card>
      </IssueTracker>
    </div>
  );
};

export default CompletedIssues;
