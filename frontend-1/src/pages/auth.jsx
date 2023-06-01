import React from 'react'
import username from '../assets/logo_username.png'
import lock from '../assets/logo_lock.png'

const student = () => {
    return (
        <section className=' body-font w-screen h-screen text-black flex items-center'>
            <div className='container px-5 py-24 mx-auto flex flex-col items-center'>
                {/* Judul Aplikasi */}
                <div className='m-auto text-center mb-5'>
                    <p className='title-font font-medium text-lg'>
                        Welcome to
                    </p>
                    <h1>
                        "nama App"
                    </h1>
                </div>
                {/* Box Sign In */}
                <div className='w-1/2'>
                    <form className='bg-gray-200 rounded-lg p-8 flex flex-col w-full'>
                        {/* Username */}
                        <div className='flex flex-col text-gray-700 mb-3'>
                            <label className='mb-1 text-lg'>email</label>
                            <div className='flex flex-row '>
                                <img src={username} className=' bg-gray-800 rounded-l-md px-1 py-1 h-6 w-6 '>
                                </img>
                                <input className=' w-full px-2 rounded-r-md m-auto'>

                                </input>
                            </div>
                        </div>
                        {/* Password */}
                        <div className='flex flex-col text-gray-700 mb-3 text-lg'>
                            <label className='mb-1'>
                                Password
                            </label>
                            <div className='flex flex-row'>
                                <img src={lock} className=" bg-gray-800 rounded-l-md px-1 py-1 h-6 w-6 ">
                                </img>
                                <input type='password' className='w-full px-2 rounded-r-md m-auto'>

                                </input>
                            </div>
                        </div>
                        {/* Login Button */}
                        <div className='justify-center text-center flex flex-col'>
                            <button className=' text-xl text-white bg-orange-400 rounded-md px-10 py-3 mt-7 mx-10'>
                                Login
                            </button>
                            <label>
                                Belum memiliki akun? 
                            </label>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default student
