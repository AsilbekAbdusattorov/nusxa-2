import React, { useEffect, useState } from "react";
import Jismoniyshaxslarimg from "../img/jismoniyshaxslarimg3.webp";
import CriminalJusticeImg from "../img/criminal-justice.png"; // Qo'shimcha rasm
import EvidenceImg from "../img/evidence.png"; // Dalilga oid rasm
import Location from "../components/Location";

const JinoiyIshlarpageskomponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  return (
    <section className="bg-gradient-to-b from-gray-100 via-white to-gray-50 pt-16 pb-20">
      <Location />
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold pb-6 text-red-800">
            Jinoiy Ishlar
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Jinoyat ishlari jamiyat va davlat manfaatlarini himoya qilishda,
            jinoyatlarning oldini olish va jinoyat sodir etgan shaxslarni
            javobgarlikka tortishda muhim o'rin tutadi.
          </p>
        </div>

        {/* Explanation Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mt-12">
          <div className="lg:w-[55%] text-base md:text-lg text-gray-700 leading-relaxed">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-red-700">
              Jinoyat Ishlarining Mazmuni
            </h3>
            <p>
              Jinoyat ishi jinoyatni tergov qilishning protsessual shakli bo'lib,
              dastlabki tergov, ayblov e'lon qilish va sudlov jarayonlarini o'z
              ichiga oladi. Ushbu ishlar inson huquq va erkinliklarini,
              jamiyatning huquqiy barqarorligini ta'minlash uchun olib
              boriladi.
            </p>
            <p className="mt-4">
              Jinoyat ishlari quyidagi asosiy toifalarga bo'linadi:
            </p>
          </div>
          <div className="lg:w-[40%]">
            <img
              src={Jismoniyshaxslarimg}
              alt="Jinoyat ishi"
              className="shadow-md rounded-3xl transition-transform duration-300 hover:scale-105 cursor-pointer w-full max-w-[400px]"
              onClick={() => handleImageClick(Jismoniyshaxslarimg)}
            />
          </div>
        </div>

        {/* Categories Section */}
        <div className="pt-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-center text-red-800">
            Jinoyat Ishlarining Turlari
          </h3>
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 mt-12">
            <div className="lg:w-[55%] text-base md:text-lg text-gray-700 leading-relaxed">
              <ul className="list-decimal list-inside space-y-4">
                <li>
                  <strong>Jinoyatning ijtimoiy xavflilik darajasiga ko'ra:</strong>
                  <ul className="list-disc pl-5">
                    <li>Kichik og'irlikdagi jinoyatlar (masalan, o'g'irlik).</li>
                    <li>O'rtacha og'irlikdagi jinoyatlar (masalan, firibgarlik).</li>
                    <li>Og'ir jinoyatlar (masalan, talonchilik).</li>
                    <li>O'ta og'ir jinoyatlar (masalan, qotillik).</li>
                  </ul>
                </li>
                <li>
                  <strong>Ayblanuvchilar va jabrlanuvchilar soni bo'yicha:</strong>
                  <ul className="list-disc pl-5">
                    <li>Shaxsiy jinoyatlar (bir ayblanuvchi va jabrlanuvchi).</li>
                    <li>Ommaviy jinoyatlar (bir nechta tomonlar).</li>
                  </ul>
                </li>
                <li>
                  <strong>Jinoyatning turi bo'yicha:</strong>
                  <ul className="list-disc pl-5">
                    <li>Iqtisodiy jinoyatlar (masalan, moliyaviy firibgarlik).</li>
                    <li>Jamoat xavfsizligiga tahdid (masalan, terrorizm).</li>
                    <li>Giyohvand moddalar bilan bog'liq jinoyatlar.</li>
                    <li>Korruptsiya.</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="lg:w-[40%]">
              <img
                src={EvidenceImg}
                alt="Dalillar"
                className="shadow-lg rounded-3xl transition-transform duration-300 hover:scale-105 cursor-pointer w-full max-w-[400px]"
                onClick={() => handleImageClick(EvidenceImg)}
              />
            </div>
          </div>
        </div>

        {/* Importance Section */}
        <div className="pt-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-center text-red-800">
            Jinoyat Ishlarining Ahamiyati
          </h3>
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 mt-12">
            <div className="lg:w-[55%] text-base md:text-lg text-gray-700 leading-relaxed">
              <p>
                Jinoyat ishlari jamiyatda huquqiy barqarorlikni ta'minlash va
                jinoyatlarning oldini olish uchun muhim ahamiyatga ega.
                Shuningdek, jinoyat sodir etgan shaxslar javobgarlikka
                tortilishi va jabrlanuvchilarning huquqlari tiklanishi
                ta'minlanadi.
              </p>
              <p className="mt-4">
                Sud jarayonida qonuniylikni saqlash va barcha ishtirokchilarning
                huquq va majburiyatlariga hurmat bilan yondashish talab etiladi.
              </p>
            </div>
            <div className="lg:w-[40%]">
              <img
                src={CriminalJusticeImg}
                alt="Adolat"
                className="shadow-md rounded-3xl transition-transform duration-300 hover:scale-105 cursor-pointer w-full max-w-[400px]"
                onClick={() => handleImageClick(CriminalJusticeImg)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && modalImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative">
            <button
              className="absolute top-4 right-4 text-white text-4xl font-bold"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <img
              src={modalImage}
              alt="Katta ko'rinish"
              className="max-w-full max-h-full rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default JinoiyIshlarpageskomponent;
