import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SocialLogin.css';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../Hooks/Loading';
import { useForm } from 'react-hook-form';



const SignUp = () => {
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    let errorMessageSeen;

    if (loading || loadingGoogle || updating) {
        return <Loading></Loading>
    }

    if (error || errorGoogle || updateError) {
        errorMessageSeen = <p className='text-red-500'><small>{error?.message || errorGoogle?.message || updateError?.message}</small></p>
    }

    if (user || userGoogle) {
        // navigate('/dashboard');
    }

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });

    }

    return (
        <div>
            <section class="text-gray-600 body-font relative">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">SIGN UP</h1>

                    </div>
                    <div class="lg:w-1/2 md:w-2/3 mx-auto">
                        <form onSubmit={handleSubmit(onSubmit)} >
                            <div class="flex flex-wrap -m-2">
                                <div class="p-2 w-1/2">
                                    <div class="relative">
                                        <label for="name" class="leading-7 text-sm text-gray-600">Your Name</label>
                                        <input type="text" {...register("name", {
                                            required: {
                                                value: true,
                                                message: 'Name is Required'
                                            }
                                        })} class="form-control block w-full px-4 py-2 text-sm  font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Your Name" required />
                                    </div>
                                </div>
                                <div class="p-2 w-1/2">
                                    <div class="relative">
                                        <label for="email" class="leading-7 text-sm text-gray-600">Your E-mail</label>
                                        <input type="email" id="email" name="email" class="form-control block w-full px-4 py-2 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Your E-mail" {...register("email", {
                                            required: {
                                                value: true,
                                                message: 'Email is Required'
                                            }
                                        })} required
                                        />
                                    </div>
                                </div>
                                <div class="p-2 w-1/2">
                                    <div class="relative">
                                        <label for="password" class="leading-7 text-sm text-gray-600">Your Password</label>
                                        <input id="password" name="password" class="form-control block w-full px-4 py-2 text-sm  font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="password"
                                            placeholder="Your Password" {...register("password", {
                                                required: {
                                                    value: true,
                                                    message: 'Password is Required'
                                                }

                                            })} required />
                                    </div>
                                </div>
                                <div className="flex justify-center items-center mb-6">
                                    <p className="font-semibold">{errorMessageSeen}</p>
                                </div>
                                <div class="p-2 w-full">
                                    <button type="submit" class="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Sign Up</button>
                                </div>
                                <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                                    Already an account?
                                    <Link
                                        to="/login"
                                        className="text-rose-600 "
                                    > Log in</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <div className="divider">OR</div>
            <div>
                <div class="login-box">
                    <h1>Social Login</h1>
                    <button class="social-button" onClick={() => signInWithGoogle()} id="google-connect"> <span>Connect with Google</span></button>

                </div>

            </div >
        </div>
    );
};

export default SignUp;