import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo1.png'
import './Header.css'


const Header = () => {
    return (
        <div className="navbar-container">
            <Navbar collapseOnSelect expand="lg" className="navbar">
                <Container>
                    <Navbar.Brand><NavLink to="/home" className="text-decoration-none p-3 navlink" activeStyle={{
                            fontWeight: "bold",
                            color: "rgb(255, 173, 67)"
                        }} ><img src={logo} width="100px" alt="" />Medicare</NavLink></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                        <NavLink className="text-decoration-none p-3 navlink" activeStyle={{
                            fontWeight: "bold",
                            color: "rgb(255, 173, 67)"
                        }} to="/home">Home</NavLink>
                        <NavLink className="text-decoration-none p-3 navlink" activeStyle={{
                            fontWeight: "bold",
                            color: "rgb(255, 173, 67)"
                        }} to="/services">Services</NavLink>
                        <NavLink className="text-decoration-none p-3 navlink" activeStyle={{
                            fontWeight: "bold",
                            color: "rgb(255, 173, 67)"
                        }} to="/doctors">Doctors</NavLink>
                        <NavLink className="text-decoration-none p-3 navlink" activeStyle={{
                            fontWeight: "bold",
                            color: "rgb(255, 173, 67)"
                        }} to="/about">About Us</NavLink>
                        <NavLink className="text-decoration-none p-3 navlink" activeStyle={{
                            fontWeight: "bold",
                            color: "rgb(255, 173, 67)"
                        }} to="/contact">Contact Us</NavLink>
                        {/* {user?.email ?
                            <button className="btn btn-danger" onClick={logOut}>Logout</button>
                            :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        } */}
                        <Navbar.Text>
                            Signed in as: {/* {user?.displayName} */}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;