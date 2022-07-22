import { FaFacebook, FaGoogle } from 'react-icons/fa'
import {useSession, signIn } from "next-auth/react"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    email: yup.string().required().email('Must be valid email'),
    username: yup.string().required(),
    password: yup.string().required().min(12, 'Your password is too short'),
    confirmPass: yup.string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required(),
  }).required();

export default function SignUp(){

    const { register, handleSubmit, formState:{ errors } } = useForm({
        mode:"onBlur",
        resolver: yupResolver(schema)
    });

    const onSubmit = ( data )=> {
        console.log(JSON.stringify(data))
    }


    return(
        <div>
            <div className=" flex items-center justify-center">
                    <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-black dark:text-gray-100">
                        <h2 className="mb-3 text-3xl font-semibold text-center">Sign up</h2>

                        <div className="my-6 space-y-4">
                            <button onClick={() => signIn("google", {callbackUrl:'/'})} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400">
                                <FaGoogle/>
                                <p>Signup with Google</p>
                            </button>
                            <button onClick={() => signIn("facebook")} aria-label="Login with Facebook" role="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400">

                                <div className="">
                                    <FaFacebook/>

                                </div>

                                <p>Signup with Facebook</p>
                            </button>
                        </div>
                        <div className="flex items-center w-full my-4">
                            <hr className="w-full dark:text-gray-400"></hr>
                            <p className="px-3 dark:text-gray-400">OR</p>
                            <hr className="w-full dark:text-gray-400"></hr>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} noValidate="" action="" className="space-y-8 ng-untouched ng-pristine ng-valid">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label htmlFor="text" className="block text-sm">Username</label>
                                    <input {...register('username')} type="text" name="username" id="text" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                                    <p>{errors.username?.message}</p>

                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-sm">Email address</label>
                                    <input {...register('email')} type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                                    <p>{errors.email?.message}</p>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <label  htmlFor="password" className="text-sm">Password</label>

                                    </div>
                                    <input {...register('password')} type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                                    <p>{errors.password?.message}</p>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <label  htmlFor="password" className="text-sm">Re-enter your password</label>

                                    </div>
                                    <input {...register('confirmPass')} type="password" name="confirmPass" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                                    <p>{errors.confirmPass?.message}</p>
                                    {/* <input type="password" id="password"  {...register('confirmPass')} className="bg-black text-white" /> */}
                                </div>
                            </div>


                            <div className="group">
                                <button type='submit' className="flex w-full grow-0 justify-center btn-border-gradient rounded-md mr-0 p-0.5 cursor-pointer">

                                    <p className="relative w-full text-xs flex items-center justify-center px-3 py-2 sm:px-10 sm:py-4 uppercase font-semibold rounded-md tracking-widest btn-bg-gradient text-white" >Sign up</p>

                                </button>
                            </div>

                        </form>
                    </div>
                </div>
        </div>
    )
}
