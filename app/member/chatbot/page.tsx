
import React from 'react'
import Chat from './chat'
export const runtime = 'edge'
const Chatbot = () => {
  return (
    <div className='sm:ml-64'>
      <div className="p-4">
   <div className="p-4 border-2 h-140 shadow-xl overflow-y-scroll border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
     <Chat/>
   </div>
</div>


    </div>
  )
}

export default Chatbot
