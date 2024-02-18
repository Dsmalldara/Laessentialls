import React from "react";
import paypal from "../../src/assets/paypal.svg";
import mastercard from "../../src/assets/discover.svg";
import visa from "../../src/assets/visa.svg";
import Discover from "../../src/assets/discover.svg";
import { BsFacebook } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-10 md:py-20 ">
       <h3 className="text-gray-300 md:ml-[4rem] w-36 md:text-2xl text-blue-600 font-bold font-poppins md:hidden block ">
            LAEssentials
          </h3>
      <div className="flex max-w-screen-xl h-full ml-[2rem] md:ml-0  md:items-center md:justify-between md:flex-row flex-col gap-[1.5rem]">
        <div className="md:block hidden ">
          <h3 className="text-gray-300 ml-[4rem] w-36 md:text-2xl font-bold font-poppins">
            LAEssentials
          </h3>
          <div className="w-48  ml-[3rem] text-sm font-extra-light flex flex-col font-poppins mt-[1.5rem] text-start">
            <p>132 Market st.20192</p>
            <p>San Francisco,CA</p>
          </div>
          <div className="flex gap-4 w-36 ml-[0.9rem] md:ml-[3rem] mt-[1rem]">
            <img
              src={paypal}
              alt=""
              className="md:w-full w-[2rem] h-[2rem] cursor-pointer  rounded-sm  object-contain"
              loading="priority"
            />
            <img
              src={mastercard}
              alt=""
              className="md:w-full w-[2rem] h-[2rem] cursor-pointer rounded-sm object-contain"
              loading="priority"
            />
            <img
              src={visa}
              alt=""
              className=" md:w-full  w-[2rem]  h-[2rem] cursor-pointer rounded-sm object-contain"
              loading="priority"
            />
            <img
              src={Discover}
              alt=""
              className="md:w-full  w-[2rem] h-[2rem] object-contain cursor-pointer rounded-sm "
              loading="priority"
            />
          </div>
          <div className="mt-[1rem] md:flex hidden">
          
          </div>
        </div>
        <div className="hidden md:flex">
          <div className="flex flex-col gap-4 mt-[1rem] cursor-pointer text-start">
            <p className="text-gray-300 font-poppins  text-1xl  hover:text-yellow-100">
              Information
            </p>
            <p className="text-gray-300 font-poppins  text-1xl  hover:text-yellow-100">
              About Us
            </p>
            <p className="text-gray-300 font-poppins  text-1xl  hover:text-yellow-100">
              Contact Us
            </p>
            <p className="text-gray-300 font-poppins  text-1xl  hover:text-yellow-100">
              Terms & Conditions
            </p>
            <p className="text-gray-300 font-poppins  text-1xl  hover:text-yellow-100">
              Privacy Policy
            </p>
          </div>
        </div>
        <div className="md:flex ">
          <div className="flex flex-col  gap-4 mt-[1rem] hover:text-gray-300 duration-150 cursor-pointer text-start  ">
            <p className="text-gray-300 font-poppins  text-1xl hover:text-yellow-100 duration-150 cursor-pointer">
              Minimalist
            </p>
            <p className="text-gray-300 font-poppins  text-1xl hover:text-yellow-100 duration-150 cursor-pointer">
              Classic
            </p>
            <p className="text-gray-300 font-poppins  text-1xl hover:text-yellow-100 duration-150 cursor-pointer">
              Retro
            </p>
            <p className="text-gray-300 font-poppins  text-1xl hover:text-yellow-100 duration-150 cursor-pointer">
              Modern
            </p>
            <p className="text-gray-300 font-poppins  text-1xl hover:text-yellow-100 duration-150 cursor-pointer">
              Sporty
            </p>
          </div>
        </div>
        <div className="  md:mr-[1rem] flex  flex-col gap-[1.5rem] text-start  ">
          <p className="md:w-56 w-36 md:ml-[-1.5rem] h-[2rem] rounded-sm shadow-sm text-black font-bold cursor-pointer bg-white hover:bg-black flex items-center justify-center hover:text-white duration-500 hover:border  hover:border-gray-200 text-sm md:text-[1rem]">
            Download App
          </p>
          <p className="text-gray-300 font-poppins  text-[0.9rem] hover:text-gray-300 duration-150 cursor-pointer">
            Contact Us
          </p>
          {/* <p className='text-gray-300 font-poppins  text-[0.9rem] hover:text-gray-300 duration-150 cursor-pointer'>LaEssentials@gmail.com</p> */}
          <p className="text-gray-300 font-poppins  text-[0.9rem] hover:text-gray-300 duration-150 cursor-pointer">
            Get the App
          </p>
        </div>
      </div>
      <div className=" flex mt-[3rem] flex-col justify-center items-center md:ml-[0] ml-[-2rem]">
              <p className="flex font-poppins text-1xl  mb-[1rem] ">
                Follow us 
              </p>
              <span className="flex flex-row  gap-4  ml-[4.5rem] cursor-pointer">
                <BsFacebook className="text-2xl  hover:text-yellow-100" />
                <FaTwitter className="text-2xl  hover:text-yellow-100" />
                <AiFillInstagram className="text-2xl  hover:text-yellow-100" />
                <AiFillYoutube className="text-2xl  hover:text-yellow-100" />
                <AiFillLinkedin className="text-2xl  hover:text-yellow-100" />
              </span>
            </div>
      <div className="flex max-w-screen-xl w-[92%] h-4 m-auto border-t-[0.2px] border-t-gray-700 md:mt-[3rem] mt-[1.5rem] items-center justify-between">
        <div className="mt-[2rem]">
          <p className="md:text-sm text-[0.7rem]   font-poppins font-bold cursor-pointer">
            © 2023 LAEssentials <span className=" text-3xl">.</span> All Rights
            Reserved.
          </p>
        </div>
        <div className="mt-[2rem]">
          <ul className="md:flex flex flex-col gap-4 mt-[2rem] cursor-pointer">
            <li className="md:text-sm  text-[0.7rem] font-poppins font-bold hover:text-gray-300 duration-150">
              Terms & Conditions
            </li>
          </ul>
        </div>
      </div>
     
    </div>
  );
};

export default Footer;
