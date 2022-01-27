import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './app/Home'
import Contact from './app/Contact'
import Products from './app/Products';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const arr = useSelector((state) => state.addTask)
  return (

    <div className="App">
      <Router>
        <Navbar bg="dark" expand="lg" className="p-3">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link style={{ color: "white", textDecoration: "none", marginRight: "18px" }} to="/">Home</Link>
                <Link style={{ color: "white", textDecoration: "none", marginRight: "18px" }} to="/product">Prodcuts</Link>
                <Link style={{ color: "white", textDecoration: "none", marginRight: "18px" }} to="/">Cart <span className="bg-primary text-white px-2 py-1"> { arr.proData.length} </span></Link>
                <Link style={{ color: "white", textDecoration: "none", marginRight: "18px" }} to="/con">Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Switch>
          <Route path="/" exact component={Home} ></Route>
          <Route path="/product" exact component={Products} ></Route>
          <Route path="/con" component={Contact}  ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
