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
  Glyphicon,
  Clearfix,
} from 'react-bootstrap';

// custom modules
import Login from '../Login';
import Home from '../Home';
import SignUp from '../SignUp';


class Header extends Component {
  constructor(props) {
    super(props);
  }

 onSelectAlert(eventKey) {
    alert(`Alert from menu item.\neventKey: ${eventKey}`);
  }

  render() {
    return (
      <div className="header">
        <Navbar>
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
            <Navbar.Form pullLeft>
              <FormGroup>
                <FormControl type="text" placeholder="Search" />
              </FormGroup>{' '}
              <Button type="submit">Search</Button>
            </Navbar.Form>
            <Button bsSize="large">
              <Glyphicon glyph="shopping-cart" />Cart
            </Button>
            <Button bsSize="large">
              <Glyphicon glyph="menu-hamburger" />
            </Button>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default connect(state => state)(Header);
