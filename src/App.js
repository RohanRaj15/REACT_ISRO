import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Home from './components/home';
import Gallery from './components/gallery';
import Ticket from './components/ticket';

class App extends Component {
  render() {
    return (
      <div>
          <Router>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Navbar.Brand href="/" style={{fontSize:"30px"}}>ISRO</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="/gallery"><Navbar.Brand>Gallery</Navbar.Brand></Nav.Link>
                  <Nav.Link href="/ticket"><Navbar.Brand>Visit Ticket</Navbar.Brand></Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/gallery" component={Gallery}/>
                <Route exact path="/ticket" component={Ticket}/>
            </Switch>
          </Router>
      </div>
    )
  }
}

export default App;