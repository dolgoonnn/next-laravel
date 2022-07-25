import { useState } from "react";
import Link from 'next/link';
import {useSession, signIn } from "next-auth/react"
import { FaFacebook, FaGoogle } from 'react-icons/fa'
import SignUp from './signUp';

export default function LoginCard(){

    const{ loading } = useSession()
    const [isShowing, setIsShowing] = useState(true);


    if(loading){
        <div>
            loading
        </div>

    }

    const login = ()=>{

    }

    const toggleSignUp = () => {
        setIsShowing(!isShowing)
    }

    return(
        <div className="bg-collection bg-cover bg-center py-10">
            {isShowing ? (
                <div className=" flex items-center justify-center">
                    <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-black dark:text-gray-100">
                        <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>

                        <div className="my-6 space-y-4">
                            <button onClick={() => signIn("google", {callbackUrl:'/'})} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400">
                                <FaGoogle/>
                                <p>Login with Google</p>
                            </button>
                            <button onClick={() => signIn("facebook")} aria-label="Login with Facebook" role="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400">

                                <div className="">
                                    <FaFacebook/>

                                </div>

                                <p>Login with Facebook</p>
                            </button>
                        </div>
                        <div className="flex items-center w-full my-4">
                            <hr className="w-full dark:text-gray-400"></hr>
                            <p className="px-3 dark:text-gray-400">OR</p>
                            <hr className="w-full dark:text-gray-400"></hr>
                        </div>
                        <form noValidate="" action="" className="space-y-8 ng-untouched ng-pristine ng-valid">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-sm">Email address</label>
                                    <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <label htmlFor="password" className="text-sm">Password</label>
                                        <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">Forgot password?</a>
                                    </div>
                                    <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                                </div>
                            </div>
                            <div className="group">
                                <button onClick={login} className="flex w-full grow-0 justify-center btn-border-gradient rounded-md mr-0 p-0.5 cursor-pointer text-white">
                                    <p className="relative w-full text-xs flex items-center justify-center px-3 py-2 sm:px-10 sm:py-4 uppercase font-semibold rounded-md tracking-widest bg-black   group-hover:bg-white  hover:text-black border border-white" >Login</p>
                                </button>
                            </div>
                            <div className="group">
                                <button onClick={toggleSignUp} className="flex w-full grow-0 justify-center btn-border-gradient rounded-md mr-0 p-0.5 cursor-pointer">

                                    <p className="relative w-full text-xs flex items-center justify-center px-3 py-2 sm:px-10 sm:py-4 uppercase font-semibold rounded-md tracking-widest group-hover:bg-white text-white bg-pgreen hover:text-black" >Sign up</p>

                                </button>
                            </div>

                        </form>
                    </div>
                </div>
                ) : (

                <SignUp/>

            )}
        </div>
    )
}