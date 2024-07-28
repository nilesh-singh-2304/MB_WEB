'use client'
import { clear } from 'console'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FaEdit } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { useRouter } from 'next/navigation'


export const AddServ = () => {
  const router = useRouter()
  const [name, setname] = useState<string | null>('')
  const [whatsapp, setwhatsapp] = useState<string | null>('')
  const [email, setemail] = useState<string | null>('')
  const [image, setimage] = useState<string | null>('')
  const [desc, setdesc] = useState<string | null>('')
  const [charges, setcharges] = useState<string | null>('')

  useEffect(() => {
    console.log({ name, image, whatsapp, email , charges , desc  });
  }, [name, image, whatsapp, email , charges , desc  ]);

  const handleChange = (e)=>{
    const { name, value } = e.target;
    if(name == 'name'){
      setname(value)
      console.log(name)
    }else if(name == 'image'){
      setimage(value)
      console.log(image)
    }else if(name == 'whatsapp'){
      setwhatsapp(value)
      console.log(whatsapp)
    }else if(name == 'email'){
      setemail(value)
      console.log(email)
    }else if(name == 'desc'){
      setdesc(value)
      console.log(desc)
    }else if(name == 'charges'){
      setcharges(value)
      console.log(charges)
    }
}

  const handleSubmit = async(e)=>{
    e.preventDefault()
    let res = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/serv` , {
      name : name,
      image : image,
      whatsapp : whatsapp,
      email : email,
      desc : desc,
      charges : charges,
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

      setname('')
      setimage('')
      setwhatsapp('')
      setemail('')
      setdesc('')
      setcharges('')
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
      
      <label htmlFor="my_modal_51" className="btn text-xl font-semibold text-gray-200 btn-wide btn-warning glass"><FaPlusCircle/> Add Entry</label>
      

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_51" className="modal-toggle" />
<div className="modal" role="dialog">
  <div className="modal-box">
    

<form className="max-w-md mx-auto">
  <div className="relative z-0 w-full mb-5 group">
      <input value={name} onChange={handleChange} type="text" name="name" id="name" className=" block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder='' required />
      <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input value={image} onChange={handleChange} type="text" name="image" id="image" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="image" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image URL</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input value={whatsapp} onChange={handleChange} type="text" name="whatsapp" id="whatsapp" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="whatsapp" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Whatsapp URL</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input value={email} onChange={handleChange} type="text" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email URL</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input value={desc} onChange={handleChange} type="text" name="desc" id="desc" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="desc" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input value={charges} onChange={handleChange} type="text" name="charges" id="charges" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="charges" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Charges</label>
  </div>
  
  
  <div className="modal-action">
  <button onClick={handleSubmit} type="submit" className="btn btn-outline btn-info">Submit</button>
      <label htmlFor="my_modal_51" className="btn btn-outline btn-error">Close!</label>
    </div>
</form>

    
  </div>
</div>
    </div>
  )
}

export const EditServ = (naam) => {
  const router = useRouter()
  const [name, setname] = useState<string | null>('')
  const [whatsapp, setwhatsapp] = useState<string | null>('')
  const [email, setemail] = useState<string | null>('')
  const [image, setimage] = useState<string | null>('')
  const [desc, setdesc] = useState<string | null>('')
  const [charges, setcharges] = useState<string | null>('')
  


  useEffect(() => {
    fetchData()
    if(!localStorage.getItem("token") || localStorage.getItem("role") !== "admin"){
      router.push(`${process.env.NEXT_PUBLIC_HOST}/admin/login`)
    }
  }, [ router])

  const fetchData = async () => {
    let res = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/serv` , {
      action : "fetch",
      name : naam
    })
    let obj = res.data.data
    console.log(obj)
    setname(obj.name)
    setimage(obj.image)
    setwhatsapp(obj.whatsapp)
    setemail(obj.email)
    setdesc(obj.desc)
    setcharges(obj.charges)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    let res = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/serv` , {
      name : name,
      image : image,
      whatsapp : whatsapp,
      email : email,
      desc : desc,
      charges : charges,
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
    if(name == 'name'){
      setname(value)
      console.log(name)
    }else if(name == 'image'){
      setimage(value)
    }else if(name == 'whatsapp'){
      setwhatsapp(value)
    }else if(name == 'email'){
      setemail(value)
    }else if(name == 'desc'){
      setdesc(value)
    }else if(name == 'charges'){
      setcharges(value)
    }
  }
  return (
    
    <form className="max-w-md mx-auto">
    <div className="relative z-0 w-full mb-5 group">
        <input value={name} onChange={handleChange} type="text" name="name" id="name" className=" block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder='' required />
        <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
        <input value={image} onChange={handleChange} type="text" name="image" id="image" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="image" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image URL</label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
        <input value={whatsapp} onChange={handleChange} type="text" name="whatsapp" id="whatsapp" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="whatsapp" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Whatsapp URL</label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
        <input value={email} onChange={handleChange} type="text" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email URL</label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
        <input value={desc} onChange={handleChange} type="text" name="desc" id="desc" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="desc" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
        <input value={charges} onChange={handleChange} type="text" name="charges" id="charges" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="charges" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Charges</label>
    </div>
    <button onClick={handleSubmit} type="submit" className="btn btn-outline btn-info">Submit</button>
    
  </form>
  )
}

export const DelServ = (naam) => {
  const router = useRouter()
  const handleSubmit = async() => {
    let res = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/serv` , {
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
