import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';



const Header = () => {
    const [user] = useAuthState(auth);
    const Navigate = useNavigate()


    const handleSignOut = () => {
        signOut(auth);
        Navigate('/login')
    }


    return (
        <div >
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="black" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <h2 className='font-sans font-bold text-xl text-cyan-100'>SHAFIN CAR HOUSE</h2>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="inventory">Inventory</Nav.Link>
                            <Nav.Link as={Link} to="dashboard">Dashboard</Nav.Link>
                            <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
                            <Nav.Link as={Link} to="about">About Me</Nav.Link>

                        </Nav>
                        <Nav>
                            {
                                user ?
                                    <button onClick={() => handleSignOut()} className='btn btn-link text-white text-decoration-none'>Logout</button>
                                    :
                                    <Nav.Link as={Link} to="login">Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;