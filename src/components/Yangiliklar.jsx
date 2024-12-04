import React, { useEffect } from "react";
import { YangiliklarData } from "../data";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Yangiliklar = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out" });
  }, []);

  return (
    <section className="bg-[#F2F8FB] py-16 lg:py-[121.525px]">
      <div className="container mx-auto px-4 lg:px-0">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#333] tracking-wide">
          Yangiliklar
        </h2>

        <div className="grid gap-10 lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2">
          {YangiliklarData.map((yangilik) => (
            <div
              key={yangilik.id}
              data-aos="fade-up"
              className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col justify-between p-6 transition-all transform hover:scale-105 hover:shadow-2xl hover:border-[#ff5050] duration-300"
            >
              <img
                className="w-full h-[250px] object-cover rounded-xl transition-transform transform hover:scale-110 duration-300"
                src={yangilik.img}
                alt={yangilik.name}
              />

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500 mb-3">
                  {yangilik.date || "15.06.22"}
                </p>

                <Link
                  to={`/yangilik/${yangilik.id}`}
                  className="text-2xl font-semibold text-[#333] hover:text-[#ff5050] transition-colors duration-300"
                >
                  {yangilik.name}
                </Link>

                <p className="text-sm text-gray-600 mt-4 mb-5">
                  {yangilik.title}
                </p>

                <Link
                  className="inline-block px-6 py-2 rounded-full bg-[#e74c3c] text-white text-sm font-medium hover:bg-[#c0392b] transition-colors duration-300"
                  to={`/yangilik/${yangilik.id}`}
                >
                  Batafsil
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center mt-16">
          <Link
            className="cursor-pointer px-8 py-4 rounded-full border-2 border-[#ff5050] text-lg font-medium text-[#ff5050] hover:bg-[#ff5050]/10 hover:text-[#ff5050] transition-colors duration-300"
            to="/YangiliklarData"
          >
            Barcha Yangiliklar
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Yangiliklar;
