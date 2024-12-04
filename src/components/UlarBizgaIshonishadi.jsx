import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import UlarBizgaishonishadiimg1 from "../img/UlarBizgaishonishadiimg1.svg";
import UlarBizgaishonishadiimg2 from "../img/UlarBizgaishonishadiim2.svg";
import UlarBizgaishonishadiimg3 from "../img/UlarBizgaishonishadiimg3.svg";
import UlarBizgaishonishadiimg4 from "../img/UlarBizgaishonishadiimg4.svg";
import UlarBizgaishonishadiimg5 from "../img/UlarBizgaishonishadiimg5.svg";
import { NavLink } from "react-router-dom";

const UlarBizgaIshonishadi = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // IntersectionObserver to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    const section = document.getElementById("swiperSection");
    if (section) observer.observe(section);
    return () => {
      if (section) observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div
      id="swiperSection"
      className={`bg-white py-16 lg:py-[121.525px] relative transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-0">
        <h2 className="text-center font-bold text-3xl lg:text-5xl">Ular bizga ishonishadi</h2>
        <p className="text-base lg:text-lg text-black/50 text-center pb-8 lg:pb-12">
          Ishimiz davomida biz ko'plab kompaniyalar bilan muvaffaqiyatli ishladik.
        </p>

        {/* Swiper Component */}
        <Swiper
          onInit={(swiper) => (swiperRef.current = swiper)} // Capture Swiper instance on init
          slidesPerView={1}
          spaceBetween={16}
          loop={true}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 16 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
            1280: { slidesPerView: 4, spaceBetween: 32 },
          }}
          modules={[FreeMode, Pagination, Navigation]}
          className="mySwiper ular-ishonishadi"
        >
          {[UlarBizgaishonishadiimg1, UlarBizgaishonishadiimg2, UlarBizgaishonishadiimg3, UlarBizgaishonishadiimg4, UlarBizgaishonishadiimg5].map((img, index) => (
            <SwiperSlide key={index} className="mb-12">
              <NavLink to="/" className="text-center hover:grayscale-0 grayscale hover:shadow-xl transition duration-300">
                <div className="border w-full max-w-[284.4px] h-[258.44px] rounded-lg overflow-hidden shadow-sm transition-transform transform mx-auto hover:scale-105">
                  <div className="p-8">
                    <img src={img} alt="exposition" className="mx-auto w-[220px] h-[132px]" />
                    <div className="my-3 w-6 h-0.5 bg-red-500 mx-auto"></div>
                    <p className="text-gray-500">"Company Name {index + 1}"</p>
                  </div>
                </div>
              </NavLink>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div
          ref={prevRef}
          className="custom-prev-1 rounded-full text-2xl lg:text-4xl absolute top-[55%] left-4 lg:left-8 transform -translate-y-1/2 cursor-pointer bg-white z-10 px-4 lg:px-6 py-2 lg:py-3 text-black border border-[#ff5050]"
        >
          {"<"}
        </div>
        <div
          ref={nextRef}
          className="custom-next-2 rounded-full text-2xl lg:text-4xl absolute top-[55%] right-4 lg:right-8 transform -translate-y-1/2 cursor-pointer bg-white z-10 px-4 lg:px-6 py-2 lg:py-3 text-black border border-[#ff5050]"
        >
          {">"}
        </div>
      </div>
    </div>
  );
};

export default UlarBizgaIshonishadi;
