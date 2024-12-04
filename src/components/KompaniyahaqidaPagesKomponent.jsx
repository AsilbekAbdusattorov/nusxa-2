import React, { useEffect, useState } from "react";
import Kompanyahaqidaimg from "../img/kompaniyahaqidapagesimg.webp";
import ServiceIcon from "../img/service-icon.png"; // Xizmatlar uchun rasm
import AwardIcon from "../img/award-icon.png"; // Yutuqlar uchun rasm
import Location from "./Location";

const KompaniyahaqidaPagesKomponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="bg-gradient-to-b from-blue-50 to-gray-50 py-16">
      <Location />
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-800">
            Bizning kompaniyamiz
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Bizning maqsadimiz - mijozlarimiz uchun eng yaxshi xizmatlarni taqdim etish.
          </p>
        </div>

        {/* Image and Introduction Section */}
        <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
          <div className="flex-1">
            <img
              src={Kompanyahaqidaimg}
              alt="Kompaniya"
              className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={handleImageClick}
            />
          </div>
          <div className="flex-1">
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">
              Biz haqimizda
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-7">
              Kompaniyamiz 1998 yilda tashkil topgan bo‘lib, bugungi kunda 
              O‘zbekistonning yetakchi yuridik kompaniyalaridan biri hisoblanadi.
              Biz xizmatlarimizni har doim mijozlarimiz ehtiyojlariga moslashtirib kelmoqdamiz.
            </p>
            <p className="text-lg text-gray-600 leading-7">
              Yillar davomida kompaniyamiz mijozlar uchun ishonchli sherik bo‘lib, 
              ko‘plab muvaffaqiyatli loyihalarni amalga oshirdi.
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Bizning xizmatlarimiz
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <img src={ServiceIcon} alt="Xizmat" className="w-16 h-16" />
              <p className="text-lg text-gray-600">
                Sud vakilligi va huquqiy maslahatlar.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <img src={ServiceIcon} alt="Xizmat" className="w-16 h-16" />
              <p className="text-lg text-gray-600">
                Ko‘chmas mulk operatsiyalarini qo‘llab-quvvatlash.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <img src={ServiceIcon} alt="Xizmat" className="w-16 h-16" />
              <p className="text-lg text-gray-600">
                Tijorat tashkilotlarini ro‘yxatdan o‘tkazish.
              </p>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Bizning yutuqlarimiz
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="text-center">
              <img src={AwardIcon} alt="Yutuq" className="w-20 h-20 mx-auto" />
              <p className="text-lg text-gray-600 mt-4">
                5000+ muvaffaqiyatli loyihalar.
              </p>
            </div>
            <div className="text-center">
              <img src={AwardIcon} alt="Yutuq" className="w-20 h-20 mx-auto" />
              <p className="text-lg text-gray-600 mt-4">
                25+ yillik tajriba.
              </p>
            </div>
            <div className="text-center">
              <img src={AwardIcon} alt="Yutuq" className="w-20 h-20 mx-auto" />
              <p className="text-lg text-gray-600 mt-4">
                200+ professional mutaxassislar.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Tariximiz
          </h3>
          <div className="relative">
            <div className="border-l-2 border-blue-400 pl-6 space-y-8">
              <div>
                <h4 className="text-xl font-bold text-gray-800">
                  1998
                </h4>
                <p className="text-lg text-gray-600">
                  Kompaniyaning tashkil topishi.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800">
                  2005
                </h4>
                <p className="text-lg text-gray-600">
                  Birinchi xalqaro mijozlar bilan hamkorlik.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800">
                  2020
                </h4>
                <p className="text-lg text-gray-600">
                  Kompaniyamiz yangi xizmatlarni yo‘lga qo‘ydi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 transition-opacity duration-300">
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
            <button
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-3xl font-bold"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <img
              src={Kompanyahaqidaimg}
              alt="Kompaniya katta"
              className="max-w-full max-h-screen rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default KompaniyahaqidaPagesKomponent;
