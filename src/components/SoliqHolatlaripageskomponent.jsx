import React, { useEffect, useState } from "react";
import Jismoniyshaxslarimg from "../img/jismoniyshaxslarimg4.webp";
import TaxLawImg from "../img/tax-law.png"; // Qo'shimcha rasm
import Location from "../components/Location";

const SoliqHolatlaripageskomponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleImageClick = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  return (
    <section className="bg-gradient-to-b from-gray-100 via-white to-gray-50 pt-[70px] pb-20">
      <Location />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold pb-8 text-[#ff5050]">
            Soliq Holatlari
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Soliq tizimi davlat byudjetini to'ldirish va jismoniy shaxslar hamda
            yuridik shaxslarning moliyaviy faoliyatini tartibga solishda
            muhimdir.
          </p>
        </div>

        {/* Explanation Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16 mt-12">
          <div className="lg:w-[55%] text-base sm:text-lg text-gray-700 leading-relaxed">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#ff5050]">
              Soliq Tushunchasi
            </h3>
            <p>
              "Soliq ishi" tushunchasini ikki asosiy yo'nalishda ko'rib chiqish
              mumkin: umumiy soliq tizimiga tegishli jarayonlar va jismoniy
              shaxslar yoki tashkilotlar soliq masalalari bilan bog'liq
              holatlar.
            </p>
            <p className="mt-4">
              Soliq tizimi davlat va jamiyat manfaatlarini qo'llab-quvvatlash
              uchun eng muhim iqtisodiy vositalardan biridir.
            </p>
          </div>
          <div className="lg:w-[40%]">
            <img
              src={Jismoniyshaxslarimg}
              alt="Soliq holatlari"
              className="shadow-md rounded-3xl transition-transform duration-300 hover:scale-105 cursor-pointer max-w-full"
              onClick={() => handleImageClick(Jismoniyshaxslarimg)}
            />
          </div>
        </div>

        {/* Categories Section */}
        <div className="pt-16">
          <h3 className="text-2xl sm:text-3xl font-semibold text-center text-[#ff5050]">
            Soliq Holatlarining Asosiy Yo'nalishlari
          </h3>
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 mt-12">
            <div className="lg:w-[55%] text-base sm:text-lg text-gray-700 leading-relaxed">
              <ul className="list-decimal list-inside space-y-4">
                <li>
                  <strong>Davlat soliq tizimi:</strong>
                  <ul className="list-disc pl-5">
                    <li>Soliq tushumlarini belgilash va undirish.</li>
                    <li>Davlat byudjetlariga soliq mablag'larini taqsimlash.</li>
                    <li>Soliq qonunchiligini ishlab chiqish va nazorat qilish.</li>
                    <li>Soliq tekshiruvlari va audit jarayonlari.</li>
                  </ul>
                </li>
                <li>
                  <strong>Shaxsiy va yuridik shaxslar soliq masalalari:</strong>
                  <ul className="list-disc pl-5">
                    <li>Soliq deklaratsiyalarini topshirish.</li>
                    <li>Soliq to'lovlarini amalga oshirish.</li>
                    <li>
                      Soliq tekshiruvlarida ishtirok etish va ma'lumot taqdim
                      qilish.
                    </li>
                    <li>
                      Daromad solig'i, QQS, mulk va boshqa soliqlar bo'yicha
                      masalalar.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="lg:w-[40%]">
              <img
                src={TaxLawImg}
                alt="Soliq qonunchiligi"
                className="shadow-lg rounded-3xl transition-transform duration-300 hover:scale-105 cursor-pointer max-w-full"
                onClick={() => handleImageClick(TaxLawImg)}
              />
            </div>
          </div>
        </div>

        {/* Importance Section */}
        <div className="pt-16">
          <h3 className="text-2xl sm:text-3xl font-semibold text-center text-[#ff5050]">
            Soliq Holatlarining Ahamiyati
          </h3>
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 mt-12">
            <div className="lg:w-[55%] text-base sm:text-lg text-gray-700 leading-relaxed">
              <p>
                Soliq tizimi davlatni moliyaviy barqarorligini ta'minlaydi. Shu
                bilan birga, har bir fuqaro va tashkilotning soliq
                majburiyatlarini bajarishi davlatning umumiy rivojlanishiga
                xizmat qiladi.
              </p>
              <p className="mt-4">
                Soliq qonunchiligiga rioya qilish iqtisodiy barqarorlik va
                ijtimoiy adolatni ta'minlashning muhim tarkibiy qismidir.
              </p>
            </div>
            <div className="lg:w-[40%]">
              <img
                src={Jismoniyshaxslarimg}
                alt="Davlat byudjeti"
                className="shadow-md rounded-3xl transition-transform duration-300 hover:scale-105 cursor-pointer max-w-full"
                onClick={() => handleImageClick(Jismoniyshaxslarimg)}
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

export default SoliqHolatlaripageskomponent;
