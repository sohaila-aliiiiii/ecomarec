import React, { useContext, useEffect } from 'react'
import { CartContext } from '../../Context/CartContext'
import { Link } from 'react-router-dom'


export default function Allorders() {
    let{deletall}=useContext(CartContext)
    useEffect(()=>{deletall()},[])
  return (
    <>
    <div className='bg-[#F8F9FA] w-3/4 p-8 container mx-auto rounded-md my-6 md:h-[400px]'>
    <div className='flex flex-wrap justify-between'>
      <div className='space-y-3'>
      <h1 className='md:text-[32px] text-[30px]'> Your payment process is successful <i className="fa-solid fa-circle-check text-[#22DB14]"></i></h1>
      <Link to={'../'}> <button  type="button" className="block  mt-3 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-[#22DB14] focus:outline-none bg-white rounded-lg border border-[#22DB14] hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-[#22DB14] dark:hover:text-white dark:hover:bg-gray-700">Home</button>
      </Link>
      </div>
    </div>
    </div>
    
    </>
  )
}
