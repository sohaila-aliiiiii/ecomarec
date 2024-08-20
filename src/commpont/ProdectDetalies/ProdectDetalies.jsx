import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Slider from "react-slick";
import { CartContext } from '../../Context/CartContext';


export default function ProdectDetalies() {
  let{category,id}= useParams()
  let{addtocart}=useContext(CartContext)

  const [proudect, setproudect] = useState({})
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows:false,
  autoplay:true,
  autoplaySpeed:1000,
};
var setting = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows:false,
  autoplay:true,
  autoplaySpeed:1000,
};
  async function GetProdectdetalies(id) {
    let{data}=await axios(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    setproudect(data.data)
    console.log(data)
  
  }
  const [products, setproducts] = useState([])
  const [CAtegories, setCAtegories] = useState([])
  async function Category(category) {
    
      let {data}=await axios('https://ecommerce.routemisr.com/api/v1/products')
      setproducts(data.data) 
     const filtercategories=data.data.filter((p)=>p.category.name===category)
      console.log(filtercategories)
      setCAtegories(filtercategories)
      
    
    
  }
  useEffect(() => {
      GetProdectdetalies(id)
      Category(category)
  }, [])
  return (
    <>
    {proudect.title?<>
      <div className="flex flex-col md:flex-row  items-center py-10">
     <div className="w-full md:w-1/4 p-4">
     {proudect.images.length>1 ?  <Slider {...settings}>
     {proudect.images?.map((imge,i)=> <img key={i} src={imge} className='w-full'/>)}
    </Slider> : <img  src={proudect.imageCover} className='w-full'/>}
    
     </div>
     <div className="w-full md:w-3/4">
     <div>
      <h2 className='text-[23px] md:text-[32px]'>{proudect.title}</h2>
      <p className='my-6 text-gray-500'>{proudect.description}</p>
      <h3>{proudect.category?.name}</h3>
      <div className="flex justify-between my-2">
        <h3>{proudect.price} EGP</h3>
        <h3><i className='fas fa-star text-yellow-500'></i>{proudect.ratingsAverage} </h3>
      </div>
      <button onClick={()=>addtocart(id)} className="btn text-center rounded-md w-full "><i className="fa-solid fa-cart-shopping text-pink-200 "></i></button>
     </div>
    </div>
    </div>
    <div className='p-4 '>
      <h1 className='text-[25px] md:text-[30px]'>More prodect of {category}</h1>
      <Slider {...setting}>
     {CAtegories.map((c,i)=><img key={i} src={c.imageCover} className='w-full md:h-[270px] p-4 bg-slate-800 ' />)}
    </Slider>
    </div>
    </>:<div className='text-center py-16 h-[300px] md:h-[600px] flex items-center justify-center'>
      <i className='fas fa-spinner fa-spin-pulse fa-4x'></i>
    </div>}
     
    </>
  )
}
