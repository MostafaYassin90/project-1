import { FaWhatsapp, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { assets } from "../assets/assets";

const Footer = () => {
  const whatsappNumber = "966500876876";

  return (
    <footer className="bg-gray-900 text-gray-300 pt-10">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">

        {/* Logo + About */}
        <div>
          <a href="/">
            <img src={assets.logo} alt="logo" className="w-[100px] mb-4" />
          </a>          <p className="text-sm leading-6">
            نحن منصة طبخ بيتي تجمع بين الطهاة الموهوبين وعشاق الأكل المنزلي، حيث نتيح لك الاستمتاع بنكهات أصلية ووصفات تقليدية محضرة بحب
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">روابط سريعة</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-yellow-400">من نحن</a></li>
            <li><a href="#contact" className="hover:text-yellow-400">تواصل معنا</a></li>
            <li><a href="/privacy" className="hover:text-yellow-400">سياسة الخصوصية</a></li>
            <li><a href="/terms" className="hover:text-yellow-400">الشروط والأحكام</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">تابعنا</h3>
          <div className="flex gap-4 text-2xl">
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
              <FaWhatsapp />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FaFacebook />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">
              <FaTwitter />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <FaInstagram />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} مطبخ بيتك. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
};
export default Footer;