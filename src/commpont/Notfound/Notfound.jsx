import React from 'react'
import n from '../../assets/notfounf.jpg'


export default function Notfound() {
  return (
    <>
    <div className=' w-3/4 p-8 container mx-auto rounded-md my-6 md:h-[400px] '>
    <div className='flex flex-wrap justify-center'>
      <div className='space-y-3 text-center flex flex-col items-center justify-center'>
        <img src={n} className='w-[200px]'/>
      <h1 className='md:text-[32px] text-[30px]'> Not Found Page! </h1>
    
      </div>
    </div>
    </div>
    
    </>
  )
}
