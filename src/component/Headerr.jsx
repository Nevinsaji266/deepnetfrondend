import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

function Headerr() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" style={{ paddingLeft: '30px', paddingRight: '30px' }}>
        <Container fluid>
          <Navbar.Brand href="#">Deepnsoft</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" style={{ fontSize: '1.2rem', marginLeft: '20px' }}>Home</Nav.Link>
              <Nav.Link as={Link} to="/menu" style={{ fontSize: '1.2rem', marginLeft: '20px' }}>Menu</Nav.Link>
              <Nav.Link style={{ fontSize: '1.2rem', marginLeft: '20px' }}>Reservation</Nav.Link>
              <Nav.Link style={{ fontSize: '1.2rem', marginLeft: '20px' }}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Headerr;
