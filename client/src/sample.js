import React, { Component } from 'react';

import logo from './logo.svg';

import './App.css';

import { Navbar, Nav, NavItem, Jumbotron } from 'react-bootstrap';

class App extends Component {
  state = {
    response: ''
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/login');
    const body = await response.json();


    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">The Tab For All Your Boba Needs</h1>
        </header>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href ="/" className="Nav-Title">BobaBills</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <NavItem eventKey={1} href="/login">
              Login
            </NavItem>
            <NavItem eventKey={2} href="/register">
              Registration
            </NavItem>
          </Nav>
        </Navbar>
        <Jumbotron>
          <h1> Sup B </h1>
        </Jumbotron>
        <p className="App-intro">Tired of practicality? Well, You're in luck!</p>
      </div>
    );
  }
}

export default App;
