import { servicesData } from '../assets/assets';

const Services = () => {
  return (
    <div id='services' className='py-20 px-6 max-w-6xl mx-auto'>

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

    </div>
  )
}

export default Services