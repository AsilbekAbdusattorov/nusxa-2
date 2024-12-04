import React from "react";
import { NavLink, Link } from "react-router-dom";
import FooterImg1 from "../img/Footer-telegram.svg";
import FooterImg2 from "../img/Footer-watsap.svg";
import Footer1 from "../img/footer1.svg";
import Footer2 from "../img/footer2.svg";
import Footer3 from "../img/footer3.svg";
import Footer4 from "../img/footer4.svg";
import Footertolovimg1 from "../img/footertolovimg1.svg";
import Footertolovimg2 from "../img/footertolovimg2.svg";
import Footertolovimg3 from "../img/footertolovimg3.svg";
// Footer component
const Footer = () => {
  return (
    <div className="relative">
      <footer className="bg-[#212830] pt-12 lg:pt-[60.763px] lg:pb-[30.375px] relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-0 relative">
          <div className="mb-8 lg:mb-12 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white">
              Kontaktlar
            </h2>
            <p className="text-lg lg:text-[22px] text-[#B3BFC0]">
              Siz uchun qulay bo'lgan har qanday usulda biz bilan bog'lanishingiz mumkin.
            </p>
          </div>

          {/* Main Content */}
          <div className="border-t pt-8 border-[#404e5f] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-x-36">
            {/* Social Media Section */}
            <div className="max-w-md mx-auto text-center lg:text-left">
              <p className="text-[#A6A9AB]">Ish vaqti:</p>
              <h4 className="text-white text-lg lg:text-[18px] font-bold">
                Dushanba-Jum: 09:00 dan 17:00 gacha
              </h4>
              <h4 className="text-white text-lg lg:text-[18px] font-bold">
                Shanba: 11:00 dan 15:00 gacha
              </h4>
              <div className="py-4 lg:py-8">
                <p className="text-[#a6a9ab]">Ijtimoiy tarmoqlar:</p>
                <div className="flex justify-center lg:justify-start gap-4 mt-2">
                  <NavLink to="https://vk.com/?roistat_visit=30302099">
                    <img className="rounded-full" src={Footer1} alt="footer" />
                  </NavLink>
                  <NavLink to="https://ok.ru/?roistat_visit=30302099">
                    <img className="rounded-full" src={Footer2} alt="footer" />
                  </NavLink>
                  <NavLink to="https://dzen.ru/?yredirect=true">
                    <img className="rounded-full" src={Footer3} alt="footer" />
                  </NavLink>
                  <NavLink to="https://rutube.ru/?roistat_visit=30302099">
                    <img className="rounded-full" src={Footer4} alt="footer" />
                  </NavLink>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="max-w-md mx-auto text-center lg:text-left">
              <p className="text-[#A6A9AB]">Telefonlar:</p>
              <a href="https://t.me/Asilbek_2007_13" className="flex items-center justify-center lg:justify-start gap-4 mb-2">
                <h4 className="text-white text-lg lg:text-[18px] font-bold">
                  +998 97-999-13-07
                </h4>
                <img className="rounded-full" src={FooterImg1} alt="footerImg" />
              </a>
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <h4 className="text-white text-lg lg:text-[18px] font-bold">
                  +998 97-999-13-07
                </h4>
                <img className="rounded-full" src={FooterImg2} alt="footerImg" />
              </div>
              <div className="py-4 lg:py-8 mt-3">
                <p className="text-[#a6a9ab]">Pochta:</p>
                <a href='mailto:Abdusattorovasilbek278@gmail.com' className="font-semibold text-[#ff5050] relative border-b-1 border-[#ff5050] hover:border-transparent hover:after:w-0 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-[#ff5050] after:transition-all after:duration-700">
                  Abdusattorovasilbek278@gmail.com
                </a>
              </div>
            </div>

            {/* Address Section */}
            <div className="max-w-md mx-auto text-center lg:text-left">
              <p className="text-[#A6A9AB]">Manzil:</p>
              <h4 className="text-white text-lg lg:text-[18px] font-bold">
                O'zbekiston, Andijon, <br /> Baliqchi, Chinobod
              </h4>
              <div className="py-4 lg:py-8 mt-6">
                <p className="text-[#a6a9ab]">To'lov:</p>
                <div className="flex justify-center lg:justify-start gap-4 mt-2">
                  <img className="rounded-lg" src={Footertolovimg1} alt="footerimg" />
                  <img className="rounded-lg" src={Footertolovimg2} alt="footerimg" />
                  <img className="rounded-lg" src={Footertolovimg3} alt="footerimg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
