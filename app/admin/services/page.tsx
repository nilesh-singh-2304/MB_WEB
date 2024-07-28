
import React from 'react'
import {Remfot} from '../remfot'
import { AddServ } from '../servcontrol'
import axios from 'axios'
import { EditServ } from '../servcontrol'
import { DelServ } from '../servcontrol'
import Link from 'next/link'
import { IoMdImage } from "react-icons/io";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
const Comps = async() => {
    let coms = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/serv`)
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
        <AddServ/>
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
                    Whatsapp URL
                </th>
                <th scope="col" className="px-6 py-3">
                    Gmail URL
                </th>
                <th scope="col" className="px-6 py-3">
                    Description
                </th>
                <th scope="col" className="px-6 py-3">
                    Charges
                </th>
                <th scope="col" className="px-6 py-3">
                    Status
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
                <Link href={item.whatsapp}><FaSquareWhatsapp className='ml-3 text-2xl hover:text-secondary' /></Link>
                </td>
                <td className="px-6 overflow-hidden py-4">
                <Link href={item.email}><SiGmail className='ml-5 text-2xl hover:text-info' /></Link>
                </td>
                <td className="px-6 overflow-hidden py-4">
                    {item.desc}
                </td>
                <td className="px-6 overflow-hidden py-4">
                    {item.charges}
                </td>
                <td className="px-6 overflow-hidden py-4">
                    {item.name}
                </td>
                <td className="flex items-center px-6 py-4">
                <div>
      
      <div>
      
      <label htmlFor={item.name} className=""><FaEdit className='text-2xl cursor-pointer text-blue-500'/></label>
      

{/* Put this part before </body> tag */}
<input type="checkbox" id={item.name} className="modal-toggle" />
<div className="modal" role="dialog">
  <div className="modal-box">
    
  <EditServ naam={item.name}/>

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
    <DelServ naam={item.name}/>
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
