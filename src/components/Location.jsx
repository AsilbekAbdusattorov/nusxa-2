import React from "react";
import { useLocation, Link } from "react-router-dom";

// Sahifalardagi navigatsiya yo'lini ko'rsatish uchun komponent
const Location = () => {
  const location = useLocation(); // Hozirgi sahifa manzilini olish uchun hook
  const pathnames = location.pathname.split("/").filter(Boolean); // Sahifa yo'lini bo'lib, bo'sh qismlarni olib tashlab, massivga aylantirish

  // Matnni bosh harflarga va bo'shliqqa aylantirish funksiyasi
  const formatText = (text) => {
    return text
      .replace(/([a-z])([A-Z])/g, "$1 $2") // Kichik va katta harflar orasiga bo'sh joy qo'shish
      .replace(/-/g, " ") // Chiziqlarni bo'shliqqa almashtirish
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Har bir so'zning bosh harfini katta qilish
  };

  // 'Xizmatlar' sahifasi ko'rsatilishi kerak bo'lgan yo'llar ro'yxati
  const shouldShowServicesPage = [
    "/JismoniyShaxslaruchun",
    "/yuridikshaxslar",
    "/fuqarolikishlar",
    "/jinoiyishlar",
    "/soliqholatlari",
    "/merosholatlari",
    "/arbitrajishlari",
    "/yuridiksoliqholatlari",
    "/korporativishlar",
    "/biznesvositachiligi",
    "/qarzniundurish",
    "/bankrotlikboyichaadvokat",
    "/kochmasmulkboyichaadvokat",
    "/mamuriyishlar",
  ];

  return (
    <>
      {/* Agar pathnames massivida elementlar bo'lsa, navigatsiya yo'li ko'rsatiladi */}
      {pathnames.length > 0 && (
        <ul className="flex justify-center mb-12 gap-2">
          {/* Bosh sahifaga havola */}
          <li>
            <Link className="text-[#ff5050]" to="/">
              Uy
            </Link>
          </li>

          {/* Agar jismoniy yoki yuridik shaxslar bo'lsa, Xizmatlar sahifasini ko'rsatish */}
          {shouldShowServicesPage.includes(location.pathname.toLowerCase()) && (
            <li>
              <Link className="text-[#ff5050]" to="/xizmatlar">
                / Xizmatlar
              </Link>
            </li>
          )}

          {/* Jismoniy shaxslar uchun sahifasiga havola */}
          {(location.pathname.toLowerCase() === "/mamuriyishlar" ||
            location.pathname.toLowerCase() === "/jinoiyishlar" ||
            location.pathname.toLowerCase() === "/soliqholatlari" ||
            location.pathname.toLowerCase() === "/merosholatlari" ||
            location.pathname.toLowerCase() === "/kochmasmulkboyichaadvokat" ||
            location.pathname.toLowerCase() === "/fuqarolikishlar") && (
            <li>
              <Link className="text-[#ff5050]" to="/jismoniyshaxslaruchun">
                / Jismoniy shaxslar uchun
              </Link>
            </li>
          )}

          {/* Yuridik shaxslar uchun sahifasiga havola */}
          {(location.pathname.toLowerCase() === "/arbitrajishlari" ||
            location.pathname.toLowerCase() === "/yuridiksoliqholatlari" ||
            location.pathname.toLowerCase() === "/korporativishlar" ||
            location.pathname.toLowerCase() === "/biznesvositachiligi" ||
            location.pathname.toLowerCase() === "/qarzniundurish" ||
            location.pathname.toLowerCase() === "/bankrotlikboyichaadvokat") && (
            <li>
              <Link className="text-[#ff5050]" to="/YuridikShaxslar">
                / Yuridik shaxslar uchun
              </Link>
            </li>
          )}

          {/* Har bir qism uchun navigatsiya yo'lini shakllantirish */}
          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join("/")}`; // To'liq yo'lni shakllantirish
            const isLast = index === pathnames.length - 1; // So'nggi elementni aniqlash

            return (
              <li key={index}>
                {isLast ? (
                  <span className="text-black/50">
                    / {formatText(value)}
                  </span> // So'nggi element matn sifatida
                ) : (
                  <Link className="text-[#ff5050]" to={to}>
                    {formatText(value)} {/* Qolgan elementlar uchun havola */}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Location;
