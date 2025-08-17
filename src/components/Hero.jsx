import { FaApple, FaGooglePlay } from "react-icons/fa";
import { assets } from "../assets/assets";

export default function Hero() {
  return (
    <div>
      <header className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="text-xl font-bold text-orange-600">
            <a href="/">
              <img src={assets.logo} className="w-[100px]" />
            </a>
          </div>
          <nav>
            <ul className="flex gap-6 text-gray-700">
              <li><a href="/" className="hover:text-orange-600">الرئيسية</a></li>
              <li><a href="#about" className="hover:text-orange-600">من نحن</a></li>
              <li><a href="#services" className="hover:text-orange-600">خدماتنا</a></li>
              <li><a href="#" className="hover:text-orange-600">آراء العملاء</a></li>
              <li><a href="#contact" className="hover:text-orange-600">اتصل بنا</a></li>
            </ul>
          </nav>
          <a href="#" className="bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-500 transition">
            حمّل التطبيق الآن
          </a>
        </div>
      </header>

      {/* قسم البطل */}
      <section className="hero relative pb-[40px] overflow-hidden h-screen flex items-center justify-between px-10 pt-28 bg-cover bg-center"
        style={{ backgroundImage: "url('../assets/main-app-2.png')" }} >

        {/* طبقة شفافة */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* النصوص */}
        <div className="relative z-10 text-white max-w-xl">
          <h1 className="text-4xl font-bold leading-relaxed mb-4">
            اكتشف نكهات بيتية أصيلة بالقرب منك 🍲
          </h1>
          <p className="mb-6 text-lg">
            حمّل تطبيق نكهة بيتنا وابدأ بتجربة مأكولات منزلية مميزة من أيدي أمهر الطهاة المحليين.
          </p>
          <div className="flex gap-4">
            <a href="#" className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition">
              <FaApple className="text-2xl" /> App Store
            </a>
            <a href="#" className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition">
              <FaGooglePlay className="text-2xl" /> Google Play
            </a>
          </div>
        </div>

        {/* صورة الموك اب */}
        <div className="relative z-10 hidden md:block overflow-y-auto max-h-[100%] no-scrollbar rounded-xl">
          <img src={assets.main_app_1} alt="واجهة التطبيق" className="w-[300px] rounded-xl shadow-2xl max-h-[100%] no-scrollbar" />
        </div>
      </section>
    </div>
  );
}
