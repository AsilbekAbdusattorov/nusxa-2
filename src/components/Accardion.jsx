import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import moslegallogo from "../img/mos-legal-services-logo.webp";
import HeaderModal from "./HeaderModal";

// const SubDropdownItem = ({ links }) => {
//   return (
//     <div className="absolute top-full mt-2 left-0 w-full rounded-lg shadow-lg mb-20">
//       {links.map((link, index) => (
//         <Link
//           key={index}
//           to={link.to}
//           className="block py-2 px-4 text-gray-600 hover:text-red-500 hover:bg-gray-100"
//         >
//           {link.text}
//         </Link>
//       ))}
//     </div>
//   );
// };

// const InnerDropdownItem = ({ title, titleLink, subLinks }) => {
//   const [isSubOpen, setIsSubOpen] = useState(false);

//   const handleToggle = () => {
//     setIsSubOpen((prev) => !prev);
//   };

//   return (
//     <div className="p-2 hover:bg-gray-100 rounded-md relative">
//       <div className="flex items-center justify-between">
//         <Link
//           to={titleLink}
//           className="font-semibold text-gray-600 hover:text-red-500"
//         >
//           {title}
//         </Link>
//         <button
//           onClick={handleToggle}
//           className="bg-gray-400 text-white border py-1 px-2 rounded-full"
//         >
//           {isSubOpen ? "▲" : "▼"}
//         </button>
//       </div>
//       {isSubOpen && subLinks && <SubDropdownItem links={subLinks} />}
//     </div>
//   );
// };

const DropdownItem = ({ link, children, isToggleable, screenWidth }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    if (screenWidth < 1024 && isToggleable) {
      setIsOpen((prev) => !prev);
    }
  };

  return (
    <div className="relative">
      <div className="flex items-center">
        <NavLink
          to={link.to}
          className={({ isActive }) =>
            `font-semibold text-gray-800 relative border-b-2 ${
              isActive && link.to !== "/"
                ? "border-[#ff5050] text-red-500"
                : "border-transparent"
            } hover:border-[#ff5050] hover:text-[#ff5050] px-4 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#ff5050] after:transition-all after:duration-700 hover:after:w-full`
          }
        >
          {link.text}
        </NavLink>

        {screenWidth < 1024 && isToggleable && (
          <button
            onClick={handleToggle}
            className="bg-gray-400 text-white border py-1 px-2 rounded-full"
          >
            {isOpen ? "▲" : "▼"}
          </button>
        )}
      </div>
      {isOpen && (
        <div className="absolute top-full mt-2 left-0 w-52 bg-white rounded-lg shadow-lg z-10">
          {children}
        </div>
      )}
    </div>
  );
};

