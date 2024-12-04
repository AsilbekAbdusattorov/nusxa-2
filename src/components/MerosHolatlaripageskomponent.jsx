import React, { useEffect, useState } from "react";
import Jismoniyshaxslarimg from "../img/jismoniyshaxslarimg5.webp";
import FamilyTreeImg from "../img/family-tree.png"; // Qo'shimcha rasm
import LegalAdviceImg from "../img/legal-advice.png"; // Qo'shimcha rasm
import Location from "../components/Location";

const MerosHolatlaripageskomponent = () => {
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
          <h2 className="text-5xl font-bold pb-12 text-[#ff5050]">
            Meros Holatlari
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Meros — vafot etgan shaxsning mol-mulkini, huquqlarini yoki boshqa
            merosxo'rlarga o'tishini tartibga soluvchi muhim jarayon.
          </p>
        </div>

        {/* Overview Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start gap-12 mt-12">
          <div className="sm:w-[55%] text-lg text-gray-700 leading-relaxed">
            <h3 className="text-3xl font-semibold mb-6 text-[#ff5050]">
              Meros Tushunchasi
            </h3>
            <p>
              Meros tartibi merosxo'rlar va davlat o'rtasidagi mol-mulk
              huquqlarini taqsimlash bo'yicha murakkab jarayonlarni o'z ichiga
              oladi. 
            </p>
            <p className="mt-4">
              Ushbu jarayon har bir mamlakatning o'ziga xos huquqiy
              me'yorlariga asoslanadi va mol-mulk, shaxsiy huquqlar hamda
              vasiyatnomalarni tartibga soladi.
            </p>
          </div>
          <div className="sm:w-[40%]">
            <img
              src={Jismoniyshaxslarimg}
              alt="Meros huquqi"
              className="shadow-md rounded-3xl transition-transform duration-300 hover:scale-105 cursor-pointer max-w-full sm:max-w-[350px] md:max-w-[400px]"
              onClick={() => handleImageClick(Jismoniyshaxslarimg)}
            />
          </div>
        </div>

        {/* Steps Section */}
        <div className="pt-16">
          <h3 className="text-3xl font-semibold text-center text-[#ff5050]">
            Meros Jarayonining Asosiy Bosqichlari
          </h3>
          <div className="flex flex-col sm:flex-row justify-between items-start gap-12 mt-12">
            <div className="sm:w-[55%] text-lg text-gray-700 leading-relaxed">
              <ul className="list-decimal list-inside space-y-6">
                <li>
                  <strong>Qonun bo'yicha meros:</strong> Vasiyatnoma mavjud
                  bo'lmaganda, mulk oila a'zolariga qonunchilikda belgilangan
                  tartibda taqsimlanadi.
                </li>
                <li>
                  <strong>Vasiyatnoma orqali meros:</strong> Vasiyatnomada
                  ko'rsatilgan shaxslar meros oluvchilar sifatida e'tirof
                  etiladi.
                </li>
                <li>
                  <strong>Notarial tasdiqlash:</strong> Meros olish jarayoni
                  notarius tomonidan tasdiqlanadi.
                </li>
                <li>
                  <strong>Murakkab hollarda sud:</strong> Agar qarindoshlar
                  o'rtasida kelishmovchilik yuzaga kelsa, masala sud orqali
                  hal qilinadi.
                </li>
              </ul>
            </div>
            <div className="sm:w-[40%]">
              <img
                src={FamilyTreeImg}
                alt="Oila daraxti"
                className="shadow-lg rounded-3xl transition-transform duration-300 hover:scale-105 cursor-pointer max-w-full sm:max-w-[350px] md:max-w-[400px]"
                onClick={() => handleImageClick(FamilyTreeImg)}
              />
            </div>
          </div>
        </div>

        {/* Importance Section */}
        <div className="pt-16">
          <h3 className="text-3xl font-semibold text-center text-[#ff5050]">
            Meros Holatining Ahmiyati
          </h3>
          <div className="flex flex-col sm:flex-row justify-between items-start gap-12 mt-12">
            <div className="sm:w-[40%]">
              <img
                src={LegalAdviceImg}
                alt="Yuridik maslahat"
                className="shadow-md rounded-3xl transition-transform duration-300 hover:scale-105 cursor-pointer max-w-full sm:max-w-[350px] md:max-w-[400px]"
                onClick={() => handleImageClick(LegalAdviceImg)}
              />
            </div>
            <div className="sm:w-[55%] text-lg text-gray-700 leading-relaxed">
              <p>
                Meros huquqi jamiyatda mulkni adolatli taqsimlash va kelajak
                avlodlar uchun iqtisodiy barqarorlikni ta'minlashning muhim
                qismidir. Vasiyatnoma orqali o'z mulkingiz taqdirini belgilash
                kelgusidagi mojarolarni oldini olishga yordam beradi.
              </p>
              <p className="mt-4">
                Notarial xizmatlar va yuridik maslahatlardan foydalanish
                jarayonni tez va samarali bajarishga ko'maklashadi.
              </p>
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

export default MerosHolatlaripageskomponent;
