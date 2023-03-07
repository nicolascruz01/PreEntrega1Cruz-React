import React from 'react';
import CarWidget from './CarWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NaviBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
          <Navbar.Brand href="#home">
              <img
                alt="logo-funkos"
                src="src\pop-house.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              Funko House
          </Navbar.Brand>
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#coleccion">Catalogo</Nav.Link>
              <NavDropdown title="Mas Informacion" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Sobre Nosotros</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Contacto
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Como cuidar tus funkos</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Proximas colecciones
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <CarWidget/> 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
};

export default NaviBar;