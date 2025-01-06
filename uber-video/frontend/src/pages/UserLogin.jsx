import React from 'react'

const UserLogin = () => {
    return(
        <div className='p-7'>
            <form>
                <h3 className='text-xl mb-2'>What's your email?</h3>

                <input 
                required 
                className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                type="email" 
                placeholder='email@exampl.com'/>

                <h3 className='text-xl mb-2'>Enter Password</h3>
                <input 
                className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                type="password" 
                required 
                placeholder='Password'/>
                <button
                className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'>
                Login</button>
            </form>
        </div>
    )
}

export default UserLogin