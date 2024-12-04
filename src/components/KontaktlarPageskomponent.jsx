import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Location from "../components/Location";
import Telegramimg from "../img/Footer-telegram.svg";
import KonraktlarImg1 from "../img/kontaktlarimg1.svg";
import KonraktlarImg2 from "../img/kontaktlarimg2.svg";
import KonraktlarImg3 from "../img/kontaktlarimg3.svg";

const QRCodeWithHover = ({ value, children }) => {
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <h2 className="text-5xl font-bold text-center mb-10 md:mb-20">
          Kontaktlar
        </h2>
        <div className="flex flex-col lg:flex-row justify-between mb-10 lg:mb-20">
          {/* Left Column */}
          <div className="mb-10 lg:mb-0 lg:mr-10">
            <div className="flex flex-wrap items-center mb-5">
              <QRCodeWithHover value="+998 (97) 999-13-07">
                <p className="font-bold text-lg md:text-2xl">
                  +998 (97) 999-13-07
                </p>
              </QRCodeWithHover>
              <QRCodeWithHover value="https://wa.me/998979991307">
                <svg
                  viewBox="0 0 60 60"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  className="w-8 h-8 md:w-10 md:h-10 rounded-lg ml-3 md:ml-5"
                >
                  <title>Whatsapp–rounded</title>
                  <desc>Created with Sketch.</desc>
                  <g
                    id="Page-1"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="soc_rounded"
                      transform="translate(-180.000000, -480.000000)"
                    >
                      <g id="color_theme">
                        <g
                          id="Color"
                          transform="translate(80.000000, 80.000000)"
                        >
                          <g
                            id="Whatsapp–rounded"
                            transform="translate(100.000000, 400.000000)"
                          >
                            <rect
                              id="Rectangle"
                              fill="#2CB742"
                              x="0"
                              y="0"
                              width="60"
                              height="60"
                              rx="6"
                            ></rect>
                            <g
                              id="whatsapp"
                              transform="translate(10.000000, 10.000000)"
                            >
                              <path
                                d="M0.0584610619,39.8246285 L3.44,29.6806897 C1.69448276,26.7448276 0.689655172,23.3186207 0.689655172,19.6551724 C0.689655172,8.8 9.48965517,0 20.3448276,0 C31.2,0 40,8.8 40,19.6551724 C40,30.5103448 31.2,39.3103448 20.3448276,39.3103448 C17.042069,39.3103448 13.9317241,38.4917241 11.2,37.0531034 L0.178774277,39.9529617 C0.125363671,39.9670148 0.0706734736,39.9351093 0.0566203013,39.8816987 C0.0516742512,39.8629007 0.052313919,39.8430687 0.0584610619,39.8246285 Z"
                                id="Path"
                                fill="#FFFFFF"
                              ></path>
                              <path
                                d="M32.8848276,26.1965517 C31.9772414,24.4813793 28.6303448,22.52 28.6303448,22.52 C27.8731034,22.0882759 26.9593103,22.04 26.5275862,22.8096552 C26.5275862,22.8096552 25.44,24.1137931 25.1634483,24.3013793 C23.9,25.1572414 22.7296552,25.1241379 21.5482759,23.9427586 L18.8027586,21.1972414 L16.0572414,18.4517241 C14.8758621,17.2703448 14.8427586,16.1 15.6986207,14.8365517 C15.8862069,14.56 17.1903448,13.4724138 17.1903448,13.4724138 C17.96,13.04 17.9117241,12.1268966 17.48,11.3696552 C17.48,11.3696552 15.5186207,8.02275862 13.8034483,7.11517241 C13.0737931,6.72896552 12.177931,6.86413793 11.5944828,7.44758621 L10.382069,8.66 C6.53586207,12.5062069 8.42965517,16.8482759 12.2758621,20.6944828 L15.7910345,24.2096552 L19.3062069,27.7248276 C23.1524138,31.5710345 27.4944828,33.4648276 31.3406897,29.6186207 L32.5531034,28.4062069 C33.1365517,27.8213793 33.2710345,26.9255172 32.8848276,26.1965517 Z"
                                id="Path"
                                fill="#2CB742"
                              ></path>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
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
              <p className="text-base md:text-lg text-black/70">
                Shanba kuni yopiq
              </p>
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
          <h4 className="text-xl md:text-2xl lg:text-[26px]">
            Bizning tafsilotlarimiz
          </h4>
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
              Soliq to'lovchining{" "}
              <span className="block md:inline ml-0 md:ml-[102px]">
                0000000000
              </span>
            </p>
            <p>identifikatsiya raqami:</p>
            <p>
              Tekshirish punkti:{" "}
              <span className="block md:inline ml-0 md:ml-[103px]">
                000000000
              </span>
            </p>
            <p>
              ORGN:{" "}
              <span className="block md:inline ml-0 md:ml-[188px]">
                0000000000000
              </span>
            </p>
            <p>
              OKPO:{" "}
              <span className="block md:inline ml-0 md:ml-[188px]">
                00000000
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KontaktlarPageskomponent;
