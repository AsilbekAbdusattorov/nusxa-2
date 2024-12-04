import React from "react";
import { Link } from "react-router-dom";
import Accardion from "../components/Accardion";

const Header = () => {
  return (
    <header className="bg-white relative z-10">
      <Accardion />
      <div className="container mx-auto px-4 mt-10">
        <div className="py-10 mt-20 md:pt-40 md:mt-1 xl:pt-24 xl:mt-1 flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center md:grid-cols-3 md:text-left lg:flex lg:justify-between lg:gap-16 lg:w-full">
            <div className="flex flex-col items-center lg:items-start">
              <span className="text-black/50">
                Rossiya, 125040, Moskva, <br />
                Leninskiy prospekti, bino
              </span>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <Link to="/" className="text-xl lg:text-2xl text-black font-bold">
                Shirkat nomi
              </Link>
              <span className="text-black/50">Yuridik xizmatlar veb-sayti</span>
            </div>
            <div className="flex flex-col items-center lg:items-start">
              <Link to="/" className="text-xl lg:text-2xl text-black font-bold">
                +7 (000) 000-00-00
              </Link>
              <span className="text-black/50">
                Dushanba-Yakshanba: 09:00 dan 17:00 gacha
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
