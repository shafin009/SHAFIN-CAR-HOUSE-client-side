import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';


const MyProfile = () => {

    const [user] = useAuthState(auth);
    console.log(auth)


    return (
        <div>
            {
                user ? <div class="card bg-base-100 shadow-xl">
                    <br />
                    <figure><div class="avatar">
                        <div class="w-24 rounded-full ring ring-primary ring-offset-2">
                            <img src={user?.photoURL} alt='' />
                        </div>
                    </div></figure>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">Name: {user?.displayName}</h2>
                        <h4 class="card-title">E-Mail: {user?.email}</h4>
                        <h4 class="card-title">Phone-Number: {user.phoneNumber ? user.phoneNumber : "No Number"}</h4>
                        <p>Last Create Time: {user?.metadata?.creationTime}</p>
                        <p>Last Sign in: {user?.metadata?.lastSignInTime}</p>

                    </div>
                </div>
                    :
                    <div class=" card w-full shadow-xl bg-neutral text-neutral-content">
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">You Have No Profile.</h2>
                            <h2 class="card-title">Please Log-In to see your Beautiful Profile.</h2>
                            <div class="card-actions">
                                <Link to='/login'><button class="btn btn-secondary">Click Here for login</button></Link>
                            </div>
                        </div>
                    </div>
            }

        </div>
    );
};

export default MyProfile;