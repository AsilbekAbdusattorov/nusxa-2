import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Location from "../components/Location";
import YuridikXizmatlar1 from '../img/yuridikxizmatlarimg1.webp';
import YuridikXizmatlar2 from '../img/yuridikxizmatlarimg2.webp';

const XizmatlarPagesKomponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <Location />
        <h2 className="font-bold text-5xl text-center mb-12">Yuridik xizmatlar</h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Biz mijozlarimizga ishonchli va professional xizmatlar ko‘rsatamiz. Quyidagi bo‘limlar orqali 
          o‘z ehtiyojlaringizga mos xizmatlarni tanlashingiz mumkin.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          {/* Jismoniy shaxslar uchun */}
          <div className="bg-white shadow-lg rounded-lg h-[440px] overflow-hidden w-[320px] sm:w-[400px] transform transition duration-300 hover:scale-105">
            <img
              className="w-full h-48 object-cover"
              src={YuridikXizmatlar1}
              alt="Jismoniy shaxslar"
            />
            <div className="p-6">
              <h3 className="font-bold text-xl mb-4 text-center">Jismoniy shaxslar uchun</h3>
              <p className="text-gray-600 mb-4 text-center">
                Biz jismoniy shaxslarga turli xil yuridik yordam ko‘rsatamiz: huquqiy maslahat, 
                hujjatlar tayyorlash va sud vakilligi.
              </p>
              <div className="text-center">
                <NavLink
                  to="/Jismoniyshaxslaruchun"
                  className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700"
                >
                  Batafsil
                </NavLink>
              </div>
            </div>
          </div>

          {/* Yuridik shaxslar uchun */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden w-[320px] sm:w-[400px] transform transition duration-300 hover:scale-105">
            <img
              className="w-full h-48 object-cover"
              src={YuridikXizmatlar2}
              alt="Yuridik shaxslar"
            />
            <div className="p-6">
              <h3 className="font-bold text-xl mb-4 text-center">Yuridik shaxslar uchun</h3>
              <p className="text-gray-600 mb-4 text-center">
                Biz yuridik shaxslarga tashkilot ro'yxatdan o'tkazish, hujjatlarni tayyorlash 
                va biznes faoliyatini qo'llab-quvvatlash xizmatlarini taklif etamiz.
              </p>
              <div className="text-center">
                <NavLink
                  to="/Yuridikshaxslar"
                  className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700"
                >
                  Batafsil
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default XizmatlarPagesKomponent;
