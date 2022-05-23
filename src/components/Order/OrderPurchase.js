import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Hooks/Loading';
import './orderPurchase.css'

const OrderPurchase = () => {

    const { id } = useParams()
    const url = `http://localhost:5000/order/${id}`


    const { data: tools, isLoading } = useQuery(['order', id], () => fetch(url).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }



    return (
        <div>
            <h1>pay for {id}</h1>

            <div class="card w-full shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={tools.image} alt="Shoes" class="rounded-xl w-80" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Pay for-<span class='text-violet-500'>{tools.name}</span></h2>
                    <p>Please Pay {tools.price}</p>

                </div>
            </div>


















        </div>
    );
};

export default OrderPurchase;