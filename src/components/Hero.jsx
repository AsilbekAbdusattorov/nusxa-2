import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import HeroImg1 from "../img/HeroImg1.webp";
import HeroImg2 from "../img/HeroImg2.webp";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { Button } from "@material-tailwind/react";
import HeaderModal from "./HeaderModal";
import "../styles/Hero.css";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative mx-auto">
      <Swiper
        loop={true}
        spaceBetween={30}
        effect={"fade"}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="h-[629.75px] w-full object-cover z-10"
            src={HeroImg1}
            alt="Bosh sahifadagi rasm 1"
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center mx-auto w-3/4 md:w-2/4">
              <h1 className="mb-4 text-5xl font-bold text-white">
                Yuridik xizmatlar
              </h1>
              <h2 className="mb-12 text-[22px] text-white opacity-80">
                Professional advokatlar va advokatlar jamoasi huquqning istalgan sohasidagi
                nizolarni hal qilishda yordam ko'rsatishga qodir.
              </h2>
              <Button
                onClick={openModal}
                size="lg"
                color="white"
                variant="text"
                className="bg-[#ff5050] hover:bg-[#ff5050] cursor-pointer py-5 px-6 rounded-[250px] text-xl font-medium text-center"
              >
                Biz bilan bog'lanish
              </Button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="h-[629.75px] w-full object-cover z-10"
            src={HeroImg2}
            alt="Bosh sahifadagi rasm 2"
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center mx-auto w-3/4 md:w-2/4">
              <h1 className="mb-4 text-5xl font-bold text-white">
                Bizning tajribamiz va bilimimiz sizning muammolaringizga yechimdir!
              </h1>
              <h2 className="mb-12 text-[22px] text-white opacity-80">
                Biz bilan bog'laning, biz sizga maslahat beramiz va biz eng yaxshi variantlarni tanlaymiz.
              </h2>
              <Button
                onClick={openModal}
                size="lg"
                color="white"
                variant="text"
                className="bg-[#ff5050] hover:bg-[#ff5050] cursor-pointer py-5 px-6 rounded-[250px] text-xl font-medium text-center"
              >
                Biz bilan bog'lanish
              </Button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Custom Navigation Buttons, only visible on lg screens and above */}
      <div className="custom-prev lg:flex hidden rounded-full text-4xl absolute top-1/2 left-8 transform -translate-y-1/2 cursor-pointer bg-white px-6 py-3 text-black border border-[#ff5050] z-30">
        {"<"}
      </div>
      <div className="custom-next lg:flex hidden rounded-full text-4xl absolute top-1/2 right-8 transform -translate-y-1/2 cursor-pointer bg-white px-6 py-3 text-black border border-[#ff5050] z-30">
        {">"}
      </div>

      {isModalOpen && <HeaderModal closeModal={closeModal} />}
    </div>
  );
};

export default Hero;
