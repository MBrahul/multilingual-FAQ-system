import React from 'react'
import FAQ from '../components/FAQ/FAQ'
import { Link } from 'react-router-dom'

const FAQS = () => {
    return (
        <>
            <div>
                <div className='p-5 flex justify-between'>
                    <h2 className='text-3xl font-semibold'>FAQS</h2>
                    <div className='flex gap-7'>
                        <select className='' name="" id="">
                            {["English", "Hindi", "Bangali"].map((item, i) => (
                                <option value={item} key={i}>
                                    {item}
                                </option>
                            ))}
                        </select>
                        <Link to={'/add'} className='py-2 px-4 rounded cursor-pointer border hover:bg-[#2d387a] hover:text-white transitions-all duration-300'>Add new</Link>
                    </div>
                </div>
                <div className='p-10 grid grid-cols-1 gap-5'>
                    <FAQ/>
                    <FAQ/>
                    <FAQ/>
                </div>
            </div>
        </>
    )
}

export default FAQS
