import React, { useEffect, useState } from "react";
import Jismoniyshaxslarimg from "../img/jismoniyshaxslarimg6.webp";
import RealEstateImg from "../img/real-estate.png";
import LegalDocumentsImg from "../img/legal-documents.png";
import Location from "../components/Location";

const KochmasMulkBoyichaAdvokatPages = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalImage(null);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-gray-50 pt-[70px] pb-20">
      <Location />
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-5xl font-bold pb-6 sm:pb-12 text-[#ff5050]">
            Ko'chmas Mulk Bo'yicha Advokat
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-full sm:max-w-3xl mx-auto">
            Ko'chmas mulk bo'yicha advokat mulk huquqi, ijaraga olish, oldi-sotdi
            va boshqa ko'chmas mulk bilan bog'liq huquqiy masalalarda mijozlarga
            yordam beradi. Advokatlar faqat huquqiy masalalar bilan shug'ullanib
            qolmay, balki mijozlarning huquqlarini himoya qilishda va muammolarni
            samarali hal qilishda ko'maklashadi.
          </p>
        </div>

        {/* Overview Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-12 mt-12">
          <div className="sm:w-[55%] text-lg text-gray-700 leading-relaxed">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#ff5050]">
              Advokatning Vazifalari
            </h3>
            <p>
              Advokatlar ko'chmas mulk operatsiyalarining huquqiy jihatlarini
              boshqaradi. Ular huquqiy hujjatlar tayyorlash, sudlarda mijozlarni
              himoya qilish, mulk huquqlarini qayta rasmiylashtirish va boshqa
              ko'plab vazifalarni bajaradi.
            </p>
            <p className="mt-4">
              Ko'chmas mulk sohasida qonunlar va qoidalar doimiy ravishda
              yangilanib turadi, shuning uchun advokatlarning tajribasi va bilim
              darajasi juda muhim ahamiyat kasb etadi.
            </p>
          </div>
          <div className="sm:w-[40%]">
            <img
              src={Jismoniyshaxslarimg}
              alt="Ko'chmas mulk advokati"
              className="shadow-md rounded-3xl transition-transform duration-300 hover:scale-105 cursor-pointer max-w-[90%] sm:max-w-[400px] mx-auto"
              onClick={() => handleImageClick(Jismoniyshaxslarimg)}
            />
          </div>
        </div>

        {/* Services Section */}
        <div className="pt-16">
          <h3 className="text-2xl sm:text-3xl font-semibold text-center text-[#ff5050]">
            Ko'chmas Mulk Bo'yicha Advokatning Xizmatlari
          </h3>
          <div className="flex flex-col sm:flex-row justify-between items-start gap-12 mt-12">
            <div className="sm:w-[55%] text-lg text-gray-700 leading-relaxed">
              <ul className="list-decimal list-inside space-y-6">
                <li>
                  <strong>Maslahatlar berish:</strong> Ko'chmas mulk oldi-sotdi,
                  ijaraga olish yoki boshqa huquqiy masalalar bo'yicha mijozlarga
                  maslahat berish.
                </li>
                <li>
                  <strong>Hujjatlarni tayyorlash:</strong> Oldi-sotdi
                  shartnomalari, garov hujjatlari va boshqa huquqiy
                  hujjatlarni tuzish.
                </li>
                <li>
                  <strong>Mulkni tekshirish:</strong> Mulk tarixi, garovlar yoki
                  huquqiy to'siqlarni aniqlash. Bu mijozlar uchun huquqiy
                  xavfsizlikni ta'minlashga yordam beradi.
                </li>
                <li>
                  <strong>Nizolarni hal qilish:</strong> Ko'chmas mulk bo'yicha
                  kelib chiqqan nizolarni sud orqali yoki suddan tashqari hal
                  qilish.
                </li>
                <li>
                  <strong>Mol-mulk solig'i masalalari:</strong> Soliq oqibatlari
                  haqida maslahat va hisob-kitob qilish. Bu mijozlarning
                  moliyaviy xavfsizligini ta'minlashda muhim ahamiyatga ega.
                </li>
                <li>
                  <strong>Yer huquqi:</strong> Rayonlashtirish va
                  rivojlantirish bilan bog'liq masalalarda huquqiy yordam.
                </li>
                <li>
                  <strong>Xalqaro ko'chmas mulk masalalari:</strong> Chegaralar
                  oshib ketadigan mulk operatsiyalari bo'yicha maslahat.
                </li>
                <li>
                  <strong>Qo'shnilik huquqi:</strong> Qo'shnilar bilan bog'liq
                  nizolarni hal qilish yoki kelishuvlar tuzish.
                </li>
              </ul>
            </div>
            <div className="sm:w-[40%] flex flex-col gap-6">
              <img
                src={RealEstateImg}
                alt="Real Estate Consulting"
                className="shadow-lg rounded-3xl transition-transform duration-300 hover:scale-105 cursor-pointer max-w-[90%] sm:max-w-[400px] mx-auto"
                onClick={() => handleImageClick(RealEstateImg)}
              />
              <img
                src={LegalDocumentsImg}
                alt="Legal Documents"
                className="shadow-lg rounded-3xl transition-transform duration-300 hover:scale-105 cursor-pointer max-w-[90%] sm:max-w-[400px] mx-auto"
                onClick={() => handleImageClick(LegalDocumentsImg)}
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

export default KochmasMulkBoyichaAdvokatPages;
