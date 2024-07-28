'use client'
import { clear } from 'console'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { FaEdit } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { useRouter } from 'next/navigation'

export const Remfot = () => {
  return (
    <div>
      <style jsx global>{`
         navbar{
           display: none;
         }
        footer{
          display: none;
        }
      `}</style>
    </div>
  )
}

export const AddComp = () => {
  const router = useRouter()
  const [name, setname] = useState<string | null>()
  const [image, setimage] = useState<string | null>('')
  const [insta, setinsta] = useState<string | null>('')
  const [linkedin, setlinkedin] = useState<string | null>('')
  const [web, setweb] = useState<string | null>('')
  const [college, setcollege] = useState<string | null>('')
  const [rank, setrank] = useState<string | null>('')
  const [price, setprice] = useState<string | null>('')
  const [month, setmonth] = useState<string | null>('')

  useEffect(() => {
    console.log({ name, image, insta, linkedin, web, college, rank, price, month });
  }, [name, image, insta, linkedin, web, college, rank, price, month]);

  const handleChange = (e)=>{
    const { name, value } = e.target;
    if(name == 'name'){
      setname(value)
      console.log(name)
    }else if(name == 'image'){
      setimage(value)
      console.log(image)
    }else if(name == 'insta'){
      setinsta(value)
      console.log(insta)
    }else if(name == 'linkedin'){
      setlinkedin(value)
      console.log(linkedin)
    }else if(name == 'web'){
      setweb(value)
      console.log(web)
    }else if(name == 'college'){
      setcollege(value)
      console.log(college)
    }else if(name == 'rank'){
      setrank(value)
      console.log(rank)
    }else if(name == 'price'){
      setprice(value)
      console.log(price)
    }else if(name == 'month'){
      setmonth(value)
      console.log(month)
    }
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    let res = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/comps` , {
      name : name,
      image : image,
      insta : insta,
      linkedin : linkedin,
      web : web,
      college : college,
      rank : rank,
      price : price,
      month : month,
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
      setinsta('')
      setlinkedin('')
      setweb('')
      setcollege('')
      setrank('')
      setprice('')
      setmonth('')
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
      
      <label htmlFor="my_modal_6" className="btn text-xl font-semibold text-gray-200 btn-wide btn-warning glass"><FaPlusCircle/> Add Entry</label>
      

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_6" className="modal-toggle" />
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
      <input value={insta} onChange={handleChange} type="text" name="insta" id="insta" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="insta" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Instagram Post Link</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input value={linkedin} onChange={handleChange} type="text" name="linkedin" id="linkedin" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="linkedin" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Linkedin URL</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input value={web} onChange={handleChange} type="text" name="web" id="web" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="web" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Competition Website</label>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-5 group">
        <input value={college} onChange={handleChange} type="text" name="college" id="college" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="college" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">College Name</label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
        <input value={rank} onChange={handleChange} type="text" name="rank" id="rank" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="rank" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Rank Secured</label>
    </div>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-5 group">
        <input value={price} onChange={handleChange} type="text" name="price" id="price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="price" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price Money</label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
        <input value={month} onChange={handleChange} type="text" name="month" id="month" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="month" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Month/Year</label>
    </div>
  </div>
  
  <div className="modal-action">
  <button onClick={handleSubmit} type="submit" className="btn btn-outline btn-info">Submit</button>
      <label htmlFor="my_modal_6" className="btn btn-outline btn-error">Close!</label>
    </div>
</form>

    
  </div>
</div>
    </div>
  )
}

export const EditComp = (naam) => {
  const router = useRouter()
  const [name, setname] = useState<string | null>()
  const [image, setimage] = useState<string | null>('')
  const [insta, setinsta] = useState<string | null>('')
  const [linkedin, setlinkedin] = useState<string | null>('')
  const [web, setweb] = useState<string | null>('')
  const [college, setcollege] = useState<string | null>('')
  const [rank, setrank] = useState<string | null>('')
  const [price, setprice] = useState<string | null>('')
  const [month, setmonth] = useState<string | null>('')

  useEffect(() => {
    fetchData()
    if(!localStorage.getItem("token")){
      router.push(`${process.env.NEXT_PUBLIC_HOST}/admin/login`)
    }
  }, [ router])

  const fetchData = async () => {
    let res = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/comps` , {
      action : "fetch",
      name : naam
    })
    let obj = res.data.data
    console.log(obj.name)
    setname(obj.name)
    setimage(obj.image)
    setinsta(obj.insta)
    setlinkedin(obj.linkedin)
    setweb(obj.web)
    setcollege(obj.college)
    setrank(obj.rank)
    setprice(obj.price)
    setmonth(obj.month)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    let res = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/comps` , {
      name : name,
      image : image,
      insta : insta,
      linkedin : linkedin,
      web : web,
      college : college,
      rank : rank,
      price : price,
      month : month,
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
      console.log(image)
    }else if(name == 'insta'){
      setinsta(value)
      console.log(insta)
    }else if(name == 'linkedin'){
      setlinkedin(value)
      console.log(linkedin)
    }else if(name == 'web'){
      setweb(value)
      console.log(web)
    }else if(name == 'college'){
      setcollege(value)
      console.log(college)
    }else if(name == 'rank'){
      setrank(value)
      console.log(rank)
    }else if(name == 'price'){
      setprice(value)
      console.log(price)
    }else if(name == 'month'){
      setmonth(value)
      console.log(month)
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
        <input value={insta} onChange={handleChange} type="text" name="insta" id="insta" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="insta" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Instagram Post Link</label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
        <input value={linkedin} onChange={handleChange} type="text" name="linkedin" id="linkedin" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="linkedin" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Linkedin URL</label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
        <input value={web} onChange={handleChange} type="text" name="web" id="web" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="web" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Competition Website</label>
    </div>
    <div className="grid md:grid-cols-2 md:gap-6">
      <div className="relative z-0 w-full mb-5 group">
          <input value={college} onChange={handleChange} type="text" name="college" id="college" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="college" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">College Name</label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
          <input value={rank} onChange={handleChange} type="text" name="rank" id="rank" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="rank" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Rank Secured</label>
      </div>
    </div>
    <div className="grid md:grid-cols-2 md:gap-6">
      <div className="relative z-0 w-full mb-5 group">
          <input value={price} onChange={handleChange} type="text" name="price" id="price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="price" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price Money</label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
          <input value={month} onChange={handleChange} type="text" name="month" id="month" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="month" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Month/Year</label>
      </div>
    </div>
    <button onClick={handleSubmit} type="submit" className="btn btn-outline btn-info">Submit</button>
    
  </form>
  )
}

export const DelComp = (naam) => {
  const router = useRouter()
  const handleSubmit = async() => {
    let res = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/comps` , {
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
