import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Brands() {
    const [brands, setbrands] = useState(null)
    async function getbrands() {
        try{
            let {data}=await axios(`https://ecommerce.routemisr.com/api/v1/brands`)
            setbrands(data.data)
            console.log(data.data)
        }
        catch(err)
        {
            console.log(err)
        }
      
        
    }
    useEffect(() => {
       getbrands()
    }, [])
    
  return (
    <>
 
    <div className='container mx-auto p-4'>
     <h1 className='text-center text-[40px] text-[#4FA74F]'>All Brands</h1>
     {brands?.length?  <div className="flex flex-wrap ">
        {brands?.map((p,i)=><div key={i} className='p-4 text-center w-1/4  '>
            <div className='border border-gray-500 brand hover:shadow-lg hover:shadow-[#4FA74F]'>
            <img src={p.image} className='w-full'/>
            <h1 className='pb-3'>{p.name}</h1>
            </div>

        </div>)}

     </div>:<div className='text-center py-16 h-[300px] md:h-[600px] flex items-center justify-center'>
      <i className='fas fa-spinner fa-spin-pulse fa-4x'></i>
    </div>}

    </div>
    
    
    </>
  )
}