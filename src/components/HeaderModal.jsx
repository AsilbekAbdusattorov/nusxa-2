// React va useState hookini import qilamiz.
// React komponentlarini yaratish uchun ishlatiladi va useState hooki komponent ichida holat (state) yaratish uchun ishlatiladi.
import React, { useState } from "react";

// HeaderModal - modal oynasini yaratadigan funksiya komponenti.
// Bu komponent `closeModal` funksiyasini prop sifatida qabul qiladi.
const HeaderModal = ({ closeModal }) => {

  // Foydalanuvchining kiritgan ism, telefon, xabar va checkbox belgilanganligi (isChecked) holatlarini saqlash uchun state yaratamiz.
  const [name, setName] = useState("");          // ism qiymatini saqlaydi
  const [phone, setPhone] = useState("");        // telefon raqami qiymatini saqlaydi
  const [message, setMessage] = useState("");    // foydalanuvchi xabari uchun
  const [isChecked, setIsChecked] = useState(false); // checkbox holatini saqlaydi

  // Foydalanuvchidan faqat harf kiritishga ruxsat beradigan funksiya.
  const handleNameChange = (e) => {
    const value = e.target.value;
    // Faqat harflarni qabul qiladi (`regex` orqali faqat harflar va bo'sh joy kiritilishi mumkin).
    const regex = /^[A-Za-z\s]*$/;
    if (regex.test(value)) {
      setName(value); // Kiritilgan qiymat harf bo'lsa, `name` state yangilanadi
    }
  };

  // Foydalanuvchidan faqat raqam kiritishga ruxsat beradigan funksiya.
  const handlePhoneChange = (e) => {
    const value = e.target.value;
    // Faqat raqamlarni qabul qiladi (regex orqali faqat raqamlar kiritilishi mumkin).
    const regex = /^[0-9]*$/;
    if (regex.test(value)) {
      setPhone(value); // Kiritilgan qiymat raqam bo'lsa, `phone` state yangilanadi
    }
  };

  // Ma'lumotni Telegram'ga yuborish funksiyasi.
  const sendToTelegram = async (event) => {
    event.preventDefault(); // Sahifani qayta yuklanishini oldini olish uchun

    // Telegram bot tokeni va chat ID'si o'rnatiladi (ma'lumotlarni Telegram'da qaysi botga va qaysi chatga yuborish kerakligini bildiradi).
    const telegramBotToken = "7096721092:AAFhzA_ocTn_jCVEYuiX2PB97K8Ww6prNGU";
    const telegramChatId = "@Asilbek_Imtihon_kanali";

    // Yuboriladigan matnni hosil qiladi
    const text = `
      Yangi so'rov:
      Ism: ${name}
      Telefon: ${phone}
      Istaklar: ${message}
    `;
    // Telegram botiga yuborish uchun API endpoint URL'si.
    const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;
    
    // Ma'lumotlarni POST orqali yuboradi
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: telegramChatId, // Qabul qiluvchi chat ID
        text: text,              // Yuboriladigan matn
      }),
    });

    // Javob muvaffaqiyatli kelganda
    if (response.ok) {
      alert("Ma'lumot muvaffaqiyatli yuborildi!"); // Yuborish muvaffaqiyatli xabarini beradi
      // Formadagi barcha qiymatlarni tozalaydi
      setName("");
      setPhone("");
      setMessage("");
    } else {
      alert("Xatolik yuz berdi. Iltimos, qayta urinib ko'ring."); // Yuborishda xatolik haqida ogohlantirish beradi
    }

    closeModal(); // Modalni yopish funksiyasi chaqiriladi
  };

  return (
    // Modal oynasi - qora fon va markazda joylashgan shakl
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-12 max-w-[460px] w-full">
        {/* Modal sarlavhasi va yopish tugmasi */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[32px] font-bold text-center relative left-20">
            So'rov qoldiring
          </h2>
          <div className="bg-white rounded-full relative flex justify-center cursor-pointer bg-repeat left-[78px] w-16 h-16 border-[#ff5050]">
            <div className="border rounded-full relative flex justify-center cursor-pointer bg-repeat w-16 h-16 border-[#ff5050] hover:bg-[#ff5050]/10">
              <button
                onClick={closeModal} // Modalni yopish uchun tugma
                className="text-5xl hover:rotate-90 transition-transform duration-500"
              >
                &times;
              </button>
            </div>
          </div>
        </div>
        {/* Foydalanuvchi kiritadigan forma */}
        <form onSubmit={sendToTelegram}>
          {/* Ism kirish joyi */}
          <div className="mb-4">
            <label className="block text-gray-700">Ismingiz</label>
            <input
              type="text"
              className="border border-gray-300 p-5 w-full focus:outline-none focus:border-[#ff5050]"
              placeholder="Ism *"
              value={name}
              onChange={handleNameChange} // Faqat harflar kiritish
              required
            />
          </div>
          {/* Telefon raqami kirish joyi */}
          <div className="mb-4">
            <label className="block text-gray-700">Telefon</label>
            <input
              type="text"
              className="border border-gray-300 p-5 w-full focus:outline-none focus:border-[#ff5050]"
              placeholder="+998 (00) 000-00-00"
              value={phone}
              onChange={handlePhoneChange} // Faqat raqamlar kiritish
              required
            />
          </div>
          {/* Xabar kirish joyi */}
          <div className="mb-4">
            <label className="block text-gray-700">Istaklar</label>
            <textarea
              className="border border-gray-300 p-2  w-full focus:outline-none focus:border-[#ff5050]"
              placeholder="O'z tilaklaringizni yozing *"
              value={message}
              onChange={(e) => setMessage(e.target.value)} // Xabar qiymatini o'rnatish
              required
            />
          </div>
          {/* Ma'lumotlarni qayta ishlashga ruxsat checkbox */}
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="agree"
              className="mr-2"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)} // Checkbox holatini o'zgartirish
            />
            <label htmlFor="agree">
              Men shaxsiy ma'lumotlarni qayta ishlashga roziman
            </label>
          </div>
          {/* Yuborish tugmasi, agar checkbox belgilangan bo'lsa faollashadi */}
          <button
            type="submit"
            className={`bg-[#ff5050] text-white py-2 px-4 w-full ${
              !isChecked ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={!isChecked} // Checkbox belgilanganida yuborish tugmasi faollashadi
          >
            Yuborish
          </button>
        </form>
      </div>
    </div>
  );
};

export default HeaderModal; // Komponentni eksport qilish, boshqa joyda ishlatish uchun
