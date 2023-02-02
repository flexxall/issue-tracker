import React, { useEffect } from "react";
import IssueTracker from "../../components/IssueTracker/IssueTracker";
import { Row, Col, Card, CardText, CardSubtitle, Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { listIssuesAction } from "../../redux/actions/issuesActions";
import Loading from "../Loading";
import ErrorMessage from "../ErrorMessage";

import "./CurrentIssue.css";

function CurrentIssue({ search }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentIssues = useSelector((state) => state.currentIssues);
  const { loading, issues, error } = currentIssues;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const issueCreate = useSelector((state) => state.issueCreate);
  const { success: successCreate } = issueCreate;

  const issueUpdate = useSelector((state) => state.issueUpdate);
  const { success: successUpdate } = issueUpdate;

  useEffect(() => {
    dispatch(listIssuesAction());
    if (!userInfo) {
      navigate("/");
    }
  }, [dispatch, navigate, successCreate, userInfo, successUpdate]);

  const editButton = () => {
    if (userInfo && userInfo.isAdmin) {
      return (
        <Button
          className="edit-button float-end mx-1"
          color="danger"
          size="sm"
        >
          Edit Issue
        </Button>
      )
    } else {
      return
    }
  }

  return (
    <div className="issue-container">
      <IssueTracker title="Current Issues">
        <Link to="/addIssue">
          <Button className="mx-2 mb-3" color="warning" size="sm">
            Add New Issue
          </Button>
        </Link>
        <Card className="current-issues">
          {error && <ErrorMessage color="danger">{error}</ErrorMessage>}
          {loading && <Loading />}
          {issues &&
            issues
              .filter((filteredIssue) =>
                filteredIssue.description
                  .toLowerCase()
                  .includes(search.toLowerCase())
              )
              .reverse().map((issue) => (
                <Card key={issue._id} className="mb-2">
                  <Row className="pt-1 px-2">
                    <Col>
                      <CardText>
                        Assigned to: <span>{issue.forDev}</span>
                      </CardText>
                    </Col>

                    <Col className="">

                      <Link to={`/editIssue/${issue._id}`}>
                        {editButton()}
                      </Link>
                      <Link to={`/updateIssue/${issue._id}`}>
                        <Button
                          className="edit-button float-end mx-1"
                          color="warning"
                          size="sm"
                        >
                          Update Issue
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
                      Description:
                    </CardSubtitle>
                  </Row>
                  <Row className="pt-2">
                    <CardText className="description-text">
                      {issue.description}
                    </CardText>
                  </Row>
                  <Row className="pt-2">
                    <Col>
                      <footer className="footer fw-bold fst-italic">
                        {issue.isCompleted === true ?
                          <span style={{ color: "#16a34a" }}>Completed</span> :
                          <span style={{ color: "#d97706" }}>Open</span>}
                      </footer>
                    </Col>
                    <Col>
                      <footer className="footer">
                        Created on: {issue.createdAt.substring(0, 10)} / Updated on: {issue.updatedAt.substring(0, 10)}
                      </footer>
                    </Col>
                  </Row>
                </Card>
              ))}
        </Card>
      </IssueTracker>
    </div>
  );
}

export default CurrentIssue;
