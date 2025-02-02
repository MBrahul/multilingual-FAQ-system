import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <>
            <div className='w-[100%] flex justify-center px-10 py-2'>
                <Link to={'/'}>
                    <img className='h-17' src="./images/logo.png" alt="BharatFD" />
                </Link>
            </div>
            <hr className='text-gray-300' />
        </>
    )
}

export default Navbar
