import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolledPercentage = (scrollY / docHeight) * 100;

      setScrollProgress(scrolledPercentage);

      if (scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        title="Yuqoriga"
        aria-label="scroll to top"
        className="fixed z-20 bottom-10 right-10 rounded-full bg-transparent transition-all duration-500"
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          backgroundColor: "transparent",
          transition: "background-color 0.5s ease-in-out, border-color 0.5s ease-in-out",
        }}
      >
        {/* Progress Circle */}
        <svg
          className="progress-circle w-16 -ml-0.5 -mt-0.5"
          viewBox="0 0 36 36"
          style={{
            transform: "rotate(-90deg)", // Rotate the progress circle to start from the top
            transition: "stroke-dasharray 0.3s ease-in-out", // Speed up the progress circle animation
          }}
        >
          <path
            className="progress-bar stroke-[#E70A32]"
            strokeDasharray={`${scrollProgress * 1}, 100`}
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            strokeWidth="2"
          />
        </svg>

        {/* Arrow pointing upwards */}
        <svg
          fill="none"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="rotate-90 size-6 sm:size-[26px]"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%) rotate(90deg)",
            transition: "transform 0.3s ease-in-out", // Rotate the arrow back to normal after the progress circle fills
          }}
        >
          <path
            stroke="#E70A32"
            d="M14 19L7 12L14 5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          ></path>
        </svg>
      </button>
    )
  );
};

export default ScrollToTopButton;
