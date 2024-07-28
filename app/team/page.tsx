import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from 'next/link';
import axios from 'axios';

const Team = async() => {

  let res = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/member` , {
    action : "find",
    role : 'sec'
  })
  console.log(res.data.data)
  let sec = res.data.data

  let resp = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/member` , {
    action : "find",
    role : 'jsec'
  })
  console.log(resp.data.data)
  let jsec = resp.data.data

  let respo = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/api/member` , {
    action : "find",
    role : 'mem'
  })
  console.log(respo.data.data)
  let mem = respo.data.data
  return (
    <div>
      <section className="lg:pt-20 pt-0  lg:pl-8 h-full">
        <div className="rounded-2xl overflow-hidden m-5 lg:m-0 2xl:py-6 xl:py-8  lg:rounded-tl-2xl lg:rounded-bl-2xl ">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-14 items-center lg:grid-cols-12 lg:gap32">
              <div className="w-full xl:col-span-5 lg:col-span-6 2xl:-mx-5 xl:-mx-0">
                <div className="flex items-center text-sm font-medium text-gray-500 justify-center lg:justify-start">
                  <span className="bg-indigo-600 py-1 px-3 rounded-2xl text-xs font-medium text-white mr-3 ">
                    #1
                  </span>
                  Investment app
                </div>
                <h1 className="py-8 text-center text-white font-manrope text-6xl font-bold lg:text-left leading-[70px]">
                  Our Team
                </h1>
                <p className=" text-gray-300 text-lg text-center lg:text-left">
                  When you’re ready to invest, quickly execute your orders with
                  Complex and outdated.
                </p>
               
              </div>
              <div className="">
                  <div className="stats shadow">
                    <div className="stat">
                      <div className="stat-figure text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="inline-block h-8 w-8 stroke-current"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          ></path>
                        </svg>
                      </div>
                      <div className="stat-title">Total Competitions</div>
                      <div className="stat-value text-primary">50+</div>
                      <div className="stat-desc">20+ in last month</div>
                    </div>

                    <div className="stat">
                      <div className="stat-figure text-secondary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          className="inline-block h-8 w-8 stroke-current"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          ></path>
                        </svg>
                      </div>
                      <div className="stat-title">Competitions Won</div>
                      <div className="stat-value text-secondary">40+</div>
                      <div className="stat-desc">15 in last month</div>
                    </div>

                    <div className="stat">
                      <div className="stat-figure text-secondary">
                      </div>
                      <div className="stat-value">100%</div>
                      <div className="stat-title">Placement of 24 Batch</div>
                      <div className="stat-desc text-secondary">
                        Majority 25 doing Internships
                      </div>
                    </div>
                  </div>
                </div>
              <div className="w-full xl:col-span-7  lg:col-span-6 block">
                <div className="w-full  sm:w-auto lg:w-[60.8125rem] xl:ml-16">
                  <img
                    src="https://pagedone.io/asset/uploads/1694846193.png"
                    alt="Dashboard image"
                    className="w-full  lg:h-auto "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* //Secrateries */}
      <div className=" py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-xl px-4 md:px-8">
    {/* <!-- text - start --> */}
    <div className="mb-10 md:mb-16">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-100 md:mb-6 lg:text-3xl">Secrateries</h2>
    </div>
    {/* <!-- text - end --> */}

    <div className="grid grid-cols-2  gap-x-4 gap-y-8 md:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
      {/* <!-- person - start --> */}
      {sec.map((item) => (
        <div key={item._id} className='bg-gray-700 p-3 rounded-xl border border-gray-500'>
        <div className="mb-2 h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg sm:mb-4 sm:h-60 md:h-80">
          <img src={item.image} loading="lazy" alt="Photo by Radu Florin" className="h-full w-full object-cover hover:scale-110 transition object-top" />
        </div>

        <div>
          <div className="font-bold text-indigo-500 md:text-lg">{item.name}</div>
          <p className="mb-3 text-sm text-gray-500 md:mb-4 md:text-base">{item.tagline}</p>

          {/* <!-- social - start --> */}
          <div className="flex">
            <div className="flex">
              <Link href={item.linkedin} ><FaLinkedin  className='text-2xl hover:text-secondary' /></Link>
              <Link href={item.insta} ><FaInstagramSquare className='text-2xl ml-1 hover:text-secondary' /></Link>
              {/* <Link href="#" ><FaSquareXTwitter className='text-2xl ml-1 hover:text-secondary' /></Link> */}

              
            </div>
          </div>
          {/* <!-- social - end --> */}
        </div>
      </div>
      ))}
       
      
    </div>
  </div>
</div>

      {/* //Joint Secrateries */}
      <div className=" py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-xl px-4 md:px-8">
    {/* <!-- text - start --> */}
    <div className="mb-10 md:mb-16">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-100 md:mb-6 lg:text-3xl">Joint Secrateries</h2>
    </div>
    {/* <!-- text - end --> */}

    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
      {/* <!-- person - start --> */}
      {jsec.map((item) => (
        
      
      <div key={item._id} className="flex flex-col items-center rounded-lg bg-gray-700 border border-gray-500 p-4 lg:p-4">
        <div className="mb-2 h-24 w-24 overflow-hidden rounded-lg bg-gray-200 shadow-lg md:mb-4 md:h-40 md:w-40">
          <img src={item.image} loading="lazy" alt="Photo by Radu Florin" className="h-full w-full hover:scale-110 transition object-cover object-top" />
        </div>

        <div>
          <div className="text-center font-bold text-indigo-500 md:text-lg">{item.name}</div>
          <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">{item.tagline}</p>

          {/* <!-- social - start --> */}
          <div className="flex justify-center">
            <div className="flex gap-4">
            <Link href={item.linkedin} ><FaLinkedin  className='text-2xl hover:text-secondary' /></Link>
              <Link href={item.insta} ><FaInstagramSquare className='text-2xl ml-1 hover:text-secondary' /></Link>
              {/* <Link href="#" ><FaSquareXTwitter className='text-2xl ml-1 hover:text-secondary' /></Link> */}
            </div>
          </div>
          {/* <!-- social - end --> */}
        </div>
      </div>
      ))}
    </div>
  </div>
</div>

      {/* //members */}
      <div className=" py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-xl px-4 md:px-8">
    {/* <!-- text - start --> */}
    <div className="mb-10 md:mb-16">
      <h2 className="mb-4 text-center text-2xl font-bold text-gray-100 md:mb-6 lg:text-3xl">Proud Members</h2>
    </div>
    {/* <!-- text - end --> */}

    <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 lg:gap-x-8 lg:gap-y-12">
      {/* <!-- person - start --> */}
      {mem.map((item) => (
      <div key={item._id} className="flex flex-col items-center">
        <div className='border border-gray-500 p-5 px-8 rounded-xl bg-gray-700'>
        <div className="mb-2 ml-1 h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:mb-4 md:h-32 md:w-32">
          <img src={item.image} loading="lazy" alt="Photo by Radu Florin" className="h-full w-full hover:scale-110 transition cursor-pointer object-cover object-top" />
        </div>

        <div>
          <div className="text-center font-bold text-indigo-500 md:text-lg">{item.name}</div>
          <p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">{item.tagline}</p>

          {/* <!-- social - start --> */}
          <div className="flex justify-center">
            <div className="flex gap-4">
            <Link href={item.linkedin} ><FaLinkedin  className='text-2xl hover:text-secondary' /></Link>
              <Link href={item.insta} ><FaInstagramSquare className='text-2xl ml-1 hover:text-secondary' /></Link>
              {/* <Link href="#" ><FaSquareXTwitter className='text-2xl ml-1 hover:text-secondary' /></Link> */}
            </div>
          </div>
          {/* <!-- social - end --> */}
        </div>
        </div>
      </div>
      ))}
    </div>
  </div>
</div>
    </div>
  )
}

export default Team
