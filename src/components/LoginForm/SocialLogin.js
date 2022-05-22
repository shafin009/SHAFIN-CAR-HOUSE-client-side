import React from 'react';
import { useSignInWithGoogle, useSignInWithGithub } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom'
import auth from '../../firebase.init';
import Loading from '../../Hooks/Loading';
import './SocialLogin.css';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    const location = useLocation();



    let from = location.state?.from?.pathname || "/";
    let customErrorMessage;

    if (loading || loading1) {
        return <Loading></Loading>
    }

    if (error || error1) {
        customErrorMessage = <p className='text-rose-400 text-center'>Error: {error?.message} {error1?.message}</p>
    }

    if (user || user1) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div class="login-box">
                <h1>Social Login</h1>
                <button class="social-button" onClick={() => signInWithGoogle()} id="google-connect"> <span>Connect with Google</span></button>
                <button class="social-button" onClick={() => signInWithGithub()} id="github-connect"> <span>Connect with Github</span></button>

                {customErrorMessage}
            </div>

        </div >
    );
};

export default SocialLogin;