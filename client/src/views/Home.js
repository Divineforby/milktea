
import React from 'react';
import logo from '../assets/logo.svg';
import carousel1 from '../assets/mt1.jpg';
import carousel2 from '../assets/mt2.jpg';
import carousel3 from '../assets/mt3.jpg';

import './css/App.css';

import { Navbar, Nav, NavItem, Carousel } from 'react-bootstrap';

const Home = () => (
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
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav className="Nav" pullRight>
            <NavItem className="NavItem1" eventKey={1} href="/login" >
              Login
            </NavItem>
            <NavItem className="NavItem2" eventKey={2} href="/register">
              Registration
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <main>
        <h1>Welcome, to the most useless app on the internet!</h1>
      </main>

      <Carousel className="Carousel">
        <Carousel.Item>
          <img className="Carousel1" src={carousel1} height={1000} width={1200}/>
          <Carousel.Caption>
            <h2>What?</h2>
            <p>A tab to track the Milk Teas you owe each other</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="Carousel2" src={carousel2} height={1000} width={1050}/>
          <Carousel.Caption>
            <h2>Why?</h2>
            <p>Honestly no idea</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="Carousel3" src={carousel3} height={1000} width={1200}/>
          <Carousel.Caption>
            <h2>How?</h2>
            <p>Stupidity and too much free time</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <p className="App-intro">Tired of practicality? Well, You're in luck!</p>
  </div>
);

export default Home;
