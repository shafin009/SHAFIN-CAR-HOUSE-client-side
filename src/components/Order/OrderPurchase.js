import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './orderPurchase.css'

const OrderPurchase = () => {
    const [order, setOrder] = useState([])
    const { id } = useParams();
    console.log(id);
    useEffect(() => {
        fetch(`http://localhost:5000/order/${id}`)

            .then(res => res.json())
            .then(data => setOrder(data));

    }, [id])
    return (
        <div>
            <div class="card w-full shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={order.img} alt="Shoes" class="rounded-xl w-80" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Pay for-<span class='text-violet-500'>{order.name}</span></h2>
                    <p class='text-2xl items-center text-center'>Please Pay-<span class='text-violet-500'> ${order.price}</span></p>
                    <p class='text-2xl items-center text-center'>Please Pay-<span class='text-violet-500'> ${order.orderQuantity}</span></p>

                </div>
            </div>


















        </div>
    );
};

export default OrderPurchase;