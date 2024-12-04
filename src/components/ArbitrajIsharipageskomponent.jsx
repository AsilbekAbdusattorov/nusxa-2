import React, { useEffect, useState } from "react";
import Fuqarolikishlarimg from "../img/Yuridikshaxslarimg1.webp"; // Rasmlar
import RealEstateImg from "../img/real-estate.png"; // Qo'shimcha rasm
import LegalDocumentsImg from "../img/legal-documents.png"; // Qo'shimcha rasm
import Location from "../components/Location"; // Joylashuv komponenti

const ArbitrajIsharipageskomponent = () => {
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
        <div>
          <h2 className="text-5xl font-bold pb-12 text-center text-[#ff5050]">
            Arbitraj Ishlari
          </h2>

          {/* Ma'lumotlar bloki */}
          <div className="flex flex-col md:flex-row justify-between gap-12">
            <div className="text-lg text-gray-800 leading-relaxed">
              <p className="mb-6">
                Arbitraj ishlari - bu odatda korxonalar va kompaniyalar
                o'rtasidagi tijorat nizolarini hal qilishda ishlatiladigan
                metodologiyadir. Ushbu jarayon orqali tomonlar o'z nizolarini
                hal qilish uchun neytral hakamni tanlaydilar. Bu jarayon savdo,
                investitsiyalar, shartnomalar va boshqa iqtisodiy sohalarda keng
                qo'llaniladi.
              </p>
              <p className="mb-6">
                Xalqaro savdo va investitsiyalar bo'yicha arbitraj ko'plab
                kompaniyalar uchun afzal ko'rilgan variantdir. Arbitraj
                jarayonida sud ishlari bilan solishtirganda, tomonlar ko'proq
                maxfiylik va tezlikka ega bo'ladilar. Arbitrajni ko'plab
                bizneslar samarali, tez va adolatli usul sifatida baholaydilar.
              </p>
              <p>
                Arbitrajda, qarorlar odatda yakuniy hisoblanadi, shuning uchun
                tomonlar qarorlar ustidan apellyatsiya qilish imkoniyatiga ega
                bo'lishmaydi. Biroq, bu usulning ba'zi holatlarda majburiy va
                qiyin bo'lishi mumkinligini ham unutmaslik kerak.
              </p>
            </div>
            <div className="max-w-[434px] mb-10 hover:scale-105 transition-all duration-500 ease-in-out transform">
              <img
                src={Fuqarolikishlarimg}
                alt="Arbitraj ishlari"
                className="shadow-lg transition-transform duration-300 hover:scale-110 cursor-pointer rounded-3xl"
                onClick={() => handleImageClick(Fuqarolikishlarimg)}
              />
            </div>
          </div>

          {/* Qo'shimcha rasmlar va ularning tavsifi */}
          {/* Qo'shimcha rasmlar va ularning tavsifi */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {/* Ko'chmas mulk bo'yicha arbitraj */}
            <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-3/4 max-w-[300px]">
                <img
                  src={RealEstateImg}
                  alt="Ko'chmas mulk bo'yicha arbitraj"
                  className="rounded-lg object-cover"
                />
              </div>
              <h4 className="text-xl font-semibold text-[#ff5050] mt-4 text-center">
                Ko'chmas mulk bo'yicha arbitraj
              </h4>
              <p className="text-gray-700 text-center mt-2 text-sm">
                Ko'chmas mulk bilan bog'liq nizolarni hal qilishda yuqori
                malakali yondashuv. Bu usul huquqiy tartibga solish va mulk
                xavfsizligini ta'minlaydi.
              </p>
            </div>

            {/* Huquqiy hujjatlar */}
            <div className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="w-3/4 max-w-[300px]">
                <img
                  src={LegalDocumentsImg}
                  alt="Huquqiy hujjatlar"
                  className="rounded-lg object-cover"
                />
              </div>
              <h4 className="text-xl font-semibold text-[#ff5050] mt-4 text-center">
                Huquqiy hujjatlar
              </h4>
              <p className="text-gray-700 text-center mt-2 text-sm">
                Arbitraj jarayonlari uchun zarur bo'lgan barcha huquqiy
                hujjatlarni tayyorlash va tahlil qilish. Bu jarayonning samarali
                va aniq bo'lishini ta'minlaydi.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
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
              src={Fuqarolikishlarimg}
              alt="Arbitraj katta"
              className="max-w-full max-h-full rounded-lg shadow-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ArbitrajIsharipageskomponent;
