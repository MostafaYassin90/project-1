import { assets } from "../assets/assets";

const About = () => {
  return (
    <div id="about" className="py-16 px-[3vw] sm:px-[4vw] md:px-[5vw] lg:px-[7vw]">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        
        {/* image */}
        <div className="md:w-1/2">
          <img 
            src={assets.about_img} 
            alt="طبخ بيتي" 
            className="rounded-2xl shadow-lg object-cover w-full h-[350px]"
          />
        </div>
        
        {/* content */}
        <div className="md:w-1/2 text-center md:text-right">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            من نحن
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            نحن منصة طبخ بيتي تجمع بين الطهاة الموهوبين وعشاق الأكل المنزلي،
            حيث نتيح لك الاستمتاع بنكهات أصلية ووصفات تقليدية محضرة بحب.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            رسالتنا هي دعم الطهاة المحليين ومشاركة تجربة الطعام الأصيل مع الجميع،
            لنصنع معًا مجتمعًا يقدّر جودة المذاق المنزلي ويحتفي به.
          </p>
        </div>
      </div>
    </div>
  )
}
export default About;