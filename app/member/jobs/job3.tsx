
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link';

const Jobth = async() => {
    

    const options = {
        method: 'POST',
        url: 'https://linkedin-jobs-scraper-api.p.rapidapi.com/jobs/trial',
        headers: {
          'x-rapidapi-key': 'efdbb399d6msh78a4b7750642cc8p197564jsnff76aecec8b1',
          'x-rapidapi-host': 'linkedin-jobs-scraper-api.p.rapidapi.com',
          'Content-Type': 'application/json'
        },
        data: {
          title: 'Software Engineer',
          location: 'Berlin',
          rows: 25
        }
      };
      
          try {
            const response = await axios.request(options);
          let blogs = response.data;
        //   console.log("blogs",blogs);
          } catch (error) {
            console.log(error)
          }
   
    
  return (
    <div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-3 mt-16 max-md:max-w-lg mx-auto">
          {blogs.map((item)=>{
            return(
                <div key={item.id} className="bg-gray-600 cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
            <img src='https://woz-u.com/wp-content/uploads/2020/02/What-Do-Software-Engineers-Do-WOZ-1-min.png' alt="Blog Post 1" className="w-full h-60 object-cover" />
            <div className="p-6">
              <span className="text-sm block text-gray-400 mb-2">Date : {item.publishedAt} | Location : {item.location}</span>
              <span>Role : {item.title}</span>
              <Link href={item.companyUrl}><p>Company : {item.company}</p> </Link>
              <Link href = {item.jobUrl}><button className="btn glass">Glass button</button> </Link> 

              
            </div>
          </div>
            )
          })}
        </div> */}
    </div>
  )
}

export default Jobth