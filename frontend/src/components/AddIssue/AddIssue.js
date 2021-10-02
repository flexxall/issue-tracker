import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import './AddIssue.css';

function AddIssue() {
  const {desc, setDes} = useState(true);
  const {dev, setDev} = useState(true);
  const {priority, setPriority} = useState(true);

  return (    
      <Form className="add-issue">
        <FormGroup>
          <Label for="description">Description</Label>
            <Input className="input" id="description" placeholder="Description of Issue..."
              onChange={() => console.log(document.getElementById("description").value)}
            />
        </FormGroup>
        <FormGroup>
          <Label for="forDev">Assign To</Label>
            <Input className="input" type="select" name="forDev" defaultValue="" id="forDev"
              onChange={() => console.log(document.getElementById("forDev").value)}>
              <option disabled={true} value="">--Select a Developer--</option>
              <option>Steve</option>
              <option>Terri</option>
              <option>Tiffany</option>
            </Input>
        </FormGroup>
        <FormGroup>
          <Label for="priority">Priority Level</Label>
            <Input type="select" name="priority" defaultValue="" id="priority"
              onChange={() => console.log(document.getElementById("priority").value)}>
              <option disabled={true} value="">--Select a Level--</option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
              <option>Emergency</option>
            </Input>
        </FormGroup>        
        <Button type="submit" color="primary" className="mt-4" >Add</Button>
      </Form>    
  );
}

export default AddIssue;
