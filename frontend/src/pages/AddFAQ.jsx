import axios from 'axios';
import React, { useState } from 'react'

import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';


const AddFAQ = () => {

  const [value, setValue] = useState('');
  const [question, setQuestion] = useState('');
  const navigate = useNavigate();


  const addFAQ = async () => {
    try {
      if(!question || !value){
        alert("Fill all fields");
      }
      else{
        const data = {
          question: question,
          answer: value
        }
        const response = await axios.post(`http://localhost:5500/api/faqs/add`, data);
        alert(response.data.msg);
        navigate('/');
      }
    } catch (error) {
      alert("some error occurred");
      // navigate('/');
      console.log(error);
    }
  }


  return (
    <div className='mt-5 p-10'>
      <h2 className='font-semibold text-center'>Add New FAQ</h2>
      <div className="input-fields">
        <label className='font-normal text-gray-500 text-xl' htmlFor="">Question</label>
        <input className='border w-full p-3 rounded border-gray-300 outline-none' type="text" placeholder='' value={question} onChange={(e) => {
          setQuestion(e.target.value);
        }} />
        <label className='font-normal text-gray-500 text-xl' htmlFor="">Answer</label>
        {/* <textarea className='border w-full p-3 rounded border-gray-300 outline-none' type="text" placeholder='' rows={10} /> */}

        <ReactQuill theme="snow" value={value} onChange={setValue} />
      </div>
      <button className='font-semibold  py-2 px-4 border mt-3 rounded cursor-pointer hover:bg-[#2d387a] hover:text-white transitions-all duration-300' onClick={() => {
        addFAQ();
      }}>Submit</button>
    </div>
  )
}

export default AddFAQ;
