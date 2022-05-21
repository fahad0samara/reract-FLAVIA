import React from 'react'
import img1 from '../img/0.png'
const Section = () => {
    return (
        <div>

            <div className="gradient  grid md:grid-cols-2 ">
                <div className="py-20 space-x-4  text-black  mt-10  md:ml-20 md:py-28">

                    <span
                        data-aos="fade-down"
                        className="inline-block rounded-xl py-px px-2 mb-4 text-xl leading-5  bg-[#f2f3f4] text-black uppercase rounded-9xl">Meet With</span>
                    <h1
                        data-aos="fade-up"
                        className="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight">Natural Inner Beauty</h1>
                    <p className="mb-8 text-lg md:text-xl text-coolGray-500 font-medium"> Provide deluxe hydration for those with dry or age-related skin concerns. They add intense moisture to dehydrated or mature skin, alleviating uneven, sun-damaged textures to promote natural radiance...</p>
                    <div
                        data-aos="fade-left"
                        className="flex flex-wrap">
                        <div className="w-full md:w-auto py-1 md:py-0 md:mr-4"><a className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 rounded-xl drop-shadow-2xl  font-medium text-center
            bg-black md:text-black text-gray-50
            md:bg-[#cce5f8] hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border  rounded-md shadow-sm" href="#">Order NOW</a></div>
                        <div className="w-full md:w-auto py-1 md:py-0"><a className="inline-block rounded-2xl py-5 px-7 w-full text-base md:text-lg leading-4 text-coolGray-800 font-medium text-center bg-white  " href="#">Learn More</a></div>
                    </div>



                </div>
                <img src={img1} alt="" />
            </div>
            <div className=" gradienttt text-black  mx-auto sm:max-w-xl md:max-w-full px-8 ">
                <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
                    <div className="text-center">
                        <h6 className="text-3xl font-bold text-deep-purple-accent-400">
                            144K
                        </h6>
                        <p className="font-bold">Happy customers  </p>
                    </div>
                    <div className="text-center">
                        <h6 className="text-3xl font-bold text-deep-purple-accent-400">
                            32.1K
                        </h6>
                        <p className="font-bold">Users</p>
                    </div>
                    <div className="text-center">
                        <h6 className="text-3xl font-bold text-deep-purple-accent-400">
                            12.9K
                        </h6>
                        <p className="font-bold">Subscribers</p>
                    </div>
                    <div className="text-center">
                        <h6 className="text-3xl font-bold text-deep-purple-accent-400">
                            95%
                        </h6>
                        <p className="font-bold">Happy customers</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section