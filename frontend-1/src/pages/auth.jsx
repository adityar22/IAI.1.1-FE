import React from "react";
import username from '../assets/logo_username.png'
import lock from '../assets/logo_lock.png'

const Auth = () => {
    return (
        <>
            {/* login section */}
            <section className=' body-font w-screen h-screen text-black flex items-center'>
                <div className='container px-5 py-24 mx-auto flex flex-col items-center'>
                    {/* Judul Aplikasi */}
                    <div className='m-auto text-center mb-5'>
                        <p className='title-font font-medium text-4xl mb-4'>
                            Welcome to
                        </p>
                        <h1 className='title-font font-medium'>
                            SIMASTER
                        </h1>
                    </div>
                    {/* Box Sign In */}
                    <div className=' justify-center'>
                        <form className='bg-gray-200 rounded-lg py-8 px-8 flex flex-col max-w-screen-sm w-screen'>
                            {/* Username */}
                            <div className='flex flex-col text-gray-700 mb-3'>
                                <label className='mb-1 text-lg '>Username</label>
                                <div className='flex flex-row '>
                                    <div className=' bg-blue-100 rounded-l-xl px-1 py-1 h-11 w-12'>
                                        <img src={username} className=' h-6 w-6 mx-auto my-2'>
                                        </img>
                                    </div>
                                    <input className=' w-full px-2 rounded-r-xl m-auto h-11'>

                                    </input>
                                </div>
                            </div>
                            {/* Password */}
                            <div className='flex flex-col text-gray-700 mb-3 text-base'>
                                <label className='mb-1 text-lg'>
                                    Password
                                </label>
                                <div className='flex flex-row'>
                                    <div className=' bg-blue-100 rounded-l-xl px-1 py-1 h-11 w-12 '>
                                        <img src={lock} className="h-5 w-5 mx-auto my-2">
                                        </img>
                                    </div>
                                    <input type='password' className='w-full px-2 rounded-r-xl m-auto h-11'>

                                    </input>
                                </div>
                            </div>
                            {/* Login Button */}
                            <div className='justify-center text-center flex flex-col'>
                                <button className=' text-lg text-white bg-orange hover:bg-blue-700 rounded-md px-5 py-2 mt-7 mx-auto'>
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Auth;