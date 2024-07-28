import React from 'react'
import Job from './job'
import Jobo from './job1'
import Jobt from './job2'
import Jobth from './job3'

const Blogs = () => {
  return (
    <div className='flex sm:ml-64'>
        <div className='w-full'>
      <div className="p-4">
   <div className="p-2 border-2 h-150 shadow-xl overflow-y-scroll border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
   <div className="bg-gray-8000 font-[sans-serif] my-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-100 inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-pink-400 after:rounded-full">LATEST JOBS</h2>
        </div>
        {/* <Job/>
        <div className="px-5 divider"></div>
        <Jobo/>
        <Jobt/>
        <div className="px-5 divider"></div>
        <Jobth/> */}
      </div>
    </div>
   </div>
</div>
    </div>
    {/* <div className='w-1/4'>
      <div className="p-4">
   <div className="p-2 border-2 shadow-xl h-150 overflow-y-scroll border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
   </div>
</div>
    </div> */}
    </div>
  )
}

export default Blogs
