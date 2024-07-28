
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link';

const Job = async() => {
    

    const options = {
      method: 'POST',
      url: 'https://jobs-search-api.p.rapidapi.com/getjobs',
      headers: {
        'x-rapidapi-key': 'efdbb399d6msh78a4b7750642cc8p197564jsnff76aecec8b1',
        'x-rapidapi-host': 'jobs-search-api.p.rapidapi.com',
        'Content-Type': 'application/json'
      },
      data: {
        search_term: 'web',
        location: 'mumbai',
        results_wanted: 5,
        site_name: [
          'indeed',
          'linkedin',
          'zip_recruiter',
          'glassdoor'
        ],
        distance: 50,
        job_type: 'fulltime',
        is_remote: false,
        linkedin_fetch_description: false,
        hours_old: 72
      }
    };
    
        const response = await axios.request(options);
        let data = response.data;
        let blogs = data.jobs;
        // console.log(blogs);
   
    
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-3 mt-16 max-md:max-w-lg mx-auto">
          {blogs.map((item)=>{
            return(
                <div key={item.id} className="bg-gray-600 cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
            <img src='https://d1m75rqqgidzqn.cloudfront.net/wp-data/2022/03/16180754/software-engineer-job-skills-1.jpg' alt="Blog Post 1" className="w-full h-60 object-cover" />
            <div className="p-6">
              <span className="text-sm block text-gray-400 mb-2">Job ID : {item.id} | Platform : {item.site}</span>
              <span>Role : {item.title}</span>
              <Link href = {item.company_url}><p>Company : {item.company}</p> </Link>
              <Link href = {item.job_url}><button className="btn glass">Glass button</button> </Link>

              
            </div>
          </div>
            )
          })}
        </div>
    </div>
  )
}

export default Job
