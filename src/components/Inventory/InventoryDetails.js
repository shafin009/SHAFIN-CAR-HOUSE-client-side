import React from 'react';
import { useNavigate } from 'react-router-dom';

const InventoryDetails = ({ tool }) => {

    const { _id, image, name, price, least, quantity, description } = tool;

    const Navigate = useNavigate();

    const orderButton = id => {

        Navigate(`/tools/${id}`)

    }



    return (
        <div>
            <div className="card card-compact shadow-xs">
                <figure><img src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Description: {description}</p>
                    <h3 className="card-title">Quantity: {quantity}</h3>
                    <h3 className="card-title">Minimum Quantity: {least}</h3>
                    <h3 className="card-title">Price: ${price}</h3>
                    <div className="card-actions justify-center">
                        <button onClick={() => orderButton(_id)} className="btn btn-secondary btn-wide flex mx-auto">Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InventoryDetails;