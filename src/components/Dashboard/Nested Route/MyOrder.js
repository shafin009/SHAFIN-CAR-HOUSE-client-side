import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const MyOrder = () => {
    const [items, setItems] = useState([])

    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {

        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`, {

                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {

                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/login')
                    }

                    return res.json()



                })
                .then(data => {
                    // console.log(data);
                    setItems(data)
                })
        }


    }, [user])


    return (
        <div>

            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>Num</th>
                            <th>Item Name</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>TRANSACTION ID</th>
                            <th>Payment Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((item, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{item.name}</td>
                                <td>{item.orderQuantity}</td>
                                <td>{item.price}</td>
                                <td>{item?.transId}</td>
                                <td>{item.paid ? "Paid" : <Link to={`/purchase/${item.pid}`} >Unpaid</Link>}
                                </td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;