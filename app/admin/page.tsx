'use client'
import React, { useEffect } from 'react'
import {Remfot} from './remfot'
import { useRouter } from 'next/navigation'

const Admin = () => {
  const router = useRouter()
  useEffect(() => {
    if(!localStorage.getItem("token") || localStorage.getItem("role") !== "admin"){
      router.push(`${process.env.NEXT_PUBLIC_HOST}/admin/login`)
    }
  }, [ router])
  return (
    <div>
    <Remfot/>



<div className="p-4 sm:ml-64">
   <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
     
   </div>
</div>

    </div>
  )
}

export default Admin
