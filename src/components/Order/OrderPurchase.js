import React from 'react';
import { useParams } from 'react-router-dom';
import './orderPurchase.css'

const OrderPurchase = () => {

    const { id } = useParams()
    const url = `http://localhost:5000/tools/${id}`

    return (
        <div>
            <h1>pay for {id}</h1>




















        </div>
    );
};

export default OrderPurchase;