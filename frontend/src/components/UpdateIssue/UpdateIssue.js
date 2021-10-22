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
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateIssue } from "../../redux/actions/issuesActions";
import Loading from "../Loading";
import ErrorMessage from "../ErrorMessage";

import "./UpdateIssue.css";
import IssueTracker from "../IssueTracker/IssueTracker";

function UpdateIssue({ match }) {
  const [description, setDescription] = useState("");
  const [forDev, setForDev] = useState("");
  const [priority, setPriority] = useState("");
  const [date, setDate] = useState("");

  const dispatch = useDispatch();

  const issueUpdate = useSelector((state) => state.issueUpdate);
  const { loading, error } = issueUpdate;

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`/issues/${match.params.id}`);

      setDescription(data.description);
      setForDev(data.forDev);
      setPriority(data.priority);
      setDate(data.updatedAt);
    };
    fetching();
  }, [match.params.id, date]);

  const resetHandler = () => {
    setDescription("");
    setForDev("");
    setPriority("");
  };

  const history = useHistory();

  const updateHandler = (event) => {
    event.preventDefault();
    dispatch(updateIssue(match.params.id, description, forDev, priority));
    if (!description || !forDev || !priority) return;

    resetHandler();
    history.goBack("/issues");
  };

  return (
    <div className="issue-container">
      <IssueTracker title="Update Issue"></IssueTracker>
      <Card>
        <Row className="pt-1 px-2">
          <Col>
            <Form onSubmit={updateHandler}>
              {error && <ErrorMessage color="danger">{error}</ErrorMessage>}
              <FormGroup check className="checkbox">
                <Label check>
                  <Input type="checkbox" className="p-2" />{" "}
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
                  {loading && <Loading />}
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
