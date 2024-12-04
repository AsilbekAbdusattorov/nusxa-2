import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { YangiliklarData } from "../data";
import AOS from "aos";
import "aos/dist/aos.css";

const YangilikTafsilot = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out" });
  }, []);

  const { id } = useParams();
  const yangilik = YangiliklarData.find((item) => item.id === parseInt(id));

  if (!yangilik) {
    return (
      <div className="container mx-auto py-12 px-4 text-center">
        <h1 className="text-2xl font-bold text-red-500">Yangilik topilmadi!</h1>
      </div>
    );
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-[#f9f9f9] py-16 px-4 min-h-screen flex justify-center items-center">
      <div
        className="max-w-2xl w-full bg-white shadow-lg rounded-lg p-6 
          transition-transform transform hover:scale-105 hover:rotate-1 hover:shadow-2xl duration-500"
        data-aos="fade-up"
      >
        <h1
          className="text-3xl font-semibold text-center mb-6 text-[#333]"
          data-aos="fade-down"
        >
          {yangilik.name}
        </h1>
        <div className="relative overflow-hidden rounded-lg" data-aos="zoom-in">
          <img
            src={yangilik.img}
            alt={yangilik.name}
            className="w-full h-[350px] object-cover rounded-lg 
              transition-transform transform hover:scale-110 hover:rotate-1 duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-500 flex justify-center items-center">
          </div>
        </div>
        <p className="text-base leading-relaxed text-gray-700 mt-6">
          {yangilik.title}
        </p>
        <div className="flex justify-between items-center border-t pt-4 mt-6">
          <span className="text-sm text-gray-500">
            Sana: {yangilik.date || "Noma'lum"}
          </span>
          <a
            href="/yangiliklar"
            className="text-sm text-[#ff5050] font-medium hover:underline transition-colors duration-300"
          >
            Barcha yangiliklarga qaytish
          </a>
        </div>
      </div>
    </div>
  );
};

export default YangilikTafsilot;
