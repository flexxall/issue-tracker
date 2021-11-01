import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  Button,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteIssueAction,
  updateIssueAction,
} from "../../redux/actions/issuesActions";
import Loading from "../Loading";
import ErrorMessage from "../ErrorMessage";

import "./UpdateIssue.css";
import IssueTracker from "../IssueTracker/IssueTracker";

function UpdateIssue({ match, history }) {
  const [description, setDescription] = useState("");
  const [forDev, setForDev] = useState("");
  const [priority, setPriority] = useState("");
  const [isCompleted, setIsCompleted] = useState("");
  const [date, setDate] = useState("");

  const dispatch = useDispatch();

  const issueUpdate = useSelector((state) => state.issueUpdate);
  const { loading, error, success } = issueUpdate;

  const issueDelete = useSelector((state) => state.issueDelete);
  const { loading: loadingDelete, error: errorDelete } = issueDelete;

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteIssueAction(id));
    }
    history.push("/issues");
  };

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`/issues/${match.params.id}`);

      setDescription(data.description);
      setForDev(data.forDev);
      setPriority(data.priority);
      setIsCompleted(data.isCompleted);
      setDate(data.updatedAt);
    };
    fetching();
  }, [match.params.id]);

  const resetHandler = () => {
    setDescription("");
    setForDev("");
    setPriority("");
  };

  const updateHandler = (event) => {
    event.preventDefault();
    dispatch(
      updateIssueAction(
        match.params.id,
        description,
        forDev,
        priority,
        isCompleted
      )
    );
    if (!description || !forDev || !priority) return;
    resetHandler();
  };

  return (
    <div className="issue-container">
      <IssueTracker title="Update Issue"></IssueTracker>
      <Card>
        <Row className="pt-1 px-2">
          <Col>
            <Form onSubmit={updateHandler}>
              {loading && <Loading />}
              {success && (
                <ErrorMessage color="success">
                  Updated Successfully
                </ErrorMessage>
              )}
              {error && <ErrorMessage color="danger">{error}</ErrorMessage>}

              {errorDelete && (
                <ErrorMessage color="danger">{errorDelete}</ErrorMessage>
              )}
              {loadingDelete && <Loading />}
              <FormGroup check className="checkbox">
                <Label check>
                  <Input
                    type="checkbox"
                    className="p-2"
                    checked={isCompleted}
                    onChange={(e) => setIsCompleted(e.target.checked)}
                  />
                  <h2>Issue Complete</h2>
                </Label>
              </FormGroup>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input
                  className="input"
                  name="description"
                  value={description}
                  id="description"
                  autoComplete="off"
                  placeholder="Description of Issue..."
                  onChange={(e) => setDescription(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="forDev">Assign To</Label>
                <Input
                  className="input"
                  name="forDev"
                  value={forDev}
                  type="select"
                  id="forDev"
                  onChange={(e) => setForDev(e.target.value)}
                >
                  <option disabled={true} value="">
                    --Select a Developer--
                  </option>
                  <option>Steve</option>
                  <option>Terri</option>
                  <option>Tiffany</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="priority">Priority Level</Label>
                <Input
                  type="select"
                  name="priority"
                  value={priority}
                  id="priority"
                  onChange={(e) => setPriority(e.target.value)}
                >
                  <option disabled={true} value="">
                    --Select a Level--
                  </option>
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                  <option>Emergency</option>
                </Input>
              </FormGroup>
              <Row className="pt-2">
                <footer className="footer">
                  Updated on {date.substring(0, 10)}
                </footer>
              </Row>
              <Row className="complete-update">
                <Col className="btn-row">
                  <Button
                    type="submit"
                    color="info"
                    className="complete-btn mt-3 mb-3"
                  >
                    Update Issue
                  </Button>
                  <Button
                    type="submit"
                    color="danger"
                    className="complete-btn mt-3 mb-3"
                    onClick={() => deleteHandler(match.params.id)}
                  >
                    Delete Issue
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default UpdateIssue;
