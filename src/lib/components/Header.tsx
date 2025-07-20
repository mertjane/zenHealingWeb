import { useEffect, useState } from "react";
import { ROUTES } from "../routes/routePaths";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [isAtTop, setIsAtTop] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const isHome = location.pathname === ROUTES.HOME;

  useEffect(() => {
    if (!isHome) return; // only apply scroll logic on homepage

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      // At top
      setIsAtTop(currentScroll === 0);

      // Show/hide logic
      if (currentScroll > lastScrollY && currentScroll > 100) {
        // scrolling down
        setIsVisible(false);
      } else {
        // scrolling up
        setIsVisible(true);
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isHome]);

  const baseClasses =
    "w-full h-[160px] px-20 transition-all duration-500 flex items-center justify-around fixed z-[1005] top-0 left-0";

  const homeClasses = `${
    isAtTop ? "bg-transparent" : "bg-[#717d67] shadow-md backdrop-blur-md"
  } ${
    isVisible ? "translate-y-0" : "-translate-y-full"
  } text-slate-200 h-[100px]`;

  const otherPageClasses = "bg-[#eee6da] text-[#717d67] h-[60vh]";

  return (
    <div
      className={`${baseClasses} ${isHome ? homeClasses : otherPageClasses }`}
    >
      <ul className="flex items-center text-lg text-slate-200 tracking-wide font-light gap-10">
        <Link
          to={ROUTES.HOME}
          className={`cursor-pointer duration-300 ${
            isHome
              ? "text-slate-200 hover:text-slate-400"
              : "text-[#717d67] hover:text-[#5c6a55]"
          }`}
        >
          Home
        </Link>
        <Link
          to={ROUTES.ABOUT_US}
          className={`cursor-pointer duration-300 ${
            isHome
              ? "text-slate-200 hover:text-slate-400"
              : "text-[#717d67] hover:text-[#5c6a55]"
          }`}
        >
          About Us
        </Link>
      </ul>
      <div>
        <Link to={ROUTES.HOME}>
          <img
            src="/assets/images/logoOriginal.png"
            className="object-cover w-[250px] h-[160px]"
            alt="Zen Healing"
          />
        </Link>
      </div>
      <ul className="flex items-center text-lg text-slate-200 tracking-wide font-light gap-10">
        <Link
          to={ROUTES.SESSIONS}
          className={`cursor-pointer duration-300 ${
            isHome
              ? "text-slate-200 hover:text-slate-400"
              : "text-[#717d67] hover:text-[#5c6a55]"
          }`}
        >
          Sessions
        </Link>
        <Link
          to={ROUTES.CONTACT}
          className={`cursor-pointer duration-300 ${
            isHome
              ? "text-slate-200 hover:text-slate-400"
              : "text-[#717d67] hover:text-[#5c6a55]"
          }`}
        >
          Contact
        </Link>
        
      </ul>
    </div>
  );
};

export default Header;
