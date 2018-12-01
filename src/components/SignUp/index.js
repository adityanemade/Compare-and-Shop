import React, {Component} from 'react';
import connect from 'react-redux/es/connect/connect';
import{
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Col,
  Checkbox,
  Button,
  HelpBlock,
  FieldGroup,
} from 'react-bootstrap';

// Custom Modules
import './login.css';
import constants from './constants';
import {bindActionCreators} from 'redux';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
        email:{
          value: '',
        },
        password:{
          value: '',
        }
    };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div className="main-login">
        <Form horizontal>
          <FormGroup controlId="email">
            <Col componentClass={ControlLabel} xs={4} md={4}>
              {constants[this.props.languageReducer.appLanguage].EMAIL}
            </Col>
            <Col md={3}>
              <FormControl type="email" placeholder="Email" />
            </Col>
          </FormGroup>

          <FormGroup controlId="password">
            <Col componentClass={ControlLabel} xs={4} md={4}>
              {constants[this.props.languageReducer.appLanguage].PASSWORD}
            </Col>
            <Col md={3}>
              <FormControl type="password" placeholder="Password" />
            </Col>
          </FormGroup>

          <FormGroup controlId="cpassword">
            <Col componentClass={ControlLabel} xs={4} md={4}>
              {constants[this.props.languageReducer.appLanguage].CPASSWORD}
            </Col>
            <Col md={3}>
              <FormControl type="password" placeholder="Password" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={4} sm={10}>
              <Button type="submit">{constants[this.props.languageReducer.appLanguage].SIGNUP}</Button>
            </Col>
          </FormGroup>
        </Form>;

      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
    },
    dispatch
  );

export default connect(state => state, mapDispatchToProps)(SignUp);
