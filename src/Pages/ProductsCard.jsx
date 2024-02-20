import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/CartSlice";
import { ToastContainer, } from "react-toastify";
import { toast } from 'react-toastify'
const ProductsCard =({product})=> {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleProduct=(id)=>{
    navigate(`/Laessentials/${id}`)
  }  
  const productAdded = {
    id: product.id,
    name: product.name,
    price: product.price.current.text,
    imageUrl: product.imageUrl,
    brandName: product.brandName,
    quantity: 1
  }
  return (
   <div className="group border-[1px] border-slate-200 ">
     <div className="w-full h-56 md:h-96 cursor-pointer overflow-hidden relative" onClick={()=>{handleProduct(product.id)}}
     >
        <img src={`http://${product.imageUrl}`} alt='productImage'
        loading="lazy"
        className="w-full h-full md:object-cover object-contain group-hover:scale-110 duration-500" />
        <div className="">
          {product.brandName ? <p className="absolute top-0 left-0  bg-black text-white p-1 text-[0.6rem] md:text-[0.9rem] font-semi-bold pointer-events-none font-poppins tracking-tighter">{product.brandName}</p> : ''}
        </div>
    </div>
   <div className="flex w-full justify-between items-center gap-[1rem]">
   <div>
      <p className="md:text-[0.8rem] tracking-tight md:text-[0.8rem] text-[0.6rem] font-bold w-[95%] md:w-[62%] md:ml-[0.8rem] ml-[0.5rem] text-start ">
        {
            product?.name.length > 40 ? product.name.slice(0,45) + '...' : product.name
        }
      </p>
    </div>
    <div className="flex gap-0 relative w-full md:w-48 overflow-hidden">
    <p className="font-bold flex gap-2 transform group-hover:translate-x-56 transition-transform duration-500 ">
        {product?.price?.current?.text ? product.price.current.text : 'Current price not available'}
    </p>
    <p className="absolute font-nunito font-bold top-0 left-0 tracking-tighter   z-20 w-[100px] text-gray-600 hover:text-gray-900 flex items-center justify-center transform gap-[0.15rem] -translate-x-32 group-hover:translate-x-0 transition-transform duration-500 cursor-pointer text-[0.7rem] ml-[-5px] md:ml-0 md:text-[1rem]"
                   onClick={()=>dispatch(addToCart(productAdded))& toast.success(`${product.name} is added`)}
    >
       <span className="text-2xl"><BsArrowRight/></span>
    </p>
</div>

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

export default ProductsCard