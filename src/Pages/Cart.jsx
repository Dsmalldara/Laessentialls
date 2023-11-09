import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { FcShipped } from 'react-icons/fc'
import CartItem from './CartItem'
import {BsLockFill} from 'react-icons/bs'
import { toast } from 'react-toastify'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { clearCart } from '../Redux/CartSlice'
const ShoppingProgressBar =()=>{
    const cartItems = useSelector(state=> state.cart.productData)
    console.log(cartItems)
    const cartLength = cartItems.length
    let maxCartLength = 6
   let progress = (cartLength/maxCartLength)*100
   const clampedProgress = Math.min(progress, 100)
   let message = '';
   if (clampedProgress >= 60) {
     message = 'Congratulations! You are eligible for free shipping!';
   } else {
     message = 'Please add more items to your cart to qualify for free shipping.';
   }
    return(
        <div className='flex flex-col pt-[1rem] ml-4 text-slate-800 font-normal'>
          <div className='w-[80%] h-2 bg-slate-600 rounded-l-lg rounded-r-lg'>
              <div className='h-2 bg-black rounded-l-lg rounded-r-lg' style={{width:clampedProgress+'%'}}></div>
              
        </div>
        <p className=" mt-2 flex items-start justify-start">
        {clampedProgress.toFixed(1)}% Complete
      </p>
      <p>
        {message} <span className='mr-2 mb-[-2px] inline-block text-3xl'><FcShipped/></span>
      </p>
      <span className='text-sm font-extralight mt-3 text-green-700'> add 4 or more items to cart to get free shipping, add 10+ items for huge bonaza</span>
        </div>
    )}
function Cart() {
  const dispatch = useDispatch()
  const payment = async (token) => {
  await axios.post('http://localhost:8000/payment', { 
    token:token,
    amount: totalAmount * 100
   }
   )
   dispatch(clearCart())
   toast.success('Payment successful. Your cart has been cleared.');
  }

  ;
    const [totalAmount, setTotalAmount] = useState(0)
    const cartItems = useSelector(state=> state.cart.productData)
    const [paynow, setPaynow] = useState(false)
    console.log(cartItems)
    const userInfo = useSelector(state=>state.cart.userInfo)
    const onClickCheckout=()=>{
      if(userInfo){
        setPaynow(true)
      }
      else{
        toast.error(<CheckSignInStatus/>)
      }
    }
   
    const CheckSignInStatus=()=>{
      return(
        <div>
          <Link to='/Laessentials/cart/login ' className='flex text-red-100'>
            please sign in to proceed
          </Link>
        </div>
      )
    }
  useEffect(()=>{
    let price = 0;
    
    cartItems.map((item)=>{
        const itemPrice = parseFloat(item.price.replace('$', ''));
        price += parseFloat(itemPrice)* item.quantity
        return price
    })
    
    setTotalAmount(price.toFixed(2))
  },[cartItems])
  return (
    <div className=' w-full flex flex-col md:flex-row  mb-[2rem]'>
        <div className='flex flex-col md:w-2/3 bg-white rounded-md '>
         <div className='items-start justify-start flex flex-col ml-4 md:ml-6 mt-[2rem]'>
 <h1 className='text-4xl font-poppins font-bold text-black'>Your Cart</h1>
 <p className='text-black font-lato'>
     you have {cartItems.length} items in your cart
 </p>
 <div className={`mt-[2rem] mx-auto ${cartItems.length === 0 ? ' md:py-0 py-[3rem]' : 'py-[1rem]'}`}>
    {
      cartItems.length === 0 ? <p className='text-black font-lato text-2xl '>
        Your cart is empty go to <Link to='/' className='text-red-900'>Home</Link> to add items
      
      
      </p> : null
    }
 </div>
</div>
<div className='px-8'>
    {cartItems.map((product) => (
      <CartItem product={product} key={product.id} />
    )
    )}
    
</div>
        </div>
        <div className='md:w-[30%] px-[3%] bg-[#fafafa] text-black h-[98%]'>
        <div className=' h-full rounded-md bg-[#fafafa] bg-opacity-90 backdrop-blur-md text-white font-lato  pt-1 '>
           <div>
           <ShoppingProgressBar/>
        
           </div>
        <div className='flex flex-col gap-3  pb-2 text-black '>
            <h2 className="text2xl font-bold underline underline-offset-2 ">
                cart total
            </h2>
            <div className="flex items-center gap-12 text-base">
               <p> subtotal{''}</p>
           
            <span className="font-bold text-base">
                ${totalAmount}
            </span>
            </div>
            <div className="flex items-start gap-4 text-base">   
    <span>Shipping Information</span>
    <p className='flex font-extralight text-sm'>
        Thank you for choosing our shipping services. We're dedicated to providing you with excellent shipping service at a fast delivery time.
    </p>

            </div>
            <p className='border-t-[1px] border-t-black pb-3 flex items-center justify-between '>
              <span>   
              {" "}
                Total</span> <span className='text-base font-bold  mr-2 md:mr-4'>${totalAmount}</span>
            </p>
        <button onClick={onClickCheckout} className='md:text-base text-sm bg-black text-white w-[50%] mx-auto md:w-full py-3   hover:bg-gray-800 duration-300 flex justify-between'>
            Proceed to checkout <span><BsLockFill className='text-2xl text-white'/></span>
        </button>
        {
          paynow && <div className='mt-2'>
          <StripeCheckout
            stripeKey='pk_test_51O9woxBwJh2FHnvyv9XzxWayESgwmnP9dv9koHhSTYLHCOQFgli9Q3bKwTI2x412T3St1PJEc8yfdAds1007FNjv00nBN3Q331'
            name='LaEssentials online store'
            amount={totalAmount * 100}
            label="pay to store"
            description={`Your payment amount is $${totalAmount}`}
             token={payment}
            email={userInfo.email}/>
            </div>
        }
        </div>

            </div>  
        </div>

    </div>
  )
}

export default Cart



