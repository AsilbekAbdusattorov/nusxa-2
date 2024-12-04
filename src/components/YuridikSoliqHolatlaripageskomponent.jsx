import React, { useEffect, useState } from "react";
import Fuqarolikishlarimg from "../img/Yuridikshaxslarimg2.webp";
import TaxLawImg from "../img/tax-law.png"; // New Image
import FinancialGrowthImg from "../img/financial-growth.png"; // New Image
import ComplianceImg from "../img/compliance.png"; // New Image
import Location from "../components/Location";

const YuridikSoliqHolatlaripageskomponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (imageSrc) => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="bg-gray-50 py-[60.763px]">
      <Location />
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#ff5050] mb-4">
            Soliq Holatlari va Tizimdagi Muhim O'rni
          </h2>
          <p className="text-lg md:text-xl text-gray-700">
            Soliq tizimi davlat boshqaruvidagi muhim elementlardan biridir. Bu yerda biz soliq
            qonunchiligi, nizolar va ularning hal etilish yo'llariga oid asosiy ma'lumotlarni
            taqdim etamiz.
          </p>
        </div>

        {/* Image and Text Arrangement */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="relative">
            <img
              src={Fuqarolikishlarimg}
              alt="Soliq holatlari"
              className="rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
              onClick={() => handleImageClick(Fuqarolikishlarimg)}
            />
            <div className="absolute top-4 left-4 bg-[#ff5050] text-white py-2 px-6 rounded-full">
              <span className="font-semibold">Soliq Holatlari</span>
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-semibold text-[#ff5050] mb-4">Soliq Tizimi</h3>
            <p className="text-xl text-gray-700 mb-6">
              Soliq tizimi, soliq to'lovchilari va soliq organlari o'rtasidagi o'zaro munosabatlarni
              tartibga soluvchi bir qancha huquqiy me'yorlar va qoidalar yig'indisidir.
            </p>
            <ul className="list-decimal ml-5 text-lg text-gray-700 space-y-2">
              <li>Soliq to'lovchilarni ro'yxatga olish va nazorat qilish</li>
              <li>Soliq hisobotlarini tekshirish va tasdiqlash</li>
              <li>Soliq qarzlarini va jarimalarini belgilash</li>
              <li>Soliq muammolarini sud orqali hal qilish</li>
            </ul>
          </div>
        </div>

        {/* Image Cards Section */}
        <div className="grid sm:grid-cols-2 gap-12 mb-16">
          <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300">
            <img
              src={TaxLawImg}
              alt="Soliq qonunchiligi"
              className="rounded-lg max-w-[200px] mb-4"
              onClick={() => handleImageClick(TaxLawImg)}
            />
            <h4 className="text-xl font-semibold text-[#ff5050]">Soliq Qonunchiligi</h4>
            <p className="text-gray-700 text-center mt-2 text-sm">
              Soliq qonunchiligi iqtisodiy barqarorlikni ta'minlash va davlat rivojlanishiga hissa qo'shadi.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300">
            <img
              src={FinancialGrowthImg}
              alt="Moliyaviy Rivojlanish"
              className="rounded-lg max-w-[200px] mb-4"
              onClick={() => handleImageClick(FinancialGrowthImg)}
            />
            <h4 className="text-xl font-semibold text-[#ff5050]">Moliyaviy Rivojlanish</h4>
            <p className="text-gray-700 text-center mt-2 text-sm">
              Soliq tizimi iqtisodiy barqarorlikni ta'minlashda va davlat rivojlanishida muhim ahamiyatga ega.
            </p>
          </div>
        </div>

        {/* Flex Layout Section */}
        <div className="flex flex-col sm:flex-row gap-12 justify-between items-center">
          <div className="sm:w-[45%]">
            <img
              src={ComplianceImg}
              alt="Soliq qonunchiligiga rioya qilish"
              className="rounded-3xl shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => handleImageClick(ComplianceImg)}
            />
          </div>
          <div className="sm:w-[45%] text-lg text-gray-700 leading-relaxed">
            <h3 className="text-3xl font-semibold mb-6 text-[#ff5050]">Soliq Qonunchiligiga Amal Qilish</h3>
            <p>
              Soliq qonunchiligi bo'yicha rioya qilish shaxs va tashkilotlarning moliyaviy holatini yaxshilashga xizmat
              qiladi. Davlat siyosatini qo'llab-quvvatlashda muhim o'ringa ega.
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative">
            <button
              className="absolute top-2 right-2 text-black text-4xl"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <img
              src={Fuqarolikishlarimg}
              alt="Katta rasm"
              className="max-w-full max-h-full"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default YuridikSoliqHolatlaripageskomponent;
