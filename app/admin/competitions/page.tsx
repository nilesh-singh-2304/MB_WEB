
import React, { useEffect } from 'react'
import {Remfot} from '../remfot'
import { AddComp } from '../remfot'
import axios from 'axios'
import { EditComp } from '../remfot'
import { DelComp } from '../remfot'
import Link from 'next/link'
import { IoMdImage } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
export const runtime = 'edge'
// import { useRouter } from 'next/navigation'
const Comps = async() => {
    // const router = useRouter()
    let coms = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/comps`)
    let Data = coms.data
    let comps = Data.comps
    console.log(comps)
    // useEffect(() => {
    //     if(!localStorage.getItem("token")){
    //       router.push(`${process.env.NEXT_PUBLIC_HOST}/admin/login`)
    //     }
    // }, [])
  return (
    <div>
     
     <Remfot/>
     <div className="p-4 sm:ml-64">
   <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
     <p className='text-2xl text-center font-bold'>Admin Competition Section</p>
     <div className='flex mt-8'>
        <p className='w-2/3'>Here you an check and control all our competitions <br /> You can add , delete and edit the competitions</p>
        <AddComp/>
     </div>

     

<div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Image
                </th>
                <th scope="col" className="px-6 py-3">
                    Insta URL
                </th>
                <th scope="col" className="px-6 py-3">
                    Linkedin URL
                </th>
                <th scope="col" className="px-6 py-3">
                    Website URL
                </th>
                <th scope="col" className="px-6 py-3">
                    College 
                </th>
                <th scope="col" className="px-6 py-3">
                    Rank
                </th>
                <th scope="col" className="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
        {comps.map((item) => (
                
            
         <tr key={item._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                
                <th scope="row" className="px-6 overflow-hidden py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.name}
                </th>
                <td className="px-6 overflow-hidden py-4">
                    <Link href={item.image}><IoMdImage className='ml-1 text-3xl hover:text-primary' /></Link>
                </td>
                <td className="px-6 overflow-hidden py-4">
                <Link href={item.insta}><FaInstagramSquare className='ml-3 text-2xl hover:text-secondary' /></Link>
                </td>
                <td className="px-6 overflow-hidden py-4">
                <Link href={item.linkedin}><FaLinkedin className='ml-5 text-2xl hover:text-info' /></Link>
                </td>
                <td className="px-6 overflow-hidden py-4">
                <Link href={item.web}><IoSend className='ml-5 text-2xl hover:-rotate-12 transition' /></Link>
                </td>
                <td className="px-6 overflow-hidden py-4">
                    {item.college}
                </td>
                <td className="px-6 overflow-hidden py-4">
                    {item.rank}
                </td>
                <td className="flex items-center px-6 py-4">
                <div>
      
      <div>
      
      <label htmlFor={item.name} className=""><FaEdit  className='text-2xl cursor-pointer text-blue-500'/></label>
      

{/* Put this part before </body> tag */}
<input type="checkbox" id={item.name} className="modal-toggle" />
<div className="modal" role="dialog">
  <div className="modal-box">
    
  <EditComp naam={item.name}/>

<div className="modal-action">
      <label htmlFor={item.name} className="btn btn-outline btn-error">Close!</label>
    </div>
    
  </div>
</div>
    </div>
    </div>
                    
                    <div>
      <label htmlFor={item._id} className=""><MdDelete className='text-2xl cursor-pointer text-red-500 ml-4'/></label>

{/* Put this part before </body> tag */}
<input type="checkbox" id={item._id} className="modal-toggle" />
<div className="modal" role="dialog">
  <div className="modal-box">
    <h3 className="text-lg font-bold">Confirmation!!</h3>
    <p className="py-4">Do You Really want to delete this entry !?!</p>
    <div className="modal-action">
    <DelComp naam={item.name}/>
    <label htmlFor={item._id} className="btn btn-outline btn-error">No!</label>
    </div>
  </div>
</div>
    </div>
                    
                </td>
            </tr>
            ))}
        </tbody>
    </table>
</div>

   </div>
</div>

    </div>

  )
}

export default Comps
