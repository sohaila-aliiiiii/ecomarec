import React from 'react'
import slide1 from '../../assets/s1.jpg'
import slide2 from '../../assets/s2.jpg'
import slide3 from '../../assets/s3.jpg'
import slide4 from '../../assets/s4.jpg'
import Slider from 'react-slick'
export default function Mainslider() {
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
  return (
    <>
    <div className="flex mx-auto flex-col md:flex-row container w-full md:w-1/2 p-12">
        <div className=" w-full md:w-1/2">
        <Slider {...settings}>
         <img src={slide1} className='w-full'/>
         <img src={slide2} className='w-full'/>
        </Slider>
        </div>
        <div className="w-full md:w-1/2 ">
        <img src={slide3} className='w-full'/>
        <img src={slide4} className='w-full'/>

        </div>

    </div>
      
    
    </>
  )
}
