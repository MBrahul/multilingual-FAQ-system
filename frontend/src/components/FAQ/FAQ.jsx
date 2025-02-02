import React, { useRef } from 'react'
import { FaChevronUp } from "react-icons/fa6";

const FAQ = () => {
    const element = useRef();
  return (
      <div ref={element} className="group rounded-xl border border-gray-200 bg-gray-50 p-6 cursor-pointer transition-all duration-300" onClick={(e)=>{
        // console.log(element.current.children[1].classList)
        element.current.children[0].children[1].classList.toggle('-rotate-180');
        element.current.children[1].classList.toggle('hidden');
      }}>
        <dt className='flex justify-between itmes-center'>
            <p className='font-semibold text-large'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, nulla?</p>
            <FaChevronUp  className=''/>
        </dt>
        <dd className='hidden transition-all duration-300'>
            <p className='text-lg font-light mt-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo in beatae quibusdam exercitationem. Enim rem aliquid quos? Sapiente, quibusdam repellendus!</p>
        </dd>
      </div>
  )
}

export default FAQ
