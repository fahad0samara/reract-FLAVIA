import img from '../img/5.png'
import img1 from '../img/6.png'

const Section1 = () => {

  return (
    <div>

<div
 className="overflow-y-hidden py-6">
      <div className=" " >
       
     <div className=' grid xl:grid-cols-5 mb-7 '>
<img 
data-aos="fade-right"
className='  mt-5 md:block hidden skew-x-6' src={img} alt="" />
<div className=" text-center  space-y-7 mt-20 col-span-3">
          <h1 data-aos="fade-down" className=" text-4xl font-bold">WHY SNAILLIKE?</h1>
<h1
data-aos="fade-down-right"
className=" text-2xl text-[#e8a6c6] font-black ">
Yourself required no at thoughts delicate landlord it be. Branched dashwood do
is whatever it. Farther be chapter at visited married in it pressed.</h1>

      </div>
<img

data-aos="fade-down-right"
className=' md:block hidden mt-3' src={img1} alt="" />

     </div>
         

    </div>
    </div>
    </div>
  )
}

export default Section1