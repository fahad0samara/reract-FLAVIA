import { useState } from "react"
import Darkmood from './Darkmood'
import { AiOutlineBars } from 'react-icons/ai'
import { AiOutlineClose } from 'react-icons/ai'

import img1 from './img/0.png'
import img2 from './img/2.png'


import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
      <>
          <div className="relative w-full h-full gradientt pb-10">
             
              <nav className="lg:hidden relative z-50">
                  <div className="flex py-2 justify-between items-center px-4">
                      <div>
                          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/large_typography_with_gradient_and_glass_effect_Svg1.svg" alt="logo" />
                      </div>
                      <div className="visible flex items-center">
                          <button id="open" onClick={() => setMenu(!menu)} className={` ${menu ? 'hidden' : ''} focus:outline-none focus:ring-2 focus:ring-black`}>
                              <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/large_typography_with_gradient_and_glass_effect_Svg2.svg" alt="menu" />
                          </button>
                          <ul id="list" className={` ${menu ? '' : 'hidden'} p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-24`}>
                              <li className="flex cursor-pointer text-[#e8a6c6] text-sm leading-3 tracking-normal mt-2 py-2  focus:outline-none">
                                  <a href="javascript: void(0)" className="ml-2 focus:outline-none focus:ring-2 focus:ring-black">
                                      <span className="font-bold">Home</span>
                                  </a>
                              </li>
                              <li className="flex cursor-pointer text-[#e8a6c6]text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none" onclick="dropdownHandler(this)">
                                  <a href="javascript: void(0)" className="ml-2 focus:outline-none focus:ring-2 focus:ring-black">
                                      <span className="font-bold">About Us</span>
                                  </a>
                              </li>
                              <li className="flex cursor-pointer text-[#e8a6c6] text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                  <a href="javascript: void(0)" className="ml-2 focus:outline-none focus:ring-2 focus:ring-black">
                                      <span className="font-bold">Pricing</span>
                                  </a>
                              </li>
                              <li className="flex cursor-pointer text-[#e8a6c6] text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none" onclick="dropdownHandler(this)">
                                  <a href="javascript: void(0)" className="ml-2 focus:outline-none focus:ring-2 focus:ring-black">
                                      <span className="font-bold">Resources</span>
                                  </a>
                              </li>
                              <li className="flex cursor-pointer text-[#e8a6c6] text-sm leading-3 tracking-normal pt-2 pb-4 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none" onclick="dropdownHandler(this)">
                                  <a href="javascript: void(0)" className="ml-2 focus:outline-none focus:ring-2 focus:ring-black">
                                      <span className="font-bold">Sign In</span>
                                  </a>
                              </li>
                          </ul>
                          <div className="xl:hidden">
                              <button id="close" className={` ${menu ? '' : 'hidden'} close-m-menu focus:ring-2 focus:ring-black focus:outline-none`} onClick={() => setMenu(!menu)}>
                                  <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/large_typography_with_gradient_and_glass_effect_Svg3.svg" alt="close" />
                              </button>
                             
                          </div>
                          <Darkmood />
                      </div>
                  </div>
              </nav>
              <nav className="f-f-l relative z-10">
                  <div className="relative z-10 mx-auto container hidden w-full px-4 xl:px-0 lg:flex justify-between items-center py-11">
                      <div>
                          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/large_typography_with_gradient_and_glass_effect_Svg4.svg" alt="logo" />
                      </div>
                      <div className="flex items-center text-[#e8a6c6]  text-2xl font-medium">
                          <ul className="flex items-center pr-3 xl:pr-12">
                              <li className="cursor-pointer hover:text-gray-300 ease-in">
                                  <a href="javascript:void(0)" className="focus:outline-none focus:ring-2 focus:ring-white">Home</a>
                              </li>
                              <li className="pl-3 lg:pl-5 xl:pl-8 cursor-pointer hover:text-gray-300 ease-in">
                                  <a href="javascript:void(0)" className="focus:outline-none focus:ring-2 focus:ring-white">About Us</a>
                              </li>
                              <li className="pl-3 lg:pl-5 xl:pl-8 cursor-pointer hover:text-gray-300 ease-in">
                                  <a href="javascript:void(0)" className="focus:outline-none focus:ring-2 focus:ring-white">Pricing</a>
                              </li>
                              <li className="pl-3 lg:pl-5 xl:pl-8 cursor-pointer hover:text-gray-300 ease-in">
                                  <a href="javascript:void(0)" className="focus:outline-none focus:ring-2 focus:ring-white">Resources</a>
                              </li>
                          </ul>
                          <button className="px-6 py-3 bg-[#e8a6c6] hover:bg-indigo-500 text-white text-base font-medium rounded-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">
                              Sign In
                              <img className="ml-4" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/large_typography_with_gradient_and_glass_effect_Svg5.svg" alt="arrow" />
                          </button>
                      </div>
                  </div>
              </nav>
              <div className="gradient  grid md:grid-cols-2 ">
            <div className="py-20 space-x-4  text-black  mt-10  md:ml-20 md:py-28">
   
          <span
          data-aos="fade-down"
          className="inline-block rounded-xl py-px px-2 mb-4 text-xl leading-5  bg-[#cce5f8] text-black uppercase rounded-9xl">Meet With</span>
          <h1
          data-aos="fade-up"
          className="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight">AOur Best Doctors Online.</h1>
          <p className="mb-8 text-lg md:text-xl text-coolGray-500 font-medium">He preference connection astonished on of ye. Partiality on or continuing in particular principles as. Do believing oh disposing to supported allowance we..</p>
          <div
          data-aos="fade-left"
          className="flex flex-wrap">
            <div className="w-full md:w-auto py-1 md:py-0 md:mr-4"><a className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 rounded-xl drop-shadow-2xl  font-medium text-center
            bg-black md:text-black text-gray-50
            md:bg-[#cce5f8] hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border  rounded-md shadow-sm" href="#">Schedule Appointment</a></div>
            <div className ="w-full md:w-auto py-1 md:py-0"><a className="inline-block rounded-2xl py-5 px-7 w-full text-base md:text-lg leading-4 text-coolGray-800 font-medium text-center bg-white  " href="#">Learn More</a></div>
          </div>
       
        
       
    </div>
                   <img src={img1} alt="" />
                </div>
          </div>


          <style>{`
      .top-100 {
          animation: slideDown .5s ease-in-out;
      }

      @keyframes slideDown {
          0% {
              top: -50%;
          }

          100% {
              top: 0;
          }
      }

      * {
          outline: none !important;
          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
          -webkit-tap-highlight-color: transparent;
      } `}</style>
      </>


  );
}

export default Navbar;
