import React, { useEffect } from "react";
import Location from "../components/Location";
import { Link } from "react-router-dom";
import { JismoniySHaxslarData } from "../data";

const Jismoniyshaxslaruchunpageskomponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <Location />
        <h2 className="text-center font-extrabold text-4xl sm:text-5xl text-gray-800 mb-12">
          Jismoniy shaxslar uchun
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {JismoniySHaxslarData.map((JismoniyShaxs, index) => (
            <div
              key={index}
              className="group bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              {/* Rasm */}
              <div className="relative">
                <img
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                  src={JismoniyShaxs.img}
                  alt={JismoniyShaxs.title}
                />
              </div>
              {/* Ma'lumotlar */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {JismoniyShaxs.title}
                </h3>
                <p className="text-gray-600 mb-6">{JismoniyShaxs.description}</p>
                <div className="">
                  <Link
                    to={JismoniyShaxs.url}
                    className="py-3 px-6 text-blue-500"
                  >
                    Batafsil ma'lumot
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Jismoniyshaxslaruchunpageskomponent;
