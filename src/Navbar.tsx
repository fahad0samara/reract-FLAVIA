import { useState } from "react"
import Darkmood from './Darkmood'
import {AiOutlineBars} from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'
import img from './img/0.png'
import img0 from './img/3.jpg'
function Navbar() {
  const [show, setShow] = useState(false);
  return (
      <div className=" overflow-y-hidden">


        <nav className="w-full">
          <div className="container mx-auto px-6 flex items-center justify-between">
            <div className="flex items-center" aria-label="Home" role="img">
              <img className="cursor-pointer w-8 sm:w-auto" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/center_aligned_with_image-svg1.svg" alt="logo" />
              <p className="ml-2 lg:ml-4 text-base lg:text-2xl font-bold text-gray-800">The North</p>
            </div>
            <div>
              <button onClick={() => setShow(!show)} className={'sm:block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500'}>
                <AiOutlineBars className="w-6 h-6" />
              </button>
              <div id="menu" className={`md:block lg:block ${show ? '' : 'hidden'}`}>
                <button onClick={() => setShow(!show)} className={'block md:hidden lg:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 fixed focus:outline-none focus:ring-2 focus:ring-gray-500 md:bg-transparent z-30 top-0 mt-3'}>
                <AiOutlineClose className="w-6 h-6" />
                </button>
                <ul className={'flex text-3xl md:text-base items-center py-8 md:flex flex-col md:flex-row justify-center fixed md:relative top-0 bottom-0 left-0 right-0 bg-white md:bg-transparent  z-20'}>
                  <li className={'text-gray-600 text-lg hover:text-gray-800 cursor-pointer md:ml-10 pt-10 md:pt-0'}>
                    <a href="javascript:void(0)">Company</a>
                  </li>
                  <li className={'text-gray-600 text-lg hover:text-gray-800 cursor-pointer md:ml-10 pt-10 md:pt-0'}>
                    <a href="javascript:void(0)">Features</a>
                  </li>
                  <li className={'text-gray-600 text-lg hover:text-gray-800 cursor-pointer md:ml-10 pt-10 md:pt-0'}>
                    <a href="javascript:void(0)">Contact</a>
                  </li>
                  
                </ul>
                
              </div>
              
            </div>
            <Darkmood />
          </div>
        </nav>
        <section className="relative">

  <div className="relative container mx-auto px-4">
    <img className="absolute bottom-0 inset-x-0 w-full h-80 -mb-16 lg:mb-0 md:h-full object-cover" src={img} alt=""/>
    <div className="hidden lg:flex absolute right-0 top-1/2 transform -translate-y-1/2 flex-col items-center">
      <span className="mb-5 font-bold font-heading">01</span>
      <div className="mb-5 h-16 w-px "></div>
      <button className="mb-5">
        <img src="yofte-assets/elements/circle.svg" alt=""/>
      </button>
      <button className="mb-6 w-1 h-1 bg-blue-500 rounded-full"></button>
      <button className="mb-6 w-1 h-1 bg-blue-500 rounded-full"></button>
      <div className="h-16 w-px bg-gray-100"></div>
    </div>
    <div className="relative flex flex-wrap -mx-4">
      <div className="w-full md:w-1/2 px-4 mb-12 lg:mb-0 pt-20 lg:pt-32 pb-32 lg:pb-64">
        <div className="max-w-md">
          <h2 className="mb-8 text-5xl lg:text-6xl font-semibold font-heading">Get 10% off site-wide when you spend $30 with code: new</h2>
          <p className="mb-20 text-lg ">Discover more products and inspiration.</p>
          <a className="inline-block bg-orange-300 hover:bg-orange-400 text-white font-bold font-heading py-6 px-8 rounded-md uppercase transition duration-200" href="#">Shop Now</a>
        </div>
      </div>
    </div>
  </div>
  <div className="relative bg-gray-100 pt-20">
    <div className="container mx-auto px-4">
      <div className={'flex lg:-mt-52 mb-20 flex-wrap justify-center'}>
    
        <div className="flex flex-col items-center justify-center max-w-sm mx-auto">
        <div className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"  style={{backgroundImage: `url(${img})`}}></div>

        <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">Nike Revolt</h3>
            
            <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                <span className="font-bold text-gray-800 dark:text-gray-200">$129</span>
                <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Add to cart</button>
            </div>
        </div>
    </div>
    <div className="flex flex-col items-center justify-center max-w-sm mx-auto">
        <div className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"  style={{backgroundImage: `url(${img0})`}}></div>

        <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">Nike Revolt</h3>
            
            <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                <span className="font-bold text-gray-800 dark:text-gray-200">$129</span>
                <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Add to cart</button>
            </div>
        </div>
    </div>
    <div className="flex flex-col items-center justify-center max-w-sm mx-auto">
        <div className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"  style={{backgroundImage: `url(${img0})`}}></div>

        <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">Nike Revolt</h3>
            
            <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                <span className="font-bold text-gray-800 dark:text-gray-200">$129</span>
                <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-200 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">Add to cart</button>
            </div>
        </div>
    </div>
      </div>
  
    
       

     
        <div className="w-1/2 md:w-1/3 lg:w-1/6 px-2 mb-12">
          <img className="mx-auto h-6" src="https://shuffle.dev/yofte-assets/brands/eurosport.svg" alt=""/>
        </div>
        <div className="w-1/2 md:w-1/3 lg:w-1/6 px-2 mb-12">
          <img className="mx-auto h-6" src="yofte-assets/brands/eurosport.svg" alt=""/>
        </div>
        <div className="w-1/2 md:w-1/3 lg:w-1/6 px-2 mb-12">
          <img className="mx-auto h-6" src="yofte-assets/brands/nike.svg" alt=""/>
        </div>
        <div className="w-1/2 md:w-1/3 lg:w-1/6 px-2 mb-12">
          <img className="mx-auto h-6" src="yofte-assets/brands/aol.svg" alt=""/>
        </div>
        <div className="w-1/2 md:w-1/3 lg:w-1/6 px-2 mb-12">
          <img className="mx-auto h-6" src="yofte-assets/brands/north-face.svg" alt=""/>
        </div>
      </div>
    </div>
 

</section>
</div>
  );
}

export default Navbar;
