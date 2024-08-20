import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import Mainslider from '../Mainslider/Mainslider'

export default function Product() {
    const [prodects, setprodects] = useState([])
    let{addtocart,addtowish,fav}=useContext(CartContext)
    async function GetProdects() {
      let {data}=await axios('https://ecommerce.routemisr.com/api/v1/products')
      setprodects(data.data)
      
    }
    useEffect(() => {
      GetProdects()
      const savedFavoriteProductIds = JSON.parse(localStorage.getItem('favoriteProductIds')) || [];
    setFavoriteProductIds(savedFavoriteProductIds);
   
      
    }, [])
    const [favoriteProductIds, setFavoriteProductIds] = useState([]);

  
  const handleFavoriteClick = (productId) => {
    let updatedFavoriteProductIds;
    if (favoriteProductIds.includes(productId)) {
      updatedFavoriteProductIds = favoriteProductIds.filter(id => id !== productId);
    } else {
      updatedFavoriteProductIds = [...favoriteProductIds, productId];
    }
    setFavoriteProductIds(updatedFavoriteProductIds);
    localStorage.setItem('favoriteProductIds', JSON.stringify(updatedFavoriteProductIds));

    addtowish(productId);
  };
  const [searchTerm, setSearchTerm] = useState('')
  const filteredProducts = prodects.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
   <>
    <div className='container p-4 mx-auto '>
    <h1 className='text-center text-[40px] text-[#4FA74F]'>All prodect</h1>
    <div className="flex justify-center">
    <input type='text' placeholder='search' value={searchTerm}  onChange={(e) => setSearchTerm(e.target.value)} className='w-3/4 rounded-md p-2 border border-[#4FA74F] my-3 mx-auto'/>

    </div>
     
                
    {filteredProducts.length?  <div className='flex p-4 flex-wrap container mx-auto justify-center'>
        {filteredProducts.map((p,i)=> <div key={i} className='product w-full md:w-1/4 lg:w-1/6 p-3'>
        <Link to={`/detalies/${p.id}/${p.category.name}`}>
        <img src={p.imageCover} className='w-full'/>
        <h2 className='text-main text-sm'>{p.category.name}</h2>
        <h2 className='font-medium'>{p.title.split(' ').slice(0,2).join(' ')}</h2>
        <div className="flex justify-between my-2">
          <h3>{p.price} EGP</h3>
          <h3><i className='fas fa-star text-yellow-500'></i>{p.ratingsAverage} </h3>
          </div>
        </Link>
        <i onClick={() => handleFavoriteClick(p.id)} className={`fa-solid fa-heart ${favoriteProductIds.includes(p.id) ? 'text-red-600' : 'text-black'}`}></i>
        <button onClick={()=>addtocart(p.id)} className="btn text-center rounded-md w-full md:opacity-0 mb-3 md:mb-0"><i className="fa-solid fa-cart-shopping text-pink-200 "></i></button>   
      </div>)}

      </div>:<div className='text-center py-16 h-[300px] md:h-[600px] flex items-center justify-center'>
      <i className='fas fa-spinner fa-spin-pulse fa-4x'></i>
    </div>}
    </div>
  
    </>
  )
}
