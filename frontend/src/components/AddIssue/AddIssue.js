import React, { useState } from "react";
import { Button, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createIssue } from "../../actions/issuesActions";
import Loading from "../Loading";
import ErrorMessage from "../ErrorMessage";

import "./AddIssue.css";

function AddIssue() {
  const [description, setDescription] = useState("");
  const [forDev, setForDev] = useState("");
  const [priority, setPriority] = useState("");

  const dispatch = useDispatch();

  const issueCreate = useSelector((state) => state.issueCreate);
  const { loading, error, issue } = issueCreate;

  console.log(issue);

  const resetHandler = () => {
    setDescription("");
    setForDev("");
    setPriority("");
  };

  const history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(createIssue(description, forDev, priority));
    if (!description || !forDev || !priority) return;

    resetHandler();
    history.goBack("/issues");
  };

  return (
    <Form onSubmit={submitHandler}>
      {error && <ErrorMessage color="danger">{error}</ErrorMessage>}
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
      <Row className="add-issue">
        <Col className="text-center">
          {loading && <Loading />}
          <Button type="submit" color="info" className=" mt-3 mb-2">
            Add
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default AddIssue;
