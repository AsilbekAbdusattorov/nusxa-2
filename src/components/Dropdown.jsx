import React, { useState, useEffect, useRef } from "react";
import MenuItem from "./MenuItem";

const Dropdown = ({ submenus, depthLevel }) => {
  depthLevel = depthLevel ? depthLevel + 1 : 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";

  return (
    <div className="relative">
      <ul
        className={`absolute top-full right-0 z-10 bg-white shadow-lg rounded-lg p-2 ${dropdownClass}`}
      >
        {submenus && Array.isArray(submenus) ? (
          submenus.map((submenu, index) => (
            <h2
              key={index}
              className={`text-gray-900 text-sm border-b border-gray-200 cursor-pointer hover:bg-gray-100 ${
                index === 0 ? "font-bold text-red-500" : ""
              }`}
            >
              <MenuItem items={submenu} depthLevel={depthLevel} />
            </h2>
          ))
        ) : (
          <li className="text-gray-900 text-sm py-3 px-4">No submenus available</li>
        )}
      </ul>
    </div>
  );
};

export default Dropdown;
