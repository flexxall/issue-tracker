import React, { useState } from "react"
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
//import axios from 'axios'

import './Login.css';

function Login() {

  const [input, setInput] = useState({
    userName: '',
    password: ''
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
    
    

    //axios.post('http://localhost:5000/createIssue', newIssue)
  }
  
  return (
    
    <Form className="login">
      <FormGroup>
        <Label className="label">Username</Label>
        <Input className="input" name="userName" placeholder="Username" id="username" value={input.userName} autoComplete="off" 
          onChange={handleChange} />
      </FormGroup>
      <FormGroup>
        <Label className="label">Password</Label>
        <Input className="input" name="password" placeholder="Password" id="password" value={input.password} autoComplete="off" 
          onChange={handleChange} />          
      </FormGroup>
      <Button type="submit" color="info" className="mt-4"
        onClick={handleClick}>Login</Button>
      <Button type="submit" color="info" className="mt-4"
        onClick={handleClick}>Signup</Button>
    </Form>
  )
}

export default Login
