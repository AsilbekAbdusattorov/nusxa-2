import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { sharhlar } from "../data";
import AOS from "aos";  // Import AOS library
import "aos/dist/aos.css";  // Import AOS CSS

const Sharhlar = () => {
  useEffect(() => {
    const swiperInstance = document.querySelector(".mySwiper").swiper;
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = ".custom-prev";
      swiperInstance.params.navigation.nextEl = ".custom-next";
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }

    // Initialize AOS
    AOS.init({
      duration: 1000,  // Set duration for animations
      easing: "ease-in-out", // Easing function
      once: true, // Animation will only happen once (when scrolling to the element)
    });
  }, []);

  return (
    <div className="bg-[#F2F8FB] py-10 lg:py-[121.525px] border-t relative">
      <div className="container mx-auto px-4 relative">
        {/* Section title */}
        <h2
          className="text-center text-3xl lg:text-5xl font-bold"
          data-aos="fade-up" // Add fade-up animation
        >
          Sharhlar
        </h2>
        <p
          className="text-center text-lg lg:text-[22px] text-[#8f8f8f] mb-6 lg:mb-12"
          data-aos="fade-up" // Add fade-up animation
          data-aos-delay="200" // Delay to make it staggered with the title
        >
          Biz mijozlarning so'rovlarini muvaffaqiyatli bajaramiz <br className="hidden lg:block" />
          va qiyin muammolarni arzon narxda samarali hal qilamiz.
        </p>

        {/* Swiper Slider */}
        <Swiper
          pagination={{ clickable: true }}
          loop={true}
          slidesPerView={1}
          breakpoints={{
            1024: {
              slidesPerView: 2,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
        >
          {sharhlar.map((sharh, index) => (
            <SwiperSlide key={index}>
              <div
                className="bg-white mb-8 mx-2 lg:mx-4 border px-6 py-8 lg:px-16 lg:py-16 rounded-md text-center"
                data-aos="fade-up" // Add fade-up animation
                data-aos-delay={`${index * 100}`} // Delay for each slide
              >
                <div className="max-w-full">
                  <div className="flex flex-col items-center space-y-4 pb-6">
                    <img
                      src={sharh.img}
                      alt={sharh.name}
                      className="w-20 h-20 lg:w-[120px] lg:h-[120px] rounded-full mb-2 lg:mb-4"
                    />
                    <div>
                      <h3 className="text-xl lg:text-[28px] font-semibold">
                        {sharh.name}
                      </h3>
                      <p className="text-sm lg:text-lg text-[#8F8F8F]">Moskva</p>
                    </div>
                    <svg
                      className="w-8 h-8 lg:w-16 lg:h-16"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 96 64"
                      fill="#f2f2f2"
                    >
                      <path d="M55.24 64c8.52-5.344 15.13-12.046 19.46-21.152-9.29-1.008-16.27-5.117-19.63-13.8-3.17-8.175-1.82-15.879 4.34-22.255 6.37-6.574 14.22-8.441 22.81-5.3 8.3 3.031 12.94 9.387 13.67 18.126 1.72 20.728-14.68 40.855-35.33 43.683-1.77.23-3.54.458-5.32.698zM1.83 64c8.51-5.344 15.13-12.046 19.46-21.152-9.3-1.008-16.28-5.117-19.64-13.8C-1.51 20.873-.17 13.169 6 6.793c6.36-6.574 14.21-8.441 22.8-5.3 8.3 3.031 12.94 9.387 13.67 18.126 1.72 20.728-14.68 40.855-35.33 43.683-1.77.23-3.54.458-5.31.698z" />
                    </svg>
                  </div>
                  <hr className="mb-6 border-[#ff5050]" />
                  <p className="text-sm lg:text-lg text-[#8f8f8f] leading-relaxed">
                    {sharh.title}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom navigation buttons */}
        <div
          className="custom-prev hidden lg:flex rounded-full text-2xl lg:text-4xl absolute top-1/2 left-2 lg:left-5 transform -translate-y-1/2 cursor-pointer bg-white px-4 py-2 lg:px-6 lg:py-3 z-10 text-black border border-[#ff5050]"
          data-aos="fade-left" // Add left fade animation to the prev button
        >
          {"<"}
        </div>
        <div
          className="custom-next hidden lg:flex rounded-full text-2xl lg:text-4xl absolute top-1/2 right-2 lg:right-5 transform -translate-y-1/2 cursor-pointer bg-white px-4 py-2 lg:px-6 lg:py-3 z-10 text-black border border-[#ff5050]"
          data-aos="fade-right" // Add right fade animation to the next button
        >
          {">"}
        </div>
      </div>
    </div>
  );
};

export default Sharhlar;
