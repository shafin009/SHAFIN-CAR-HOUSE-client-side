import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import Loading from '../../Hooks/Loading';
import login from './login.jpg'



const Login = () => {


    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorMessageShow;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <Loading></Loading>
    }



    if (error) {
        errorMessageShow = <p className='text-danger text-center'>Error: {error?.message}</p>
    }

    const formSubmit = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email, password);
        navigate(from, { replace: true });



    }

    const passwordReset = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Password Reset! Cheak Mail!')
        }
        else {
            toast('Enter your E-Mail!');
        }
    }

    return (
        <div className='h-full'>
            <br />
            <section className="text-gray-600 body-font ">
                <div className="px-6 h-full text-gray-800">
                    <div
                        className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
                    >
                        <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                            <div className="flex flex-col text-center w-full">

                                <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">LOG IN</h1>
                            </div>
                            <br />
                            <form onSubmit={formSubmit}>

                                {/* <!-- Email input --> */}

                                <div className="mb-6">
                                    <input
                                        type="text"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleFormControlInput2"
                                        placeholder="Email address"
                                        ref={emailRef}
                                        required
                                    />
                                </div>

                                {/* <!-- Password input --> */}

                                <div className="mb-6">
                                    <input
                                        type="password"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleFormControlInput2"
                                        placeholder="Password"
                                        ref={passwordRef}
                                        required
                                    />
                                </div>


                                <div className="text-center lg:text-left">
                                    <button
                                        type="submit"
                                        className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                    >
                                        Log in
                                    </button>
                                    <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                                        Don't have an account?
                                        <Link
                                            to="/signup"
                                            className="text-green-600 "
                                        > Register</Link>
                                    </p>
                                    <button
                                        onClick={passwordReset}
                                        className="inline-block px-7 py-3 bg-red-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  active:shadow-lg transition duration-150 ease-in-out"
                                    >
                                        Forgot Password
                                    </button>

                                    <div className="flex justify-center items-center mb-6">
                                        <p className="font-semibold">{errorMessageShow}</p>
                                    </div>

                                </div>
                            </form>
                        </div>
                        <div
                            className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
                        >
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>

            </section>

        </div >
    );
};

export default Login;