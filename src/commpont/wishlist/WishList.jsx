import React, { useContext, useEffect,useState } from 'react'
import { CartContext } from '../../Context/CartContext'

function WishList() {
    let{getwhish,whish,deletwhish,addtocart,fav}=useContext(CartContext)
    const [loading, setLoading] = useState(true); 
      useEffect(() => {
      setLoading(true);  
      getwhish().finally(() => setLoading(false)); 
      }, [])
      const handleDelete = async (id) => {
        setLoading(true);
        await deletwhish(id);
        await getwhish(); 
        setLoading(false);
    };
      
  return (
    <>

         {loading ? 
         (<div className='text-center py-16 h-[300px] md:h-[600px] flex items-center justify-center'>
      <i className='fas fa-spinner fa-spin-pulse fa-4x'></i>
    </div>) :( whish?.data?.length>0 ?<div className='bg-[#F8F9FA] w-3/4 p-8 container mx-auto rounded-md my-6'>
            <div className='flex flex-wrap justify-between'>
           <div className='space-y-3'>
          <h1 className='text-[32px]'>My Favorite List </h1>
           </div>
           </div>
          
      {whish?.data?.map((p,i)=><div key={i} className='  pt-5'>
      <div className='flex flex-wrap justify-between ' >
       <img src={p.imageCover} className='w-full md:w-1/4 '/>
       <div className='mt-5 '>
       <h2 className='text-[20px] font-semibold'> {p.category?.name}</h2>
       <h2 className='text-[20px] text-[#22DB14]'>{p.price } EGP</h2>
       <button onClick={() => handleDelete(p.id)} className='text-[#DC3545] text-[16px]'><i className="fa-solid fa-trash"></i>Remove</button>       
        <button onClick={()=>addtocart(p.id)} type="button" className="block mt-3 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-[#22DB14] hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-[#22DB14] dark:hover:text-white dark:hover:bg-gray-700">Add To Cart</button>
      </div>
      </div>
      <div className='w-full h-[1px] bg-gray-400'></div>
    </div>
  )}
     </div>:
    <div className='bg-[#F8F9FA] w-3/4 p-8 container mx-auto rounded-md my-6 md:h-[400px]'>
    <div className='flex flex-wrap justify-between'>
      <div className='space-y-3'>
      <h1 className='text-[32px]'>My Favorite List </h1>
      <h1 className='text-[32px]'>your Favorite List is empty </h1>
      </div>
    </div>
    </div>
    )}     
         



        
      
    </>
  )
}

export default WishList