import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavLink,
  Button,
  ButtonGroup,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/userActions";

import "./Header.css";

const Header = () => {
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

  return (
    <Navbar className="navbar mt-2" dark expand="lg">
      <Container>
        <NavbarBrand href="/">
          <Link className="brand" to="/">
            Issue Tracker
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="justify-content-end">
          <NavLink>
            <Link className="navlink" to="/issues">
              Current Issues
            </Link>
          </NavLink>
          <Nav className="user-dropdown ">
            <UncontrolledDropdown>
              <DropdownToggle nav caret>
                {`${userInfo && userInfo.userName}`}
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/profile">My Profile</DropdownItem>
                <DropdownItem href="/issues">Current Issues</DropdownItem>
                <DropdownItem href="/addIssue">Add Issue</DropdownItem>

                <DropdownItem href="/devIssues">My Issues</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={logoutHandler}>Logout</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <Nav>{authButton()}</Nav>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
