import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "../Loading";
import ErrorMessage from "../ErrorMessage";

import Logo from "../../media/images/logo.png";
import "./Register.css";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passowrds Do Not Match");
    } else {
      setMessage(null);
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        setLoading(true);

        const { data } = await axios.post(
          "/users",
          { firstName, lastName, userName, email, password },
          config
        );
        setLoading(false);
        localStorage.setItem("userInfo", JSON.stringify(data));
      } catch (error) {
        setError(error.response.data.message);
        setLoading(false);
      }
    }
  };

  return (
    <div className="register-container">
      <Row className="logo-button">
        <Col>
          <Link to="/">
            <img src={Logo} className="logo-sm" alt="logo" />
          </Link>
        </Col>
      </Row>
      {message && <ErrorMessage color="danger">{message}</ErrorMessage>}
      {error && <ErrorMessage color="danger">{error}</ErrorMessage>}
      {loading && <Loading />}
      <Form className="Register" onSubmit={submitHandler}>
        <FormGroup className="col-6 float-start pe-2">
          <Label className="label">First name</Label>
          <Input
            className="input"
            name="firstName"
            type="name"
            placeholder="Enter First name"
            value={firstName}
            autoComplete="nope"
            onChange={(event) => setFirstName(event.target.value)}
          />
        </FormGroup>
        <FormGroup className="col-6 float-end ps-2">
          <Label className="label">Last name</Label>
          <Input
            className="input"
            name="lastName"
            type="name"
            placeholder="Enter Last name"
            value={lastName}
            autoComplete="nope"
            onChange={(event) => setLastName(event.target.value)}
          />
        </FormGroup>
        <FormGroup className="col-6 float-start pe-2">
          <Label className="label">User name</Label>
          <Input
            className="input"
            name="userName"
            type="name"
            placeholder="Enter a username"
            value={userName}
            autoComplete="nope"
            onChange={(event) => setUserName(event.target.value)}
          />
        </FormGroup>
        <FormGroup className="col-6 float-end ps-2">
          <Label className="label">Email</Label>
          <Input
            className="input"
            name="email"
            type="email"
            placeholder="Enter email"
            id="email"
            value={email}
            autoComplete="nope"
            onChange={(event) => setEmail(event.target.value)}
          />
        </FormGroup>
        <FormGroup className="col-6 float-start pe-2">
          <Label className="label">Password</Label>
          <Input
            className="input"
            name="password"
            type="password"
            placeholder="Enter password"
            id="password"
            value={password}
            autoComplete="nope"
            onChange={(event) => setPassword(event.target.value)}
          />
        </FormGroup>
        <FormGroup className="col-6 float-end ps-2">
          <Label className="label">Confirm Password</Label>
          <Input
            className="input"
            name="confirmPassword"
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            autoComplete="nope"
            onChange={(event) => setConfirmPassword(event.target.value)}
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
