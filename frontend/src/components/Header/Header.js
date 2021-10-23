import React, { useState } from "react";
import {
  Navbar,
  Nav,
  Button,
  ButtonGroup,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  NavbarToggler,
  Collapse,
  FormGroup,
  Input,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/userActions";

import "./Header.css";

const Header = ({ setSearch }) => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  const authButton = () => {
    if (!userInfo) {
      return (
        <ButtonGroup>
          <Link to="/login">
            <Button className="mx-1" outline color="success">
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button className="mx-1" outline color="info">
              Register
            </Button>
          </Link>
        </ButtonGroup>
      );
    } else {
      return (
        <Button className="mx-1" outline color="danger" onClick={logoutHandler}>
          Logout
        </Button>
      );
    }
  };

  const myProfile = () => {
    if (!userInfo) {
      return;
    } else {
      return (
        <Nav>
          <UncontrolledDropdown>
            <DropdownToggle className="navlink" nav caret>
              {userInfo?.userName}
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <Link className="dropdown-item" to="/profile">
                  My Profile
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link className="dropdown-item" to="/issues">
                  Current Issues
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link className="dropdown-item" to="/addIssue">
                  Add Issue
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link className="dropdown-item" to="/myIssues">
                  My Issues
                </Link>
              </DropdownItem>
              <DropdownItem>
                <Link className="dropdown-item" to="/completedIssues">
                  Completed Issues
                </Link>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={logoutHandler}>Logout</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      );
    }
  };

  return (
    <Navbar className="navbar mt-2" dark expand="lg">
      <Container>
        <Nav>
          <Link className="brand" to="/">
            Issue Tracker
          </Link>
        </Nav>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="justify-content-end">
          <FormGroup className="pt-3 pb-3 m-auto">
            <Input
              type="search"
              placeholder="Search"
              className="mr-sm-2"
              onChange={(event) => setSearch(event.target.value)}
            />
          </FormGroup>
          <Nav>
            <Nav>{myProfile()}</Nav>
            <Nav>{authButton()}</Nav>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
