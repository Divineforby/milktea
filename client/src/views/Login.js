
import React, { Component } from 'react';
import logo from '../assets/logo.svg';

import { Form, FormGroup, FormControl, ControlLabel, Col, Button } from 'react-bootstrap';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom'


class Login extends Component {
  constructor() {
    super();
    this.state = {username:'', password:''};
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Accepts username and pass input and store in state
  handleUsername(e) {
    this.setState({username: e.target.value, password: this.state.password});
  }

  handlePassword(e) {
    this.setState({username: this.state.username, password: e.target.value});
  }

  handleSubmit(e) {
    console.log(this.state.username + " " + this.state.password);
  }

  render() {
    return (

      <div className="Login" style={{textAlign:"center"}}>

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">The Tab For All Your Boba Needs</h1>
        </header>

        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/" className="Nav-Title">BobaBills</Link>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav className="Nav" pullRight>
              <NavItem className="NavItem1" eventKey={1}>
                <Link style={{color:"Black"}} to="/login">Login</Link>
              </NavItem>
              <NavItem className="NavItem2" eventKey={2}>
                <Link style={{color:"Black"}} to="/register">Registration</Link>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div className="Login-box" style={{margin:"auto", width:"50%", padding:"10px", marginTop:"200px"}}>
          <Form horizontal>
            <FormGroup controlID="User">
              <Col componentClass={ControlLabel} sm={4}>
                Username
              </Col>
              <Col sm={6}>
                <FormControl type="username" placeholder="Username" onChange={this.handleUsername} />
              </Col>
            </FormGroup>

            <FormGroup controlID="Pass">
              <Col componentClass={ControlLabel} sm={4}>
                Password
              </Col>
              <Col sm={6}>
                <FormControl type="password" placeholder="Password" onChange={this.handlePassword} />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col componentClass={ControlLabel} smOffset={4} sm={1}>
                <Button onClick={this.handleSubmit}>Submit</Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}

export default Login;
