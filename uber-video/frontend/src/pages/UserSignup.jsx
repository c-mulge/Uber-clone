import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserSignup = () => {
    return(
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
            <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="logo" />
            <form onSubmit={(e)=>{
                submitHandler(e)
            }}>

                <h3 className='text-base font-medium mb-2'>What's your name?</h3>
                <div className='flex gap-4 mb-5'>

                <input 
                required 
                className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
                type="text" 
                placeholder='First Name'/>

                
                <input 
                required 
                className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base'
                type="text" 
                placeholder='Last Name'/>
                </div>

                <h3 className='text-base font-medium mb-2'>What's your email?</h3>
                <input 
                required 
                className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                type="email" 
                placeholder='email@exampl.com'/>

                <h3 className='text-base font-medium mb-2'>Enter Password</h3>
                <input 
                className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                type="password" 
                required 
                placeholder='Password'/>
                <button
                className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'>
                Login</button>
                
            </form>
            <p className='text-center'>New here? 
                <Link to={'/signup'} className='text-blue-600'> Create new Account</Link>
                </p>
            </div>
            <div>
                <Link to={'/captain-login'} className='bg-[#10b461] flex item-center justify-center text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'>
                Sign in as Captain</Link>
            </div>
        </div>
    )
}

export default UserSignup