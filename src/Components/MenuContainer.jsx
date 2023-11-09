import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {BsHandbag} from 'react-icons/bs'
import { useSelector } from 'react-redux';
import Menu from './Menu';

function MenuContainer() {
    const userInfo = useSelector(state=>state.cart.userInfo)
    const cart = useSelector(state => state.cart.productData)
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <div className=" bg-white border-b-[1px] border-b-gray-600  top-0 left-0 sticky z-10 opacity-80 backdrop-blur-md shadow-lg">
      <div className="flex items-center  justify-between h-16 px-4 border-b border-solid border-slate-600">
        <div className="flex-shrink-0 font-bold tracking-wider">
        <Link to='/'>
          <h3 className="light-brown-gradient text-1xl ml-[1rem]  font-poppins cursor-pointer">
                LAEssentials
              </h3>
        </Link>
        </div>
      <div className='flex gap-4'>
      <Link to='Laessentials/cart'>
          <div className='relative  cursor-pointer'>
          <div className='text-4xl text-red-900 '>
                <BsHandbag/>
            </div>
            <div className='absolute top-[-0.4rem] right-[-1.2rem] w-8 h-8 rounded-full bg-red-700  font-lato font-semibold'>
               <p className='mt-1 text-white'>
                  {cart.length}
               </p>
            </div>
          </div>
          </Link>
           <Link to='/Laessentials/cart/login'>
           {
            userInfo ? <img src={userInfo.image} className='w-[3rem] h-[2.4rem] rounded-[100%] object-contain' alt="" />  
            :
            <div className='w-[3rem] h-[2.5rem] bg-orange-950 rounded-[100%]'>
           </div>
           }
           </Link>
           <p className='text-sm font-light underline underline-offset-2 mx-auto my-auto'>
           {
            userInfo && <p>{userInfo.name}</p>
           }
           </p>
        <button
          type="button"
          className="bg-gray-400 inline-flex items-center justify-center p-2 rounded-md text-orange-200 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
          onClick={() => setShowMobileMenu(!showMobileMenu)}>
          <svg
            className="h-6 w-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      </div>
      {showMobileMenu && <Menu />}
    </div>
  );
}

export default MenuContainer;