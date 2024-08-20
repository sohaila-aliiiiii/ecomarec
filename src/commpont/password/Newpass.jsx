import React, { useContext, useState } from 'react'

import { useFormik } from 'formik'
import * as Yub from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'
import { CartContext } from '../../Context/CartContext'

export default function Newpass() {
    let navigate=useNavigate()
    const [loding, setloding] = useState(false)


    async function newpassword(values) {   
        try{
            setloding(true)        

         let {data}=await axios.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword',values)
         console.log(data)
         navigate('/login')
        
         setloding(false)        

        
       
        }
        catch(err)
        {
            setloding(false)        

          console.log(err)
   
        }
     
   }


  let formik=useFormik({
    initialValues:{
      
       email:'',
       newPassword:'',
      
      
    },
    onSubmit:newpassword
  })
  return (
    <>
    <div className='bg-register py-20 flex items-center justify-center'>
        <div className='bg-white rounded-md p-4  md:w-1/2 shadow-2xl'>
            <h1 className='text-[#3AAF9F] pb-4 text-center font-bold text-3xl '>update password</h1>
        <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto">
        <div className="relative z-0 w-full mb-5 group">
        <input type="email" name="email" id="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your email</label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
        <input type="password" name="newPassword" id="newPassword" value={formik.values.newPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label htmlFor="newPassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">new Password</label>
        </div>
    
        <div className="flex justify-center ">
        {loding?  <button type="button" className="text-white bg-slate-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
         <i className='fas fa-spinner fa-spin-pulse'></i>
       </button>: <button type="submit" className="w-full md:px-20 text-white bg-[#3AAF9F] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Continuo</button>
        }       
       
        </div>
       </form>

        </div>
    </div>
    </>
  )
}


