import React, { useEffect, useState } from "react";
import Fuqarolikishlarimg from "../img/Yuridikshaxslarimg6.webp";
import ConsultationImg from "../img/consultation.png"; // Qo'shimcha rasm
import LawyerImg from "../img/lawyer_working.png"; // Qo'shimcha rasm
import Location from "./Location";

const Bankrotlikboyichaadvokatpages = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const handleImageClick = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="bg-gray-50 py-20">
      <Location />
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-800">
            Bankrotlik bo'yicha advokat
          </h2>
          <p className="text-xl text-gray-600 mt-4">
            Tajribali huquqshunoslar sizning moliyaviy xavfsizligingizni himoya
            qilish uchun bu yerdamiz.
          </p>
        </div>

        {/* Rasmlar va asosiy matn */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <img
              src={Fuqarolikishlarimg}
              alt="Bankrotlik bo'yicha maslahat"
              className="rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer w-full max-w-[400px] h-auto"
              onClick={() => handleImageClick(Fuqarolikishlarimg)}
            />
          </div>
          <div>
            <h3 className="text-3xl font-semibold text-gray-800 mb-6">
              Bankrotlik jarayoni haqida
            </h3>
            <p className="text-lg text-gray-700 leading-8">
              Bankrotlik bo'yicha advokatlar qarzlardan qutulish yoki ularni
              qaytarish masalalarida yordam beradi. Ular nafaqat jarayonni
              tushuntiradi, balki barcha huquqiy holatlar yuzasidan vakolatni
              o'z zimmalariga oladi.
            </p>
          </div>
        </div>

        {/* Qo'shimcha taqsimot */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <h3 className="text-3xl font-semibold text-gray-800 mb-6">
              Bankrotlik masalalaridagi asosiy xizmatlar:
            </h3>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-4">
              <li>Mijozlarning moliyaviy holatini tahlil qilish va maslahat berish.</li>
              <li>Savdogarlar va yuridik shaxslar uchun maxsus yechimlar.</li>
              <li>Sud va arbitrajda himoya qilish.</li>
              <li>Kreditor va qarzdorlar o'rtasida kelishuvlar tuzish.</li>
              <li>
                Bankrotlik jarayonining har bir bosqichida yuridik ko‘makni
                taqdim etish.
              </li>
            </ul>
          </div>
          <div>
            <img
              src={ConsultationImg}
              alt="Maslahat jarayoni"
              className="rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer w-full max-w-[400px] h-auto"
              onClick={() => handleImageClick(ConsultationImg)}
            />
          </div>
        </div>

        {/* Yuridik xizmatlar haqida */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src={LawyerImg}
              alt="Yuridik huquq"
              className="rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer w-full max-w-[400px] h-auto"
              onClick={() => handleImageClick(LawyerImg)}
            />
          </div>
          <div>
            <h3 className="text-3xl font-semibold text-gray-800 mb-6">
              Kreditorlarni himoya qilish
            </h3>
            <p className="text-lg text-gray-700 leading-8">
              Agar siz kreditor bo'lsangiz, biz sizni sud jarayonida yoki
              boshqa holatlarda himoya qilishimiz mumkin. Har bir qarz
              undirish jarayonida qonunlarga mos yechim topamiz.
            </p>
          </div>
        </div>
      </div>

      {/* Modal oynasi */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative">
            <button
              className="absolute top-2 right-2 text-white text-4xl"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <img
              src={modalImage}
              alt="Kompaniya katta"
              className="max-w-[90%] max-h-[90%] rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Bankrotlikboyichaadvokatpages;
