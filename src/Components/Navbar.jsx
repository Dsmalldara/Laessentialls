import {BsHandbag} from 'react-icons/bs'
import { useSelector } from 'react-redux'
import { MdPerson2 } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
function Navbar() {
  const userInfo = useSelector(state=>state.cart.userInfo)
  const cart = useSelector(state => state.cart.productData)
  console.log(userInfo)
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={`md:block hidden ${isSticky ? 'w-full  md:block hidden  md:h-16 bg-white border-b-[1px] border-b-gray-600   left-0 sticky z-10 opacity-95 backdrop-blur-md shadow-lg stick' : ' border-b py-3'}`}>
        <div className="flex max-w-screen-xl h-full mx-auto items-center justify-between">
      <Link to='/'>
      <h3 className="light-brown-gradient ml-[4rem] md:text-2xl font-poppins cursor-pointer">
            LAEssentials
          </h3>
      </Link>
          <div className='md:mr-[5rem] mr-[1.5rem] flex gap-8'>
            <ul className="items-center gap-8 md:flex hidden  ">
           <Link to='/'>     <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-200 font-lato">Home</li></Link>
                <li className="text-base text-black font-bold hover:text-orange-900   hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-200  font-lato">Pages</li>
                <li  className="text-base text-black font-bold hover:text-orange-900   hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-200  font-lato" >Shop</li>
                <li className="text-base text-black font-bold hover:text-orange-900   hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-200  font-lato">About</li>
                <li  className="text-base text-black font-bold hover:text-orange-900   hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-200  font-lato">Blog</li>
            </ul>
            <Link to='Laessentials/cart'>
          <div className='relative  cursor-pointer'>
          <div className=' text-3xl text-red-900 '>
                <BsHandbag/>
            </div>
            <div className='absolute top-[-0.1rem] right-[-0.7rem] p-[0.3rem] px-2 rounded-full bg-red-700  font-lato font-semibold'>
               <p className='m-0 text-white text-sm leading-3'>
                  {cart.length}
               </p>
            </div>
          </div>
          </Link>
           <Link to='/Laessentials/cart/login'>
           {
            userInfo ? <img src={userInfo.image} className='w-[3rem] h-[2.4rem]  rounded-[100%] object-contain' alt="" />  
            :
            <div className='w-[2rem] h-[2rem] bg-blue-100 border flex flex-row justify-center items-center rounded-[100%] border-blue-200'>
              <MdPerson2 className='text-2xl'/>
           </div>
           }
           </Link>
           <div className='text-sm font-light underline underline-offset-2 mx-auto my-auto'>
           {
            userInfo && <p>{userInfo.name}</p>
           }
           </div>
        </div>

        </div>

    </div>
  )
}

export default Navbar