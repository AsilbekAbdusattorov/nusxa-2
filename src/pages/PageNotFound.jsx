import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="bg-PNFBackground bg-cover min-h-screen flex items-center justify-center px-4">
      {/* Rasm, shaffof fon va matn */}
      <div className="relative w-full max-w-full h-[100vh] overflow-hidden rounded-2xl shadow-lg">

        <div className="absolute inset-0"></div>
        {/* Matn */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-5xl lg:text-6xl font-extrabold mb-6">
            Saxifa topilmadi
          </h1>
          <p className="text-lg lg:text-xl mb-8 leading-relaxed">
            Afsuski, siz qidirayotgan saxifa mavjud emas. Iltimos, bosh sahifaga
            qayting yoki boshqa joyga o'ting.
          </p>
          <Link
            to="/"
            className="inline-block px-8 py-4 text-lg hover:bg-transparent border-2 border-transparent hover:text-red-500 hover:border-red-500 font-medium text-white bg-red-500 rounded-full shadow-lg transition-all duration-300"
          >
            Bosh sahifaga qaytish
          </Link>
        </div>
      </div>

    </div>
  );
};

export default PageNotFound;
