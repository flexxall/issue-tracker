import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Logo from "./logo.png";
import "./Register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const config = {
        headers: { "Content-Type": "application/json" },
      };
      setLoading(true);

      const { data } = await axios.post(
        "/api/users/login",
        {
          email,
          password,
        },
        config
      );
      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="login-container">
      <Row className="logo-button">
        <Col>
          <img src={Logo} className="logo-sm" alt="logo" />
        </Col>
      </Row>

      <Form className="login" onSubmit={submitHandler}>
        <FormGroup>
          <Label className="label">Email</Label>
          <Input
            className="input"
            name="email"
            type="email"
            placeholder="Email address"
            id="email"
            value={email}
            autoComplete="off"
            onChange={(event) => setEmail(event.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label className="label">Password</Label>
          <Input
            className="input"
            name="password"
            type="password"
            placeholder="Password"
            id="password"
            value={password}
            autoComplete="off"
            onChange={(event) => setPassword(event.target.value)}
          />
        </FormGroup>

        <Button type="submit" color="info" className="mt-4">
          Register
        </Button>
        <Link to="/">
          <Button type="submit" color="info" className="mt-4 float-end">
            Home
          </Button>
        </Link>
      </Form>
    </div>
  );
};

export default Register;
