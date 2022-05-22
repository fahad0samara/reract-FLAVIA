import React from 'react'
import img from '../img/10.avif'
import img1 from '../img/11.avif'
import img2 from '../img/12.avif'
import img6 from '../img/13.avif'
import img3 from '../img/14.avif'
import img4 from '../img/15.avif'
import img5 from '../img/16.avif'
import img7 from '../img/17.avif'


const Section3 = () => {
  return (
      <div>
  <h1 
   data-aos="fade-right"
   data-aos-offset="300"
   data-aos-easing="ease-in-sine"
  
  className={'text-[#e8a6c6] font-black text-3xl text-center'}>products for you</h1>
  <section className=" body-font">
    <div className="container px-5 py-24 mx-auto ">
      <div className="flex flex-wrap ">
        <div
        data-aos="fade-left"
        className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-xl hover:shadow-[#e8a6c6] drop-shadow-2xl  ">
          <a className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={img}/>
          </a>
          <div className="mt-4">
            <h3 className=" text-xs tracking-widest title-font mb-1">CATEGORY</h3>
            <h2 className=" title-font text-lg font-medium">The Catalyzer</h2>
            <p className="mt-1">$16.00</p>
          </div>
        </div>
        <div
        data-aos="fade-right"
        className="lg:w-1/4 md:w-1/2 p-4 w-full hover:shadow-[#e8a6c6] shadow-xl  drop-shadow-2xl  rounded-2xl">
          <a className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={img1}/>
          </a>
          <div className="mt-4">
            <h3 className=" text-xs tracking-widest title-font mb-1">CATEGORY</h3>
            <h2 className=" title-font text-lg font-medium">Shooting Stars</h2>
            <p className="mt-1">$21.15</p>
          </div>
        </div>
        <div
        data-aos="fade-left"
        
        className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-2xl hover:shadow-[#e8a6c6]">
          <a className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block"src={img2} />
          </a>
          <div className="mt-4">
            <h3 className=" text-xs tracking-widest title-font mb-1">CATEGORY</h3>
            <h2 className=" title-font text-lg font-medium">Neptune</h2>
            <p className="mt-1">$12.00</p>
          </div>
        </div>
        <div
        data-aos="fade-right"
        className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-2xl hover:shadow-[#e8a6c6]">
          <a className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={img3}/>
          </a>
          <div className="mt-4">
            <h3 className=" text-xs tracking-widest title-font mb-1">CATEGORY</h3>
            <h2 className=" title-font text-lg font-medium">The 400 Blows</h2>
            <p className="mt-1">$18.40</p>
          </div>
        </div>
        <div 
        data-aos="fade-right"
        className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-2xl hover:shadow-[#e8a6c6]">
          <a className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={img4}/>
          </a>
          <div className="mt-4">
            <h3 className=" text-xs tracking-widest title-font mb-1">CATEGORY</h3>
            <h2 className=" title-font text-lg font-medium">The Catalyzer</h2>
            <p className="mt-1">$16.00</p>
          </div>
        </div>
        <div 
        
        data-aos="fade-left"
        className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-2xl hover:shadow-[#e8a6c6]">
          <a className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={img7}/>
          </a>
          <div className="mt-4">
            <h3 className=" text-xs tracking-widest title-font mb-1">CATEGORY</h3>
            <h2 className=" title-font text-lg font-medium">Shooting Stars</h2>
            <p className="mt-1">$21.15</p>
          </div>
        </div>
        <div
        data-aos="fade-right"
        className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-2xl hover:shadow-[#e8a6c6]">
          <a className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={img6}/>
          </a>
          <div className="mt-4">
            <h3 className=" text-xs tracking-widest title-font mb-1">CATEGORY</h3>
            <h2 className=" title-font text-lg font-medium">Neptune</h2>
            <p className="mt-1">$12.00</p>
          </div>
        </div>
        <div data-aos="fade-right"
        className="lg:w-1/4 drop-shadow-2xl md:w-1/2 p-4 w-full shadow-2xl hover:shadow-[#e8a6c6]">
          <a className="block relative h-48 rounded overflow-hidden">
            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={img5}/>
          </a>
          <div className="mt-4">
            <h3 className=" text-xs tracking-widest title-font mb-1">CATEGORY</h3>
            <h2 className=" title-font text-lg font-medium">The 400 Blows</h2>
            <p className="mt-1">$18.40</p>
          </div>
        </div>
      </div>
    </div>
  </section> 
      </div>
  );
}

export default Section3