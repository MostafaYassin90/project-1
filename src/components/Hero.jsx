import { useEffect, useRef, useState } from "react";
import { bulletsOfSlide, sliderData } from "../assets/assets"

export const Hero = () => {
  let [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null)

  // Apply Slider
  const applySlider = () => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(${currentSlide * 100}%)`;
      sliderRef.current.style.transition = "transform 0.7s ease-in-out";
    }
  }

  useEffect(() => {
    applySlider()
  }, [currentSlide])

  return (
    <div className="h-[calc(100vh-120px)]  py-3 sm:px-4 md:px-5 lg:px-[7vw]">

      {/* Slider Wrapper */}
      <div className="relative w-full h-[calc(100vh-120px)]  overflow-hidden rounded-xl shadow-lg">

        {/* Slides Container */}
        <div
          ref={sliderRef}
          className="flex w-full h-full"
        >
          {sliderData.map((slide, index) => (
            <div
              key={index}
              className="bg-[#f1f1f1] max-md:p-12 p-5 rounded-xl min-w-full flex flex-col md:flex-row gap-10 items-center"
            >
              {/* الصورة */}
              <div className="flex-1 p-1 bg-white max-md:h-[70%] xl:h-[90%] border-2 border-gray-400 rounded-md">
                <img
                  src={slide.image}
                  alt="slide image"
                  className="block rounded-md w-full h-full xl:h-full object-cover"
                />
              </div>

              {/* النص */}
              <div className="flex-1 text-center">
                <h2 className="text-3xl md:text-5xl text-gray-600 font-bold">
                  {slide.title}
                </h2>
                <p className="text-base md:text-lg mt-5 text-gray-600 font-medium">
                  {slide.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bullets */}
        <div className="absolute w-full bottom-5 left-0 flex justify-center">
          <ul className="flex items-center gap-3">
            {bulletsOfSlide.map((item, index) => (
              <li
                onClick={() => {
                  setCurrentSlide(index);
                  applySlider();
                }}
                key={index}
                className={`block w-[80px] h-[12px] rounded-full cursor-pointer transition-all duration-300
                  ${currentSlide === index ? "bg-[#E7B40B]" : "bg-gray-300"}`}
              ></li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  )
}
