import { FaApple, FaGooglePlay } from "react-icons/fa";
import { assets } from "../assets/assets";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

function Hero() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="relative px-6 max-w-6xl mx-auto">

      <header className="absolute top-0 left-0 w-[100%] bg-white z-50">
        <div className="mx-auto px-6 max-w-6xl flex items-center justify-between py-4">

          <div className="text-xl font-bold text-orange-600">
            <a href="/">
              <img src={assets.logo} className="w-[100px]" />
            </a>
          </div>

          <nav className="max-md:hidden">
            <ul className="flex gap-6 text-gray-700">
              <li><a href="/" className="hover:text-orange-600">الرئيسية</a></li>
              <li><a href="#about" className="hover:text-orange-600">من نحن</a></li>
              <li><a href="#services" className="hover:text-orange-600">خدماتنا</a></li>
              <li><a href="#testimonials" className="hover:text-orange-600">آراء العملاء</a></li>
              <li><a href="#contact" className="hover:text-orange-600">اتصل بنا</a></li>
            </ul>
          </nav>

          <a href="#" className="max-md:m-auto bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-500 transition">
            حمّل التطبيق الآن
          </a>

          {/* Menu */}
          <div className="min-md:hidden">
            <IoMenu className="size-10 cursor-pointer" onClick={() => { setShowMenu((prev) => !prev) }} />
          </div>


          {/* Show Menu in small screen */}
          <nav className={`absolute top-[100%] right-0 ${showMenu ? "w-full" : "w-0"} transition-all duration-300 z-50 min-md:hidden bg-gray-200 py-3 overflow-hidden`}>
            <ul className="flex flex-col gap-6 text-gray-700">
              <li><a href="/" className={`hover:text-orange-600 text-gray-700 font-semibold text-[17px] py-2 px-5`} onClick={() => {setShowMenu(false)}}>الرئيسية</a></li>
              <li><a href="#about" className={`hover:text-orange-600 text-gray-700 font-semibold text-[17px] py-2 px-5`} onClick={() => {setShowMenu(false)}}>من نحن</a></li>
              <li><a href="#services" className={`hover:text-orange-600 text-gray-700 font-semibold text-[17px] py-2 px-5`} onClick={() => {setShowMenu(false)}}>خدماتنا</a></li>
              <li><a href="#testimonials" className={`hover:text-orange-600 text-gray-700 font-semibold text-[17px] py-2 px-5`} onClick={() => {setShowMenu(false)}}>آراء العملاء</a></li>
              <li><a href="#contact" className={`hover:text-orange-600 text-gray-700 font-semibold text-[17px] py-2 px-5`} onClick={() => {setShowMenu(false)}}>اتصل بنا</a></li>
            </ul>
          </nav>

        </div>
      </header>

      {/* قسم البطل */}
      <section className="hero relative pb-[40px] overflow-hidden h-screen flex items-center justify-between px-10 pt-28 bg-cover bg-center"
        style={{ backgroundImage: "url('../assets/main-app-2.png')" }} >

        {/* طبقة شفافة */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* النصوص */}
        <div className="relative z-10 text-white max-w-xl max-md:text-center max-md:mx-auto">
          <h1 className="text-4xl font-bold leading-relaxed mb-4">
            اكتشف نكهات بيتية أصيلة بالقرب منك 🍲
          </h1>
          <p className="mb-6 text-lg">
            حمّل تطبيق نكهة بيتنا وابدأ بتجربة مأكولات منزلية مميزة من أيدي أمهر الطهاة المحليين.
          </p>
          <div className="flex gap-4 max-md:justify-center">
            <a href="#" className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition">
              <FaApple className="text-2xl" /> App Store
            </a>
            <a href="#" className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition">
              <FaGooglePlay className="text-2xl" /> Google Play
            </a>
          </div>
        </div>

        {/* صورة الموك اب */}
        <div className="relative z-10 hidden sm:block overflow-y-auto max-h-[100%] no-scrollbar rounded-xl">
          <img src={assets.main_app_1} alt="واجهة التطبيق" className="w-[300px] rounded-xl shadow-2xl max-h-[100%] no-scrollbar" />
        </div>
      </section>

    </div>
  );
}
export default Hero;