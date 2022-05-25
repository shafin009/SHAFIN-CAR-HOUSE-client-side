import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';

const Dashboard = () => {

    const [user] = useAuthState(auth);
    return (
        <div>
            <br />
            <Navbar bg="light" variant="light">
                <Container>
                    <Nav className="mx-auto ">
                        <Nav.Link as={Link} to="/dashboard/myprofile">My Profile</Nav.Link>

                        <Nav.Link as={Link} to='/dashboard/addareview'>Add A Review</Nav.Link>
                        <Nav.Link as={Link} to='/dashboard/myorder'>My Order</Nav.Link>

                        <Nav.Link as={Link} to='/dashboard/allusers'>All Users</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Outlet></Outlet>
        </div >

    );
};

export default Dashboard;