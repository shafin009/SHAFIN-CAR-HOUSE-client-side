import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';



const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
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
                            {
                                user ? <p className='btn btn-link text-white text-decoration-none'>{user.displayName}</p> : ''
                            }
                            {
                                user ? <div class="avatar">
                                    <div class="w-16 mask mask-hexagon">
                                        <img src={user.photoURL} alt="" />
                                    </div>
                                </div> : ''
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;