const Accardion = () => {
  const [isXizmatlarOpen, setIsXizmatlarOpen] = useState(false);
  const [isJismoniyShaxslarOpen, setIsJismoniyShaxslarOpen] = useState(false);
  const [isYuridikShaxslarOpen, setIsYuridikShaxslarOpen] = useState(false);

  const toggleXizmatlarDropdown = () => {
    setIsXizmatlarOpen(!isXizmatlarOpen);
  };

  const toggleJismoniyShaxslarDropdown = () => {
    setIsJismoniyShaxslarOpen(!isJismoniyShaxslarOpen);
  };

  const toggleYuridikShaxslarDropdown = () => {
    setIsYuridikShaxslarOpen(!isYuridikShaxslarOpen);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [showSubmenu, setShowSubmenu] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const handleMouseEnter = (submenu) => {
    setActiveSubmenu(submenu);
  };

  const handleMouseLeave = () => {
    setActiveSubmenu(null);
  };

  return (
    <header className="py-5 border-b fixed bg-white pr-11 right-0 left-0 z-20">
      <div className="container flex items-center justify-between px-4 md:px-8">
        <div
          onClick={openModal}
          className="flex items-center gap-2 text-[#ff5050] text-xl font-medium cursor-pointer hover:text-black lg:order-3"
        >
          <p>Biz bilan bog'lanish</p>
          <svg
            className="fill-current w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 122.88 88.86"
          >
            <title>email</title>
            <path d="M7.05,0H115.83a7.07,7.07,0,0,1,7,7.05V81.81a7,7,0,0,1-1.22,4,2.78,2.78,0,0,1-.66,1,2.62,2.62,0,0,1-.66.46,7,7,0,0,1-4.51,1.65H7.05a7.07,7.07,0,0,1-7-7V7.05A7.07,7.07,0,0,1,7.05,0Zm-.3,78.84L43.53,40.62,6.75,9.54v69.3ZM49.07,45.39,9.77,83.45h103L75.22,45.39l-11,9.21h0a2.7,2.7,0,0,1-3.45,0L49.07,45.39Zm31.6-4.84,35.46,38.6V9.2L80.67,40.55ZM10.21,5.41,62.39,47.7,112.27,5.41Z" />
          </svg>
        </div>

        {/* Desktop Menu */}

        <div className="hidden lg:flex lg:order-2 xl:flex xl:space-x-6 items-center">
          {/* Asosiy sahifalar */}
          <Link to="/">
            <img className="w-14 rounded-full" src={moslegallogo} alt="logo" />
          </Link>
          <DropdownItem link={{ to: "/", text: "Uy" }} />
          <DropdownItem
            link={{ to: "/Kompaniyahaqida", text: "Kompaniya haqida" }}
          />

          {/* Xizmatlar Dropdown */}
          <div className="relative group">
            <DropdownItem link={{ to: "/Xizmatlar", text: "Xizmatlar" }} />

            {/* Xizmatlar uchun Dropdown */}
            <div className="absolute left-0 hidden group-hover:block bg-white shadow-lg rounded-md p-4 w-64 border">
              {/* Jismoniy shaxslar uchun */}
              <div className="relative hover-trigger">
                <Link
                  to="/Jismoniyshaxslaruchun"
                  className="block text-gray-700 font-semibold hover:text-[#ff5050]"
                >
                  Jismoniy shaxslar uchun
                </Link>
                <div className="absolute left-60 bottom-10 hidden hover-target bg-white shadow-lg rounded-md p-2 w-48">
                  <ul className="space-y-2">
                    <li className="border-b rounded-md">
                      <Link
                        to="/Mamuriyishlar"
                        className="block text-gray-700 hover:text-[#ff5050]"
                      >
                        Ma'muriy ishlar
                      </Link>
                    </li>
                    <li className="border-b rounded-md">
                      <Link
                        to="/Fuqarolikishlar"
                        className="block text-gray-700 hover:text-[#ff5050]"
                      >
                        Fuqarolik ishlar
                      </Link>
                    </li>
                    <li className="border-b rounded-md">
                      <Link
                        to="/Jinoiyishlar"
                        className="block text-gray-700 hover:text-[#ff5050]"
                      >
                        Jinoiy ishlar
                      </Link>
                    </li>
                    <li className="border-b rounded-md">
                      <Link
                        to="/Soliqholatlari"
                        className="block text-gray-700 hover:text-[#ff5050]"
                      >
                        Soliq holatlari
                      </Link>
                    </li>
                    <li className="border-b rounded-md">
                      <Link
                        to="/Merosholatlari"
                        className="block text-gray-700 hover:text-[#ff5050]"
                      >
                        Meros holatlari
                      </Link>
                    </li>
                    <li className="border-b rounded-md">
                      <Link
                        to="/Kochmasmulk"
                        className="block text-gray-700 hover:text-[#ff5050]"
                      >
                        Ko'chmas mulk bo'yicha advokat
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <hr />
              {/* Yuridik shaxslar uchun */}
              <div className="relative hover-trigger mt-2">
                <Link
                  to="/Yuridikshaxslar"
                  className="block text-gray-700 font-semibold hover:text-[#ff5050]"
                >
                  Yuridik shaxslar uchun
                </Link>
                <div className="absolute left-60 bottom-10 hidden hover-target bg-white shadow-lg rounded-md p-2 w-48">
                  <ul className="space-y-2">
                    <li className="border-b rounded-md">
                      <Link
                        to="/Arbitrajishlari"
                        className="block text-gray-700 hover:text-[#ff5050]"
                      >
                        Arbitraj ishlar
                      </Link>
                    </li>
                    <li className="border-b rounded-md">
                      <Link
                        to="/YuridikSoliqholatlari"
                        className="block text-gray-700 hover:text-[#ff5050]"
                      >
                        Soliq holatlari
                      </Link>
                    </li>
                    <li className="border-b rounded-md">
                      <Link
                        to="/Korporativishlar"
                        className="block text-gray-700 hover:text-[#ff5050]"
                      >
                        Korporativ ishlar
                      </Link>
                    </li>
                    <li className="border-b rounded-md">
                      <Link
                        to="/Biznesvositachiligi"
                        className="block text-gray-700 hover:text-[#ff5050]"
                      >
                        Biznes vositachiligi
                      </Link>
                    </li>
                    <li className="border-b rounded-md">
                      <Link
                        to="/Qarzniundurish"
                        className="block text-gray-700 hover:text-[#ff5050]"
                      >
                        Qarzni undirish
                      </Link>
                    </li>
                    <li className="border-b rounded-md">
                      <Link
                        to="/Bankrotlikboyichaadvokat"
                        className="block text-gray-700 hover:text-[#ff5050]"
                      >
                        Bankrotlik bo'yicha advokat
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Qolgan sahifalar */}
          <DropdownItem link={{ to: "/Sharhlar", text: "Sharhlar" }} />
          <DropdownItem
            link={{ to: "/SavolJavoblar", text: "Savollar va javoblar" }}
          />
          <DropdownItem link={{ to: "/Yangiliklar", text: "Yangiliklar" }} />
          <DropdownItem link={{ to: "/Kontaktlar", text: "Kontaktlar" }} />
        </div>
        {/* Mobile Menu */}
        <div className="lg:hidden flex items-center">
          {/* Menyu tugmasi */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 hover:text-red-500 font-semibold px-4 py-2"
          >
            {isMenuOpen ? (
              <span className="text-2xl font-bold">X</span>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>

          {/* Mobil menyu */}
          {isMenuOpen && (
            <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-30 p-6 transition-transform duration-300 overflow-y-auto">
              {/* Yopish tugmasi */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-red-500 text-2xl font-bold float-right hover:rotate-90 transition-transform duration-500"
              >
                X
              </button>
              <nav className="mt-8 space-y-6">
                <Link onClick={() => setIsMenuOpen(false)}
                  to="/"
                  className="block text-gray-800 hover:text-red-500 text-xl font-semibold"
                >
                  Uy
                </Link>
                <Link  onClick={() => setIsMenuOpen(false)}
                  to="/Kompaniyahaqida"
                  className="block text-gray-800 hover:text-red-500 text-xl font-semibold"
                >
                  Kompaniya haqida
                </Link>

                {/* Xizmatlar */}
                <div>
                  <div className="flex items-center">
                    <Link  onClick={() => setIsMenuOpen(false)} to='/Xizmatlar' className="block text-gray-800 text-xl font-semibold flex-grow">
                      Xizmatlar
                    </Link>
                    <button
                      onClick={toggleXizmatlarDropdown}
                      className="text-gray-600 hover:text-red-500"
                    >
                      {isXizmatlarOpen ? "▲" : "▼"}
                    </button>
                  </div>

                  {isXizmatlarOpen && (
                    <div className="ml-4 space-y-4 mt-2">
                      {/* Jismoniy shaxslar uchun */}
                      <div className="flex items-center">
                        <Link  onClick={() => setIsMenuOpen(false)}
                          to="/JismoniyShaxslaruchun"
                          className="block text-gray-600 hover:text-red-500 text-lg flex-grow"
                        >
                          Jismoniy shaxslar uchun
                        </Link>
                        <button
                          onClick={toggleJismoniyShaxslarDropdown}
                          className="text-gray-600 hover:text-red-500"
                        >
                          {isJismoniyShaxslarOpen ? "▲" : "▼"}
                        </button>
                      </div>
                      {isJismoniyShaxslarOpen && (
                        <div className="ml-6 space-y-2 mt-2">
                          <Link  onClick={() => setIsMenuOpen(false)}
                            to="/Mamuriyishlar"
                            className="block text-gray-600 hover:text-red-500 text-lg mb-5"
                          >
                            Ma'muriy ishlar
                          </Link>
                          <Link  onClick={() => setIsMenuOpen(false)}
                            to="/Fuqarolikishlar"
                            className="block text-gray-600 hover:text-red-500 text-lg mb-5"
                          >
                            Fuqarolik ishlar
                          </Link>
                          <Link  onClick={() => setIsMenuOpen(false)}
                            to="/Jinoiyishlar"
                            className="block text-gray-600 hover:text-red-500 text-lg mb-5"
                          >
                            Jinoiy ishlar
                          </Link>
                          <Link  onClick={() => setIsMenuOpen(false)}
                            to="/Soliqholatlari"
                            className="block text-gray-600 hover:text-red-500 text-lg mb-5"
                          >
                            Soliq holatlari
                          </Link>
                          <Link  onClick={() => setIsMenuOpen(false)}
                            to="/Merosholatlari"
                            className="block text-gray-600 hover:text-red-500 text-lg mb-5"
                          >
                            Meros holatlari
                          </Link>
                          <Link  onClick={() => setIsMenuOpen(false)}
                            to="/KochmasMulkBoyichaAdvokat"
                            className="block text-gray-600 hover:text-red-500 text-lg"
                          >
                            Ko'chmas mulk bo'yicha advokat
                          </Link>
                        </div>
                      )}

                      {/* Yuridik shaxslar uchun */}
                      <div className="flex items-center">
                        <Link  onClick={() => setIsMenuOpen(false)}
                          to="/YuridikShaxslar"
                          className="block text-gray-600 hover:text-red-500 text-lg flex-grow"
                        >
                          Yuridik shaxslar uchun
                        </Link>
                        <button
                          onClick={toggleYuridikShaxslarDropdown}
                          className="text-gray-600 hover:text-red-500"
                        >
                          {isYuridikShaxslarOpen ? "▲" : "▼"}
                        </button>
                      </div>
                      {isYuridikShaxslarOpen && (
                        <div className="ml-6 space-y-2 mt-2">
                          <Link  onClick={() => setIsMenuOpen(false)}
                            to="/Arbitrajishlari"
                            className="block text-gray-600 hover:text-red-500 text-lg mb-5"
                          >
                            Arbitraj ishlar
                          </Link>
                          <Link  onClick={() => setIsMenuOpen(false)}
                            to="/YuridikSoliqholatlari"
                            className="block text-gray-600 hover:text-red-500 text-lg mb-5"
                          >
                            Soliq holatlari (Yuridik shaxslar)
                          </Link>
                          <Link  onClick={() => setIsMenuOpen(false)}
                            to="/Korporativishlar"
                            className="block text-gray-600 hover:text-red-500 text-lg mb-5"
                          >
                            Korporativ ishlar
                          </Link>
                          <Link  onClick={() => setIsMenuOpen(false)}
                            to="/Biznesvositachiligi"
                            className="block text-gray-600 hover:text-red-500 text-lg mb-5"
                          >
                            Biznes vositachiligi
                          </Link>
                          <Link  onClick={() => setIsMenuOpen(false)}
                            to="/Qarzniundurish"
                            className="block text-gray-600 hover:text-red-500 text-lg mb-5"
                          >
                            Qarzni undirish
                          </Link>
                          <Link  onClick={() => setIsMenuOpen(false)}
                            to="/Bankrotlikboyichaadvokat"
                            className="block text-gray-600 hover:text-red-500 text-lg"
                          >
                            Bankrotlik bo'yicha advokat
                          </Link>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <Link  onClick={() => setIsMenuOpen(false)}
                  to="/Sharhlar"
                  className="block text-gray-800 hover:text-red-500 text-xl font-semibold"
                >
                  Sharhlar
                </Link>
                <Link  onClick={() => setIsMenuOpen(false)}
                  to="/SavolJavoblar"
                  className="block text-gray-800 hover:text-red-500 text-xl font-semibold"
                >
                  Savollar va javoblar
                </Link>
                <Link  onClick={() => setIsMenuOpen(false)}
                  to="/Yangiliklar"
                  className="block text-gray-800 hover:text-red-500 text-xl font-semibold"
                >
                  Yangiliklar
                </Link>
                <Link  onClick={() => setIsMenuOpen(false)} 
                  to="/Kontaktlar"
                  className="block text-gray-800 hover:text-red-500 text-xl font-semibold"
                >
                  Kontaktlar
                </Link>
              </nav>
            </div>
          )}
        </div>
      </div>
      {isModalOpen && <HeaderModal closeModal={closeModal} />}
    </header>
  );
};

export default Accardion;
