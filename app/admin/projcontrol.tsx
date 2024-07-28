'use client'
import { clear } from 'console'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { FaPlusCircle } from "react-icons/fa";

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { useRouter } from 'next/navigation'


export const AddProj = () => {
  const router = useRouter()
  const [name, setname] = useState<string | null>('')
  const [image, setimage] = useState<string | null>('')
  const [insta, setinsta] = useState<string | null>('')
  const [linkedin, setlinkedin] = useState<string | null>('')
  const [yout, setyout] = useState<string | null>('')
  const [drive, setdrive] = useState<string | null>('')
  const [onel, setonel] = useState<string | null>('')
  const [desc, setdesc] = useState<string | null>('')
  const [domain, setdomain] = useState<string | null>('')
  const [category, setcategory] = useState<string | null>('')
  const [motive, setmotive] = useState<string | null>('')
  const [disp, setdisp] = useState<string | null>('')
  const [projl, setprojl] = useState<string | null>('')

  useEffect(() => {
    console.log({ name, image, insta, linkedin, yout , drive, onel, desc, domain, category, motive, disp, projl,  });
  }, [name, image, insta, linkedin, yout , drive, onel, desc, domain, category, motive, disp, projl,  ]);

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
    }else if(name == 'yout'){
      setyout(value)
      console.log(yout)
    }else if(name == 'drive'){
      setdrive(value)
      console.log(drive)
    }else if(name == 'onel'){
      setonel(value)
      console.log(onel)
    }else if(name == 'desc'){
      setdesc(value)
      console.log(desc)
    }else if(name == 'domain'){
      setdomain(value)
      console.log(domain)
    }else if(name == 'category'){
      setcategory(value)
      console.log(category)
    }else if(name == 'motive'){
      setmotive(value)
      console.log(motive)
    }else if(name == 'disp'){
      setdisp(value)
      console.log(disp)
    }else if(name == 'projl'){
      setprojl(value)
      console.log(projl)
    }
}

  const handleSubmit = async(e)=>{
    e.preventDefault()
    let res = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/proj` , {
      name : name,
      image : image,
      insta : insta,
      linkedin : linkedin,
      yout : yout,
      drive : drive,
      onel : onel,
      desc : desc,
      domain : domain,
      category : category,
      motive : motive,
      disp : disp,
      projl : projl,
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
      setyout('')
      setdrive('')
      setonel('')
      setdesc('')
      setdomain('')
      setcategory('')
      setmotive('')
      setdisp('')
      setprojl('')
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
      
      <label htmlFor="my_modal_20" className="btn text-xl font-semibold text-gray-200 btn-wide btn-warning glass"><FaPlusCircle/> Add Entry</label>
      

{/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_20" className="modal-toggle" />
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
      <input value={yout} onChange={handleChange} type="text" name="yout" id="yout" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="yout" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Youtube Link</label>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-5 group">
        <input value={onel} onChange={handleChange} type="text" name="onel" id="onel" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="onel" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">One Liner</label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
        <input value={desc} onChange={handleChange} type="text" name="desc" id="desc" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="desc" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
    </div>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-5 group">
        <input value={drive} onChange={handleChange} type="text" name="drive" id="drive" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="drive" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Drive Link</label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
        <input value={domain} onChange={handleChange} type="text" name="domain" id="domain" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="domain" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Project Domain</label>
    </div>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-5 group">
        <input value={motive} onChange={handleChange} type="text" name="motive" id="motive" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="motive" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Project Motive</label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
        <input value={disp} onChange={handleChange} type="text" name="disp" id="disp" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="disp" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Displayed At</label>
    </div>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-5 group">
        <input value={category} onChange={handleChange} type="text" name="category" id="category" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="category" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Category</label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
        <input value={projl} onChange={handleChange} type="text" name="projl" id="projl" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="projl" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Project Lead</label>
    </div>
  </div>
  
  <div className="modal-action">
  <button onClick={handleSubmit} type="submit" className="btn btn-outline btn-info">Submit</button>
      <label htmlFor="my_modal_20" className="btn btn-outline btn-error">Close!</label>
    </div>
</form>

    
  </div>
</div>
    </div>
  )
}

export const EditProj = (naam) => {
  const router = useRouter()
  const [name, setname] = useState<string | null>()
  const [image, setimage] = useState<string | null>('')
  const [insta, setinsta] = useState<string | null>('')
  const [linkedin, setlinkedin] = useState<string | null>('')
  const [yout, setyout] = useState<string | null>('')
  const [drive, setdrive] = useState<string | null>('')
  const [onel, setonel] = useState<string | null>('')
  const [desc, setdesc] = useState<string | null>('')
  const [domain, setdomain] = useState<string | null>('')
  const [category, setcategory] = useState<string | null>('')
  const [motive, setmotive] = useState<string | null>('')
  const [disp, setdisp] = useState<string | null>('')
  const [projl, setprojl] = useState<string | null>('')


  useEffect(() => {
    fetchData()
    if(!localStorage.getItem("token") || localStorage.getItem("role") !== "admin"){
      router.push(`${process.env.NEXT_PUBLIC_HOST}/admin/login`)
    }
  }, [ router])

  const fetchData = async () => {
    let res = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/proj` , {
      action : "fetch",
      name : naam
    })
    let obj = res.data.data
    console.log(obj)
    setname(obj.name)
    setimage(obj.image)
    setinsta(obj.insta)
    setlinkedin(obj.linkedin)
    setyout(obj.yout)
    setdrive(obj.drive)
    setonel(obj.onel)
    setdesc(obj.desc)
    setdomain(obj.domain)
    setmotive(obj.motive)
    setdisp(obj.disp)
    setprojl(obj.projl)
    setcategory(obj.category)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    let res = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/proj` , {
      name : name,
      image : image,
      insta : insta,
      linkedin : linkedin,
      yout : yout,
      drive : drive,
      onel : onel,
      desc : desc,
      domain : domain,
      motive : motive,
      disp : disp,
      projl : projl,
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
    }else if(name == 'yout'){
      setyout(value)
    }else if(name == 'drive'){
      setdrive(value)
    }else if(name == 'onel'){
      setonel(value)
    }else if(name == 'desc'){
      setdesc(value)
    }else if(name == 'domain'){
      setdomain(value)
    }else if(name == 'motive'){
      setmotive(value)
    }else if(name == 'disp'){
      setdisp(value)
    }else if(name == 'projl'){
      setprojl(value)
    }else if(name == 'category'){
      setcategory(value)
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
    <input value={yout} onChange={handleChange} type="text" name="yout" id="yout" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
    <label htmlFor="yout" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Youtube Link</label>
</div>
<div className="grid md:grid-cols-2 md:gap-6">
  <div className="relative z-0 w-full mb-5 group">
      <input value={onel} onChange={handleChange} type="text" name="onel" id="onel" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="onel" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">One Liner</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input value={desc} onChange={handleChange} type="text" name="desc" id="desc" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="desc" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
  </div>
</div>
<div className="grid md:grid-cols-2 md:gap-6">
  <div className="relative z-0 w-full mb-5 group">
      <input value={drive} onChange={handleChange} type="text" name="drive" id="drive" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="drive" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Drive Link</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input value={domain} onChange={handleChange} type="text" name="domain" id="domain" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="domain" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Project Domain</label>
  </div>
</div>
<div className="grid md:grid-cols-2 md:gap-6">
  <div className="relative z-0 w-full mb-5 group">
      <input value={motive} onChange={handleChange} type="text" name="motive" id="motive" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="motive" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Project Motive</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input value={disp} onChange={handleChange} type="text" name="disp" id="disp" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="disp" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Displayed At</label>
  </div>
</div>
<div className="grid md:grid-cols-2 md:gap-6">
  <div className="relative z-0 w-full mb-5 group">
      <input value={category} onChange={handleChange} type="text" name="category" id="category" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="category" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Category</label>
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input value={projl} onChange={handleChange} type="text" name="projl" id="projl" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="projl" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Project Lead</label>
  </div>
</div>
<button onClick={handleSubmit} type="submit" className="btn btn-outline btn-info">Submit</button>

</form>
  )
}

export const DelProj = (naam) => {
  const router = useRouter()
  const handleSubmit = async() => {
    let res = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/proj` , {
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
