import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import Nav from 'react-bootstrap/Nav';
// import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>

            <Navbar expand="md" className="navbar">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="fw-bold text-white">
                        Employee Management System
                    </Navbar.Brand>

                    {/* Toggle button for mobile */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-md-auto d-flex flex-column flex-md-row">
                            <Nav.Link as={Link} to="/" className="text-white">Employees</Nav.Link>
                            <Nav.Link as={Link} to="/employee" className="text-white">Post Employee</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>
    );
};

export default Header;

// To quickly add new components, you can use tools like Code Snippets or Emmet Abbreviations.
// For example, in VS Code, type `rafce` (React Arrow Function Component Export) and press Enter
// if you have the ES7+ React/Redux/React-Native snippets extension installed.