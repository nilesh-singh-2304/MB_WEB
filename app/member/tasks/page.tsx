import React from 'react'
import { MdOutlineAddTask } from "react-icons/md";
import axios from 'axios'

const Tasks = async() => {
  let tasks = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/task`)
    let Data = tasks.data
    let task = Data.comps
    console.log(task)
  return (
    <div>
      <div className='sm:ml-64 flex'>
      <div className="p-4 w-full">
   <div className="p-4 border-2 h-150 overflow-y-scroll border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
   <div className="bg-transparent px-4 py-12 font-[sans-serif]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-gray-50 sm:text-4xl text-2xl font-extrabold text-center mb-16">Tasks of the Week</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 max-md:max-w-lg mx-auto gap-8">
          {task.map((item) => (
            <div key={item._id} className="p-6 cursor-pointer flex gap-6 bg-opacity-25 bg-[url('https://e0.pxfuel.com/wallpapers/670/19/desktop-wallpaper-ben-10-symbols-ben-10-omniverse-omnitrix.jpg')] rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all">
            <MdOutlineAddTask className='text-6xl'/>
            <div>
              <h3 className="text-gray-50 text-2xl font-extrabold mb-3">{item.title}</h3>
              <p className="text-gray-200 text-sm">{item.desc}</p>
              <div className='mt-3'>
              <p className='text-gray-200 text-xs'>Task Started : {item.start}</p>
              <p className='text-gray-200 text-xs'>Deadline : {item.end}</p>
              </div>
            </div>
          </div>
          ))}
          
        </div>
      </div>
    </div>
   </div>
</div>
    </div>
    </div>
  )
}

export default Tasks
