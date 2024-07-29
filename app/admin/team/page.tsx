'use client'
import React from 'react'
import {Remfot} from '../remfot'
import { AddMem } from '../memcontrol'
import axios from 'axios'
import { EditMem } from '../memcontrol'
import { DelMem } from '../memcontrol'
import Link from 'next/link'
import { IoMdImage } from "react-icons/io";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
const Comps = async() => {
    let coms = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/member`)
    let Data = coms.data
    let comps = Data.comps
    console.log(comps)
  return (
    <div>
     
     <Remfot/>
     <div className="p-4 sm:ml-64">
   <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
     <p className='text-2xl text-center font-bold'>Admin Competition Section</p>
     <div className='flex mt-8'>
        <p className='w-2/3'>Here you an check and control all our competitions <br /> You can add , delete and edit the competitions</p>
        <AddMem/>
     </div>

     

<div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Branch
                </th>
                <th scope="col" className="px-6 py-3">
                    Batch
                </th>
                <th scope="col" className="px-6 py-3">
                    Role
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Phone
                </th>
                <th scope="col" className="px-6 py-3">
                    MB-Id
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
                    {item.branch}
                </td>
                <td className="px-6 overflow-hidden py-4">
                {item.batch}
                </td>
                <td className="px-6 overflow-hidden py-4">
                {item.role}
                </td>
                <td className="px-6 overflow-hidden py-4">
                {item.email}
                </td>
                <td className="px-6 overflow-hidden py-4">
                    {item.phone} 
                </td>
                <td className="px-6 overflow-hidden py-4">
                    {item.mbid}
                </td>
                <td className="flex items-center px-6 py-4">
                <div>
      
      <div>
      
      <label htmlFor={item.mbpass} className=""><FaEdit className='text-2xl cursor-pointer text-blue-500'/></label>
      

{/* Put this part before </body> tag */}
<input type="checkbox" id={item.mbpass} className="modal-toggle" />
<div className="modal" role="dialog">
  <div className="modal-box">
    
  <EditMem mbid={item.mbid}/>

<div className="modal-action">
      <label htmlFor={item.mbpass} className="btn btn-outline btn-error">Close!</label>
    </div>
    
  </div>
</div>
    </div>
    </div>
                    
                    <div>
      <label htmlFor={item.mbid} className=""><MdDelete className='text-2xl cursor-pointer text-red-500 ml-4'/></label>

{/* Put this part before </body> tag */}
<input type="checkbox" id={item.mbid} className="modal-toggle" />
<div className="modal" role="dialog">
  <div className="modal-box">
    <h3 className="text-lg font-bold">Confirmation!!</h3>
    <p className="py-4">Do You Really want to delete this entry !?!</p>
    <div className="modal-action">
    <DelMem mbid={item.mbid}/>
    <label htmlFor={item.mbid} className="btn btn-outline btn-error">No!</label>
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
