import React, { useEffect, useState } from "react";
import { sharhlar } from "../data";
import Location from "./Location";
import FikrQoldiringModal from "./FikrQoldiringModal";
const SharhlarPageskomponent = () => {
  // State to handle modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="py-[60.763px] bg-gray-50">
      <Location />
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8">Sharhlar</h2>

        {/* Grid Layout for 3 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sharhlar.map((sharh, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-lg rounded-lg flex flex-col justify-between"
            >
              <p className="text-gray-600 text-sm mb-4">{sharh.title}</p>
              <div className="flex items-center">
                <img
                  src={sharh.img}
                  alt={sharh.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <h4 className="text-xl font-semibold">{sharh.name}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* Button to open the modal */}
        <div className="mt-8 mx-auto max-w-[184.54px] h-[50px] cursor-pointer rounded-[36px] bg-[#4285F4] flex justify-center">
          <button
            className="py-[8px] px-[16px] text-lg text-white flex justify-center items-center"
            onClick={() => setIsModalOpen(true)}  // Open modal on button click
          >
            Fikr qoldiring
          </button>
        </div>

        {/* Modal component */}
        <FikrQoldiringModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}  // Close modal on click
        />
      </div>
    </section>
  );
}

export default SharhlarPageskomponent;
