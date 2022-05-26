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
                                <td>{item.price}</td>
                                <td>{(item.price && !item.paid) && <Link to={`/purchase/${item.pid
                                    }`}>
                                    <button class="btn btn-xs sm:btn-sm md:btn lg:btn">Pay</button>
                                </Link>}

                                    {(item.price && item.paid) && <span class="btn btn-xs sm:btn-sm md:btn lg:btn">Paid</span>}
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