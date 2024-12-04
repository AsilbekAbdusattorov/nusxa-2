import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Location from "../components/Location";
import Telegramimg from "../img/Footer-telegram.svg";
import Watsapimg from "../img/KontaktwatsapImg.svg";
import KonraktlarImg1 from "../img/kontaktlarimg1.svg";
import KonraktlarImg2 from "../img/kontaktlarimg2.svg";
import KonraktlarImg3 from "../img/kontaktlarimg3.svg";

const QRCodeWithHover = ({ value, children }) => {
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}

      {isHovered && (
        <div className="absolute bottom-full w-[150px] mb-2 z-10 p-2 bg-white border border-gray-300 rounded-lg shadow-lg">
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?data=${value}&size=250x250`}
            alt="QR Code"
          />
        </div>
      )}
    </div>
  );
};

const KontaktlarPageskomponent = () => {
  return (
<section className="bg-gray-50 py-[60.763px]">
  <div className="container px-4 sm:px-6 lg:px-8">
    <Location />
    <h2 className="text-5xl font-bold text-center mb-10 md:mb-20">Kontaktlar</h2>
    <div className="flex flex-col lg:flex-row justify-between mb-10 lg:mb-20">
      {/* Left Column */}
      <div className="mb-10 lg:mb-0 lg:mr-10">
        <div className="flex flex-wrap items-center mb-5">
          <QRCodeWithHover value="+998 (97) 999-13-07">
            <p className="font-bold text-lg md:text-2xl">+998 (97) 999-13-07</p>
          </QRCodeWithHover>
          <QRCodeWithHover value="https://wa.me/998979991307">
            <img
              className="w-8 h-8 md:w-10 md:h-10 rounded-lg ml-3 md:ml-5"
              src={Watsapimg}
              alt="WhatsApp"
            />
          </QRCodeWithHover>
          <QRCodeWithHover value="https://t.me/Asilbek_2007_13">
            <img
              className="w-8 h-8 md:w-10 md:h-10 rounded-lg ml-3"
              src={Telegramimg}
              alt="Telegram"
            />
          </QRCodeWithHover>
        </div>
        <div>
          <p className="my-2 text-base md:text-lg text-black/70">
            Dushanba-Jum 11:00 dan 21:00 gacha
          </p>
          <p className="text-base md:text-lg text-black/70">Shanba kuni yopiq</p>
          <p className="my-2 text-base md:text-lg text-black/70">
            Moskva, st. Leninskaya, uy 0, bino 0, ofis 0
          </p>
          <a 
            href="mailto:Abdusattorovasilbek278@gmail.com"
            className="font-semibold text-[#ff5050] border-b-2 border-[#ff5050] hover:border-transparent"
          >
            Abdusattorovasilbek278@gmail.com
          </a>
          <p className="my-2 text-base md:text-lg text-black/70">
            INN 000000000 OGRN 000000000
          </p>
          <div className="flex space-x-3 mt-5">
            <Link to="https://vk.com/?roistat_visit=30302099">
              <img
                className="rounded-lg w-10 h-10 md:w-12 md:h-12"
                src={KonraktlarImg1}
                alt="VK"
              />
            </Link>
            <Link to="https://ok.ru/?roistat_visit=30302099">
              <img
                className="rounded-lg w-10 h-10 md:w-12 md:h-12"
                src={KonraktlarImg2}
                alt="OK"
              />
            </Link>
            <Link to="https://rutube.ru/?roistat_visit=30302099">
              <img
                className="rounded-lg w-10 h-10 md:w-12 md:h-12"
                src={KonraktlarImg3}
                alt="Rutube"
              />
            </Link>
          </div>
        </div>
      </div>
      {/* Right Column */}
      <div className="flex justify-center lg:justify-end">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1986.642878560637!2d74.7041473154215!3d40.377593799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bbf4f7b4d5bc01%3A0x4f2b5db86b2859b4!2sUzbekistan!5e0!3m2!1sen!2s!4v1645221166884!5m2!1sen!2s"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
          className="rounded-lg shadow-md lg:w-[901px] lg:h-[400px]"
        ></iframe>
      </div>
    </div>
    <div>
      <h4 className="text-xl md:text-2xl lg:text-[26px]">Bizning tafsilotlarimiz</h4>
      <p className="text-black/70 text-sm md:text-lg mb-5">
        ("Kompaniya nomi" mas'uliyati cheklangan jamiyati)
      </p>
      <div className="space-y-3 text-black/70 text-sm md:text-lg">
        <p>
          Yuridik manzil:{" "}
          <span className="block md:inline ml-0 md:ml-32">
            Moskva, st. Leninskaya, uy 0, bino 0, ofis 0
          </span>
        </p>
        <p>
          Haqiqiy manzil:{" "}
          <span className="block md:inline ml-0 md:ml-[122px]">
            Moskva, st. Leninskaya, uy 0, bino 0, ofis 0
          </span>
        </p>
        <p>
          Soliq to'lovchining <span className="block md:inline ml-0 md:ml-[102px]">0000000000</span>
        </p>
        <p>identifikatsiya raqami:</p>
        <p>
          Tekshirish punkti: <span className="block md:inline ml-0 md:ml-[103px]">000000000</span>
        </p>
        <p>
          ORGN: <span className="block md:inline ml-0 md:ml-[188px]">0000000000000</span>
        </p>
        <p>
          OKPO: <span className="block md:inline ml-0 md:ml-[188px]">00000000</span>
        </p>
      </div>
    </div>
  </div>
</section>

  );
};

export default KontaktlarPageskomponent;
