import React, { useState, useEffect } from "react";
import KompaniHaqida from "../img/Kompaniyahaqida.webp";

const KompaniyaHaqida = () => {
  const [isVisible, setIsVisible] = useState(false); // To track visibility for animation

  // IntersectionObserver to detect when the section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is in view
    );

    const section = document.querySelector("#kompaniya-huqida-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <div
      id="kompaniya-huqida-section"
      className={`flex justify-center items-center bg-[#f4f8fc] py-20 px-4 lg:py-[121.525px] transition-all duration-700 ${
        isVisible ? "animate-slideInLeft" : "opacity-0"
      }`}
    >
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left side - Image */}
        <div className="flex justify-center">
          <img
            className="w-full max-w-[506px] h-auto lg:h-[601px] object-cover rounded-lg transition-transform duration-300 transform hover:scale-105"
            src={KompaniHaqida}
            alt="Kompanija haqida"
          />
        </div>

        {/* Right side - Text */}
        <div className="flex flex-col justify-center lg:pl-10 text-center lg:text-left">
          <h2 className="text-3xl lg:text-5xl font-bold text-black mb-4">
            Kompaniya haqida
          </h2>
          <p className="text-base lg:text-xl text-gray-600 mb-8">
            Bizning tajribamiz va bilimimiz sizning muammolaringizga yechimdir!
            Yurisprudentsiya sohasida, birinchi navbatda, sudda huquq va
            manfaatlarni himoya qilish bo‘yicha ko‘p yillik tajribaga ega
            bo‘lgan jamoamiz sifatli yuridik xizmatlar ko‘rsatish va huquqning
            turli sohalaridagi nizolarni muvaffaqiyatli hal etishga qaratilgan.
            Biz bunga amaliy va innovatsion huquqiy yechimlar orqali erishamiz.
            Har bir inson o‘z huquq va manfaatlarini himoya qilishda ishonchli
            huquqiy yordamga loyiqdir.
          </p>

          {/* Checkmarks */}
          <ul className="space-y-4 mb-8 text-black">
            <li className="flex items-center justify-center lg:justify-start">
              <span className="text-red-500 mr-2">✔</span>
              <span className="text-base lg:text-lg">10 yillik muvaffaqiyatli ish</span>
            </li>
            <li className="flex items-center justify-center lg:justify-start">
              <span className="text-red-500 mr-2">✔</span>
              <span className="text-base lg:text-lg">Ishlarning 92 foizi g‘alaba qozondi</span>
            </li>
            <li className="flex items-center justify-center lg:justify-start">
              <span className="text-red-500 mr-2">✔</span>
              <span className="text-base lg:text-lg">Individual dastur</span>
            </li>
          </ul>

          {/* Button */}
          <button
            className="bg-white border mt-8 lg:mt-12 hover:border-red-500 py-3 lg:py-5 px-4 lg:px-6 rounded-full text-base lg:text-xl font-medium hover:bg-red-100/20 cursor-pointer mx-auto lg:mx-0 max-w-[240px]"
          >
            Biz bilan bog'lanish
          </button>
        </div>
      </div>
    </div>
  );
};

export default KompaniyaHaqida;
