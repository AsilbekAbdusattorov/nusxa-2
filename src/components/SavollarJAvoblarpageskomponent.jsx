import { useState } from "react";
import Location from "../components/Location";

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-300 rounded-lg shadow-md mb-4 overflow-hidden">
      <div
        className={`flex justify-between items-center px-6 py-4 cursor-pointer ${
          isOpen ? "bg-[#e95b5b] text-white" : "bg-white"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-lg font-semibold">{question}</h2>
        <span
          className={`text-2xl transform transition-transform duration-300 ${
            isOpen ? "rotate-180 text-white" : "text-gray-500"
          }`}
        >
          ⌄
        </span>
      </div>
      <div
        className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <div className="bg-gray-50 px-6 py-4 text-gray-700">{answer}</div>
      </div>
    </div>
  );
};

const SavollarJAvoblarpageskomponent = () => {
  const accordionData = [
    {
      question: "Da'vo arizasi berish uchun qanday hujjatlar kerak?",
      answer: (
        <div>
          <p className="mb-5">
            Da'vo arizasi berish uchun quyidagi hujjatlar talab qilinadi:
          </p>
          <ul className="list-disc ml-5">
            <li>
              Da'vo arizasi, unda taraflar, da'voning predmeti va asoslari,
              talablar va dalillar to'g'risidagi ma'lumotlar bo'lishi kerak.
            </li>
            <li>
              Da'vo asoslarini tasdiqlovchi hujjatlar, masalan, shartnomalar,
              schyot-fakturalar, aktlar va boshqalar.
            </li>
            <li>
              Agar da'vo advokat yoki vakil orqali berilgan bo'lsa, da'vogar
              vakilining vakolatini tasdiqlovchi hujjatlar.
            </li>
          </ul>
        </div>
      ),
    },
    {
      question: "Huquqiy jarayonning asosiy bosqichlari qanday?",
      answer: (
        <div>
          <p className="mb-5">
            Sud jarayonining asosiy bosqichlariga quyidagilar kiradi:
          </p>
          <ul className="list-disc ml-5">
            <li>Da'vo arizasi berish va uni ro'yxatdan o'tkazish.</li>
            <li>
              Dastlabki sud majlisi, unda tomonlar o'z pozitsiyalarini
              ifodalashlari va dalillarini taqdim etishlari mumkin.
            </li>
            <li>
              Ish sud tomonidan ko'rib chiqilishi, shu jumladan guvohlarni,
              ekspertlarni so'roq qilish va taraflarning dalillarini tinglash.
            </li>
            <li>Sud tomonidan qaror qabul qilish.</li>
            <li>Qaror ustidan shikoyat qilish imkoni.</li>
          </ul>
        </div>
      ),
    },
    {
      question: "Advokat tomonidan qanday turdagi yuridik yordam ko'rsatiladi?",
      answer: (
        <div>
          <p className="mb-5">
            Advokat har xil turdagi yuridik yordam ko'rsatishi mumkin, jumladan:
          </p>
          <ul className="list-disc ml-5">
            <li>
              Huquqiy masalalar bo'yicha maslahatlar va tushuntirishlar.
            </li>
            <li>Sudda mijozning manfaatlarini himoya qilish.</li>
            <li>
              Da'vo arizalari, shartnomalar va boshqa hujjatlarni
              rasmiylashtirish.
            </li>
            <li>Muzokaralarda va vositachilikda ishtirok etish.</li>
            <li>
              Sudgacha bo'lgan jarayonda mijozning huquq va manfaatlarini himoya
              qilish.
            </li>
          </ul>
        </div>
      ),
    },
    {
      question:
        "Iste'molchi mahsulot yoki xizmatni sotib olayotganda qanday huquqlarga ega?",
      answer: (
        <div>
          <p className="mb-5">
            Tovar yoki xizmat sotib olayotganda iste'molchi quyidagi huquqlarga
            ega:
          </p>
          <ul className="list-disc ml-5">
            <li>
              Belgilangan xususiyatlarga va xavfsizlik talablarga javob
              beradigan sifatli mahsulot yoki xizmatni olish huquqi.
            </li>
            <li>
              Nomaqbul xatolar mavjud bo'lsa yoki shikoyat qilinsa, shartnomani
              bekor qilish va tovon talab qilish huquqi.
            </li>
            <li>
              Insofsiz savdo yoki sifatsiz xizmatlardan zarar ko'rgan taqdirda,
              ushbu zararlarning qoplanishini talab qilish.
            </li>
            <li>
              Nosos mahsulot yoki xizmat tufayli etkazilgan zararni qoplash
              huquqi.
            </li>
          </ul>
        </div>
      ),
    },
    {
      question:
        "Internetda mualliflik huquqi buzilgan taqdirda qanday choralar ko'rish kerak?",
      answer: (
        <div>
          <p className="mb-5">
            Agar Internetda mualliflik huquqlaringiz buzilgan bo'lsa, quyidagi
            choralarni ko'rishingiz kerak:
          </p>
          <ul className="list-disc ml-5">
            <li>
              Kontent egasi bilan bog'lanish va huquqiy material olib tashlash
              yoki tahrirlashni so'rash.
            </li>
            <li>
              Mualliflik huquqini himoya qilish va noqonuniy fayl yuklash yoki
              tarqatishni to'xtatish uchun shikoyat qilish.
            </li>
            <li>
              Platforma yoki xizmat ko'rsatuvchi tashkilot bilan muammo
              yuzasidan bog'lanish.
            </li>
            <li>
              Huquqiy jarayonlarni boshlash uchun advokat bilan bog'lanish.
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <section className="bg-gray-100 py-10">
      <Location />
      <h2 className="font-bold text-4xl text-center mb-12 text-gray-800">
        Savollar va javoblar
      </h2>
      <div className="container mx-auto px-4">
        {accordionData.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </section>
  );
};

export default SavollarJAvoblarpageskomponent;
