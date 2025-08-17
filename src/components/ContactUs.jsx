import { FaWhatsapp, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"

function ContactUs() {
  return (
    <div id="contact" className="py-16 px-[3vw] sm:px-[4vw] md:px-[5vw] lg:px-[7vw]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-1 gap-12 items-center">

        {/* form */}
        <form className="bg-white shadow-2xl rounded-2xl p-8 space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center md:text-right">
            تواصل معنا
          </h2>

          <input
            type="text"
            placeholder="الاسم"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
          />

          <input
            type="email"
            placeholder="البريد الإلكتروني"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
          />

          <input
            type="tel"
            placeholder="رقم الهاتف"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
          />

          <input
            type="text"
            placeholder="العنوان"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-yellow-400 outline-none"
          />

          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-3 rounded-lg font-semibold hover:bg-yellow-600 transition"
          >
            إرسال
          </button>
        </form>

        {/* Icons */}
        <div className="flex flex-col md:items-start gap-6">

          <h3 className="text-2xl font-bold text-gray-800">راسلنا على</h3>
          <div>
          <div className="flex gap-6 text-3xl text-gray-600">
            {/* واتساب */}
            <a
              href="https://wa.me/966500876876"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500"
            >
              <FaWhatsapp />
            </a>
            {/* فيسبوك */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              <FaFacebookF />
            </a>
            {/* تويتر */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-500"
            >
              <FaTwitter />
            </a>
            {/* انستجرام */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <FaInstagram />
            </a>
          </div>
          {/* Policies Section */}
          <div className="mt-10 text-sm text-gray-600">
            <h4 className="font-bold mb-2">السياسات</h4>
            <ul className="space-y-1">
              <li><a href="/privacy" className="hover:text-yellow-600">سياسة الخصوصية</a></li>
              <li><a href="/terms" className="hover:text-yellow-600">الشروط والأحكام</a></li>
              <li><a href="/refund" className="hover:text-yellow-600">سياسة الاسترجاع</a></li>
            </ul>
          </div>
          </div>


        </div>

      </div>
    </div>
  )
}

export default ContactUs;