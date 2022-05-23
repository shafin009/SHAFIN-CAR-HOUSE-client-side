import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const Order = () => {


    const [user] = useAuthState(auth);
    const { id } = useParams();

    const navigate = useNavigate();


    const [tools, setTools] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/tools/${id}`)
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])

    const handlePurchases = (event) => {
        event.preventDefault();
        const userEmail = user.email;
        const images = tools.image;
        const price = tools.price;
        const orderQuantity = parseInt(event.target.order.value);
        const totalPrice = price * orderQuantity;
        const shopName = event.target.shop.value;
        const address = event.target.address.value;
        const phone = event.target.phone.value;
        const availableQuantity = tools.quantity;
        const leastQuantity = tools.least;

        if (availableQuantity < orderQuantity) {
            return toast.error("Sorry!! You can not order more then stock");
        }
        if (orderQuantity < leastQuantity) {
            return toast.error("Sorry!! minimum order 50");
        }
        const placeOrder = {
            pid: id,
            email: userEmail,
            shopName,
            price: totalPrice,
            img: images,
            address,
            phone,
            orderQuantity,
        };
        fetch("http://localhost:5000/order", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(placeOrder),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    navigate(`/purchase/${id}`);
                }
            });
    }


    return (

        <div>
            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 py-24 mx-auto">
                    <div class="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={tools.image} />
                        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 class="text-sm title-font text-gray-500 tracking-widest">{user?.email}</h2>
                            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{tools.name}</h1>
                            <div class="flex mb-4">
                                <span class="flex items-center">Minimum Quantity:
                                    <span class="text-gray-600 ml-3">{tools.least}</span>
                                </span>

                            </div>
                            <p class="leading-relaxed">{tools.description}</p>
                            <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5 text-xl">
                                <div class="flex">
                                    <span class="mr-3">Quantity:</span>
                                    {tools.quantity}
                                </div>
                                <div class="flex ml-6 items-center">
                                    <span class="mr-3">Price: </span>
                                    <div class="relative">
                                        {tools.price}
                                    </div>
                                </div>
                            </div>
                            <form onSubmit={handlePurchases}>
                                <div className="flex flex-wrap -m-2">
                                    <div className="p-2 w-1/2">
                                        <div className="relative">
                                            <div>
                                                <label htmlFor="">Shop Name</label>
                                                <input
                                                    type="text"
                                                    name="shop"
                                                    required
                                                    className="border-2 text-center mx-3 h-8 p-2 rounded w-48"
                                                />
                                            </div>
                                            <div className="mt-4">
                                                <label htmlFor="">Address</label>
                                                <input
                                                    type="text"
                                                    name="address"
                                                    className="border-2 text-center mx-3 h-8 p-2 rounded w-48"
                                                />
                                            </div>

                                            <div className="mt-4">
                                                <label htmlFor="">Phone No :</label>
                                                <input
                                                    type="number"
                                                    name="phone"
                                                    className="border-2 text-center mx-3 h-8 p-2 rounded w-48"
                                                />
                                            </div>
                                            <label htmlFor="">Order Quantity</label>
                                            <input
                                                type="number"
                                                name="order"
                                                min="0"
                                                placeholder="50"
                                                className="border-2 text-center mx-3 h-8 p-2 rounded w-48"
                                            />
                                        </div>
                                    </div>

                                    <div className="p-2 w-full">
                                        <button type="submit"
                                            className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Purchase</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>






        </div>
    );
};

export default Order;