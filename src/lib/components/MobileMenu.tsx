import { Link } from "react-router-dom";
import { ROUTES } from "../routes/routePaths";

type Props = {
  isOpen: boolean;
  toggleMenu: () => void;
};

const MobileMenu = ({ isOpen, toggleMenu }: Props) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-full z-[1002] bg-[#eee6da] transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-6 flex flex-col gap-6">
        <nav className="flex flex-col mt-24 items-center gap-6 text-xl text-[#5c6a55] font-thin">
          <Link onClick={toggleMenu} to={ROUTES.HOME}>
            Home
          </Link>
          <Link onClick={toggleMenu} to={ROUTES.ABOUT_US}>
            About
          </Link>
          <Link onClick={toggleMenu} to={ROUTES.SESSIONS}>
            Sessions
          </Link>
          <Link onClick={toggleMenu} to={ROUTES.CONTACT}>
            Contact
          </Link>
          <a
            onClick={toggleMenu}
            href={ROUTES.BOOK_NOW}
            target="_blank"
            className="mt-10 cursor-pointer px-8 uppercase text-md tracking-wider border duration-300 py-2 border-[#5c6a55] text-[#5c6a55] hover:bg-[#5c6a55] hover:text-white text-sm"
          >
            Book now
          </a>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
