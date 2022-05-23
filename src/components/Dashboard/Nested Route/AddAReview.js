import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm, useWatch } from "react-hook-form";
import auth from '../../../firebase.init';


const AddAReview = () => {


    const [user] = useAuthState(auth);

    const { register, handleSubmit, watch } = useForm();

    const onSubmit = (data) => {
        console.log(data);


        //post to backend

        fetch("http://localhost:5000/review", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
            });
    };

    return (
        <>
            <br />
            <h1 className='text-center text-green-700 fw-2'>Add A Review</h1>

            <br />
            <div className="w-50 mx-auto">

                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>


                    <input className='mb-3' value={user?.displayName} {...register("displayName", { required: true })} readOnly />
                    <input className='mb-3' value={user?.email} {...register("email", { required: true })} readOnly />
                    <br />
                    <textarea className='mb-3' placeholder='Review' {...register("Review")} />

                    <input className='mb-3' placeholder='Ratings' type="number"
                        min="0" max="5" {...register("Ratings")} />
                    <br />

                    <div className="flex justify-center">
                        <button className="text-white bg-pink-500 w-full py-2">Add A Review</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default AddAReview;