'use client'
import React, { useEffect, useState } from 'react'
import { Remfot } from '../remfot'
import Link from 'next/link'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation'

const Login = () => {
    const [mbid, setmbid] = useState<string | null>('')
    const [mbpass, setmbpass] = useState<string | null>('')
    const router = useRouter()

    useEffect(() => {
      console.log(mbid , mbpass)
      if(localStorage.getItem("token") && localStorage.getItem("role") == "admin"){
        router.push(`${process.env.NEXT_PUBLIC_HOST}/admin`)
      }
    }, [mbid, mbpass])

    const handleChange = (e)=>{
      const { name, value } = e.target;
      if(name == 'mbid'){
        setmbid(value)
      }else if(name == 'mbpass'){
        setmbpass(value)
      }
    }

    const handleSubmit = async (e)=>{
      e.preventDefault()
      let res = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/member` , {
        mbid : mbid,
        mbpass : mbpass,
        action : "login",
        role : "admin"
      })
      console.log(res.data)
      if(res.data.success){
        localStorage.setItem("name" , res.data.name)
        localStorage.setItem("email" , res.data.email)
        localStorage.setItem("token" , res.data.token)
        localStorage.setItem("role" , res.data.role)
        await toast.success('Admin Found', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
            setTimeout(() => {
                router.push(`${process.env.NEXT_PUBLIC_HOST}/admin`)
              }, 1500);
      }
      else{
        await toast.error('Admin Not Found', {
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
        <Remfot/>

        <div className="p-4 sm:ml-64">
   <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
   <div className="font-[sans-serif] z-50">
      <div className="grid lg:grid-cols-2 gap-4 max-lg:gap-12 bg-[url('https://m.media-amazon.com/images/M/MV5BMTJiNjBlYjgtYWVhYy00YWRiLWFkYzEtY2IxNzQ1OWI2NTZkXkEyXkFqcGdeQXVyMTQ4Mjk2NTA2._V1_.jpg')] px-8 py-12 h-[320px]">
        <div>
          <a href="javascript:void(0)"><img
            src="https://readymadeui.com/readymadeui-white.svg" alt="logo" className='w-40' />
          </a>
          <div className="max-w-lg mt-16 max-lg:hidden">
            <h3 className="text-3xl font-bold text-white">Admin Login</h3>
            <p className="text-sm mt-4 text-white">Embark on a seamless journey as you sign in to your account. Unlock a realm of opportunities and possibilities that await you.</p>
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl border border-gray-500 sm:px-6 px-4 py-8 max-w-md w-full h-max shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] max-lg:mx-auto">
          <form>

            <div className="mb-8">
              <h3 className="text-3xl font-extrabold text-gray-80">Admin Login</h3>
            </div>
            

            <div>
              <label className="text-gray-80 font-bold text-sm mb-2 block">MB-Id</label>
              <div className="relative flex items-center">
                <input onChange={handleChange} value={mbid} name="mbid" type="text" required className="w-full text-sm text-gray-50 border border-white px-4 py-3 rounded-md outline-blue-600" placeholder="Enter user name" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4" viewBox="0 0 24 24">
                  <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                  <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                </svg>
              </div>
            </div>
            <div className="mt-8">
              <label className="text-gray-80 font-bold text-sm mb-2 block">MB-Password</label>
              <div className="relative flex items-center">
                <input onChange={handleChange} value={mbpass} name="mbpass" type="password" required className="w-full text-sm text-gray-50 border border-white px-4 py-3 rounded-md outline-blue-600" placeholder="Enter password" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                  <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                </svg>
              </div>
            </div>

            <div className="mt-12">
              <button onClick={handleSubmit} type="button" className="w-full shadow-xl py-3 px-6 text-sm font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                Log in
              </button>
            </div>
            <p className="text-sm mt-8 text-center text-gray-80">Are You a member !?                   <Link href={`${process.env.NEXT_PUBLIC_HOST}/member/login`} className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">Login Here</Link></p>
          </form>
        </div>
      </div>
    </div>
   </div>
</div>
      
    </div>
  )
}

export default Login
