import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import MobileMenu from "./MobileMenu";


const MobileHeader = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  
  return (
    <>
      <div className="absolute top-0 left-0 bg-transparent z-[1003] w-full  p-6 flex items-center justify-center">
        <img
          src="/assets/images/logoOriginal.png"
          className={`relative z-[1002] w-[150px] h-[100px] object-cover ${
            openMenu ? "hidden" : "block"
          }`}
          alt="Zen Logo"
        />

        <HamburgerMenu
          isOpen={openMenu}
          toggleMenu={() => setOpenMenu(!openMenu)}
        />
      </div>
      <MobileMenu isOpen={openMenu} toggleMenu={() => setOpenMenu(!openMenu)} />
    </>
  );
};

export default MobileHeader;
