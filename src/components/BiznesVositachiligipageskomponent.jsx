import React, { useEffect, useState } from "react";
import Fuqarolikishlarimg from "../img/Yuridikshaxslarimg4.webp";
import BiznesImg1 from "../img/biznes1.jpg";
import BiznesImg2 from "../img/biznes2.jpg";
import Location from "./Location";

const BiznesVositachiligipageskomponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const handleImageClick = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalImage("");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-gray-50 py-16">
      <Location />
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-12">
          Biznes vositachiligi
        </h2>

        <div className="space-y-16">
          {/* Birinchi Bo'lim */}
          <div className="lg:flex lg:items-center lg:gap-16">
            {/* Matn */}
            <div className="lg:w-1/2 text-gray-800 text-lg leading-relaxed">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Vositachilik jarayoni
              </h3>
              <p className="mb-6">
                Biznes vositachiligi - bu neytral uchinchi shaxs, vositachi ikki
                yoki undan ortiq tomonlarga biznes muhitidagi nizolarni hal
                qilishda yordam beradigan jarayondir. Uning maqsadi - tomonlarni
                aloqani tiklash va birgalikda qarorlar qabul qilish uchun
                konstruktiv muloqot o'tkazish jarayonida qo'llab-quvvatlash.
              </p>
              <p>
                Mediator tomonlarga dialogni ochishga yordam beradi va nizolarni
                hal qilishning turli variantlarini ko‘rib chiqishga yo‘naltiradi.
              </p>
            </div>
            {/* Rasm */}
            <div className="lg:w-1/2">
              <img
                src={Fuqarolikishlarimg}
                alt="Biznes vositachiligi"
                className="shadow-lg rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer mx-auto"
                onClick={() => handleImageClick(Fuqarolikishlarimg)}
              />
            </div>
          </div>

          {/* Ikkinchi Bo'lim */}
          <div className="lg:flex lg:items-center lg:gap-16">
            {/* Rasm */}
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <img
                src={BiznesImg1}
                alt="Biznes mediator"
                className="shadow-lg rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer mx-auto"
                onClick={() => handleImageClick(BiznesImg1)}
              />
            </div>
            {/* Matn */}
            <div className="lg:w-1/2 text-gray-800 text-lg leading-relaxed">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Mediatorning roli
              </h3>
              <p className="mb-6">
                Mediatorning zukkoligi va tajribasi bu jarayonda muhim rol
                o‘ynaydi. Mediator ob'ektiv va adolatli bo‘lib, nizoda taraf
                olmasligi kerak. Mediatorning vazifasi tomonlarni o‘z nizolarini
                hal qilish uchun turli variantlarni ko‘rib chiqishga yo‘naltirishdir.
              </p>
              <p>
                Mediator o‘zaro kelishuvga erishish uchun konstruktiv muloqot
                muhitini yaratadi va tomonlarni birgalikda qaror qabul qilishga
                chorlaydi.
              </p>
            </div>
          </div>

          {/* Uchinchi Bo'lim */}
          <div className="lg:flex lg:items-center lg:gap-16">
            {/* Matn */}
            <div className="lg:w-1/2 text-gray-800 text-lg leading-relaxed order-2 lg:order-1">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Afzalliklar
              </h3>
              <p className="mb-6">
                Ishbilarmonlik vositachiligining afzalliklari orasida
                ishbilarmonlik munosabatlarini saqlab qolish, sud jarayoniga
                sarflaydigan xarajatlar va vaqtni kamaytirish, shuningdek,
                maxfiylikni ta'minlash kiradi.
              </p>
              <p>
                Mediatsiya jarayoni tomonlarga o‘zaro manfaatli yechim topishda
                yordam beradigan qulay va nazorat ostidagi muhitni taqdim etadi.
              </p>
            </div>
            {/* Rasm */}
            <div className="lg:w-1/2 order-1 lg:order-2">
              <img
                src={BiznesImg2}
                alt="Mediator afzalliklari"
                className="shadow-lg rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer mx-auto"
                onClick={() => handleImageClick(BiznesImg2)}
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
              className="absolute top-4 right-4 text-white text-3xl"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <img
              src={modalImage}
              alt="Katta Rasm"
              className="max-w-full max-h-screen rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default BiznesVositachiligipageskomponent;
