import React from 'react'
import { Link } from "react-router-dom"
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/127.0.0.1/AbarrotesCF/public/Home">
                    <img src="Photos/store.PNG" width="30" height="30" className="d-inline-block align-top" alt="React Bootstrap logo" /> {'  '}
                    AbarrotesCF</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">


                    <Nav className="me-auto">
                        <NavDropdown title="Lecturas" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/127.0.0.1/AbarrotesCF/public/IndexProduct">Productos</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/127.0.0.1/AbarrotesCF/public/IndexEmployee">Empleados</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Altas" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/127.0.0.1/AbarrotesCF/public/StoreProduct">Productos</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/127.0.0.1/AbarrotesCF/public/StoreEmployee">Empleados</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Actualizaciones" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/127.0.0.1/AbarrotesCF/public/UpdateProduct">Productos</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/127.0.0.1/AbarrotesCF/public/UpdateEmployee">Empleados</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


export default Navigation;