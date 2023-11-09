import { Link } from 'react-router-dom'
import {BsHandbag} from 'react-icons/bs'
import { useSelector } from 'react-redux'
const Menu = () => {
    const userInfo = useSelector(state=>state.cart.userInfo)
    const cart = useSelector(state => state.cart.productData)
  return <div className="px-2 py-6 space-y-2 font-medium ">
   <div className=' mr-[1.5rem] flex '>
            <ul className="items-center gap-4 flex flex-col  mx-auto my-auto  ">
           <Link to='/'>     <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-200 font-lato">Home</li></Link>
                <li className="text-base text-black font-bold hover:text-orange-900   hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-200  font-lato">Pages</li>
                <li  className="text-base text-black font-bold hover:text-orange-900   hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-200  font-lato" >Shop</li>
                <li className="text-base text-black font-bold hover:text-orange-900   hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-200  font-lato">About</li>
                <li  className="text-base text-black font-bold hover:text-orange-900   hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-200  font-lato">Blog</li>
            </ul>
           
        </div>
  </div>
}

export default Menu;