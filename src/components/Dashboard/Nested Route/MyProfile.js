import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';
import Loading from '../../../Hooks/Loading';


const MyProfile = () => {

    const [user, isLoading] = useAuthState(auth);
    const [profile, setProfile] = useState([]);
    const { register, handleSubmit } = useForm();
    const email = user?.email;

    useEffect(() => {
        fetch(`http://localhost:5000/users/${email}`)
            .then((res) => res.json())
            .then((data) => {
                setProfile(data);
            });
    }, [email]);
    if (isLoading) {
        return <Loading />;
    }
    const onSubmit = (data, event) => {
        const myProfileupdated = data;
        fetch(`http://localhost:5000/users/${email}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                event.target.reset();
                setProfile(myProfileupdated);
            });
    };

    if (isLoading) {
        return <Loading />;
    }


    return (
        <div>

            <div className="mx-10 py-8">
                <div className="flex items-center w-full mb-3">
                    <div className="avatar online">
                        <div className="w-24 rounded-full shadow-2xl">
                            <img src={profile?.img || user?.photoURL} alt={user?.displayName} />
                        </div>
                    </div>
                    <div className="mx-8">
                        <h2 className="text-xl mt-1">
                            {profile?.name || user?.displayName}
                        </h2>
                        <p className="text-sm text-gray-400 mt-1">{profile?.address}</p>
                        <p className="text-sm text-gray-400 mt-1">{profile?.phone}</p>
                        <p className="text-sm text-gray-400 mt-1">
                            {profile.email || user?.email}
                        </p>
                    </div>
                </div>
                <section class="text-gray-600 body-font relative">
                    <div class="container px-5 py-24 mx-auto">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="flex flex-col text-center w-full mb-12">
                                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Update Your Profile</h1>

                            </div>
                            <div class="lg:w-1/2 md:w-2/3 mx-auto">
                                <div class="flex flex-wrap -m-2">
                                    <div class="p-2 w-1/2">
                                        <div class="relative">
                                            <label for="name" class="leading-7 text-sm text-gray-600">Email</label>
                                            <input type="text"
                                                readOnly
                                                value={user?.email}
                                                {...register("email", { required: true })} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        </div>
                                    </div>
                                    <div class="p-2 w-1/2">
                                        <div class="relative">
                                            <label for="email" class="leading-7 text-sm text-gray-600">Name</label>
                                            <input type="text"
                                                placeholder="Name"
                                                {...register("name", { required: true })} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        </div>
                                    </div>
                                    <div class="p-2 w-1/2">
                                        <div class="relative">
                                            <label for="email" class="leading-7 text-sm text-gray-600">Address</label>
                                            <input type="text"
                                                placeholder="Address"

                                                {...register("address", { required: true })} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        </div>
                                    </div>
                                    <div class="p-2 w-1/2">
                                        <div class="relative">
                                            <label for="email" class="leading-7 text-sm text-gray-600">Phone</label>
                                            <input type="text"
                                                placeholder="Phone Number"
                                                {...register("phone")} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        </div>
                                    </div>
                                    <div class="p-2 w-1/2">
                                        <div class="relative">
                                            <label for="email" class="leading-7 text-sm text-gray-600">Upload Image</label>
                                            <input type="text"
                                                placeholder="Img URL"
                                                {...register("img")} class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        </div>
                                    </div>

                                    <div class="p-2 w-full">
                                        <button type="submit" class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Update Profile</button>
                                    </div>

                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </div >
        </div >
    );
};

export default MyProfile;