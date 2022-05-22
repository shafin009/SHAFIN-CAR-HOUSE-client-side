import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../../Hooks/Loading';



const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);

    const location = useLocation();
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);
    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;

    }

    if (!user.mailVerify && user.providerData[0]?.providerId === 'password') {
        return <div className='text-center'>
            <h3 className='text-danger'>Your Email isn't Verified!!</h3>
            <h5 className='text-warning'> Please Verify Mail !</h5>
            <br />
            <br />
            <button
                className='btn btn-success'
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Verification Mail Sent!');
                }}
            >
                Send Verification Mail Again
            </button>

        </div>
    }

    return children;
};

export default RequireAuth;