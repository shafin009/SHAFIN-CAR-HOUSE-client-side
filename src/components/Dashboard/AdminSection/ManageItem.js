import React, { useEffect, useState } from 'react';

const ManageItem = () => {

    const [manageItems, setManageItems] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/tools", {
            headers: {
                method: "GET",
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then((res) => res.json())
            .then((data) => setManageItems(data));
    }, []);

    const deleteButton = id => {
        const proceed = window.confirm('Are you Sure ?');

        if (proceed) {

            fetch(`http://localhost:5000/tools/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    const afterDelete = manageItems.filter(manageItem => manageItem._id !== id)
                    setManageItems(afterDelete)

                })
            console.log(manageItems)
        }

    }

    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {manageItems.map(manageItem => <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                            <div className="block relative h-48 rounded overflow-hidden">
                                <img alt="" className="object-cover object-center w-full h-full block" src={manageItem.image} />
                            </div>
                            <div className="mt-4">
                                <h4 className="text-gray-700 text-xs tracking-widest title-font mb-1">Minimum Quantity:{manageItem.least}</h4>
                                <h2 className="text-gray-900 title-font text-lg font-medium">Name:{manageItem.name}</h2>
                                <p className="text-gray-500 text-xs tracking-widest title-font mb-1">{manageItem.description}</p>
                                <h4 className="mt-1">Price: {manageItem.price}</h4>
                                <h4 className="mt-1">Quantity: {manageItem.quantity}</h4>

                                <button onClick={() => deleteButton(manageItem._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                                    Delete
                                </button>
                            </div>
                        </div>

                        )}



                    </div>
                </div>
            </section>
        </div>
    );
};

export default ManageItem;