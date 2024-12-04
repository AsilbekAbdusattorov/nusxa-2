import { useState, useEffect, useRef } from "react";
import { accordionData } from "../data";

// AccordionItem Component
const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#f2f8fb] max-w-full mx-auto mb-4">
      <div className="text-center p-4 lg:p-8 border bg-white">
        <button
          className="flex cursor-pointer justify-between w-full p-4 text-left text-lg lg:text-[20px] font-medium focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {question}
          <span className="text-2xl lg:text-4xl">{isOpen ? "↑" : "↓"}</span>
        </button>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[2000px]' : 'max-h-0'}`}
      >
        <div className="text-gray-600 w-full px-4 lg:px-8 py-4 lg:py-6 bg-[#f2f8fb] text-base lg:text-lg cursor-default">
          {answer}
        </div>
      </div>
    </div>
  );
};

// Main Accordion Component
const Accordion = () => {
  const accordionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after the element becomes visible
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the component is visible
      }
    );

    if (accordionRef.current) {
      observer.observe(accordionRef.current);
    }

    return () => {
      if (accordionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div
      ref={accordionRef}
      className={`bg-[#F2F8FB] py-12 lg:py-[121.525px] border-b transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-0">
        <h2 className="text-center font-bold text-3xl lg:text-5xl">Savol - javob</h2>
        <p className="mb-8 lg:mb-12 text-center text-base lg:text-[22px] text-black/50 mt-2">
          Qiyin narsa darhol amalga oshiriladi, <br />imkonsiz narsa biroz ko'proq vaqt oladi.
        </p>
        {accordionData.map((item, index) => (
          <AccordionItem
            key={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default Accordion;
