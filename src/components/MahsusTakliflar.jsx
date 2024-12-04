import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Mahsustaklifimg1 from "../img/Mahsustaklifimg1.webp";
import Mahsustaklifimg2 from "../img/Mahsustaklifimg2.webp";
import HeaderModal from "./HeaderModal";
import { NavLink } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation } from "swiper/modules";

const MahsusTakliflar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [inView, setInView] = useState(false); // Intersection Observer state

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    const target = document.getElementById("swiper-section"); // Section ID
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) observer.unobserve(target);
    };
  }, []);

  return (
    <div className="bg-[#F2F8FB]">
      <div id="swiper-section" className={`mt-6 py-20 border-t relative ${inView ? "fade-in" : ""}`}>
        <div className="container mx-auto px-4 md:px-6 lg:px-12 relative">
          <h2 className="text-center font-bold text-3xl md:text-4xl lg:text-5xl">Maxsus takliflar</h2>
          <p className="text-lg md:text-xl lg:text-2xl text-center text-[#5E5E82] mb-8 lg:mb-12">
            Xizmat uchun to'lash pulingiz yo'qmi? <br />
            Bizda yechim bor
          </p>
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            speed={600}
            parallax={true}
            pagination={{
              clickable: true,
            }}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            loop={true}
            modules={[Parallax, Pagination, Navigation]}
            className="mySwiper"
          >
            {/* First slide */}
            <SwiperSlide>
              <div className="bg-red-400 p-4 md:p-8 lg:px-16 lg:py-10">
                <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between space-y-6 lg:space-y-0">
                  <img
                    className="w-full lg:w-[587.2px] h-auto lg:h-[352.31px]"
                    src={Mahsustaklifimg1}
                    alt="Mahsus Taklif"
                  />
                  <div className="space-y-5 text-center lg:text-left">
                    <NavLink
                      to="#"
                      className="text-xl md:text-2xl lg:text-[28px] font-semibold cursor-pointer text-white"
                    >
                      Sudda vakillik va yuridik xizmatlar -20%
                    </NavLink>
                    <p className="text-base md:text-lg lg:text-lg text-[#FFCDCD]">
                      Professional yuridik yordam va maslahat: fuqarolik va meros ishlarida
                    </p>
                    <button
                      onClick={openModal}
                      className="px-6 py-3 lg:py-5 bg-white rounded-full text-base lg:text-xl font-medium w-full max-w-[200px] lg:max-w-[240px] mx-auto lg:mx-0"
                    >
                      Xizmatni oling
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Second slide */}
            <SwiperSlide>
              <div className="bg-red-400 p-4 md:p-8 lg:px-16 lg:py-10">
                <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between space-y-6 lg:space-y-0">
                  <img
                    className="w-full lg:w-[587.2px] h-auto lg:h-[352.31px]"
                    src={Mahsustaklifimg2}
                    alt="Mahsus Taklif"
                  />
                  <div className="space-y-5 text-center lg:text-left">
                    <NavLink
                      to="#"
                      className="text-xl md:text-2xl lg:text-[28px] font-semibold cursor-pointer text-white"
                    >
                      Tajribali yuristlar va advokatlar -10%
                    </NavLink>
                    <p className="text-base md:text-lg lg:text-lg text-[#FFCDCD]">
                      Siz kompaniyamizning eng yaxshi advokatlari va advokatlariga ishonishingiz mumkin
                    </p>
                    <button
                      onClick={openModal}
                      className="px-6 py-3 lg:py-5 bg-white rounded-full text-base lg:text-xl font-medium w-full max-w-[200px] lg:max-w-[240px] mx-auto lg:mx-0"
                    >
                      Biz bilan bog'lanish
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {isModalOpen && <HeaderModal closeModal={closeModal} />}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="custom-prev rounded-full text-2xl lg:text-4xl absolute top-[65%] left-2 lg:left-[-10px] transform -translate-y-1/2 cursor-pointer bg-white px-4 lg:px-6 py-2 lg:py-3 z-10 text-black border border-[#ff5050]">
            {"<"}
          </div>
          <div className="custom-next rounded-full text-2xl lg:text-4xl absolute top-[65%] right-2 lg:right-[-10px] transform -translate-y-1/2 cursor-pointer bg-white px-4 lg:px-6 py-2 lg:py-3 z-10 text-black border border-[#ff5050]">
            {">"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MahsusTakliflar;
