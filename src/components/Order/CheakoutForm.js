import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';


const CheakoutForm = ({ orders }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [errorCard, setErrorCard] = useState('')
    const [successCard, setSuccessCard] = useState('')
    const [transId, setTransId] = useState('')
    const [Loading, setLoading] = useState(false)
    const [clientSecret, setClientSecret] = useState('')


    const { price, shopName, email, pid } = orders;



    useEffect(() => {

        if (price) {
            fetch("http://localhost:5000/create-payment-intent", {
                method: "POST",
                headers: {
                    "content-type": "application/json",

                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`

                },
                body: JSON.stringify({ price }),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data?.clientSecret) {
                        setClientSecret(data.clientSecret);
                    }
                });
        }
    }, [price]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return

        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }


        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card

        })

        setErrorCard(error?.message || '')
        setSuccessCard('')
        setLoading(true)

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(

            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: shopName,
                        email: email,
                    },
                },
            },
        );
        if (intentError) {
            setErrorCard(intentError?.message)
            setLoading(false)

        }
        else {
            setErrorCard('')
            setTransId(paymentIntent.id)

            setSuccessCard('Your Payment is done Successfully !')

            const myItem = {
                itemName: pid,
                transId: paymentIntent.id,

            }

            fetch(`http://localhost:5000/order/${pid}`, {

                method: "PATCH",
                headers: {
                    "content-type": "application/json",

                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`

                },
                body: JSON.stringify(myItem),

            })
                .then(res => res.json())
                .then(data => {
                    console.log(paymentIntent)
                    setLoading(false)

                })
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />

                <div class="p-2 w-full">
                    <button type="submit" disabled={!stripe || !clientSecret} class="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">PAY</button>
                </div>
            </form>
            {
                errorCard && <p className='text-danger text-center font-bold'>Error! {errorCard}</p>
            }
            {
                successCard && <div className='text-success text-center font-bold'>
                    <p>{successCard}</p>
                    <p>Your Transaction ID: <span className='text-primary text-center font-bold'>{transId}</span></p>
                </div>
            }
        </>
    );
};

export default CheakoutForm;