import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { GiSplitCross } from "react-icons/gi";

const MenuList = ({ closeMenu }) => {
  const menuItems = [
    "Home",
    "About Me",
    "What I Do",
    "Resume",
    "Portfolio",
    "FAQ",
    "Client Speak",
    "Contact Me",
  ];

  const socials = [
    { name: "Facebook", icon: <FaFacebook />, color: "hover:text-blue-600" },
    { name: "LinkedIn", icon: <FaLinkedin />, color: "hover:text-sky-600" },
    { name: "Instagram", icon: <LuInstagram />, color: "hover:text-pink-600" },
  ];

  return (
    <div className="bg-black/93 h-screen w-full fixed top-0 left-0 z-[100] flex flex-col items-center justify-center">
      {/* Close Button */}
      <div className="absolute top-4 right-8 md:top-5 md:right-14 z-10">
        <div
          onClick={closeMenu}
          className="text-[30px] text-white border border-white/50 rounded-full p-1.5 hover:text-black hover:bg-white hover:rotate-90 cursor-pointer duration-300 transition-all shadow-lg flex items-center justify-center"
        >
          <GiSplitCross />
        </div>
      </div>

      {/* Navigation Links */}
      <ul className="text-center text-white text-[21px] font-poppins font-semibold space-y-5">
        {menuItems.map((item) => (
          <li key={item}>
            <a
              href="#"
              className="hover:text-sunC duration-300 inline-block transition-transform hover:scale-110"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Social Media Icons with Hover Tooltip */}
      <div className="flex justify-center gap-x-8 mt-16">
        {socials.map((social) => (
          <div
            key={social.name}
            className="relative group flex flex-col items-center"
          >
            {/* Tooltip */}
            <div className="absolute -top-12 scale-0 group-hover:scale-100 duration-300 bg-gray-800 text-white text-[12px] px-3 py-1 rounded font-medium shadow-lg pointer-events-none">
              {social.name}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
            </div>

            {/* Icon */}
            <a
              href="#"
              className={`text-white ${social.color} text-[30px] transition-all duration-300 transform group-hover:scale-125`}
            >
              {social.icon}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuList;
