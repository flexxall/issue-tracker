import React, { useState } from "react";
import { Button, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { createIssueAction } from "../../redux/actions/issuesActions";
import Loading from "../Loading";
import ErrorMessage from "../ErrorMessage";
import IssueTracker from "../IssueTracker/IssueTracker";
import { useNavigate } from "react-router-dom";

import "./AddIssue.css";

function AddIssue() {
  const [description, setDescription] = useState("");
  const [forDev, setForDev] = useState("");
  const [priority, setPriority] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate()

  const issueCreate = useSelector((state) => state.issueCreate);
  const { loading, error } = issueCreate;

  const resetHandler = () => {
    setDescription("");
    setForDev("");
    setPriority("");
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(createIssueAction(description, forDev, priority));
    if (!description || !forDev || !priority) return;

    resetHandler();
    navigate("/");
  };

  return (
    <div className="issue-container">
      <IssueTracker title="Add Issue"></IssueTracker>
      <Form onSubmit={submitHandler}>
        {error && <ErrorMessage color="danger">{error}</ErrorMessage>}
        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            type="textarea"
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
        <Row className="add-issue pt-4">
          <Col className="btn-row">
            {loading && <Loading />}
            <Button type="submit" color="info" className="complete-btn mt-3 mb-3">
              Add
            </Button>
            <Button
              type="cancel"
              color="warning"
              className="complete-btn mt-3 mb-3"
              onClick={() => navigate("/")}
            >
              Cancel
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default AddIssue;
