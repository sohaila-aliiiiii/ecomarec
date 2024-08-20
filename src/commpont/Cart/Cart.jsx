import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../Context/CartContext'
import imgs from '../../assets/photo.jpg'
import { Link } from 'react-router-dom'

export default function Cart() {
  let{getcart,items,setitems,update,delet,deletall}=useContext(CartContext)
  const [cart, setcart] = useState(null)
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    setLoading(true);  
    getcart().finally(() => setLoading(false)); 
  }, [])
  const handleDelete = async (id) => {
    setLoading(true);
    await delet(id);
    await getcart(); 
    setLoading(false);
};
  
  
  return (
    <>
   {loading ? (<div className='text-center py-16 h-[300px] md:h-[600px] flex items-center justify-center'>
      <i className='fas fa-spinner fa-spin-pulse fa-4x'></i>
    </div>): 

   (items?.data?.products.length>0 ?<div className='bg-[#F8F9FA] w-3/4 p-8 container mx-auto rounded-md my-6'>
    <div className='flex flex-wrap justify-between'>
      <div className='space-y-3'>
      <h1 className='text-[32px]'>Cart Shop </h1>
     <h2 className='text-[20px]'>total price: <span className='text-[#22DB14]'>{items.data?.totalCartPrice} EGP</span></h2>
      </div>
      <div className='md:space-y-3'>
       <Link to={'../checkout'}><button className='p-3 rounded-md  text-white text-[20px] "text-white bg-blue-700 hover:bg-blue-800'>Check out</button></Link>
        <h2 className='text-[20px]'>total number of items:<span className='text-[#22DB14]'>{items?.numOfCartItems}</span></h2>
      </div>
    </div>
    {items?.data?.products?.map((p,i)=><div key={i} className='  pt-5'>
      <div className='flex flex-wrap justify-between ' >
       <img src={p.product.imageCover} className='w-full md:w-1/4 '/>
       <div className='mt-5 '>
       <h2 className='text-[20px] font-semibold'> {p.product?.category?.name}</h2>
       <h2 className='text-[20px] text-[#22DB14]'>{p.price * p.count} EGP</h2>
       <div className='flex space-x-2'>
        <button onClick={()=>update(p.count+1,p.product.id)} className='border h-[25px] border-[#22DB14] px-2 rounded-md'> + </button>
        <h1 className=''>{p.count}</h1>
        <button onClick={()=>update(p.count-1,p.product.id)} className='border h-[25px] border-[#22DB14] px-2 rounded-md'> - </button>
      </div>
       <button onClick={()=>handleDelete(p.product.id)} className='text-[#DC3545] text-[16px]'><i className="fa-solid fa-trash "></i>Remove</button>
      </div>
      </div>
      <div className='w-full h-[1px] bg-gray-400'></div>
    </div>
  )}
   <button type="button"onClick={()=> deletall()} className=" mt-3 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Clear All Cart</button>
    </div>:
    <div className='bg-[#F8F9FA] w-3/4 p-8 container mx-auto rounded-md my-6 md:h-[400px]'>
    <div className='flex flex-wrap justify-between'>
      <div className='space-y-3'>
      <h1 className='text-[32px]'>Cart Shop </h1>
      <h1 className='text-[32px]'>your cart is empty </h1>
      </div>
    </div>
    </div>
    )}


    </>
  )
}
