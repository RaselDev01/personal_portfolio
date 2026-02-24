import { useState, useEffect } from "react";
import { FaPhone } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import logo from "../../assets/Photos/rsl_logo.png";
import MenuList from "../MenuList";
import Container from "./../Container";
import Image from "./../Image";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-nightC shadow-md py-2" : "bg-transparent py-4"
        }`}
      >
        <Container className={"relative"}>
          <div className="text-white flex justify-between items-center px-5 lg:px-10">
            {/* Logo Section */}
            <div className="w-[30%]">
              <Image
                src={logo}
                alt={"logo rsl"}
                className={
                  "max-w-[80px] p-2 rounded-full transform hover:scale-110 duration-300 cursor-pointer"
                }
              />
            </div>

            {/* Contact & Menu Icon */}
            <div className="w-[70%] flex items-center justify-end gap-4 p-2 text-sm font-poppins">
              <div className="hidden md:flex items-center gap-2 border-r pr-5 border-white/20">
                <FaPhone className="text-[18px] text-sunC" />
                <span>+880 1726-960518</span>
              </div>

              <div className="hidden md:flex items-center gap-2">
                <MdEmail className="text-[20px] text-sunC" />
                <span>rasel.ahamed.dev@gmail.com</span>
              </div>

              {/* Hamburger Menu Icon */}
              <div
                onClick={() => setShowMenu(true)}
                className="text-[20px] ml-3 border border-white/30 rounded-full p-1.5 transition-all duration-300 hover:text-black hover:bg-white hover:scale-110 cursor-pointer"
              >
                <GiHamburgerMenu />
              </div>
            </div>
          </div>
        </Container>
      </header>

      {showMenu && <MenuList closeMenu={() => setShowMenu(false)} />}
    </>
  );
};

export default Header;

