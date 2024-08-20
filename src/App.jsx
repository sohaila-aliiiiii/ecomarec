import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './commpont/Layout/Layout'
import Home from './commpont/Home/Home'
import Cart from './commpont/Cart/Cart'
import Login from './commpont/Login/Login'
import Register from './commpont/Register/Register'
import Notfound from './commpont/Notfound/Notfound'
import UserContextprovider from './Context/UserContext'
import ProtectedRoute from './commpont/ProtectedRoute/ProtectedRoute'
import Product from './commpont/Proudect/Product'
import ProdectDetalies from './commpont/ProdectDetalies/ProdectDetalies'
import CartContextprovider from './Context/CartContext'
import { Toaster } from 'react-hot-toast'
import WishList from './commpont/wishlist/WishList'
import Category from './commpont/Category/Category'
import Brands from './commpont/Brands/Brands'
import Checkout from './commpont/Checkout/Checkout'
import Password from './commpont/password/Password'
import Code from './commpont/password/Code'
import Newpass from './commpont/password/Newpass'
import Allorders from './commpont/Allorders/Allorders'

function App() {
let router=createBrowserRouter([{path:'', element:<Layout/>,children:[
  {index:true,element:<ProtectedRoute><Home/></ProtectedRoute>},
  {path:'cart',element:<ProtectedRoute><Cart/></ProtectedRoute>},
  {path:'prodect',element:<ProtectedRoute><Product/></ProtectedRoute>},
  {path:'whish',element:<ProtectedRoute><WishList/></ProtectedRoute>},
  {path:'category',element:<ProtectedRoute><Category/></ProtectedRoute>},
  {path:'checkout',element:<ProtectedRoute><Checkout/></ProtectedRoute>},
  {path:'allorders',element:<ProtectedRoute><Allorders/></ProtectedRoute>},
  {path:'brand',element:<ProtectedRoute><Brands/></ProtectedRoute>},
  {path:'detalies/:id/:category',element:<ProtectedRoute><ProdectDetalies/></ProtectedRoute>},
  {path:'login',element:<Login/>},
  {path:'pass',element:<Password/>},
  {path:'code',element:<Code/>},
  {path:'newpass',element:<Newpass/>},
  {path:'register',element:<Register/>},
  {path:'*',element:<Notfound/>}
]}])
  return (
    <>
    <CartContextprovider>
    <UserContextprovider>
    <RouterProvider router={router}></RouterProvider>
    <Toaster/>
    </UserContextprovider>
    </CartContextprovider>
    
     
    </>
  )
}

export default App
