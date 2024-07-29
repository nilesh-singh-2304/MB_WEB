import React from 'react'
import { FaSquareWhatsapp } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import axios from 'axios';
import { QuerForm } from '../quercontrol';

const Services = async() => {
  // let coms = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/api/serv`)
  //   let Data = coms.data
  //   let comps = Data.comps
  //   console.log(comps)
  return (
    // <div>
    //   <section className="lg:pt-20 pt-0  lg:pl-8 h-full">
    //     <div className="rounded-2xl overflow-hidden m-5 lg:m-0 2xl:py-6 xl:py-8  lg:rounded-tl-2xl lg:rounded-bl-2xl ">
    //       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    //         <div className="grid grid-cols-1 gap-14 items-center lg:grid-cols-12 lg:gap32">
    //           <div className="w-full xl:col-span-5 lg:col-span-6 2xl:-mx-5 xl:-mx-0">
    //             <div className="flex items-center text-sm font-medium text-gray-500 justify-center lg:justify-start">
    //               <span className="bg-indigo-600 py-1 px-3 rounded-2xl text-xs font-medium text-white mr-3 ">
    //                 #1
    //               </span>
    //               Investment app
    //             </div>
    //             <h1 className="py-8 text-center text-white font-bold font-manrope text-6xl font-bold lg:text-left leading-[70px]">
    //               Competitions
    //             </h1>
    //             <p className=" text-gray-300 text-lg text-center lg:text-left">
    //               When you’re ready to invest, quickly execute your orders with
    //               Complex and outdated.
    //             </p>
    //           </div>
    //           <div className="">
    //             <div className="stats shadow">
    //               <div className="stat">
    //                 <div className="stat-figure text-primary">
    //                   <svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     fill="none"
    //                     viewBox="0 0 24 24"
    //                     className="inline-block h-8 w-8 stroke-current"
    //                   >
    //                     <path
    //                       strokeLinecap="round"
    //                       strokeLinejoin="round"
    //                       strokeWidth="2"
    //                       d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    //                     ></path>
    //                   </svg>
    //                 </div>
    //                 <div className="stat-title">Total Competitions</div>
    //                 <div className="stat-value text-primary">50+</div>
    //                 <div className="stat-desc">20+ in last month</div>
    //               </div>

    //               <div className="stat">
    //                 <div className="stat-figure text-secondary">
    //                   <svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     fill="none"
    //                     viewBox="0 0 24 24"
    //                     className="inline-block h-8 w-8 stroke-current"
    //                   >
    //                     <path
    //                       strokeLinecap="round"
    //                       strokeLinejoin="round"
    //                       strokeWidth="2"
    //                       d="M13 10V3L4 14h7v7l9-11h-7z"
    //                     ></path>
    //                   </svg>
    //                 </div>
    //                 <div className="stat-title">Competitions Won</div>
    //                 <div className="stat-value text-secondary">40+</div>
    //                 <div className="stat-desc">15 in last month</div>
    //               </div>

    //               <div className="stat">
    //                 <div className="stat-figure text-secondary"></div>
    //                 <div className="stat-value">95%</div>
    //                 <div className="stat-title">of North Zone Conquered</div>
    //                 <div className="stat-desc text-secondary">
    //                   Next Target : South Zone
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="w-full xl:col-span-7  lg:col-span-6 block">
    //             <div className="w-full  sm:w-auto lg:w-[60.8125rem] xl:ml-16">
    //               <img
    //                 src="https://pagedone.io/asset/uploads/1694846193.png"
    //                 alt="Dashboard image"
    //                 className="w-full  lg:h-auto "
    //               />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* //services list */}

    //   <div className="mt-10">
    //     <p className="text-4xl mb-5 font-bold text-gray-100 text-center">
    //       Events We Conduct
    //     </p>

    //     <div className="font-[sans-serif] p-4 mx-28">

    //   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    //     {comps.map((item) => (
          
       
    //   <div key={item._id} className="bg-gray-700 rounded-md overflow-hidden cursor-pointer">
    //           <div className="w-full overflow-hidden">
    //             <img
    //               src={item.image}
    //               alt="Product 1"
    //               loading="lazy"
    //               className="h-96 w-full object-cover object-top hover:scale-110 transition-all"
    //             />
    //           </div>

    //           <div className="p-6">
    //             <div className="mb-6 flex items-center justify-center flex-wrap gap-4">
    //               <h3 className="text-xl text-center font-bold text-gray-100 ">
    //                 {item.name}
    //               </h3>
    //             </div>
    //             <div className="flex">
    //             <label
    //                   htmlFor={item._id}
    //                   className="cursor-pointer btn btn-wide glass btn-secondary text-white"
    //                 >
    //                  View More !!
    //                 </label>
                  

    //               {/* Put this part before </body> tag */}
    //               <input
    //                 type="checkbox"
    //                 id={item._id}
    //                 className="modal-toggle"
    //               />
    //               <div className="modal" role="dialog">
    //                 <div className="modal-box w-11/12 max-w-5xl ">
                      
    //                   {/* <div className="divider mx-5"></div> */}
    //                   <div className="bg-gray-900 rounded-xl px-3 mt-3 py-3 font-[sans-serif]">
    //   <div className="container mx-auto p-6 bg-gray-800 rounded-lg shadow-md">
    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    //       <div className='rounded-3xl'>
    //         <img src={item.image} alt="Image" className="h-96 w-full rounded-xl object-cover object-top" />
    //       </div>
    //       <div>
    //         <h2 className="text-3xl font-extrabold text-info mb-4">{item.name}</h2>
    //         <p className="text-gray-100 text-sm leading-6">
    //          {item.desc}
    //         </p>
    //         <ul className="list-disc text-sm text-gray-200 space-y-2 pl-4 mt-6">
    //           <li>Charges : {item.charges}</li>
    //           <li>Must Contact One Month prior</li>
              
    //         </ul>
            
    //       </div>
    //     </div>
    //   </div>
    // </div>
    //                   <div className="modal-action">
    //                     <label htmlFor={item._id} className="btn btn-outline btn-error">
    //                       Close!
    //                     </label>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="divider lg:divider-horizontal"></div>
    //               <div className="flex justify-center items-center">
    //                 <FaSquareWhatsapp className="text-3xl hover:text-info mr-1" />
    //                 < SiGmail className="text-3xl hover:text-info ml-1" />
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //          ))}
    //   </div>
    // </div>
    //   </div>

    //   {/* //contact form */}

    //   <div className="mt-10">
    //     <p className="text-4xl mb-5 font-bold text-gray-100 text-center">
    //       Wanna explore a service !?
    //     </p>
    //     <div className="font-[sans-serif]">
    //       <div className="bg-gradient-to-r from-blue-700 to-blue-300 w-full h-60">
    //         <img
    //           src="https://readymadeui.com/cardImg.webp"
    //           alt="Banner Image"
    //           className="w-full h-full object-cover"
    //         />
    //       </div>

    //       <div className="-mt-28 mb-6 px-4">
    //         <div className="mx-auto max-w-6xl shadow-lg p-8 relative bg-gray-700 rounded-md">
    //           <h2 className="text-2xl text-gray-100 font-bold">
    //             Product or Service Inquiry
    //           </h2>

    //           {/* //form */}
              
    //           <QuerForm/>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div>hello</div>
  );
}

export default Services
