// built-in modules
import React, {Component} from 'react';
import connect from 'react-redux/es/connect/connect';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import{
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  FormGroup,
  FormControl,
  Button,
  PageHeader,
} from 'react-bootstrap';

// custom modules
import Login from '../Login';
import Home from '../Home';
import SignUp from '../SignUp';


class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <Navbar fixedBottom>
          <Navbar.Header>
            <Navbar.Brand>
            <a href="/">Maa ki chu</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="/">
            Home
            </NavItem>
            <NavItem eventKey={2} href="/login">
            Login
            </NavItem>
            <NavItem eventKey={2} href="/signUp">
            Sign Up
            </NavItem>
            <NavItem eventKey={3} href="#">
            AboutUs
            </NavItem>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default connect(state => state)(Footer);
