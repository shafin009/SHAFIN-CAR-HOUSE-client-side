import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const MyOrder = () => {
    const [items, setItems] = useState([])

    const [user] = useAuthState(auth);

    useEffect(() => {

        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`)
                .then(res => res.json())
                .then(data => setItems(data))

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
                                <td>{item.price}</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;