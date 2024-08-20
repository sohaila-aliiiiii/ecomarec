import React from 'react'

export default function Footer() {
  return (
    <>
    <div className='footer bg-[#1F2937] p-11'>
      <h2 className='text-white text-[30px] '>Get the FreshCart app</h2>
      <p className='text-gray-400'>We will send You a link, open it on your phone to downlod the app</p>
      <input className='rounded-md mt-2 p-1  w-full md:w-[70%]' placeholder='Email..'/>
      <button type="button" className="text-white md:ms-2 bg-green-400 mt-2 md:mt-0  hover:text-white border border-green-400 hover:bg-transparent focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">Share App Link</button>
      <h2 className='text-gray-400'>Get deliveries with FreshCart</h2>
      <button className='text-white bg-[#050708] px-3 py-2 rounded-md me-2  '>
      <i className="fa-brands  w-5 h-5 me-2 -ms-1 fa-apple"></i>App Store
      </button>
      <button className='text-white bg-[#050708] px-3 py-2 rounded-md '>
      <i className="fa-brands w-5 h-5 me-2 -ms-1 fa-google-play"></i>google play
      </button>

       
    </div>
    </>
  )
}
