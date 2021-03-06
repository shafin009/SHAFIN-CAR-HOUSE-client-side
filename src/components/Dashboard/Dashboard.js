import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {

    const [user] = useAuthState(auth);

    const [admin] = useAdmin(user)


    return (
        <div>
            <br />
            <Navbar bg="light" variant="light">
                <Container>
                    <Nav className="mx-auto ">
                        <Nav.Link as={Link} to="/dashboard/myprofile">My Profile</Nav.Link>

                        {
                            admin ? '' : <Nav.Link as={Link} to='/dashboard/addareview'>Add A Review</Nav.Link>
                        }

                        {
                            admin ? '' : <Nav.Link as={Link} to='/dashboard/myorder'>My Order</Nav.Link>
                        }

                        {admin && <Nav.Link as={Link} to='/dashboard/additem'>Add Item</Nav.Link>}
                        {admin && <Nav.Link as={Link} to='/dashboard/manageitem'>Manage Item</Nav.Link>}
                        {admin && <Nav.Link as={Link} to='/dashboard/allusers'>All Users</Nav.Link>}


                    </Nav>
                </Container>
            </Navbar>
            <Outlet></Outlet>
        </div >

    );
};

export default Dashboard;