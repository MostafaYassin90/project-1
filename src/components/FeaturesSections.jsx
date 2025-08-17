import { assets } from "../assets/assets";

const FeaturesSection = () => {
  const features = [
    {
      title: "وصول محلي وسريع",
      desc: "عرض مزوّدي الخدمة القريبين منك، مما يقلل من وقت التوصيل ويمنحك تجربة أكثر أمانًا وسرعة.",
    },
    {
      title: "نكهات تقليدية أصيلة",
      desc: "تختار من أطباق منزلية تقليدية تصنعها يدويًا سيدات وأفراد من مجتمعك، مما يقدّم تجربة ثقافية وغذائية فريدة.",
    },
    {
      title: "تقييمات وآراء موثوقة",
      desc: "الحصول على تقييمات وآراء حقيقية من عملاء سابقين لتعزيز الثقة.",
    },
    {
      title: "طرق دفع متنوعة وآمنة",
      desc: "إمكانية الدفع نقدًا أو إلكترونيًا بشكل آمن وسهل.",
    },
    {
      title: "واجهة سهلة الاستخدام",
      desc: "تصميم بسيط وسهل يضمن تجربة سلسة للمستخدم.",
    },
    {
      title: "متابعة الطلب",
      desc: "معرفة مستمرة بمراحل الطلب (استلام، تجهيز، توصيل...) وتتبّع الموقع في الوقت الحقيقي.",
    },
  ];

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        مميزات التطبيق
      </h2>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* صورة التطبيق */}
        <div className="relative flex justify-center">
          <img
            src={assets.features_img} 
            alt="صورة التطبيق"
            className="max-w-xs md:max-w-sm rounded-xl shadow-lg"
          />
          <div className="absolute top-[60px]">
            <img src={assets.logo} alt="logo" className="w-[125px]"/>
          </div>
        </div>

        {/* المميزات */}
        <div className="space-y-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg text-blue-600">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
