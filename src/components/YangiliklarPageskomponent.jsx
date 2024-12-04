import React, { useEffect } from "react";
import Yangiliklar1 from "../img/yangiliklarimg1.webp";
import Yangiliklar2 from "../img/yangiliklarimg2.webp";
import Location from "../components/Location";

const YangiliklarPageskomponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        {/* Lokatsiya */}
        <Location />
        
        {/* Sarlavha */}
        <h2 className="text-5xl font-bold text-center mb-12 text-gray-800">
          Yangiliklar
        </h2>

        {/* Birinchi yangilik */}
        <div className="flex flex-wrap lg:flex-nowrap items-start mb-16 gap-8">
          <img
            className="lg:w-1/2 w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            src={Yangiliklar1}
            alt="Ma'muriy huquqshunos"
          />
          <div className="lg:w-1/2 text-gray-700">
            <p className="text-sm text-gray-500 mb-2">15.06.2022</p>
            <h3 className="text-3xl font-semibold text-gray-900 mb-6">
              Ma'muriy huquqshunos
            </h3>
            <p className="text-lg leading-7 mb-4">
              Ko'pchilik uchun huquqiy munozaralar hayotlarida birinchi marta
              sodir bo'ladi va tushunmovchilik va adolatsizlik tuyg'ularini
              keltirib chiqarishi mumkin, ammo amaliyot rahbari bilan
              maslahatlashgandan so'ng, mijozlar o'z fikrlarini tubdan
              o'zgartiradilar va o'z manfaatlarini himoya qilishga tayyor.
            </p>
            <p className="text-lg leading-7 mb-4">
              Har bir fuqaro ushbu sohada advokat yollash huquqiga ega. Zamonaviy
              ma'muriy amaliyot xo'jalik yurituvchi sub'ektlar va turli xil
              javobgarlik turlarini belgilashga vakolatli organlar o'rtasidagi
              o'zaro munosabatlarning keng doirasi bilan tavsiflanadi.
            </p>
            <ul className="list-disc pl-5 leading-7">
              <li>Qiyin qarorlar qabul qilish.</li>
              <li>
                Ma'muriy javobgarlikka tortilishda advokat xizmati kerak bo'lishi.
              </li>
              <li>Sudda manfaatlarni himoya qilish.</li>
              <li>Apellyatsiya va kassatsiya sud qarorlaridan shikoyat qilish.</li>
            </ul>
          </div>
        </div>

        {/* Ikkinchi yangilik */}
        <div className="flex flex-wrap lg:flex-nowrap items-start gap-8">
          <img
            className="lg:w-1/2 w-full rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            src={Yangiliklar2}
            alt="Ajralish bo'yicha advokat"
          />
          <div className="lg:w-1/2 text-gray-700">
            <p className="text-sm text-gray-500 mb-2">15.06.2022</p>
            <h3 className="text-3xl font-semibold text-gray-900 mb-6">
              Ajralish va mulkni taqsimlash bo'yicha advokat
            </h3>
            <p className="text-lg leading-7 mb-4">
              Ajralishlar ulushi o'sishda davom etmoqda, shuning uchun sudlar
              ajralish va mulkni taqsimlash to'g'risidagi ishlarni ko'proq
              ko'rib chiqmoqda. Agar siz oilangizni saqlab qolishning iloji
              yo'qligi va mulkni bo'lish zarurati bilan duch kelgan bo'lsangiz,
              advokat bilan bog'lanishingiz kerak bo'lgan vaqt keldi.
            </p>
            <p className="text-lg leading-7 mb-4">
              Advokat yollashning muhim hollari quyidagilardir:
            </p>
            <ul className="list-disc pl-5 leading-7">
              <li>
                <span className="font-semibold text-gray-900">Mulkni taqsimlash:</span> Bu jarayon mulkni aniqlash va uni bo‘lish usulini tanlashni o‘z ichiga oladi.
              </li>
              <li>
                <span className="font-semibold text-gray-900">Bolalar bo‘yicha nizolar:</span> Bolalar kelajagini yaxshilash va oila a’zolarining manfaatlarini himoya qilish zarurati.
              </li>
              <li>
                <span className="font-semibold text-gray-900">Aliment masalalari:</span> Aliment miqdorini to‘g‘ri hisoblash va qarzlarni oldini olish.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YangiliklarPageskomponent;
