import React, { useState } from "react";
import { Button, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

import "./AddIssue.css";

function AddIssue() {
  const [input, setInput] = useState({
    description: "",
    forDev: "",
    priority: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    //event.preventDefault();
    const newIssue = {
      description: input.description,
      forDev: input.forDev,
      priority: input.priority,
    };

    axios.post("http://127.0.0.1:5000/issues", newIssue);
  }

  return (
    <Form>
      <FormGroup>
        <Label for="description">Description</Label>
        <Input
          className="input"
          name="description"
          value={input.description}
          id="description"
          autoComplete="off"
          placeholder="Description of Issue..."
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="forDev">Assign To</Label>
        <Input
          className="input"
          name="forDev"
          value={input.forDev}
          type="select"
          id="forDev"
          onChange={handleChange}
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
          value={input.priority}
          id="priority"
          onChange={handleChange}
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
          <Button
            type="submit"
            color="info"
            className=" mt-3 mb-2"
            onClick={handleClick}
          >
            Add
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default AddIssue;
