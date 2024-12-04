import { useState, useEffect, useRef } from "react";
import { jismoniyShaxslarData, yuridikShaxslarData } from "../data"; // Data file import
import { Link } from "react-router-dom";

function LegalTabs() {
  const [activeTab, setActiveTab] = useState("jismoniy");
  const sectionRef = useRef(null);

  // IntersectionObserver to detect when the section is in view
  useEffect(() => {
    const sectionElement = sectionRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slideInRight");
          }
        });
      },
      { threshold: 0.5 } // Trigger animation when the element is 50% visible
    );

    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-[#F2F8FB] py-10 px-4 lg:py-[121.525px] lg:px-8 border-b"
    >
      <div className="container mx-auto">
        <div>
          {/* Tabs */}
          <div className="flex flex-col lg:flex-row justify-between mb-6">
            <button
              className={`text-center px-4 lg:px-6 py-2 border-b-2 text-lg lg:text-[28px] w-full font-semibold ${
                activeTab === "jismoniy"
                  ? "border-b-red-500 text-black"
                  : "border-[#e8e8e8] text-[#9f9f9f]"
              }`}
              onClick={() => setActiveTab("jismoniy")}
            >
              <div className="py-4 lg:py-8">Jismoniy shaxslar uchun</div>
            </button>

            <button
              className={`text-center px-4 lg:px-6 py-2 border-b-2 text-lg lg:text-[28px] w-full font-semibold ${
                activeTab === "yuridik"
                  ? "border-b-red-500 text-black"
                  : "border-[#e8e8e8] text-[#9f9f9f]"
              }`}
              onClick={() => setActiveTab("yuridik")}
            >
              <div className="py-4 lg:py-8">Yuridik shaxslar uchun</div>
            </button>
          </div>

          {/* Content */}
          {activeTab === "jismoniy" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mx-4 lg:mx-8 mt-4 lg:mt-8 mb-8 lg:mb-12">
              {jismoniyShaxslarData.map((item, index) => (
                <Link
                  to={item.url}
                  key={index}
                  className="p-6 bg-white hover:bg-[#E8E8E8] text-center py-6 lg:py-8 px-4 rounded-lg shadow-md"
                >
                  <div className="flex justify-center items-center cursor-pointer mb-4 lg:mb-6">
                    <div className="border-4 lg:border-[6px] flex justify-center items-center rounded-full border-[#ff5050] w-[80px] h-[80px] lg:w-[120px] lg:h-[120px] shadow-[0_0_10px_4px_rgba(239,215,204,0.6)] lg:shadow-[0_0_10px_6px_rgba(239,215,204,0.6)]">
                      <div className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]">
                        <img className="w-full h-full" src={item.icon} alt="tap" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-base lg:text-lg font-semibold mb-1 lg:mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm lg:text-base">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          )}

          {activeTab === "yuridik" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mx-4 lg:mx-8 mt-4 lg:mt-8 mb-8 lg:mb-12">
              {yuridikShaxslarData.map((item, index) => (
                <Link
                  to={item.url}
                  key={index}
                  className="p-6 bg-white hover:bg-[#E8E8E8] text-center py-6 lg:py-8 px-4 rounded-lg shadow-md"
                >
                  <div className="flex justify-center items-center cursor-pointer mb-4 lg:mb-6">
                    <div className="border-4 lg:border-[6px] flex justify-center items-center rounded-full border-[#ff5050] w-[80px] h-[80px] lg:w-[120px] lg:h-[120px] shadow-[0_0_10px_4px_rgba(239,215,204,0.6)] lg:shadow-[0_0_10px_6px_rgba(239,215,204,0.6)]">
                      <div className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]">
                        <img className="w-full h-full" src={item.icon} alt="tap" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-base lg:text-lg font-semibold mb-1 lg:mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm lg:text-base">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LegalTabs;
