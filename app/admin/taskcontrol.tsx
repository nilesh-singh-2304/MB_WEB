'use client'
import { clear } from 'console'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FaEdit } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { useRouter } from 'next/navigation' 


export const AddTask = () => {
  const router = useRouter()
  const [title, settitle] = useState<string | null>('')
  const [desc, setdesc] = useState<string | null>('')
  const [start, setstart] = useState<string | null>('')
  const [end, setend] = useState<string | null>('')
  const [category, setcategory] = useState<string | null>('')

  useEffect(() => {
    console.log({ title, desc, start, end , category });
  }, [title, desc, start, end , category ]);

  const handleChange = (e)=>{
    const { name, value } = e.target;
    if(name == 'title'){
      settitle(value)
      console.log(title)
    }else if(name == 'desc'){
      setdesc(value)
      console.log(desc)
    }else if(name == 'start'){
      setstart(value)
      console.log(start)
    }else if(name == 'end'){
      setend(value)
      console.log(end)
    }else if(name == 'category'){
      setcategory(value)
      console.log(category)
    }
}

  const handleSubmit = async(e)=>{
    e.preventDefault()
    let res = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/task` , {
      title : title, 
      desc : desc,
      start : start,
      end : end,
      category : category,
      action : "add"
    })
    // console.log(res)
    if(res.data.success){
      await toast.success('🦄 Wow so easy!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });

      settitle('')
      setdesc('')
      setstart('')
      setend('')
      setcategory('')
      router.refresh()
        
    }
    if(!res.data.success){
      toast.error('🦄 Wow so easy!', {
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
  }
  return (
    <div>
      
      <label htmlFor="my_modal_151" className="btn text-xl font-semibold text-gray-200 btn-wide btn-warning glass"><FaPlusCircle/> Add Entry</label>
      

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_151" className="modal-toggle" />
<div className="modal" role="dialog">
  <div className="modal-box">
    

<form className="max-w-md mx-auto">
  <div className="relative z-0 w-full mb-5 group">
      <input value={title} onChange={handleChange} type="text" name="title" id="title" className=" block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder='' required />
      <label htmlFor="title" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input value={desc} onChange={handleChange} type="text" name="desc" id="desc" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="desc" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input value={start} onChange={handleChange} type="text" name="start" id="start" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="start" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Start Date</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input value={end} onChange={handleChange} type="text" name="end" id="end" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="end" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Deadline</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input value={category} onChange={handleChange} type="text" name="category" id="category" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="category" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Category</label>
  </div>
  
  <div className="modal-action">
  <button onClick={handleSubmit} type="submit" className="btn btn-outline btn-info">Submit</button>
      <label htmlFor="my_modal_151" className="btn btn-outline btn-error">Close!</label>
    </div>
</form>

    
  </div>
</div>
    </div>
  )
}

export const EditTask = (naam) => {
  const router = useRouter()
  const [title, settitle] = useState<string | null>('')
  const [desc, setdesc] = useState<string | null>('')
  const [start, setstart] = useState<string | null>('')
  const [end, setend] = useState<string | null>('')
  const [category, setcategory] = useState<string | null>('')
  


  useEffect(() => {
    fetchData()
    if(!localStorage.getItem("token") || localStorage.getItem("role") !== "admin"){
      router.push(`${process.env.NEXT_PUBLIC_HOST}/admin/login`)
    }
  }, [ router])

  const fetchData = async () => {
    let res = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/task` , {
      action : "fetch",
      name : naam
    })
    let obj = res.data.data
    console.log(obj)
    settitle(obj.title)
    setdesc(obj.desc)
    setstart(obj.start)
    setend(obj.end)
    setcategory(obj.category)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    let res = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/task` , {
      title : title,
      desc : desc,
      start : start,
      end : end,
      category : category,
      Name : naam,
      action : "edit"
    })

    if(res.data.success){
      await toast.success('Successfully Edited!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
       console.log(res.data.success)
      router.refresh()
        
    }
    if(!res.data.success){
      toast.error('There was a problem!', {
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

  }
  const handleChange = (e) => {
    const { name, value } = e.target;

    if(name == 'title'){
      settitle(value)
      console.log(title)
    }else if(name == 'desc'){
      setdesc(value)
      console.log(desc)
    }else if(name == 'start'){
      setstart(value)
      console.log(start)
    }else if(name == 'end'){
      setend(value)
      console.log(end)
    }else if(name == 'category'){
      setcategory(value)
      console.log(category)
    }
  }
  return (
    
    <form className="max-w-md mx-auto">
    <div className="relative z-0 w-full mb-5 group">
        <input value={title} onChange={handleChange} type="text" name="title" id="title" className=" block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder='' required />
        <label htmlFor="title" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Title</label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
        <input value={desc} onChange={handleChange} type="text" name="desc" id="desc" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="desc" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
        <input value={start} onChange={handleChange} type="text" name="start" id="start" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="start" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Start Date</label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
        <input value={end} onChange={handleChange} type="text" name="end" id="end" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="end" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Deadline</label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
        <input value={category} onChange={handleChange} type="text" name="category" id="category" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="category" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Category</label>
    </div>
    
    <button onClick={handleSubmit} type="submit" className="btn btn-outline btn-info">Submit</button>
    
  </form>
  )
}

export const DelTask = (naam) => {
  const router = useRouter()
  const handleSubmit = async() => {
    let res = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/task` , {
      action : "delete",
      name : naam
    })
    if(res.data.success){
      await toast.success('Successfully Deleted!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      router.refresh()
    }
    if(!res.data.success){
      toast.error('🦄 Wow so easy!', {
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
  }
  return (
    
     <button onClick={handleSubmit} type="submit" className="btn btn-outline btn-info">Yes</button>
  )
}
