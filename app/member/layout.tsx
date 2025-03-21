''
import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import { ImProfile } from "react-icons/im";
import { BsChatTextFill } from "react-icons/bs";
import { RxGithubLogo } from "react-icons/rx";
import { RiVideoAddFill } from "react-icons/ri";
import { GiBookshelf } from "react-icons/gi";
import { FaRobot } from "react-icons/fa6";
import { FaComputer } from "react-icons/fa6";
import { PiOfficeChairFill } from "react-icons/pi";
import { SiInternetcomputer } from "react-icons/si";
import { FaTasks } from "react-icons/fa";
import { MdSettingsSuggest } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import { ToastContainer, toast } from 'react-toastify';
import { redirect } from 'next/navigation';
import { Remfot } from "../admin/remfot";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)

{
 
  // if(!localStorage.getItem('token')){
  //   redirect(`${process.env.NEXT_PUBLIC_HOST}/admin/login`)
  // }
  return (
      
      <div>
        <Remfot/>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
  <div className="px-3 py-3 lg:px-5 lg:pl-3">
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-start rtl:justify-end">
        <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span className="sr-only">Open sidebar</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
               <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
         </button>
        <a href="https://flowbite.com" className="flex ms-2 md:me-24">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 me-3" alt="FlowBite Logo" />
          <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Flowbite</span>
        </a>
      </div>
      <div className="flex items-center">
          <div className="flex items-center ms-3">
            {/* <div>
            <Logout />
            </div> */}
            <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
              <div className="px-4 py-3" role="none">
                <p className="text-sm text-gray-900 dark:text-white" role="none">
                  Neil Sims
                </p>
                <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                  neil.sims@flowbite.com
                </p>
              </div>
              <ul className="py-1" role="none">
                <li>
                  <Link href={'/competitons'} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</Link>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  </div>
</nav>

<aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
   <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
      <ul className="space-y-2 font-medium">
         <li>
            <Link href={'/member'} className="flex  items-center px-2 py-1 text-gray-900 rounded-lg dark:text-white  hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <ImProfile className="text-xl" />
               <span className="ms-3 text-lg">Profile</span>
            </Link>
         </li>
         <li>
            <Link href={'/member/chat'} className="flex items-center px-2 py-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <BsChatTextFill  className="text-xl" />
               <span className="ms-3 text-lg">Group Chat</span>
            </Link>
         </li>
         <li>
            <Link href={'/member/blog'} className="flex items-center px-2 py-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <RxGithubLogo className="text-xl" />
               <span className="ms-3 text-lg">Tech Blogs</span>
            </Link>
         </li>
         <li>
            <Link href={'/member/session'} className="flex items-center px-2 py-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <RiVideoAddFill className="text-xl" />
               <span className="ms-3 text-lg">Video Session</span>
            </Link>
         </li>
         <li>
            <Link href={'/member/chatbot'} className="flex items-center px-2 py-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <FaRobot className="text-xl" />
               <span className="ms-3 text-lg">Chat Bot</span>
            </Link>
         </li>
         <div className="divider"></div>
         <li>
            <Link href={'/member/academics'} className="flex items-center px-2 py-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <GiBookshelf className="text-xl" />
               <span className="ms-3 text-lg">Academics</span>
            </Link>
         </li>
         <li>
            <Link href={'/member/career'} className="flex items-center px-2 py-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <FaComputer className="text-xl" />
               <span className="ms-3 text-lg">Career</span>
            </Link>
         </li>
         <li>
            <Link href={'/member/jobs'} className="flex items-center px-2 py-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <PiOfficeChairFill className="text-xl" />
               <span className="ms-3 text-lg">Jobs Section</span>
            </Link>
         </li>
         <li>
            <Link href={'/member/upcoming'} className="flex items-center px-2 py-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <SiInternetcomputer className="text-xl" />
               <span className="ms-3 text-lg">Upcoming Events</span>
            </Link>
         </li>
         <div className="divider"></div>
         <li>
            <Link href={'/member/tasks'} className="flex items-center px-2 py-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <FaTasks className="text-xl" />
               <span className="ms-3 text-lg">Tasks</span>
            </Link>
         </li>
         <li>
            <Link href={'/member/suggestions'} className="flex items-center px-2 py-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <MdSettingsSuggest className="text-xl" />
               <span className="ms-3 text-lg">Suggestions</span>
            </Link>
         </li>
         <li>
            <Link href={'/member/progress'} className="flex items-center px-2 py-1 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <GiProgression className="text-xl" />
               <span className="ms-3 text-lg">Progress</span>
            </Link>
         </li>
      </ul>
   </div>
</aside>
   {children}
      
      
      </div>
  );
}