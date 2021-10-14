import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
//import { Link } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import Logo from "../../media/images/logo.png";
import { Link } from "react-router-dom";
import Loading from "../Header/Loading";
import ErrorMessage from "../Header/ErrorMessage";

function Login(history) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: { "Content-type": "application/json" },
      };
      setLoading(true);

      const { data } = await axios.post(
        "/users/login",
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
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <Row className="logo-button">
        <Col>
          <Link to="/">
            <img src={Logo} className="logo-sm" alt="logo" />
          </Link>
        </Col>
      </Row>
      {error && <ErrorMessage color="danger">{error}</ErrorMessage>}
      {loading && <Loading />}
      <Form className="login" onSubmit={submitHandler}>
        <FormGroup>
          <Label className="label">Email</Label>
          <Input
            className="input"
            name="email"
            type="email"
            placeholder="Enter email"
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
            placeholder="Enter password"
            id="password"
            value={password}
            autoComplete="off"
            onChange={(event) => setPassword(event.target.value)}
          />
        </FormGroup>

        <Button type="submit" color="info" className="mt-4">
          Login
        </Button>
        <Link to="/register">
          <Button type="submit" color="info" className="mt-4 float-end">
            Register
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default Login;
