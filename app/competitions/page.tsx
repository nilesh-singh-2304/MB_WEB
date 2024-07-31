'use client';
import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
export const runtime = 'edge' 
const Competitions = async() => {
  
  let coms = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/comps`)
  let Data = coms.data
  let comps = Data.comps
  // console.log(comps)
  return (
    <div className="min-h-screen">
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
                <h1 className="py-8 text-center text-white font-bold font-manrope text-6xl font-bold lg:text-left leading-[70px]">
                  Competitions
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
                      <div className="stat-value">95%</div>
                      <div className="stat-title">of North Zone Conquered</div>
                      <div className="stat-desc text-secondary">
                        Next Target : South Zone
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

      {/* //competitions we have participated in */}
      <div className="mt-10">
        <p className="text-4xl mb-5 font-bold text-gray-100 text-center">
          Events We Conduct
        </p>

        <div className="font-[sans-serif] p-4 mx-28">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {comps.map((item) => (
            <div key={item._id} className="bg-gray-700 rounded-md overflow-hidden cursor-pointer">
              <div className="w-full overflow-hidden">
                <img
                  src={item.image}
                  alt="Product 1"
                  loading="lazy"
                  className="h-96 w-full object-cover object-top hover:scale-110 transition-all"
                />
                
              </div>

              <div className="p-6">
                <div className="mb-6 flex items-center justify-center flex-wrap gap-4">
                  <h3 className="text-xl text-center font-bold text-gray-100 ">
                    {item.name}
                  </h3>
                </div>
                <div className="flex">
                  <div className="flex flex-col mr-5">
                    <div className="text-xl font-bold">College : {item.college}</div>
                    <div className="text-xl font-bold">Rank : {item.rank}</div>
                    <div className="text-xl font-bold">Prize : {item.price}</div>
                  </div>
                  <div className="divider lg:divider-horizontal"></div>
                  
                  <div className="flex justify-center items-center">
                    <Link href={item.linkedin}><FaLinkedin className="text-3xl hover:text-info mr-1" /></Link>
                    <Link href={item.insta}> <FaInstagramSquare className="text-3xl hover:text-info ml-1" /></Link>
                    <Link href={item.web}> <IoSend className="text-3xl hover:-rotate-12 transition ease-in-out hover:text-info ml-2" /></Link>
                  </div>
                </div>
              </div>
            </div>
            ))}
      </div>
    </div>
      </div>
    </div>
  );
};

export default Competitions;
