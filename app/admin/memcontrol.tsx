'use client'
import { clear } from 'console'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { FaPlusCircle } from "react-icons/fa";

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { useRouter } from 'next/navigation'


export const AddMem = () => {
  const router = useRouter()
  const [name, setname] = useState<string | null>('')
  const [branch, setbranch] = useState<string | null>('')
  const [batch, setbatch] = useState<string | null>('')
  const [image, setimage] = useState<string | null>('')
  const [bannerimg, setbannerimg] = useState<string | null>('')
  const [email, setemail] = useState<string | null>('')
  const [insta, setinsta] = useState<string | null>('')
  const [linkedin, setlinkedin] = useState<string | null>('')
  const [phone, setphone] = useState<string | null>('')
  const [role, setrole] = useState<string | null>('')
  const [tagline, settagline] = useState<string | null>('')
  const [mbid, setmbid] = useState<string | null>('')
  const [mbpass, setmbpass] = useState<string | null>('')

  useEffect(() => {
    console.log({ name, branch, batch, image, bannerimg, email, insta, linkedin, phone, role, tagline, mbid, mbpass });
  }, [name, branch, batch, image, bannerimg, email, insta, linkedin, phone, role, tagline, mbid, mbpass]);

  const handleChange = (e)=>{
    const { name, value } = e.target;
    if(name == 'name'){
      setname(value)
      console.log(name)
    }else if(name == 'branch'){
      setbranch(value)
      console.log(branch)
    }else if(name == 'batch'){
      setbatch(value)
      console.log(batch)
    }else if(name == 'image'){
      setimage(value)
      console.log(image)
    }else if(name == 'bannerimg'){
      setbannerimg(value)
      console.log(bannerimg)
    }else if(name == 'email'){
      setemail(value)
      console.log(email)
    }else if(name == 'insta'){
      setinsta(value)
      console.log(insta)
    }else if(name == 'linkedin'){
      setlinkedin(value)
      console.log(linkedin)
    }else if(name == 'phone'){
      setphone(value)
      console.log(phone)
    }else if(name == 'role'){
      setrole(value)
      console.log(role)
    }else if(name == 'tagline'){
      settagline(value)
      console.log(tagline)
    }else if(name == 'mbid'){
      setmbid(value)
      console.log(mbid)
    }else if(name == 'mbpass'){
      setmbpass(value)
      console.log(mbpass)
    }
}

  const handleSubmit = async(e)=>{
    e.preventDefault()
    let res = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/member` , {
      name : name,
      branch : branch,
      batch : batch,
      image : image,
      bannerimg : bannerimg,
      email : email,
      insta : insta,
      linkedin : linkedin,
      phone : phone,
      role : role,
      tagline : tagline,
      mbid : mbid,
      mbpass : mbpass,
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
      setbranch('')
      setbatch('')
      setimage('')
      setbannerimg('')
      setemail('')
      setinsta('')
      setlinkedin('')
      setphone('')
      setrole('')
      settagline('')
      setmbid('')
      setmbpass('')
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
<div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-5 group">
        <input value={name} onChange={handleChange} type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Member Name</label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
        <input value={branch} onChange={handleChange} type="text" name="branch" id="branch" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="branch" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Branch</label>
    </div>
</div>
<div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-5 group">
        <input value={batch} onChange={handleChange} type="text" name="batch" id="batch" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="batch" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Batch</label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
        <input value={image} onChange={handleChange} type="text" name="image" id="image" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="image" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image URL</label>
    </div>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-5 group">
        <input value={bannerimg} onChange={handleChange} type="text" name="bannerimg" id="bannerimg" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="bannerimg" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Banner Image</label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
        <input value={email} onChange={handleChange} type="text" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email Id</label>
    </div>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-5 group">
        <input value={insta} onChange={handleChange} type="text" name="insta" id="insta" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="insta" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Insta Id</label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
        <input value={linkedin} onChange={handleChange} type="text" name="linkedin" id="linkedin" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="linkedin" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Linked Id</label>
    </div>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-5 group">
        <input value={phone} onChange={handleChange} type="text" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone No.</label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
        <input value={role} onChange={handleChange} type="text" name="role" id="role" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="role" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Member Role</label>
    </div>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-5 group">
        <input value={tagline} onChange={handleChange} type="text" name="tagline" id="tagline" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="tagline" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tagline</label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
        <input value={mbid} onChange={handleChange} type="text" name="mbid" id="mbid" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="mbid" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">MB-Id</label>
    </div>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-5 group">
        <input value={mbpass} onChange={handleChange} type="text" name="mbpass" id="mbpass" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="mbpass" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">MB-Password</label>
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

export const EditMem = (mbid) => {
  const router = useRouter()
  const [name, setname] = useState<string | null>()
  const [branch, setbranch] = useState<string | null>('')
  const [batch, setbatch] = useState<string | null>('')
  const [image, setimage] = useState<string | null>('')
  const [bannerimg, setbannerimg] = useState<string | null>('')
  const [email, setemail] = useState<string | null>('')
  const [insta, setinsta] = useState<string | null>('')
  const [linkedin, setlinkedin] = useState<string | null>('')
  const [phone, setphone] = useState<string | null>('')
  const [role, setrole] = useState<string | null>('')
  const [tagline, settagline] = useState<string | null>('')
  const [mbpass, setmbpass] = useState<string | null>('')


  useEffect(() => {
    fetchData()
    // if(!localStorage.getItem("token") || localStorage.getItem("role") !== "admin"){
    //   router.push(`${process.env.NEXT_PUBLIC_HOST}/admin/login`)
    // } 
  }, [ router])

  const fetchData = async () => {
    let res = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/member` , {
      action : "fetch",
      mbid : mbid
    })
    let obj = res.data.data
    console.log(obj)
    setname(obj.name)
    setbranch(obj.branch)
    setbatch(obj.batch)
    setimage(obj.image)
    setbannerimg(obj.bannerimg)
    setemail(obj.email)
    setinsta(obj.insta)
    setlinkedin(obj.linkedin)
    setphone(obj.phone)
    setrole(obj.role)
    settagline(obj.tagline)
    setmbpass(obj.mbpass)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    let res = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/member` , {
      name : name,
      branch : branch,
      batch : batch,
      image : image,
      bannerimg : bannerimg,
      email : email,
      insta : insta,
      linkedin : linkedin,
      phone : phone,
      role : role,
      tagline : tagline,
      mbid : mbid,
      mbpass : mbpass,
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
      }else if(name == 'branch'){
        setbranch(value)
        console.log(branch)
      }else if(name == 'batch'){
        setbatch(value)
        console.log(batch)
      }else if(name == 'image'){
        setimage(value)
        console.log(image)
      }else if(name == 'bannerimg'){
        setbannerimg(value)
        console.log(bannerimg)
      }else if(name == 'email'){
        setemail(value)
        console.log(email)
      }else if(name == 'insta'){
        setinsta(value)
        console.log(insta)
      }else if(name == 'linkedin'){
        setlinkedin(value)
        console.log(linkedin)
      }else if(name == 'phone'){
        setphone(value)
        console.log(phone)
      }else if(name == 'role'){
        setrole(value)
        console.log(role)
      }else if(name == 'tagline'){
        settagline(value)
        console.log(tagline)
      }else if(name == 'mbpass'){
        setmbpass(value)
        console.log(mbpass)
      }
  }
  return (
   

<form className="max-w-md mx-auto">
<div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-5 group">
        <input value={name} onChange={handleChange} type="text" name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Member Name</label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
        <input value={branch} onChange={handleChange} type="text" name="branch" id="branch" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="branch" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Branch</label>
    </div>
</div>
<div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-5 group">
        <input value={batch} onChange={handleChange} type="text" name="batch" id="batch" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="batch" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Batch</label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
        <input value={image} onChange={handleChange} type="text" name="image" id="image" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="image" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image URL</label>
    </div>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-5 group">
        <input value={bannerimg} onChange={handleChange} type="text" name="bannerimg" id="bannerimg" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="bannerimg" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Banner Image</label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
        <input value={email} onChange={handleChange} type="text" name="email" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email Id</label>
    </div>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-5 group">
        <input value={insta} onChange={handleChange} type="text" name="insta" id="insta" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="insta" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Insta Id</label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
        <input value={linkedin} onChange={handleChange} type="text" name="linkedin" id="linkedin" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="linkedin" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Linked Id</label>
    </div>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-5 group">
        <input value={phone} onChange={handleChange} type="text" name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone No.</label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
        <input value={role} onChange={handleChange} type="text" name="role" id="role" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="role" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Member Role</label>
    </div>
  </div>
  <div className="grid md:grid-cols-2 md:gap-6">
    <div className="relative z-0 w-full mb-5 group">
        <input value={tagline} onChange={handleChange} type="text" name="tagline" id="tagline" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="tagline" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Tagline</label>
    </div>
    <div className="relative z-0 w-full mb-5 group">
        <input value={mbpass} onChange={handleChange} type="text" name="mbpass" id="mbpass" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label htmlFor="mbpass" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">MB-Password</label>
    </div>
  </div>
<button onClick={handleSubmit} type="submit" className="btn btn-outline btn-info">Submit</button>

</form>
  )
}

export const DelMem = (mbid) => {
  const router = useRouter()
  const handleSubmit = async() => {
    let res = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/member` , {
      action : "delete",
      mbid : mbid
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


export const Logout = () => {
  const router = useRouter()
  useEffect(() => {
    if(!localStorage.getItem("token")){
      router.push(`${process.env.NEXT_PUBLIC_HOST}/admin/login`)
    }
  }, [])
  const onClick = async() => {
    localStorage.removeItem("token")
    localStorage.removeItem("role")
    localStorage.removeItem("name")
    localStorage.removeItem("email")
    await router.push(`${process.env.NEXT_PUBLIC_HOST}/admin/login`)
    toast.success('Logout Successfully', {
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
  return (
    
    <button onClick={onClick} className="btn btn-error glass btn-wide">Logout</button>
  )
}