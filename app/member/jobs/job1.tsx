
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link';

const Jobo = async() => {
    

    const options = {
        method: 'GET',
        url: 'https://jobs-api14.p.rapidapi.com/list',
        params: {
          query: 'Web Developer',
          location: 'United States',
          distance: '1.0',
          language: 'en_GB',
          remoteOnly: 'false',
          datePosted: 'month',
          employmentTypes: 'fulltime;parttime;intern;contractor',
          index: '0'
        },
        headers: {
          'x-rapidapi-key': 'efdbb399d6msh78a4b7750642cc8p197564jsnff76aecec8b1',
          'x-rapidapi-host': 'jobs-api14.p.rapidapi.com'
        }
      };
      
          try {
            const response = await axios.request(options);
          let blogs = response.data.jobs;
        //   console.log(blogs);
          } catch (error) {
            console.log(error)
          }
   
    
  return (
    <div>
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-3 mt-16 max-md:max-w-lg mx-auto">
          {blogs.map((item)=>{
            return(
                <div key={item.id} className="bg-gray-600 cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
            <img src='https://media.licdn.com/dms/image/D4E12AQEnNKiiNUKz9Q/article-cover_image-shrink_720_1280/0/1693476739453?e=2147483647&v=beta&t=vA7q5Jo23C2UXQE4FQ3lTlpB7ugmZa5QZzAfSQ5rQ-A' alt="Blog Post 1" className="w-full h-60 object-cover" />
            <div className="p-6">
              <span className="text-sm block text-gray-400 mb-2">Date : {item.datePosted} | Location : {item.location}</span>
              <span>Role : {item.title}</span>
              <p>Company : {item.company}</p> 
              <Link href = {item.jobProviders[0].url}><button className="btn glass">Glass button</button> </Link> 

              
            </div>
          </div>
            )
          })}
        </div> */}
    </div>
  )
}

export default Jobo
