import { servicesData, servicesTwoData } from '../assets/assets';
import { FaRegHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const Services = () => {
  return (
    <div id='services' className='py-20 px-[3vw] sm:px-[4vw] md:px-[5vw] lg:px-[7vw]'>

      {/* Sections */}
      <div className='sections'>
        <div className='text-right text-3xl font-semibold text-gray-800 mb-8'>
          <h2>الأقسام الرئيسية</h2>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-10'>
          {
            servicesData.map((item, index) => (
              <div key={index} className='flex flex-col gap-2 items-center hover:scale-105 transition-all duration-300 cursor-pointer'>
                <div key={index} className='w-[160px] xl:w-[180px] h-[160px] xl:h-[180px] p-2 bg-[#eee] border-2 border-[#f1f1f1] shadow-md rounded-full'>
                  <img src={item.image} alt={`${item.title}`} className='w-full h-full rounded-full object-cover' />
                </div>
                <p className='text-center mt-2 text-gray-700 font-semibold text-xl'>{item.title}</p>
              </div>
            ))
          }
        </div>
      </div>


      {/* Services */}
      <div className='mt-20'>

        <div className='text-right text-3xl font-semibold text-gray-800 mb-8'>
          <h2>مزود الخدمة</h2>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3  gap-10'>
          {
            servicesTwoData.map((item, index) => (
              <div key={index} className='shadow-xl rounded-2xl overflow-hidden cursor-pointer p-2 hover:scale-105 transition-all duration-300'>
                <div>
                <img src={item.image} alt='service image' className='w-full rounded-2xl' />
                </div>

                <div className='py-3 px-5'>
                  <div className='flex items-center justify-between mb-2'>
                    <h2 className='text-xl font-bold'>{item.title}</h2>
                    <FaRegHeart className='text-red-600 size-5 cursor-pointer'/>
                  </div>
                  <div className='flex items-center justify-between '>
                    <p className='flex items-center gap-2 font-bold text-[18px]'><FaStar className='text-[#E39233] size-5'/> 4.3 </p>
                    <p className='text-gray-600 font-medium'>(221 تقييم)</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>


    </div>

  )
}

export default Services