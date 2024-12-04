import React, { useEffect, useState } from "react";
import Fuqarolikishlarimg from "../img/Yuridikshaxslarimg5.webp";
import QarzniUndirishImage2 from "../img/debt-collection-2.png"; // Ikkinchi rasm
import Location from "./Location";

const QarzniUndirishpageskomponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const handleImageClick = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 md:px-8 lg:px-16">
      {/* Location Component */}
      <Location />

      {/* Title Section */}
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4">
          Qarzni Undirish
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-10 leading-relaxed">
          Biz qarzlarni undirish bo'yicha malakali yuridik yordam taklif etamiz.
          Yordamimiz bilan murakkab moliyaviy masalalarni hal qilish osonlashadi.
        </p>
      </div>

      {/* Content Section */}
      <div className="container mx-auto">
        <div className="lg:flex lg:space-x-10">
          {/* Left Side Content */}
          <div className="lg:w-1/2">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
              Qarzni undirishning bosqichlari
            </h3>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
              Qarzni undirish murakkab jarayon bo'lib, bir necha bosqichlarni o'z ichiga oladi:
            </p>
            <ul className="list-disc list-inside text-base sm:text-lg text-gray-600 space-y-4">
              <li>
                <strong>To'g'ridan-to'g'ri aloqa:</strong> Qarzdor bilan muzokara o'tkazish va to'lov rejasini kelishish.
              </li>
              <li>
                <strong>Kollektor xizmati:</strong> Qarzdor bilan aloqa qilishda qiynalgan holda maxsus agentlikni jalb qilish.
              </li>
              <li>
                <strong>Sud jarayonlari:</strong> Qarzni undirish sud orqali hal qilinadi.
              </li>
              <li>
                <strong>Ijro jarayoni:</strong> Sud qarorini bajarish uchun huquqiy choralar qo'llaniladi.
              </li>
            </ul>
          </div>

          {/* Right Side Image */}
          <div className="lg:w-1/2 flex justify-center items-center mt-6 lg:mt-0">
            <img
              src={Fuqarolikishlarimg}
              alt="Qarz undirish jarayoni"
              className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer max-w-[500px] w-full"
              onClick={() => handleImageClick(Fuqarolikishlarimg)}
            />
          </div>
        </div>

        {/* Highlighted Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mt-16 lg:flex lg:space-x-10">
          {/* Highlighted Image */}
          <div className="lg:w-1/3 flex justify-center items-center mb-6 lg:mb-0">
            <img
              src={QarzniUndirishImage2}
              alt="Yuridik maslahat"
              className="rounded-lg shadow-md w-full h-auto"
              onClick={() => handleImageClick(QarzniUndirishImage2)}
            />
          </div>
          {/* Highlighted Text */}
          <div className="lg:w-2/3">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
              Nega bizni tanlash kerak?
            </h3>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Bizning yuridik xizmatlarimiz qarzni undirish jarayonini
              professional darajada hal qilishga qaratilgan. Har bir mijozning
              huquqlari va manfaatlarini himoya qilish uchun ishlaymiz:
            </p>
            <ul className="list-disc list-inside text-base sm:text-lg text-gray-600 mt-4 space-y-2">
              <li>To'liq qonuniy yordam.</li>
              <li>Shaxsiy yondashuv va maxfiylik.</li>
              <li>Sud hujjatlarini tayyorlash va kuzatish.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative max-w-full max-h-full">
            <button
              className="absolute top-2 right-2 text-white text-4xl"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <img
              src={modalImage}
              alt="Yirik ko'rinish"
              className="rounded-lg shadow-lg max-w-[90vw] max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default QarzniUndirishpageskomponent;
