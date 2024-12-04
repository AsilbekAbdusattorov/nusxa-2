import React, { useState } from "react";

const FikrQoldiringModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("+998"); // Default value is +998
  const [message, setMessage] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [phoneError, setPhoneError] = useState(""); // Phone error state

  const TELEGRAM_BOT_TOKEN = "7096721092:AAFhzA_ocTn_jCVEYuiX2PB97K8Ww6prNGU";
  const TELEGRAM_CHAT_ID = "@Asilbek_Imtihon_kanali";

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation: Ensure all fields are filled correctly
    if (name && email && phone.length === 13 && message && termsAccepted) {
      // Prepare the message
      const text = `🔔 Yangi Fikr:
       👤 Ism: ${name}
       ✉️ Email: ${email}
       📞 Telefon: ${phone}
       📝 Xabar: ${message}`;

      // Send the message to the Telegram bot
      await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text,
          }),
        }
      );

      alert("Fikr muvaffaqiyatli yuborildi!");

      // Reset form and close modal
      setName("");
      setEmail("");
      setPhone("+998");
      setMessage("");
      onClose();
    } else {
      alert("Iltimos, barcha maydonlarni to'ldiring va shartlarni qabul qiling.");
    }
  };

  // Validation for name (prevent numbers)
  const handleNameChange = (e) => {
    const value = e.target.value;
    const regex = /^[A-Za-z\s]+$/;
    if (value === "" || regex.test(value)) {
      setName(value);
    }
  };

  // Validation for phone (allow editing only after +998)
  const handlePhoneChange = (e) => {
    let value = e.target.value;

    // Ensure the phone input always starts with "+998"
    if (!value.startsWith("+998")) {
      value = "+998";
    }

    // Allow only numeric characters after "+998" and limit to 9 digits after +998
    const regex = /^\+998[0-9]{0,9}$/;
    if (regex.test(value)) {
      setPhone(value);
    }

    // Check if phone number length is less than 13 characters
    if (value.length < 13) {
      setPhoneError("Telefon raqami 9 ta raqamdan iborat bo'lishi kerak.");
    } else {
      setPhoneError("");
    }
  };

  if (!isOpen) return null; // If modal is closed, don't render anything

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-full max-w-lg p-6 relative">
        {/* Close button */}
        <button className="absolute text-5xl top-3 right-3" onClick={onClose}>
          &times;
        </button>

        {/* Modal Header */}
        <h2 className="text-2xl font-bold mb-4 text-center">Fikr qoldiring</h2>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="name">
              Ism <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-blue-500/20"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
              Elektron pochta
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-blue-500/20"
              required
            />
          </div>

          {/* Phone Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="phone">
              Telefon
            </label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={handlePhoneChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-blue-500/20"
              required
            />
            {phoneError && <p className="text-red-500 text-sm mt-2">{phoneError}</p>}
          </div>

          {/* Message Input */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm mb-2"
              htmlFor="message"
            >
              Xabar <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-blue-500/20"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Terms Checkbox */}
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="terms"
              checked={termsAccepted}
              onChange={() => setTermsAccepted(!termsAccepted)}
              className="mr-2 w-6 h-6 focus:ring-blue-500 text-blue-500 border-gray-300 rounded"
            />
            <label
              htmlFor="terms"
              className="text-sm text-gray-700 hover:text-blue-500"
            >
              Men shaxsiy ma'lumotlarimni qayta ishlash shartlarini qabul qilaman
              <span className="text-red-500">*</span>
            </label>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className={`py-2 px-4 rounded-lg text-white transition-colors ${
                termsAccepted && !phoneError
                  ? "bg-blue-500 hover:bg-blue-600"
                  : "bg-gray-400"
              }`}
              disabled={!termsAccepted || phoneError}
            >
              Yuborish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FikrQoldiringModal;
