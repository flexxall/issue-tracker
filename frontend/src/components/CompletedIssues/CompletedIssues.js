import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Card, CardSubtitle, CardText, Col, Row } from "reactstrap";
import IssueTracker from "../IssueTracker/IssueTracker";
import Loading from "../Loading";
import ErrorMessage from "../ErrorMessage";
import { useDispatch, useSelector } from "react-redux";
import { listIssues } from "../../redux/actions/issuesActions";
//import "./CompletedIssues";
const CompletedIssues = () => {
  const dispatch = useDispatch();

  const currentIssues = useSelector((state) => state.currentIssues);
  const { loading, issues, error } = currentIssues;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const issueCreate = useSelector((state) => state.issueCreate);
  const { success: successCreate } = issueCreate;

  const history = useHistory();

  useEffect(() => {
    dispatch(listIssues());
    if (!userInfo) {
      history.push("/");
    }
  }, [dispatch, successCreate, history, userInfo]);

  return (
    <div className="issue-container">
      <IssueTracker title="Completed Issues"></IssueTracker>
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
    </div>
  );
};

export default CompletedIssues;
