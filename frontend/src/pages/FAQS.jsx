import React, { useEffect, useState } from 'react'
import FAQ from '../components/FAQ/FAQ'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Loader from '../components/Loader/Loader';

const FAQS = () => {
    const [data, setData] = useState(null);
    const [lang, setLang] = useState("en");
    const obj = [
        {
            lang: "English",
            code: "en"
        },
        {
            lang: "Hindi",
            code: "hi"
        },
        {
            lang: "Bangali",
            code: "bn"
        },
        {
            lang: "Gujrati",
            code: "gu"
        },
        {
            lang: "Telugu",
            code: "te"
        },
        {
            lang: "Marathi",
            code: "mr"
        }
    ];
    const getData = async () => {
        try {
            const response = await axios.get(`http://localhost:5500/api/faqs/?lang=${lang}`);
            // console.log(response.data.data);
            setData(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, [lang, data]);

    return (
        <>
            <div>
                <div className='p-5 flex justify-between'>
                    <h2 className='text-3xl font-semibold'>FAQS</h2>
                    <div className='flex gap-7'>
                        <select className='' name="" id="" onClick={(e) => {
                            setLang(e.target.value);
                        }}>
                            {obj.map((item, i) => (
                                <option value={item.code} key={i}>
                                    {item.lang}
                                </option>
                            ))}
                        </select>
                        <Link to={'/add'} className='py-2 px-4 rounded cursor-pointer border hover:bg-[#2d387a] hover:text-white transitions-all duration-300'>Add new</Link>
                    </div>
                </div>
                <div className='p-10 grid grid-cols-1 gap-5'>
                    {!data && (<div className='text-center'> <Loader/> </div>)}
                    {data && data.length === 0 && (<h1 className='text-center text-2xl text-zinc-600'> No Faq Found !</h1>)}
                    {data && data.map((faq, i) => {
                        return <FAQ key={faq._id} id={faq._id} question={faq.question ? faq.question : faq.question_translations[lang]} answer={faq.answer ? faq.answer : faq.answer_translations[lang]} />
                    })}
                </div>
            </div>
        </>
    )
}

export default FAQS
