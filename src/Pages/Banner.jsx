import React from 'react'
import { useState } from 'react'
import Banner1 from '../assets/Banner1.svg'
import Banner2 from '../assets/Banner2.svg'
import Banner3 from '../assets/Banner3.svg'
import Banner4 from '../assets/Banner4.svg'
import {HiArrowRight, HiArrowLeft} from 'react-icons/hi'
function Banner() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const prevSlide=()=>{
        setCurrentSlide(currentSlide === 0 ? currentSlide : currentSlide -1 )
    }
    const nextSlide=()=>{
        setCurrentSlide(BannerData.length - 1 === currentSlide ? currentSlide : currentSlide + 1 )
    }
    const BannerData=[Banner3,Banner2,Banner1,Banner4]
  return (
    <div className='w-full h-auto overflow-x-hidden'>
        <div className='h-[29vh] w-[100%]  md:h-[500px] relative'>
        <div className='w-[400vw] h-full flex  transition-transform duration-1000 ease-in-out'
        style={{transform:`translateX(-${currentSlide * 100}vw)`}}
        >
                <div className='w-full mb-[4rem]'>
                <img src={BannerData[0]} alt=""  className='w-full h-full object-cover' loading='priority'/>
                </div>
                <div className='w-full  mb-[4rem]'>
                <img src={BannerData[1]} alt=""  className='w-full h-full object-cover' loading='priority'/>
                </div>
                <div className='w-full  mb-[4rem]'>
                <img src={BannerData[2]} alt=""  className='w-full h-full object-cover' loading='priority'/>
                </div>
                <div className='w-full  mb-[4rem]'>
                <img src={BannerData[3]} alt=""  className='w-full h-full object-cover' loading='priority'/>
                </div>  
            </div>
            <div className='absolute  bottom-0 mx-auto left-0 right-0 w-fit flex gap-12 '>
                    <div onClick={prevSlide} className='w-14 h-12 border cursor-pointer flex items-center justify-center hover:bg-gray-700 active:bg-gray-700 duration-300  hover:text-white border-gray-500'>
                    <HiArrowLeft/>
                    </div>
                    <div onClick={nextSlide} className='w-14 h-12 border cursor-pointer flex items-center justify-center hover:bg-gray-700 active:bg-gray-700 duration-300  hover:text-white border-gray-500'>
                    <HiArrowRight/>
                    </div>
                </div>
        </div>
        
    </div>
  )
}

export default Banner
