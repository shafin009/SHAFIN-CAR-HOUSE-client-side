import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheakoutForm';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const stripePromise = loadStripe('pk_test_51HbMGfApSvTVmDPl2KNY6uB5UIIEJDIAJoJGE0a3RIiVVSQ51jJrbQrNBODYzFmrauYBCmqWmLlZkqMtEF81VpLF00aWrg518E');



const OrderPurchase = () => {
    const [user] = useAuthState(auth)
    const email = user?.email
    const [orders, setOrder] = useState({})
    const { id } = useParams();
    console.log(id)


    useEffect(() => {
        fetch(`http://localhost:5000/order/${id}`, {

            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })

            .then(res => res.json())
            .then(data => {


                setOrder(data)
            });

    }, [id, email])


    console.log(orders)


    return (
        <div>



            <>
                <div class="card w-full  shadow-xs">
                    <figure class="px-10 pt-10">
                        <img src={orders.img} alt="" class="rounded-xl w-80" />
                    </figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Pay for-<span class='text-violet-500'>{orders.shopName}</span></h2>
                        <p class='text-2xl items-center text-center'>Please Pay-<span class='text-violet-500'> ${orders.price}</span></p>
                    </div>
                </div>
                <div class="text-gray-500 bg-gray-100 body-font relative">
                    <div class="container px-5 py-24 mx-auto">
                        <div class="flex flex-col text-center w-full mb-12">
                            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Pay With Credit Card</h1>
                            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Hello! Dear Customer, please give your credit card info.</p>
                        </div>
                        <div class="lg:w-1/2 md:w-2/3 mx-auto">
                            <div class="flex flex-wrap -m-2">

                                <div class="p-2 w-full">
                                    <div class="relative">
                                        <Elements stripe={stripePromise}>
                                            <CheckoutForm
                                                key={orders._id}
                                                orders={orders} />
                                        </Elements>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </>















        </div>
    );
};

export default OrderPurchase;