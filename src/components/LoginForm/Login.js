import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../Hooks/Loading';
import './SocialLogin.css'
import { useForm } from 'react-hook-form';



const Login = () => {

    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let errorMessageSeen;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user || userGoogle) {
            navigate(from, { replace: true });
        }
    }, [user, userGoogle, from, navigate])

    if (loading || loadingGoogle) {
        return <Loading></Loading>
    }

    if (error || errorGoogle) {
        errorMessageSeen = <p className='text-red-500'><small>{error?.message || errorGoogle?.message}</small></p>
    }

    const submitForm = data => {
        signInWithEmailAndPassword(data.email, data.password);
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
                            <form onSubmit={handleSubmit(submitForm)}>

                                <div className="mb-6">
                                    <input
                                        type="email"

                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleFormControlInput2"
                                        placeholder="Email address"
                                        {...register("email", {
                                            required: {
                                                value: true,
                                                message: 'Email is Required'
                                            }
                                        })}
                                        required
                                    />
                                </div>

                                <div className="mb-6">
                                    <input
                                        type="password"
                                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        id="exampleFormControlInput2"
                                        placeholder="Password"
                                        {...register("password", {
                                            required: {
                                                value: true,
                                                message: 'Password is Required'
                                            }
                                        })}
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

                                    <div className="flex justify-center items-center mb-6">
                                        <p className="font-semibold">{errorMessageSeen}</p>
                                    </div>

                                </div>
                            </form>
                        </div>

                        <div
                            className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
                        >
                            <div>
                                <div class="login-box">
                                    <h1>Social Login</h1>
                                    <button class="social-button" onClick={() => signInWithGoogle()} id="google-connect"> <span>Connect with Google</span></button>

                                </div>

                            </div >
                        </div>
                    </div>
                </div>

            </section>

        </div >
    );
};

export default Login;