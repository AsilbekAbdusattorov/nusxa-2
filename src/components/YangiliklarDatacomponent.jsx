import React from "react";
import { YangiliklarData } from "../data";
import { useEffect } from "react";

const YangiliklarDatacomponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 drop-shadow-lg">
          Barcha Yangiliklar
        </h2>
        <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
          {YangiliklarData.map((yangilik, index) => (
            <div
              key={index}
              className="relative transition duration-300 shadow-lg rounded-3xl overflow-hidden transform hover:scale-105 border border-gray-300"
            >
              <div className="flex flex-col p-6 md:p-8 lg:p-10">
                <div className="relative">
                  <img
                    src={yangilik.img}
                    alt={yangilik.name}
                    className="w-full h-64 object-cover rounded-t-2xl md:h-72 lg:h-80 shadow-md"
                  />
                </div>
                <div className="pt-6 text-center">
                  <h3 className="text-3xl font-semibold mb-4">{yangilik.name}</h3>
                  <p className="text-lg">{yangilik.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YangiliklarDatacomponent;
