import {MdOutlineClose} from 'react-icons/md'
import { useDispatch } from 'react-redux';
import { decreaseQuantity, incrementQuantity, removeFromCart } from '../Redux/CartSlice';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const CartItem =({product})=>{
    const dispatch = useDispatch() 
    const id = product.id
    const urlId = typeof id === 'string' ? id : parseFloat(id.id)
    console.log(urlId)
    const itemPrice = (product)=>{
      let price = product.price
      let finalPrice = price.toString().slice(0,2)
      return finalPrice
    }
    return (
       <div  className='items-center justify-center md:justify-between  md:gap-6 gap-[1rem] mb-[1rem] flex'>
         <div className="flex items-start gap-2 ">
           <span>
           <MdOutlineClose onClick={()=>dispatch(removeFromCart(product.id)) & toast.error(`${product.name} is removed`)} className='text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300' />
           </span>
       <div className='w-[5rem]'>
   <Link to={`/Laessentials/${urlId}`}>
   <img src={`http://${product.imageUrl}`} alt='productImage' className="md:w-32 md:h-20   h-[5rem] object-fill  "/>
    </Link>
       </div>
        </div>
      <div>
      <h2 className="md:text-sm text-sm font-bold font-poppins md:flex hidden md:w-52 line-clamp-2">
            {product.name }
        </h2>
      </div>
       <div className='  md:mr-0'>
        {/* price */}
       <p className="md:text-xl text-sm font-bold font-poppins ">${itemPrice(product)}</p>
       </div>
       <div>
       <p className="text-sm">
       <div className='flex items-center border border-gray-200 rounded-md p-1 gap-2 text-sm font-semibold px-3 ml-[1.1rem] md:ml-6'>
               <div className= {` text-xl font-poppins ${product.quantity === 1 ? '' :  'h-8 justify-center flex items-center w-6  text-black  duration-500     cursor-pointer '}`} 
            
   onClick={ product.quantity === 1 ? ()=>dispatch(removeFromCart(product.id)) & toast.error(`${product.name} is removed`) : ()=>dispatch(decreaseQuantity({
   id:product.id,
    quantity:product.quantity
   }))}
               >
                  -
               </div>
               <span className='mx-2 text-base md:text-2xl'>
              {product.quantity}
               </span>
                <div className=' h-8 justify-center flex items-center text-black duration-500  font-normal cursor-pointer  text-xl font-poppins ' 
                onClick={()=>dispatch(incrementQuantity({
                    id:product.id,
                    quantity:product.quantity
                })) & toast.success(`${product.name} is added`)}>+</div>
               </div>
       </p>
       </div>
       <ToastContainer
    position='top-left'
    autoClose={2000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme='dark'
    />
       </div>
    )
}
export default CartItem;