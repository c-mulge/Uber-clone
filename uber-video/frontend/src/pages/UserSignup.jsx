import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserSignup = () => {

    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userData,setUserData]=useState({})

    const submitHandler=(e)=>{
        e.preventDefault();
        setUserData({
            username:{
                firstName:firstName,
                lastName:lastName
            },
            email:email,
            password:password
        })
        setEmail('')
        setFirstName('')
        setLastName('')
        setPassword('')
    }
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
                className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm'
                type="text" 
                placeholder='First Name'
                value={firstName}
                onChange={(e)=>{
                    setFirstName(e.target.value)
                }}
                />

                
                <input 
                required 
                className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm'
                type="text" 
                placeholder='Last Name'
                value={lastName}
                onChange={(e)=>{
                    setLastName(e.target.value)
                }}
                />
                </div>

                <h3 className='text-base font-medium mb-2'>What's your email?</h3>
                <input 
                required 
                className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
                type="email" 
                placeholder='email@exampl.com'
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                />

                <h3 className='text-base font-medium mb-2'>Enter Password</h3>
                <input 
                className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
                type="password" 
                required 
                placeholder='Password'
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                />
                <button
                className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-base placeholder:text-sm'>
                Login</button>
                
            </form>
            <p className='text-center'>Already have an account? 
                <Link to={'/login'} className='text-blue-600'> Login here</Link>
                </p>
            </div>
            <p className='text-[10px] leading-tight'>By proceeding, you consent to get calls, 
                WhatsApp or SMS messages, including by automated 
                means, from Uber and its affiliates to the number provided.</p>
        </div>
    )
}

export default UserSignup