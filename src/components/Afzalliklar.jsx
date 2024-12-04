import React, { useState, useEffect } from "react";
import { Cards } from "../data.js";

const Card = ({ title, description, image }) => {
  return (
    <div className="relative flex items-center justify-center p-6 shadow-lg group min-w-[342px] h-[410px] lg:h-[500px] sm:min-w-0">
      <img
        src={image}
        alt={title}
        className="absolute top-0 left-0 h-full w-full object-cover"
      />
      <div className="absolute top-0 left-0 h-full w-full bg-black opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
      <div className="relative z-10 py-8 px-8 text-center text-white">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="w-16 h-1 bg-red-500 mb-4 mx-auto"></div>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

const CardSection = () => {
  const [isVisible, setIsVisible] = useState(false); // Track visibility for animation

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Element is in view, animate in
        } else {
          setIsVisible(false); // Element is out of view, animate out
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is in view
    );

    const section = document.querySelector("#card-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <div
      id="card-section"
      className={`py-12 lg:py-[121.525px] transition-all duration-700 ${
        isVisible ? "animate-slideInTop" : "opacity-0"
      }`}
    >
      <div className="container lg:px-0">
        <h2 className="text-center text-3xl lg:text-5xl font-bold">Afzalliklar</h2>
        <p className="text-center text-lg lg:text-[22px] text-[#5E5E82] mt-4">
          Qiyin narsa darhol amalga oshiriladi, <br className="hidden lg:block" />
          imkonsiz narsa biroz ko'proq vaqt oladi.
        </p>
        <div className="flex gap-8 overflow-x-auto lg:overflow-hidden lg:grid lg:grid-cols-2 xl:flex xl:flex-row py-12">
          {Cards.slice(0, 2).map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardSection;
