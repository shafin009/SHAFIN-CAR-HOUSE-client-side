import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomeToolDetails = ({ tool }) => {

    const { _id, image, name, price, least, quantity, description } = tool;

    const Navigate = useNavigate();

    const orderButton = id => {

        Navigate(`/order/${id}`)

    }



    return (
        <div className=" card w-full shadow-xs ">
            <figure className="px-10 pt-10">
                <img src={image} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <p>Description: {description}</p>
                <h3 className="card-title">Quantity: {quantity}</h3>
                <h3 className="card-title">Minimum Quantity: {least}</h3>
                <h3 className="card-title">Price: {price}</h3>
                <div className="card-actions">
                    <button onClick={() => orderButton(_id)} className="btn btn-warning btn-wide flex mx-auto">Order</button>
                </div>
            </div>

        </div>

    );
};

export default HomeToolDetails;