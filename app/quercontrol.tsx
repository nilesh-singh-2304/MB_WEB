'use client'
import React, { useEffect, useState } from 'react'
import { FaLinkedin } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
export const QuerForm = () => {
    const [name, setname] = useState<string | null>('')
    const [email, setemail] = useState<string | null>('')
    const [phone, setphone] = useState<string | null>('')
    const [desc, setdesc] = useState<string | null>('')
    const [category, setcategory] = useState<string | null>('')
    const [servreq, setservreq] = useState<string | null>('')
    const [noofday, setnoofday] = useState<string | null>('')
    const [college, setcollege] = useState<string | null>(``)

    useEffect(() => {
      console.log({ name, email, phone, desc, category, servreq, noofday, college });
    }, [name, email, phone, desc, category, servreq, noofday, college]);

    const handleChange = (e)=>{
      const { name, value } = e.target;
      if(name == 'name'){
        setname(value)
        console.log(name)
      }else if(name == 'email'){
        setemail(value)
        console.log(email)
      }else if(name == 'phone'){
        setphone(value)
        console.log(phone)
      }else if(name == 'desc'){
        setdesc(value)
        console.log(desc)
      }else if(name == 'category'){
        setcategory(value)
        console.log(category)
      }else if(name == 'servreq'){
        setservreq(value)
        console.log(servreq)
      }else if(name == 'noofday'){
        setnoofday(value)
        console.log(noofday)
      }else if(name == 'college'){
        setcollege(value)
        console.log(college)
      }
    }

    const handleSubmit = async (e) => {
      e.preventDefault();
      const res = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/query`, {
        name: name,
        email: email,
        phone: phone,
        desc: desc,
        category: 'ServiceQuery',
        servreq: servreq,
        noofday: noofday,
        college: college
      })

      if(res.data.success){
        await toast.success('Query Submited !', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
      }
      setname('')
      setemail('')
      setphone('')
      setdesc('')
      setcategory('')
      setservreq('')
      setnoofday('')
      setcollege('')
    }
  return (
    <div>
      <form className="mt-8 grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-gray-100 text-sm block mb-2">
                    Your Name
                  </label>
                  <input
                    name="name"
                    onChange={handleChange}
                    value={name}
                    type="text"
                    placeholder="Enter Name"
                    className="w-full rounded-md py-2.5 px-4 border bg-gray-600 border-gray-800 text-white text-sm outline-[#007bff]"
                  />
                </div>
                <div>
                  <label className="text-gray-100 text-sm block mb-2">
                    Your Email
                  </label>
                  <input
                    name="email"
                    onChange={handleChange}
                    value={email}
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-md py-2.5 px-4 border bg-gray-600 border-gray-800 text-white text-sm outline-[#007bff]"
                  />
                </div>
                <div>
                  <label className="text-gray-100 text-sm block mb-2">
                    Your Number
                  </label>
                  <input
                    name="phone"
                    onChange={handleChange}
                    value={phone}
                    type="phone"
                    placeholder="Phone No."
                    className="w-full rounded-md py-2.5 px-4 border bg-gray-600 border-gray-800 text-white text-sm outline-[#007bff]"
                  />
                </div>
                <div>
                  <label className="text-gray-100 text-sm block mb-2">
                    College/Organisation Name and Location
                  </label>
                  <input
                    name="college"
                    onChange={handleChange}
                    value={college}
                    type="text"
                    placeholder="eg. YMCA Faridabad , Mathura Road Faridabad , Haryana"
                    className="w-full rounded-md py-2.5 px-4 border bg-gray-600 border-gray-800 text-white text-sm outline-[#007bff]"
                  />
                </div>
                <div>
                  <label className="text-gray-100 text-sm block mb-2">
                    Service Required
                  </label>
                  <input
                    name="servreq"
                    onChange={handleChange}
                    value={servreq}
                    type="text"
                    placeholder="eg. YMCA Faridabad , Mathura Road Faridabad , Haryana"
                    className="w-full rounded-md py-2.5 px-4 border bg-gray-600 border-gray-800 text-white text-sm outline-[#007bff]"
                  />
                </div>
                <div>
                  <label className="text-gray-100 text-sm block mb-2">
                    Need Service within
                  </label>
                  <input
                    name="noofday"
                    onChange={handleChange}
                    value={noofday}
                    type="text"
                    placeholder="eg. 10 Days"
                    className="w-full rounded-md py-2.5 px-4 border bg-gray-600 border-gray-800 text-white text-sm outline-[#007bff]"
                  />
                </div>
                <div className="col-span-full">
                  <label className="text-gray-100 text-sm block mb-2">
                    Description
                  </label>
                  <input
                    name="desc"
                    onChange={handleChange}
                    value={desc}
                    type="text"
                    className="w-full h-10 pb-5 text-wrap rounded-md px-4 border bg-gray-600 border-gray-800 text-white text-sm pt-3 outline-[#007bff]"
                  />
                </div>

                <button onClick={handleSubmit} className="btn btn-wide glass text-white text-lg btn-info">
                  Submit <IoSend className="text-xl" />
                </button>
              </form>
    </div>
  )
}


