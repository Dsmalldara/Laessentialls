import { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import {BsHandbag} from 'react-icons/bs'
import { useSelector } from "react-redux";
import { MdPerson2 } from "react-icons/md";

function NavbarSm() {
    const cart = useSelector(state => state.cart.productData)
    const userInfo = useSelector(state=>state.cart.userInfo)
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white border-b-[1px] border-b-gray-600 z-10 opacity-95 backdrop-blur-md shadow-lg sticky top-0 left-0 block md:hidden">
            <div className="flex items-center justify-between h-16 px-4 sm:px-6">
                <div className="flex items-center">
                    <button
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white sm:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                        <svg
                            className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
                <div className="flex gap-[1.5rem] mr-[1rem]">
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
            <div className='w-[3.2rem] h-[2.7rem] border-2  rounded-[100%]'>
              <MdPerson2 className='text-4xl w-[3rem] h-[2.5rem]  rounded-[100%]'/>
           </div>
           }
           </Link>
           </div>
            </div>

            <Transition
                show={isOpen}
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="absolute inset-x-0 top-0 p-2 transition transform origin-top-right sm:hidden">
                    <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="px-5 pt-4 flex items-center justify-between">
                            <div>
                                <img
                                    className="h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                    alt="Workflow"
                                />
                            </div>
                            <div className="-mr-2">
                                <button
                                    type="button"
                                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                    onClick={() => setIsOpen(false)}
                                >
                                    <span className="sr-only">Close main menu</span>
                                    <svg
                                        className="h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <Link to='/'>     <li className="text-base text-black font-bold block px-3 py-2 rounded-md hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-200 font-lato">Home</li></Link>
                <li className="text-base text-black font-bold hover:text-orange-900 block px-3 py-2 rounded-md  hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-200  font-lato">Pages</li>
                <li  className="text-base text-black font-bold hover:text-orange-900 block px-3 py-2 rounded-md  hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-200  font-lato" >Shop</li>
                <li className="text-base text-black font-bold hover:text-orange-900  block px-3 py-2 rounded-md hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-200  font-lato">About</li>
                <li  className="text-base text-black font-bold hover:text-orange-900 block px-3 py-2 rounded-md  hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-200  font-lato">Blog</li>
                        </div>
                    </div>
                </div>
            </Transition>
        </div>
    );
}

export default NavbarSm;
