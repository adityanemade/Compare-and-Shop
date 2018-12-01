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
  Label,
  HelpBlock,
  FieldGroup,
} from 'react-bootstrap';

// Custom Modules
import './login.css';
import constants from './constants';
import {bindActionCreators} from 'redux';
import storehouse from '../../storehouse';

class Login extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      email: '',
      password: ''
    };
  }

  getValidationState() {
    // const email = this.state.email;
    // // const emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    // if(email.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) return 'success';
    // if (email.length > 10) return 'success';
    // else if (email.length > 5) return 'warning';
    // else if (email.length > 0) return 'error';
    // return null;
    //
    // const password = this.state.password;
    // // const password = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    // if (password.length > 10) return 'success';
    // else if password.length > 5) return 'warning';
    // else if (password.length > 0) return 'error';
    // return null;

    console.log(this.state);
    //
    // switch (this.state) {
    //   case this.state.email:
    //     alert("email");
    //
    //     break;
    //   case this.state.password:
    //     alert("password");
    //     break;
    //   default:
    //     break;
    // }

  }

  handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value});
    this.props.setEmail(name);
    // this.state.email
    // this.setState({...this.state, [e.target.name]: e.target.value});

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
              <FormControl type="email" placeholder="Email" name="email" value={this.state.email} onChange={() => {
                this.handleChange();
                this.getValidationState();
              }}/>
            </Col>
          </FormGroup>

          <FormGroup controlId="password" validationState={this.getValidationState()}>
            <Col componentClass={ControlLabel} xs={4} md={4}>
              {constants[this.props.languageReducer.appLanguage].PASSWORD}
            </Col>
            <Col md={3}>
              <FormControl type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange}/>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={4} sm={10}>
              <Checkbox>Remember me</Checkbox>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={4} sm={10}>
              <Button type="submit">{constants[this.props.languageReducer.appLanguage].SIGNIN}</Button>
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
      setEmail: email => storehouse.ACTIONS.LOGIN.setEmail(email)
    },
    dispatch
  );

export default connect(state => state, mapDispatchToProps)(Login);
