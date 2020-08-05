import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar bg="primary" variant="dark" className="justify-content-between">
                <Navbar.Brand href="#">React-Demo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <ul>
                            <li><NavLink to="home">Home</NavLink></li>
                            <li><NavLink to="dashboard">Dashboard</NavLink></li>    
                            <li><NavLink to="contact">Contact</NavLink></li>
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default Header;


