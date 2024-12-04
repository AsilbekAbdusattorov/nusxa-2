import React, { useEffect, useState } from "react";
import Fuqarolikishlarimg from "../img/Yuridikshaxslarimg3.webp";
import Korporatsiya1 from "../img/korporatsiya1.jpg";
import Korporatsiya2 from "../img/korporatsiya2.jpg";
import Location from "./Location";

const Korporativishlarpageskomponent = () => {
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
    setModalImage("");
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 via-white to-gray-100 py-16">
      <Location />
      <div className="container mx-auto px-6">
        {/* Sarlavha */}
        <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-12">
          Korporativ Ishlar
        </h2>

        {/* Bo'limlar */}
        <div className="space-y-16">
          {/* Birinchi Bo'lim */}
          <div className="lg:flex lg:items-center lg:gap-16">
            {/* Rasm */}
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <img
                src={Fuqarolikishlarimg}
                alt="Korporatsiya"
                className="shadow-lg rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer mx-auto w-full"
                onClick={() => handleImageClick(Fuqarolikishlarimg)}
              />
            </div>
            {/* Matn */}
            <div className="lg:w-1/2 text-gray-800 text-lg leading-relaxed">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Korporativ boshqaruv
              </h3>
              <p className="mb-6">
                Korporativ ishlar korporatsiyalar, ulardagi ta’sischilar va
                manfaatdor tomonlar o’rtasidagi munosabatlarni boshqarish uchun
                mo’ljallangan muhim sohadir. Bu sohaga korporativ boshqaruv,
                aksiyadorlar huquqlari va javobgarliklari, birlashish va sotib
                olish jarayonlari kiradi.
              </p>
              <p>
                Korporativ ishlar bo’yicha mutaxassislar kompaniya uchun huquqiy
                xavflarni minimallashtirish va moliyaviy barqarorlikni ta’minlash
                bo’yicha maslahatlar beradi.
              </p>
            </div>
          </div>

          {/* Ikkinchi Bo'lim */}
          <div className="lg:flex lg:items-center lg:gap-16">
            {/* Matn */}
            <div className="lg:w-1/2 text-gray-800 text-lg leading-relaxed order-2 lg:order-1">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Strategik qarorlar
              </h3>
              <p className="mb-6">
                Korporativ ishlar korporatsiyalar uchun barqarorlik va
                samaradorlikni oshirishda muhim rol o’ynaydi. Bunga korporatsiya
                siyosati va moliyaviy tuzilmasini shakllantirish kiradi.
              </p>
              <p>
                Korporatsiya rahbariyatiga taalluqli qarorlar ko'pincha
                jamoatchilikka ham ta'sir ko'rsatadi, bu esa korporativ
                mas'uliyatni oshiradi.
              </p>
            </div>
            {/* Rasm */}
            <div className="lg:w-1/2 order-1 lg:order-2 mb-8 lg:mb-0">
              <img
                src={Korporatsiya1}
                alt="Korporatsiya Strategik qarorlar"
                className="shadow-lg rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer mx-auto w-full"
                onClick={() => handleImageClick(Korporatsiya1)}
              />
            </div>
          </div>

          {/* Uchinchi Bo'lim */}
          <div className="lg:flex lg:items-center lg:gap-16">
            {/* Rasm */}
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <img
                src={Korporatsiya2}
                alt="Korporatsiya mas'uliyati"
                className="shadow-lg rounded-xl transition-transform duration-300 hover:scale-105 cursor-pointer mx-auto w-full"
                onClick={() => handleImageClick(Korporatsiya2)}
              />
            </div>
            {/* Matn */}
            <div className="lg:w-1/2 text-gray-800 text-lg leading-relaxed">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Korporativ mas'uliyat
              </h3>
              <p className="mb-6">
                Korporativ mas'uliyat - bu korporatsiyalar tomonidan iqtisodiy,
                ijtimoiy va ekologik ta'sirlarni inobatga olish jarayoni. Bu
                korporatsiyalarni nafaqat moliyaviy muvaffaqiyatga, balki
                jamiyatga foydali bo'lishga ham undaydi.
              </p>
              <p>
                Korporatsiyalar uchun mas'uliyatli yondashuv nafaqat brend
                obro'sini oshiradi, balki uzoq muddatli muvaffaqiyatning asosi
                hisoblanadi.
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

export default Korporativishlarpageskomponent;
