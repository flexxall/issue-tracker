import React, { useState } from "react"
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import axios from 'axios'

import './AddIssue.css';

function AddIssue() {

  const [input, setInput] = useState({
    description: '',
    forDev: '',
    priority: ''
  })

  function handleChange(event) {
    const { name, value } = event.target

    setInput(prevInput => {
      return {
        ...prevInput,
        [name]: value
      }
    })
  }

  function handleClick(event) {
    //event.preventDefault()
    const newIssue = {
      description: input.description,
      forDev: input.forDev,
      priority: input.priority
    }

    axios.post('http://127.0.0.1:5000/api/issues', newIssue)
  }

  return (
    <Form className="add-issue">
      <FormGroup>
        <Label for="description">Description</Label>
        <Input className="input" name="description" value={input.description} id="description" autoComplete="off" placeholder="Description of Issue..."
          onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label for="forDev">Assign To</Label>
        <Input className="input" name="forDev" value={input.forDev} type="select" id="forDev"
          onChange={handleChange}>
          <option disabled={true} value="">--Select a Developer--</option>
          <option>Steve</option>
          <option>Terri</option>
          <option>Tiffany</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="priority">Priority Level</Label>
        <Input type="select" name="priority" value={input.priority} id="priority"
          onChange={handleChange}>
          <option disabled={true} value="">--Select a Level--</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
          <option>Emergency</option>
        </Input>
      </FormGroup>
      <Button type="submit" color="primary" className="mt-4"
        onClick={handleClick}>Add</Button>
    </Form>
  );
}

export default AddIssue;
