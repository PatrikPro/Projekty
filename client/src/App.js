import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import TopDestinations from './components/TopDestinations';
import PlanTrip from './components/PlanTrip';
import Wishlist from './components/Wishlist';
import MyTrips from './components/MyTrips';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">TripTrove</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/top-100">Top 100</Nav.Link>
                <Nav.Link as={Link} to="/plan-trip">Plan Trip</Nav.Link>
                <Nav.Link as={Link} to="/wishlist">Wishlist</Nav.Link>
                <Nav.Link as={Link} to="/my-trips">My Trips</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
                <Button variant="outline-success" type="submit">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/top-100" element={<TopDestinations />} />
          <Route path="/plan-trip" element={<PlanTrip />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/my-trips" element={<MyTrips />} />
          <Route path="/" element={<TopDestinations />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
