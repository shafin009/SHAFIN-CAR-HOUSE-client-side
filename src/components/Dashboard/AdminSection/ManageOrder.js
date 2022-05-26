import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import auth from "../../../firebase.init";


const ManageOrder = () => {
    const [items, setItems] = useState([])

    const [user] = useAuthState(auth);


    useEffect(() => {

        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`, {

                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {

                    setItems(data)
                })
        }


    }, [user])

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger",
        },
        buttonsStyling: false,
    });

    const deleteOrders = (id) => {
        swalWithBootstrapButtons
            .fire({
                title: "Are you sure?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes",
                cancelButtonText: "cancel!",
                reverseButtons: true,
            })

            .then((data) => {
                if (data.isConfirmed) {
                    fetch(`http://localhost:5000/order/${id}`, {
                        method: "DELETE",
                    })
                        .then((res) => res.json())
                        .then((data) => { });
                    swalWithBootstrapButtons.fire(
                        "Deleted!",
                        "Your file has been deleted.",
                        "success"
                    );
                }
                else if (

                    data.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire(
                        "Cancelled",
                        "Your imaginary file is safe 🙂",
                        "error"
                    );
                }
            });
    };
    const shippedOrders = (id) => {
        swalWithBootstrapButtons
            .fire({
                title: "Are you sure?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Yes",
                cancelButtonText: "cancel!",
                reverseButtons: true,
            })

            .then((data) => {
                if (data.isConfirmed) {
                    fetch(
                        `http://localhost:5000/admin/order/${id}`,
                        {
                            method: "PATCH",
                            headers: {
                                "content-type": "application/json",
                                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                            },
                        }
                    )
                        .then((res) => res.json())
                        .then((data) => {
                            if (data.modifiedCount) {
                                toast.success("Shipped Successfully");
                            }
                        });
                } else if (
                    /* Read more about handling dismissals below */
                    data.dismiss === Swal.DismissReason.cancel
                ) {
                    swalWithBootstrapButtons.fire(
                        "Cancelled",
                        "You changed your mind",
                        "error"
                    );
                }
            });
    };
    return (
        <div className="overflow-x-auto">
            <h2 className="text-2xl text-center py-2">Manage Products</h2>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>paid/unpaid</th>
                        <th>Payment</th>
                        <th>Cancel</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={item._id} order={item}>
                            <th>{index + 1}</th>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                            <td className={item.paid ? "bg-green-300" : "bg-red-200"}>
                                {item.paid ? "Paid" : "No paid"}
                            </td>
                            <td>
                                {item.paid ? (
                                    <button
                                        disabled={item.Shipped}
                                        onClick={() => shippedOrders(item._id)}
                                        className={
                                            item.Shipped
                                                ? "bg-purple-400 px-2 py-1 rounded-lg disabled"
                                                : "px-2 rounded-md py-1 bg-green-300"
                                        }
                                    >
                                        {item.Shipped ? "Shipped" : "Pending"}
                                    </button>
                                ) : (
                                    ""
                                )}
                            </td>
                            <td>
                                <button
                                    onClick={() => deleteOrders(item._id)}
                                    className="btn btn-sm bg-red-500"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageOrder;
