import {MdOutlineClose} from 'react-icons/md'
import { useDispatch } from 'react-redux';
import { decreaseQuantity, incrementQuantity, removeFromCart } from '../Redux/CartSlice';
import { ToastContainer, toast } from 'react-toastify';
const CartItem =({product})=>{
    const dispatch = useDispatch()
    return (
       <div  className='items-center justify-center md:justify-between  md:gap-6 gap-[2rem] mt-6 flex'>
         <div className="flex items-center gap-2">
           <span>
           <MdOutlineClose onClick={()=>dispatch(removeFromCart(product.id)) & toast.error(`${product.name} is removed`)} className='text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300'/>
           </span>
       <img src={`http://${product.imageUrl}`} alt='productImage' className="md:w-32 md:h-20 w-36 h-24 object-contain"/>
        </div>
      <div>
      <h2 className="md:text-base text-sm font-bold font-poppins md:flex hidden  md:w-52">
            {
                product.name.length <= 45 ?  product.name : `${product.name.slice(0,45)}....` }
        </h2>
      </div>
       <div className='mr-[0.5rem] md:mr-0'>
       <p className="text-xl font-bold font-poppins w-10">{product.price}</p>
       </div>
       <div>
       <p className="text-sm">
       <div className='flex items-center border border-gray-200 rounded-md p-2 gap-2 text-sm font-semibold bg-slate-100'>
               <button className= {`${product.quantity === 1 ? '' :  'h-8 justify-center flex items-center text-base text-white bg-slate-300 hover:bg-slate-500 duration-500  hover:text-white font-normal  cursor-pointer   border'}`} 
            
   onClick={ product.quantity === 1 ? ()=>dispatch(removeFromCart(product.id)) & toast.error(`${product.name} is removed`) : ()=>dispatch(decreaseQuantity({
   id:product.id,
    quantity:product.quantity
   }))}
               >
                  -
               </button>
               <span className='mx-2'>
              {product.quantity}
               </span>
                <button className=' h-8 justify-center flex items-center text-base text-white bg-slate-300 hover:bg-slate-500 duration-500  hover:text-white font-normal cursor-pointer  border' 
                onClick={()=>dispatch(incrementQuantity({
                    id:product.id,
                    quantity:product.quantity
                })) & toast.success(`${product.name} is added`)}>+</button>
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