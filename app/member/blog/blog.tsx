
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link';

const Bblog = async() => {
    
    

   
        const options = {
            method: 'GET',
            url: 'https://ieee-spectrum-api.p.rapidapi.com/api',
            headers: {
              'x-rapidapi-key': 'efdbb399d6msh78a4b7750642cc8p197564jsnff76aecec8b1',
              'x-rapidapi-host': 'ieee-spectrum-api.p.rapidapi.com'
            }
          };
          
          
              const response = await axios.request(options);
             let blogs = response.data;
              console.log(blogs);
          
    
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-3 mt-16 max-md:max-w-lg mx-auto">
          {blogs.map((item)=>{
            return(
                <div key={item.newsTitle} className="bg-gray-600 cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
            <img src={item.newsImgSrc} alt="Blog Post 1" className="w-full h-60 object-cover" />
            <div className="p-6">
              <span className="text-sm block text-gray-400 mb-2">{item.newsDatePublished} | {item.newsTimetoRead}</span>
              <Link href = {item.newsUrl}><h3 className="text-xl hover:text-gray-400 font-bold text-gray-100">{item.newsTitle}</h3> </Link>

              
            </div>
          </div>
            )
          })}
        </div>
    </div>
  )
}

export default Bblog
