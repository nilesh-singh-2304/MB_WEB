
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link';

const Bblog = async() => {
    
    const options = {
        method: 'POST',
        url: 'https://newsnow.p.rapidapi.com/',
        headers: {
          'x-rapidapi-key': 'efdbb399d6msh78a4b7750642cc8p197564jsnff76aecec8b1',
          'x-rapidapi-host': 'newsnow.p.rapidapi.com',
          'Content-Type': 'application/json'
        },
        data: {
          text: 'Top news',
          region: 'wt-wt',
          max_results: 25
        }
      };
      
      
          const response = await axios.request(options);
          let data = response.data;
          let blogs = data.news;
          console.log(response.data);
      
          
    
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-3 mt-16 max-md:max-w-lg mx-auto">
          {blogs.map((item)=>{
            return(
                <div key={item.title} className="bg-gray-600 cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
            <img src={item.image} alt="Blog Post 1" className="w-full h-60 object-cover" />
            <div className="p-6">
              <span className="text-sm block text-gray-400 mb-2">{item.date} | {item.source}</span>
              <Link href = {item.url}><h3 className="text-xl hover:text-gray-400 font-bold text-gray-100">{item.title}</h3> </Link>

              
            </div>
          </div>
            )
          })}
        </div>
    </div>
  )
}

export default Bblog