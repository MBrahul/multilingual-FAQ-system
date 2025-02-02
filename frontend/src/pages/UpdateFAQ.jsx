import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import Loader from '../components/Loader/Loader';


const UpdateFAQ = () => {
    const params = useParams();
    const [faq, setFaq] = useState();
    const [value, setValue] = useState('');
    const navigate = useNavigate();
    const getData = async () => {
        try {
            const response = await axios.get(`http://localhost:5500/api/faqs/get-by-id/${params.id}`);
            // console.log(response.data.data);
            setFaq(response.data.data);
            setValue(response.data.data.answer);
        } catch (error) {
            alert("some error occurred");
            navigate('/');
            console.log(error);
        }
    }


    const handleUpdate = async () => {
        try {
            const data = {
                question: faq.question,
                answer: value
            }
            const response = await axios.put(`http://localhost:5500/api/faqs/update/${params.id}`, data);
            // console.log(response.data);
            alert(response.data.msg);
            navigate('/');
        } catch (error) {
            alert("some error occurred");
            navigate('/');
        }
    }

    useEffect(() => {
        console.log(params);
        if (!params.id) {
            navigate('/');
        }
        else {
            getData();
        }
    }, [])

    return (
        <div className='mt-5 p-10'>
            <h2 className='font-semibold text-center'>Update FAQ</h2>
            {!faq && (<div className='text-center mt-5'> <Loader/> </div>)}
            {faq && (<>
                <div className="input-fields">
                    <label className='font-normal text-gray-500 text-xl' htmlFor="">Question</label>
                    <input className='border w-full p-3 rounded border-gray-300 outline-none' type="text" placeholder='' name='question' value={faq.question} onChange={(e) => {
                        setFaq({ ...faq, [e.target.name]: e.target.value });
                    }} />
                    <label className='font-normal text-gray-500 text-xl' htmlFor="">Answer</label>
                    <ReactQuill theme="snow" value={value} onChange={setValue} />
                </div>
                <button className='font-semibold  py-2 px-4 border mt-3 rounded cursor-pointer hover:bg-[#2d387a] hover:text-white transitions-all duration-300' onClick={() => {
                    handleUpdate();
                }}>Update</button>
            </>)}
        </div>
    )
}

export default UpdateFAQ
