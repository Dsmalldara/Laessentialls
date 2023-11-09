import { BsArrow90DegUp } from 'react-icons/bs'
import { useQuery } from 'react-query'
import axios from 'axios';
import ProductsCard from './ProductsCard';
function Shop() {
        const fetchAsosProducts=async(page)=>{
            const itemsPerPage = 20
            const offset = (page-1) * itemsPerPage
          
const options = {
  method: 'GET',
  url: 'https://asos2.p.rapidapi.com/products/v2/list',
  params: {
    store: 'US',
    offset: offset,
    categoryId: '27110',
    limit: itemsPerPage,
    country: 'US',
    sort: 'freshness',
    currency: 'USD',
    sizeSchema: 'US',
    lang: 'en-US'
  },
  headers: {
    'X-RapidAPI-Key': 'c2c20e0d8bmsh569e31433a37310p18d2e4jsnb1698e5f40eb',
    'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
  }
};
        try{
            const response = await axios.request(options)
            return response.data
        }
        catch (error) {
          console.error("Error fetching data:", error);
          throw error; 
        }
    }  
    
    const { data, isLoading, isError } = useQuery(['products',2], fetchAsosProducts, {
      refetchOnWindowFocus: false,
      staleTime: 5000,
      cacheTime: 5000
  });
  

    if (isLoading) {
      return <div className='flex h-[30vh] items-center justify-center mt-[1.7rem] gap-[1.5rem]  '>
        <div className='w-[2rem]  h-[2rem] rounded-full border-2 border-slate-600 border-b-2 border-b-slate-200  animate-spin' ></div>
            <div>
                <h2 className=' font-poppins text-xl font-bold '>Loading...</h2>
            </div>
      </div>
    }
  
    if (isError) {
      return <p className='text-red-500 '>Error loading data</p>;
    }

    console.log(data.products)
       
  return (
    <div className='py-8'>
        <div className='mx-auto max-w-screen-xl px-3'>
         <div className='flex flex-col gap-2'>
         <h1 className='md:w-[30%] w-[75%]  px-3 py-3 bg-black border border-black rounded-md focus:ring-2 focus:ring-offset-2 focus-outline-none focus:ring-black mx-auto '>
                <p className='text-white text-center font-poppins text-xl font-bold  tracking-wide text-1xl md:text-base'>Start Shopping  <span className=' inline-block ml-2 text-2xl rotate-180'><BsArrow90DegUp/></span></p>
            </h1>
            <span className='w-20 h-[3px]  bg-black mx-auto'>
            </span>
         </div>
                     <p className='text-black font-lato mt-4 max-w-xl mx-auto'>
                        Discover a world of high-quality products, exceptional deals, and a seamless shopping experience. Start your shopping journey now and find everything you need to enhance your lifestyle.
                    </p>
            
       

        </div>
        <div className='mx-auto max-w-screen-xl  px-3 py-8 grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4 md:gap-10'>
           {
            data.products.map((product)=>{
                return(
                    <ProductsCard product={product} key={product.id}/>
                )
            })
           }     
    </div>
    </div>
  )
}

export default Shop


  //  {
//     refetchOnWindowFocus: false,
//     staleTime: 5000,
//     cacheTime: 5000
// }