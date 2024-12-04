import React, { useEffect, useState } from "react";
import AnotherImage from "../img/anotherimage.png";
import RecommendationImg from "../img/recommendation.png";
// import JusticeScaleImg from "../img/justice-scale.png";
import Jismoniyshaxslarimg from "../img/jismoniyshaxslarimg1.webp";
import Location from "../components/Location";

const Mamuriyishlarpageskomponent = () => {
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
<section className="bg-gradient-to-b from-gray-100 via-white to-gray-50 pt-[70px] pb-20">
  <Location />
  <div className="container mx-auto px-4 sm:px-6">
    {/* Header */}
    <div className="text-center">
      <h2 className="text-3xl sm:text-5xl font-bold pb-6 sm:pb-8 text-[#ff5050]">
        Ma'muriy Ishlar
      </h2>
      <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl mx-auto">
        Ma'muriy ishlar fuqarolar va davlat organlari o'rtasidagi huquqiy
        munosabatlarni tartibga soluvchi muhim jarayon bo'lib, huquqiy nizolar,
        qoidabuzarliklar va boshqa ma'muriy masalalarni hal qilishda yordam beradi.
      </p>
    </div>

    {/* Types Section */}
    <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16 mt-10">
      <div className="lg:w-[55%] text-gray-700 leading-relaxed text-base sm:text-lg">
        <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-[#ff5050]">
          Ma'muriy Ishlar Turlari
        </h3>
        <p className="mb-4">
          Quyida ma'muriy ishlarning asosiy turlari keltirilgan:
        </p>
        <ul className="list-disc list-inside space-y-3">
          <li>
            <strong>Ma'muriy huquqbuzarliklar:</strong> Harakat qoidalarini
            buzish, soliq qoidalariga rioya qilmaslik kabi holatlar.
          </li>
          <li>
            <strong>Davlat bilan nizolar:</strong> Fuqarolar va davlat
            organlari o'rtasidagi nizolar.
          </li>
          <li>
            <strong>Ruxsatnomalar va litsenziyalar:</strong> Davlat
            organlari tomonidan beriladigan ruxsatlar.
          </li>
          <li>
            <strong>Inspeksiyalar:</strong> Qonunlarga rioya qilinishini
            tekshirish jarayonlari.
          </li>
          <li>
            <strong>Jazo choralari:</strong> Ma'muriy qonunlarni buzganlarga
            jazo qo'llash.
          </li>
        </ul>
      </div>
      <div className="lg:w-[35%]">
        <img
          src={Jismoniyshaxslarimg}
          alt="Adolat tarozisi"
          className="shadow-md rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer w-full max-w-sm"
          onClick={() => handleImageClick(Jismoniyshaxslarimg)}
        />
      </div>
    </div>

    {/* Recommendations Section */}
    <div className="pt-12">
      <h3 className="text-2xl sm:text-3xl font-semibold text-center text-[#ff5050]">
        Foydali Tavsiyalar
      </h3>
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 lg:gap-16 mt-10">
        <div className="lg:w-[40%]">
          <img
            src={AnotherImage}
            alt="Maslahat rasmi"
            className="shadow-lg rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer w-full max-w-sm"
            onClick={() => handleImageClick(AnotherImage)}
          />
        </div>
        <div className="lg:w-[55%] text-gray-700 leading-relaxed text-base sm:text-lg">
          <ul className="list-disc list-inside space-y-3">
            <li>
              <strong>Yurist maslahatlari:</strong> Malakali yuristdan
              huquqiy yordam olish sizga ko'plab muammolarni hal qilishga yordam beradi.
            </li>
            <li>
              <strong>Sudga tayyorgarlik:</strong> Kerakli hujjatlar,
              dalillar va guvohlarni oldindan tayyorlang.
            </li>
            <li>
              <strong>Advokatlar bilan ishlash:</strong> Murakkab ma'muriy
              ishlarni tajribali advokatlar bilan osonroq hal qilish mumkin.
            </li>
            <li>
              <strong>Huquqiy bilimlar:</strong> Ma'muriy qonunlar
              to'g'risida asosiy bilimlarga ega bo'lish foydali.
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Importance Section */}
    <div className="pt-12">
      <h3 className="text-2xl sm:text-3xl font-semibold text-center text-[#ff5050]">
        Ma'muriy Ishlarning Ahamiyati
      </h3>
      <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 lg:gap-16 mt-10">
        <div className="lg:w-[50%] text-gray-700 leading-relaxed text-base sm:text-lg">
          <p>
            Ma'muriy ishlar fuqarolar va davlat organlari o'rtasidagi
            adolatni ta'minlash uchun muhim hisoblanadi. Bu jarayonlar
            nafaqat qonunlarning to'g'ri bajarilishini ta'minlaydi, balki
            fuqarolar huquqlarining himoyasini ham kafolatlaydi.
          </p>
          <p className="mt-4">
            Ma'muriy qonunlar har bir shaxs va tashkilot uchun
            adolatli muhit yaratishga qaratilgan bo'lib, davlatning
            fuqarolar oldidagi javobgarligini oshiradi.
          </p>
        </div>
        <div className="lg:w-[35%]">
          <img
            src={RecommendationImg}
            alt="Tavsiyalar rasmi"
            className="shadow-md rounded-lg transition-transform duration-300 hover:scale-105 cursor-pointer w-full max-w-sm"
            onClick={() => handleImageClick(RecommendationImg)}
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

export default Mamuriyishlarpageskomponent;
