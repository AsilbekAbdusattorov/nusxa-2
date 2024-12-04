import React, { useEffect, useState } from "react";
import Fuqarolikishlarimg from "../img/Fuqarolikishlarimg.webp";
import JusticeScaleImg from "../img/justice-scale.png";
import AgreementImg from "../img/agreement.png";
import Location from "../components/Location";

const FuqarolikIshlaripageskomponent = () => {
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-5xl font-bold pb-6 text-[#ff5050]">
            Fuqarolik Ishlari
          </h2>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Fuqarolik ishlari - bu mulk huquqlari, shartnomalar, majburiyatlarni
            bajarish va fuqarolar huquqlarini himoya qilish bilan bog‘liq bo‘lgan
            muhim sud jarayonlaridir.
          </p>
        </div>

        {/* Explanation Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mt-12">
          <div className="lg:w-[55%] text-base sm:text-lg text-gray-700 leading-relaxed">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6 text-[#ff5050]">
              Fuqarolik Ishlarining Mazmuni
            </h3>
            <p className="mb-5">Fuqarolik ishlariga quyidagilar kiradi:</p>
            <ul className="list-disc list-inside space-y-4">
              <li>
                <strong>Ko'chmas mulk nizolari:</strong> Uy, yer va boshqa
                ko'chmas mulk bilan bog'liq nizolar.
              </li>
              <li>
                <strong>Shartnoma nizolari:</strong> Shartnoma shartlari bajarilmagan
                hollarda kelib chiqadigan nizolar.
              </li>
              <li>
                <strong>Meros nizolari:</strong> Merosni bo'lib olish yoki
                tasarruf etish masalalari.
              </li>
              <li>
                <strong>Zararni qoplash:</strong> Yo'l-transport hodisalari
                yoki boshqa holatlar natijasida etkazilgan zararni qoplash.
              </li>
              <li>
                <strong>Oilaviy nizolar:</strong> Nikohdan ajrashish va mol-mulkni
                bo'lish.
              </li>
            </ul>
          </div>
          <div className="lg:w-[40%] mx-auto">
            <img
              src={Fuqarolikishlarimg}
              alt="Fuqarolik ishlariga oid rasm"
              className="shadow-md rounded-3xl transition-transform duration-300 hover:scale-105 cursor-pointer w-full max-w-[400px] mx-auto"
              onClick={() => handleImageClick(Fuqarolikishlarimg)}
            />
          </div>
        </div>

        {/* Recommendations Section */}
        <div className="pt-16">
          <h3 className="text-2xl sm:text-3xl font-semibold text-center text-[#ff5050]">
            Tavsiyalar
          </h3>
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 mt-12">
            <div className="lg:w-[40%] mx-auto">
              <img
                src={AgreementImg}
                alt="Shartnoma rasmi"
                className="shadow-lg rounded-3xl transition-transform duration-300 hover:scale-105 cursor-pointer w-full max-w-[400px] mx-auto"
                onClick={() => handleImageClick(AgreementImg)}
              />
            </div>
            <div className="lg:w-[55%] text-base sm:text-lg text-gray-700 leading-relaxed">
              <ul className="list-disc list-inside space-y-4">
                <li>
                  <strong>Advokat yordami:</strong> Fuqarolik ishlarida malakali
                  advokat bilan ishlash jarayonni yengillashtiradi.
                </li>
                <li>
                  <strong>Hujjatlarni tayyorlash:</strong> Shartnomalar va dalillarni
                  to'g'ri tayyorlash muhim.
                </li>
                <li>
                  <strong>Sud tartib-qoidalarini bilish:</strong> Sud jarayonlarida
                  qatnashish uchun asosiy qonunlarni o'rganing.
                </li>
                <li>
                  <strong>O'z huquqlaringizni biling:</strong> Fuqarolik huquqlari
                  va majburiyatlari haqida bilimga ega bo'lish sizning manfaatingizga
                  xizmat qiladi.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Importance Section */}
        <div className="pt-16">
          <h3 className="text-2xl sm:text-3xl font-semibold text-center text-[#ff5050]">
            Fuqarolik Ishlarining Ahamiyati
          </h3>
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 mt-12">
            <div className="lg:w-[55%] text-base sm:text-lg text-gray-700 leading-relaxed">
              <p>
                Fuqarolik ishlarining ahamiyati jamiyatda huquqiy barqarorlikni
                ta'minlashdir. Ushbu ishlar orqali fuqarolar o'z huquqlarini
                himoya qilishi va nizolarni qonuniy asosda hal qilishi mumkin.
              </p>
              <p className="mt-4">
                Fuqarolik protsesslari, ayniqsa, mol-mulk huquqlari va oilaviy
                masalalarda muhim o'rin tutadi va jamiyatning iqtisodiy va
                huquqiy barqarorligini oshiradi.
              </p>
            </div>
            <div className="lg:w-[40%] mx-auto">
              <img
                src={JusticeScaleImg}
                alt="Adolat tarozisi"
                className="shadow-md rounded-3xl transition-transform duration-300 hover:scale-105 cursor-pointer w-full max-w-[400px] mx-auto"
                onClick={() => handleImageClick(JusticeScaleImg)}
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

export default FuqarolikIshlaripageskomponent;
