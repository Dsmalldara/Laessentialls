import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useQuery } from 'react-query'
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'
import { useState } from 'react'
import {IoTicketOutline} from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import {AiTwotoneStar} from 'react-icons/ai'
import { addToCart } from '../Redux/CartSlice'
import { ToastContainer } from 'react-toastify'
import { toast } from 'react-toastify'
function Product() {
   const [baseQuantity, setBaseQuantity] = useState(1)
   const decreaseQuantity=()=>{
    if(baseQuantity > 0){
        setBaseQuantity(baseQuantity -1)
    }
   }
   const dispatch = useDispatch()
    const {id} = useParams()
    const fetchProductDetail = async()=>{
        const options = {
            method: 'GET',
            url: 'https://asos2.p.rapidapi.com/products/v3/detail',
            params: {
              id: id,
              lang: 'en-US',
              store: 'US',
              sizeSchema: 'US',
              currency: 'USD'
            },
            headers: {
              'X-RapidAPI-Key': 'c2c20e0d8bmsh569e31433a37310p18d2e4jsnb1698e5f40eb',
              'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
              return response.data;
          } catch (error) {
              console.error(error);
          }
    }
    const [currentSlide, setCurrentSlide] = useState(0)
    const prevSlide =()=>{
        setCurrentSlide(currentSlide === 0 ? currentSlide : currentSlide - 1)
    }
    const nextSlide =()=>{
        setCurrentSlide(currentSlide === ProductImages.length - 1 ? currentSlide : currentSlide + 1)
    }
    const {data,isLoading,isError} = useQuery(['productDetail',id],fetchProductDetail,{
        refetchOnWindowFocus:false,
        staleTime:5000,
        cacheTime:5000
    })
    if(isLoading){
        return <div className='flex items-center justify-center mt-[1.7rem] gap-[1.5rem] h-[30rem] '>
        <div className='w-[2rem] h-[2rem] rounded-full border-2 border-slate-600 border-b-2 border-b-slate-200  animate-spin' ></div>
            <div>
                <h2 className=' font-poppins text-xl font-bold'>Loading...</h2>
            </div>
        </div>
    }
    if(isError){
        return <p>Error loading data</p>
    }
    console.log(data)
    const ProductImages =[
        data.media.images[0].url,data.media.images[1].url,data.media.images[2].url,data.media.images[3].url
    ]
    const addedItems ={
        id: {id},
        name: data.name,
        price: data.price.current.text,
        imageUrl:data.media.images[0].url,
        brandName: data.productType.name, 
        quantity: baseQuantity
    }
    const ratings = (rate)=>{
        const rateItem = Math.floor(rate/1) 
        const stars =[]
       for (let i = 0; i <5; i++ ){
        if (i < rateItem ){
            stars.push(<AiTwotoneStar key={i} className='flex text-green-300'/> )
        }else{
            stars.push(<AiTwotoneStar key={i} className='flex opacity-20'/>)
        }
       }
       return stars;
     }

  return (
    <div className={`${data ? 'w-full mt-[1.5rem]' : 'h-[80vh]' }` }>
        <div className='md:flex md:flex-row flex-col gap-[0.6rem] md:gap-[3rem] mx-auto justify-center items-center mb-[5rem]'>
            <div className='md:flex md:flex-col lg:ml-[2rem]  hidden'>
                <img src={`http://${ProductImages[0]}`} alt="" className={`w-[6rem] h-[7rem] object-contain  ${  currentSlide=== 0 && 'border-2 border-gray-500' }`}/>
                <img src={`http://${ProductImages[1]}`} alt=""  className={`w-[6rem] h-[7rem] object-contain  ${  currentSlide=== 1 && 'border-2 border-gray-500' }`}/>
                <img src={`http://${ProductImages[2]}`} alt=""  className={`w-[6rem] h-[7rem] object-contain  ${  currentSlide=== 2 && 'border-2 border-gray-500' }`}/>
                <img src={`http://${ProductImages[3]}`} alt=""  className={`w-[6rem] h-[7rem] object-contain  ${  currentSlide=== 3 && 'border-2 border-gray-500' }`}/>
            </div>
         <div className='relative  md:h-[500px]  px-7'>
         <div className='md:w-[28vw] mx-auto  w-[70vw] h-full flex overflow-hidden '>
            <div className=' w-full h-full flex  transition-transform duration-1000 ease-in-out'
            style={{transform:`translateX(-${currentSlide * 100}%)`}}>
                 <img src={`http://${ProductImages[0]}`} alt="" className='md:w-[30vw] w-[70vw] h-[30rem] object-cover'/>
                <img src={`http://${ProductImages[1]}`} alt="" className='md:w-[30vw] w-[70vw] h-[30rem] object-cover'/>
                <img src={`http://${ProductImages[2]}`} alt="" className='md:w-[30vw] w-[70vw] h-[30rem] object-cover'/>
                <img src={`http://${ProductImages[3]}`} alt="" className='md:w-[30vw] w-[70vw] h-[30rem] object-cover'/>
            </div>

            </div>
            <div className='absolute top-[50%] mx-auto  gap-[12rem] md:gap-[18rem] lg:gap-[22rem] md:ml-0 ml-1   w-fit flex '>
                <div onClick={prevSlide} className='md:ml-[-3.4rem] py-4 px-4 border border-slate-400 focus:border-green-200 focus:border hover:border hover:border-green-300'>
                    <HiArrowLeft className='text-4xl text-black cursor-pointer'/>
                </div>
                <div onClick={nextSlide} className='py-4 px-4 focus:border-green-200 border border-slate-400 focus:border hover:border hover:border-green-300'>
                    <HiArrowRight className='text-4xl text-black cursor-pointer'/>
            </div>
         </div>
         <div className=' flex  items-center justify-center md:ml-[-8rem]   md:mb-0 mb-2 mt-3 text-gray-700 flex-wrap   gap-4'>
            <p className='text-sm '> Quantity: </p>
               <div className='flex items-center  gap-4 text-sm font-semibold'>
               <button className=' h-8 justify-center flex items-center text-base text-white bg-black hover:bg-black duration-500  hover:text-white font-normal  cursor-pointer active:bg-black  border' onClick={decreaseQuantity}>-</button>
               <span className='mx-2'>
                {
                    baseQuantity <= 0 ? 0 : baseQuantity
                }
               </span>
                <button className=' h-8 justify-center flex items-center text-base text-white bg-black hover:bg-black duration-500  hover:text-white font-normal cursor-pointer active:bg-black  border' onClick={()=>{setBaseQuantity  (baseQuantity +1)}}>+</button>
               </div>
               <div className='bg-black rounded-[0.2rem] md:py-2 cursor-pointer py-2 md:text-sm text-sm px-2  md:px-3 shadow-md text-white  active:bg-gray-800'
               onClick={()=>dispatch(addToCart(addedItems))& toast.success(`${data.name} is added`)}
               >
                Add to Cart
               </div>
         </div>
         </div>
         <div className='mx-auto flex flex-row md:flex-col justify-center space-y-8 flex-wrap w-[95%] mr-4 md:mr-0'>
       <div className='mx-auto'>
       <div className=' flex flex-col'>
            <p className=' font-lato font-bold  text-sm md:text-2xl  '>{data.name}</p>
            <p  className='flex gap-[4px] mt-4'>
               {ratings(data?.rating?.averageOverallStarRating)}

            </p>
         </div>
         <div className='flex items-center justify-center mt-[2rem] md:gap-[4rem] gap-[2rem]'>
            <div>
                <p className=' font-lato font-light text-sm md:text-base line-through text-red-400'>{data.price.previous.text}</p>
            </div>
            <div>
                <p className=' font-lato font-bold text-sm md:text-base'>{data.price.current.text}</p>
            </div>
         </div>
       </div>
         <div className='px-2 py-3   w-[98%] md:w-[70%] md:mx-auto bg-slate-300 text-white font-lato font-bold tracking-tighter md:tracking-normal text-sm md:text-base '>
                <div className=' '>
                <span>
               <IoTicketOutline className='inline-block mr-1 text-2xl md:text-3xl'/>     25% OFF AUTUMN WINS! With code: 
                    <br /><span className='text-black'> ASOSSALEWOW</span>
                    </span>
                </div>
            </div>
            <div className='mx-auto'>
          <div className='md:flex-row flex flex-col mx-auto md:gap-[4rem]'>
          <div className='mx-auto'>
                <p className='font-lato font-bold text-sm md:text-base text-gray-600'>Free shipping on orders over <span className='font-extrabold font-poppins'>$50</span></p>
            </div>
            <div className='mx-auto'>
                <p className='font-lato  text-sm md:text-base text-black font-bold'>product type: <span className='font-light font-serif'> {data.productType.name} </span>             </p>
            </div>
          </div>
          <div className='flex items-start justify-start'>
          <p>
                <span className='font-lato font-bold text-sm md:text-base'>Category: </span>
                <span className='font-lato font-light text-sm md:text-base mt-2'>{data.gender}</span>
         </p>
            </div>
    
          </div>
          <div className='mx-auto px-4'>
         <p>
                <span className=' font-extralight font-nunito text-sm md:text-base' dangerouslySetInnerHTML={{__html:data.brand.description}}></span>
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
    </div>
  )
}

export default Product