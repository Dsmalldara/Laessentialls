import { useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { useState } from "react";
import { IoTicketOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { AiTwotoneStar } from "react-icons/ai";
import { addToCart } from "../Redux/CartSlice";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { Box } from "@mui/material";
import {Skeleton} from "@mui/material";
function Product() {
  const dispatch = useDispatch();
  const { id } = useParams();
   // Example object containing the id property
let idValue = parseFloat(id);
  const fetchProductDetail = async () => {
    const options = {
      method: "GET",
      url: "https://asos2.p.rapidapi.com/products/v3/detail",
      params: {
        id: idValue,
        lang: "en-US",
        store: "US",
        sizeSchema: "US",
        currency: "USD",
      },
      headers: {
        "X-RapidAPI-Key": "c2c20e0d8bmsh569e31433a37310p18d2e4jsnb1698e5f40eb",
        "X-RapidAPI-Host": "asos2.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  const [currentSlide, setCurrentSlide] = useState(0);
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? currentSlide : currentSlide - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === ProductImages.length - 1
        ? currentSlide
        : currentSlide + 1
    );
  };
  const [baseQuantity, setBaseQuantity] = useState(1);
  const decreaseQuantity = () => {
    if (baseQuantity > 0) {
      setBaseQuantity(baseQuantity - 1);
    }
  };
  const { data, isLoading, isError } = useQuery(
    ["productDetail", id],
    fetchProductDetail,
    {
      refetchOnWindowFocus: false,
      staleTime: 5000,
      cacheTime: 5000,
    }
  );

  if (isLoading) {
    return (
      <div className="flex items-center justify-center mt-[1.7rem] h-[30rem] ">
        {/* <div className="w-[2rem] h-[2rem] rounded-full border-2 border-slate-600 border-b-2 border-b-slate-200  animate-spin"></div>
        <div>
          <h2 className=" font-poppins text-xl font-bold">Loading...</h2>
        </div> */}
<div className="md:grid hidden">
    <Box sx={{ width: 700 }}>
      <Skeleton width={600} animation="wave" height={70}/>
      <Skeleton animation="wave"  width={600} height={70}/>
      <Skeleton animation={true}  width={600} height={70}/>
    </Box>
    </div>
        <div className="md:hidden grid">
        <Box sx={{ width: 270 }}>
      <Skeleton width={250} animation="wave" height={40}/>
      <Skeleton animation="wave"  width={250} height={40}/>
      <Skeleton animation={true}  width={250} height={40}/>
    </Box>
        </div>
      </div>
    );
  }
  if (isError) {
    return <p>Error loading data</p>;
  }
  console.log(data);
  const ProductImages = data.media.images.map((image) => image.url);

  const addedItems = {
    id: id,
    name: data.name,
    price: data?.brand?.id,
    imageUrl: data.media.images[0].url,
    brandName: data.productType.name,
    quantity: baseQuantity,
  };
  const ratings = (rate) => {
    const rateItem = Math.floor(rate / 1);
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rateItem) {
        stars.push(<AiTwotoneStar key={i} className="flex text-green-300" />);
      } else {
        stars.push(<AiTwotoneStar key={i} className="flex opacity-20" />);
      }
    }
    return stars;
  };
  const oldprice = () => {
   
    let newPrice = data.id
        newPrice = newPrice.toString().slice(0,2)
        newPrice = parseInt(newPrice,10)
    let discount = newPrice -4
    let discountStr = discount.toString().slice(0, 2)
    return  discountStr
  };
// active bullet for image
const item = <div className="w-[1rem] h-[1rem] border   rounded-[100%] mx-1">

</div>

  return (
    <div className={`${data ? "w-full mt-[1.5rem]" : "h-[80vh]"}`}>
      <div className="md:flex md:flex-row flex-col gap-[0.6rem] md:gap-[3rem] mx-auto justify-center items-center mb-[5rem]">
        <div className="md:flex md:flex-col lg:ml-[2rem]  hidden">
          <img
            src={`http://${ProductImages[0]}`}
            alt=""
            className={`w-[6rem] h-[7rem] object-contain  ${
              currentSlide === 0 && "border-2 border-gray-500"
            }`}
          />
          <img
            src={`http://${ProductImages[1]}`}
            alt=""
            className={`w-[6rem] h-[7rem] object-contain  ${
              currentSlide === 1 && "border-2 border-gray-500"
            }`}
          />
          <img
            src={`http://${ProductImages[2]}`}
            alt=""
            className={`w-[6rem] h-[7rem] object-contain  ${
              currentSlide === 2 && "border-2 border-gray-500"
            }`}
          />
          <img
            src={`http://${ProductImages[3]}`}
            alt=""
            className={`w-[6rem] h-[7rem] object-contain  ${
              currentSlide === 3 && "border-2 border-gray-500"
            }`}
          />
        </div>
        <div className="relative  md:h-[500px] md:px-10 px-10 mx-auto">
          <div className="md:w-[28vw] mx-auto  h-full flex overflow-hidden">
            <div
              className="w-full h-full md:border-none pb-[0.1rem]   flex  transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              <img
                src={`http://${ProductImages[0]}`}
                alt=""
                className="md:w-[30vw] w-[100vw] h-[30rem] object-cover md:mb-0 border-b-2 border-black shadow-sm"
              />
              <img
                src={`http://${ProductImages[1]}`}
                alt=""
                className="md:w-[30vw] w-[100vw] h-[30rem] object-cover  md:mb-0 border-b-2 border-black  shadow-sm"
              />
              <img
                src={`http://${ProductImages[2]}`}
                alt=""
                className="md:w-[30vw] w-[100vw] h-[30rem] object-cover md:mb-0  border-b-2 border-black shadow-sm"
              />
              <img
                src={`http://${ProductImages[3]}`}
                alt=""
                className="md:w-[30vw] w-[100vw] h-[30rem] object-cover md:mb-0 border-b-2 border-black shadow-sm"
              />
            </div>
          </div>
          <div className="absolute  hidden md:flex top-[50%] mx-auto gap-[12rem] md:gap-[18rem] lg:gap-[22rem] md:ml-0 ml-1   w-fit  ">
            <div
              onClick={prevSlide}
              className="md:ml-[-3.4rem] py-4 px-4"
            >
              <HiArrowLeft className="text-4xl text-black cursor-pointer" />
            </div>
            <div
              onClick={nextSlide}
              className="py-4 px-4 "
            >
              <HiArrowRight className="text-4xl text-black cursor-pointer" />
            </div>
          </div>
          <div className="flex mt-2 md:hidden">
            {
                Array.from({length:4},()=>item )
            }
          </div>
          {/* controller for mobile view */}
             <div className="flex items-end justify-end gap-[1rem] md:hidden mb-[3rem] mt-[-1rem]">
              <div onClick={prevSlide} className="md:hidden py-1 px-1 ">
                <HiArrowLeft className="text-xl  cursor-pointer" />
              </div>
              <div
                onClick={nextSlide}
                className="py-1 px-1 focus:border-green-200 focus:border"
              >
                <HiArrowRight className="text-xl  cursor-pointer" />
              </div>
            </div>
          <div className=" flex  items-center justify-center md:ml-[-8rem]   md:mb-0 mb-2 mt-3 text-gray-700 flex-wrap   gap-4">
            <p className="text-sm "> Quantity: </p>
            <div className="flex items-center  gap-4 text-sm font-semibold">
              <div
                className=" h-8 justify-center flex items-center  text-white bg-black hover:bg-black duration-500  hover:text-white font-normal text-4xl px-4 font-poppins  cursor-pointer active:bg-black  border"
                onClick={decreaseQuantity}
              >
                -
              </div>
              <span className="mx-2">
                {baseQuantity <= 0 ? 0 : baseQuantity}
              </span>
              <div
                className=" h-8 justify-center flex items-center  text-white bg-black hover:bg-black duration-500 text-3xl px-4 font-poppins hover:text-white font-normal cursor-pointer active:bg-black  border"
                onClick={() => {
                  setBaseQuantity(baseQuantity + 1);
                }}
              >
                +
              </div>
            </div>
            <div
              className="bg-black rounded-[0.2rem] md:py-2 cursor-pointer py-2 md:text-sm text-sm px-2  md:px-3 shadow-md text-white  active:bg-gray-800"
              onClick={() =>
                dispatch(addToCart(addedItems)) &
                toast.success(`${data.name} is added`)} >
              Add to Cart
            </div>
          </div>
        </div>
        <div className="mx-auto flex flex-row md:flex-col justify-center space-y-8 flex-wrap w-[95%] mr-4 md:mr-0">
          <div className="mx-auto">
            <div className=" flex flex-col">
              <p className=" font-lato font-bold  text-sm md:text-2xl  ">
                {data.name}
              </p>
              <p className="flex gap-[4px] mt-4">
                {ratings(data?.rating?.averageOverallStarRating)}
              </p>
            </div>
            <div className="flex items-center justify-center mt-[2rem] md:gap-[4rem] gap-[2rem]">
              <div>
                    <p className=" font-lato font-bold text-xl md:text-2xl  text-red-400">{`$${oldprice()}`}</p>
              </div> 
               <div>
                <p className=" font-lato font-light text-xl  md:text-2xl line-through">
                ${data.id.toString().slice(0,2)}
                </p>
              </div>
            </div>
          </div>
          <div className="px-2 py-3   w-[98%] md:w-[70%] md:mx-auto bg-slate-300 text-white font-lato font-bold tracking-tighter md:tracking-normal text-sm md:text-base ">
            <div className=" ">
              <span>
                <IoTicketOutline className="inline-block mr-1 text-2xl md:text-3xl" />{" "}
                25% OFF AUTUMN WINS! With code:
                <br />
                <span className="text-black font-lato"> ASOSSALEWOW</span>
              </span>
            </div>
          </div>
          <div className="mx-auto flex flex-col gap-[0.5rem]">
            <div className="md:flex-row flex flex-col mx-auto md:gap-[4rem]">
              <div className="mx-auto">
                <p className="font-lato font-bold text-sm md:text-base text-gray-600">
                  Free shipping on orders over{" "}
                  <span className="font-extrabold font-poppins">$50</span>
                </p>
              </div>
              <div className=" items-start justify-start flex text-start mt-[0.5rem]">
                <p className="font-lato  text-sm md:text-base text-black font-bold">
                  product type:{" "}
                  <span className="font-light font-serif">
                    {" "}
                    {data.productType.name}{" "}
                  </span>{" "}
                </p>
              </div>
            </div>
            <div className="flex items-start justify-start text-start">
              <p>
                <span className="font-lato font-bold text-sm md:text-base">
                  Category:{" "}
                </span>
                <span className="font-lato font-light text-sm md:text-base mt-2">
                  {data.gender}
                </span>
              </p>
            </div>
          </div>
          <div className="mx-auto px-4">
            <p>
              <span
                className=" font-extralight font-nunito text-sm md:text-base"
                dangerouslySetInnerHTML={{ __html: data.brand.description }}
              ></span>
            </p>
          </div>
        </div>
        <ToastContainer
          position="top-left"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </div>
  );
}

export default Product;
