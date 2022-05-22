import {RiNumber1} from 'react-icons/ri';
import {RiNumber2} from 'react-icons/ri';
import {RiNumber3} from 'react-icons/ri';
import {IoIosLogOut} from 'react-icons/io';
import {BsWallet2} from 'react-icons/bs';
import {BiTransfer} from 'react-icons/bi';
const Section2 = () => {
  return (
      <div>

  <div className="overflow-y-hidden ">
      <div className={'mx-auto container f-f-p px-4 xl:px-0 py-24'}>
        <h1
        data-aos="fade-right"
        className={'focus:outline-none text-center text-3xl lg:text-4xl font-extrabold lg:leading-9 tracking-wider '}>How it works?</h1>
        <div className="md:mt-24 f-f-p">
          <div className=" md:flex justify-center w-full">
            <div className="flex flex-col items-center md:items-end md:pr-12 md:border-r-4 border-[#e8a6c6] relative md:w-1/2">
              <div className='bg-[#e8a6c6] rounded-full px-7 py-7'>
             <IoIosLogOut size={50} color="white"/>
              </div>
              <div className='bg-[#e8a6c6]/30 border-2 mt-24 rounded-full px-2 py-2'>
               <RiNumber2 size={30} />
              </div>
              <div className="flex mt-12 flex-col items-center lg:items-end md:w-8/12">
                <h1 className="focus:outline-none text-xl font-bold leading-5">Create a Wallet</h1>
                <h2
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
                
                className="focus:outline-none  mt-3 pl-3 text-center md:text-right text-base leading-6 tracking-wide">Create a wallet by linking a payment method that you’re comfortable with. Paypal, Visa and more </h2>
              </div>
              <div className='bg-[#e8a6c6] rounded-full px-7 py-7 mt-24'>
               <BiTransfer size={50} color="white"/>
              </div>
             
            </div>
            <div className="flex flex-col items-center md:items-start md:pl-12 lg:border-[#e8a6c6] mt-20 md:mt-0 md:w-1/2">
              <div >
              <div className='bg-[#e8a6c6]/30 border-2 rounded-full px-2 py-2'>
               <RiNumber1 size={30} />
              </div>
              </div>
              <div
              data-aos="fade-right"
              className="flex mt-6 flex-col items-center md:items-start md:w-8/12">
                <h1 className="focus:outline-none text-xl font-bold leading-5">SignUp for an Account</h1>
                <h2 className="focus:outline-none  mt-3 text-base leading-6 tracking-wide">Sign up on our website and opt for a program that suits you the best . </h2>
              </div>
              <div className='bg-[#e8a6c6] rounded-full px-7 py-7 mt-24'>
               <BsWallet2 size={50} color="white"/>
              </div>
              <div className='bg-[#e8a6c6]/30 border-2 rounded-full mt-20 px-2 py-2'>
               <RiNumber3 size={30} />
              </div>
              <div className="flex mt-6 flex-col items-center md:items-start md:w-8/12">
                <h1 className="focus:outline-none text-xl font-bold leading-5">Start your Transactions</h1>
                <h2
                 data-aos="fade-right"
                 data-aos-offset="300"
                 data-aos-easing="ease-in-sine"
                className="focus:outline-none  mt-3 text-base leading-6 tracking-wide">Start transactions right away. No more complicated process for anything else.</h2>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </div>





      </div>
  );
}

export default Section2