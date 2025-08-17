import { FaStar } from "react-icons/fa6";
import { assets } from "../assets/assets";

const Testimonials = () => {
  const reviews = [
    {
      name: "أحمد محمد",
      image: assets.testimonial_1,
      rating: 5,
      text: "تجربة رائعة جدًا! الأكل كان لذيذ وخدمة التوصيل سريعة جدًا. أنصح به للجميع 👌",
    },
    {
      name: "سارة علي",
      image:  assets.testimonial_2,
      rating: 5,
      text: "التطبيق سهل الاستخدام جدًا، جربت أكلات منزلية طعمها أصيل ورائع. بس أتمنى إضافة المزيد من الخيارات.",
    },
    {
      name: "محمد ياسين",
      image:  assets.testimonial_3,
      rating: 5,
      text: "أفضل تطبيق جربته! شعرت إني بطلب من جيراني مباشرة. جودة ممتازة وتواصل رائع.",
    },
  ];

  return (
    <div id="testimonials" className="py-16 px-6 max-w-6xl mx-auto" dir="rtl">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        آراء عملاؤنا
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
          >
            
            <div className="flex items-center mb-4">
              <img
                src={review.image}
                alt={review.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
              />
              <div className="mr-3">
                <h3 className="font-semibold text-lg text-gray-800">
                  {review.name}
                </h3>
              </div>
            </div>

         
            <div className="flex text-yellow-400 mb-3">
              {Array.from({ length: 5 }, (_, i) => (
                <FaStar
                  key={i}
                  size={18}
                  className={i < review.rating ? "fill-yellow-400" : "fill-gray-300 text-gray-300"}
                />
              ))}
            </div>

          
            <p className="text-gray-600">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
