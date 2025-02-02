import React, { useRef } from 'react'
import { FaChevronUp } from "react-icons/fa6";
import { GrEdit } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.snow.css';
import { Link, useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import axios from 'axios';


const FAQ = (props) => {

  const dd_ans = useRef();
  const arrow = useRef();
  const { id, question, answer } = props;
  const navigate = useNavigate();


  const handleDelete = async()=>{
    try {
      confirmAlert({
        title: '',
        message: 'Are you sure to delete.',
        buttons: [
          {
            label: 'Yes',
            onClick: async() => {
              const response = await axios.delete(`http://localhost:5500/api/faqs/delete/${id}`);
            }
          },
          {
            label: 'No',
          }
        ]
      });
    } catch (error) {
      alert("some error occurred");
    }
  }

  return (
    <div className="group rounded-xl border border-gray-200 bg-gray-50 p-4 cursor-pointer transition-all duration-300">
      <dt ref={arrow} className='flex justify-between itmes-center' onClick={(e) => {
        arrow.current.children[1].classList.toggle('-rotate-180');
        dd_ans.current.classList.toggle('hidden');
        // console.log(arrow.current.children[1]);
      }}>
        <p className='font-semibold text-large'>{question}</p>
        <FaChevronUp className='' />
      </dt>
      <dd ref={dd_ans} className='hidden transition-all duration-300 mt-4'>
        <ReactQuill theme="snow" value={answer} readOnly={true} modules={{ toolbar: false }} className='' />
        <button className='text-xl mt-4 border px-4 py-1 bg-white rounded border-yellow-500 cursor-pointer hover:text-black hover:bg-yellow-300 transitions-all duration-300' onClick={(e)=>{
          navigate(`/update/${id}`);
        }}><div className='flex justify-center items-center gap-2'><GrEdit /> Edit</div></button>
        <button className='text-xl mx-2 border px-4 py-1 bg-white rounded border-red-500 cursor-pointer hover:text-black hover:bg-red-400 transitions-all duration-300'><div className='flex justify-center items-center gap-2' onClick={handleDelete}><MdDeleteForever /> Delete</div></button>
        {/* <button className='text-2xl mx-3'><MdDeleteForever /></button> */}
      </dd>
    </div>
  )
}

export default FAQ
