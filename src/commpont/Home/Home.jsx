import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
 
  
  return (
    <>
    
    <div className='home flex p-28  h-[450px] justify-center'>
      <div className=' text-center space-y-2'>
      <h2 className='text-white text-[30px] md:text-[60px] font-medium from-neutral-400'>Shop With Us</h2>
       <Link to={'/prodect'}>
       <button type="button" className="text-white   hover:text-white border border-green-400 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Show Products</button>

       </Link>
      </div>

    </div>
   
    
    </>
  )
}
