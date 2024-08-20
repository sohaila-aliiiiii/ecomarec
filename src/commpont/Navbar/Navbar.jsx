import React, { useContext } from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../../Context/UserContext'
import Login from '../Login/Login'
import { CartContext } from '../../Context/CartContext'



export default function Navbar() {
  let {userdata,setuserdata}=useContext(UserContext)
   let{items}=useContext(CartContext)
  let navigate=useNavigate()
   function logout()
   {
     localStorage.removeItem("usertoken")
     setuserdata(null)
     navigate("/login")

   }


  return (
    <>
       <Disclosure as="nav" className="bg-gray-800 fixed top-0 right-0 left-0 z-40">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex flex-shrink-0 items-center">
            <div ><i className="fa-solid fa-cart-shopping text-pink-200 "></i><h1 className='font-bold inline-block text-white'>FrechCart</h1></div>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              {userdata&&<ul className='flex space-x-4  text-white'>
             <li className='font-bold'><NavLink to=""><i className="fa-solid fa-house px-1"></i>Home</NavLink></li>
             <li className='font-bold'><NavLink to="prodect">Prodects</NavLink></li>
             <li className='font-bold'><NavLink to="brand">Brands</NavLink></li>
             <li className='font-bold'><NavLink to="category">Catrgories</NavLink></li>
             <li className='font-bold'><NavLink to="cart">Cart</NavLink></li>
             <li className='font-bold'><NavLink to="whish"><i className="fa-solid fa-heart"></i> Favorite</NavLink></li>
            </ul>}
            
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <div className="flex space-x-3 hidden md:block">
            <ul className='flex space-x-2 text-white '>
            
            {userdata?<><li  className='cursor-pointer'><span onClick={logout} className='font-bold cursor-pointer'>Logout</span></li>
            <li className='font-bold relative'><Link to="cart"><i className="fa-solid fa-cart-shopping fa-xl text-pink-200"></i><span className='absolute left-3 -top-[9px] bg-slate-500 rounded-md w-auto h-auto px-1 text-center'>{items?items.numOfCartItems:'0'}</span></Link></li>
            <li className='space-x-2  icons'>
            <i className='fab fa-facebook-f cursor-pointer'></i>
            <i className='fab fa-twitter cursor-pointer'></i>
            <i className='fab fa-instagram cursor-pointer'></i>
            <i className='fab fa-linkedin cursor-pointer'></i>
            </li>
            </>:<>  <li className='font-bold'><NavLink to="login">Login</NavLink></li>
              <li className='font-bold'><NavLink to="register">Register</NavLink></li></>}
           
            </ul>     
        </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
        <ul className='flex space-y-4 text-white flex-col'>
            
            {userdata&& <><li className='font-bold'><NavLink to="">Home</NavLink></li>
              <li className='font-bold'><NavLink to="prodect">Prodects</NavLink></li>
              <li className='font-bold'><NavLink to="brand">Brands</NavLink></li>
              <li className='font-bold'><NavLink to="category">Catrgories</NavLink></li>
             <li className='font-bold '><NavLink to="cart">Cart</NavLink></li>
             <li className='font-bold'><NavLink to="whish"><i className="fa-solid fa-heart"></i> Favorite</NavLink></li>
             <li className='font-bold relative '><Link to="cart"><i className="fa-solid fa-cart-shopping fa-xl text-pink-200"></i><span className='absolute left-3 -top-[9px] bg-slate-500 rounded-md w-auto h-auto px-1 text-center'>{items?items.numOfCartItems:'0'}</span></Link></li>
             </>} 
             <li className='space-x-2 icons'>
            <i className='fab fa-facebook-f cursor-pointer '></i>
            <i className='fab fa-twitter cursor-pointer '></i>
            <i className='fab fa-instagram cursor-pointer'></i>
            <i className='fab fa-linkedin cursor-pointer'></i>
            </li>  
             {userdata?<li onClick={logout} className='cursor-pointer '><span className='font-bold'>Logout</span></li>:<>
             <li className='font-bold'><NavLink to="login">Login</NavLink></li>
           <li className='font-bold'><NavLink to="register">Register</NavLink></li>
             </>
             }
            
            </ul>
        </div>
      </DisclosurePanel>
    </Disclosure>

    </>
  )
}
