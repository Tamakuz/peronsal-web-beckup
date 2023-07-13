import { Link } from "react-scroll";
import { useState} from "react";
import { IconContext } from "react-icons";
import { RiMailSendLine } from "react-icons/ri";
import { Tilt } from "react-tilt";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const outOptions = {
    reverse: true,
    max: 30, // max tilt rotation (degrees)
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    perspective: 500,
    glare: true,
    speed: 500, // Speed of the enter/exit transition
  };

  const inOptions = {
    reverse: true,
    max: 20, // max tilt rotation (degrees)
    scale: 1,
    speed: 500, // Speed of the enter/exit transition
  };

  return (
    <nav
      className={`${
        isMenuOpen ? "bg-[#212529] h-[50px]" : "bg-transparent backdrop-blur-sm"
      } z-[9999] duration-100 fixed h-[80px] w-full pl-[10%] pr-[10%] flex justify-between items-center`}
    >
      <div>
        <h1 className="font-lilitaOne text-3xl font-bold text-blue-500 cursor-pointer">
          JOVAN TAMA
        </h1>
      </div>
      <div className="lg:flex gap-5 text-xl font-normal hidden">
        <Link
          to="home"
          spy
          smooth
          className="text-gray-300 hover:text-blue-500 cursor-pointer duration-300"
        >
          Home
        </Link>
        <Link
          to="about"
          spy
          smooth
          className="text-gray-300 hover:text-blue-500 cursor-pointer duration-300"
        >
          About Me
        </Link>
        <Link
          to="portfolio"
          spy
          smooth
          className="text-gray-300 hover:text-blue-500 cursor-pointer duration-300"
        >
          Portfolio
        </Link>
        <Link
          to="contact"
          spy
          smooth
          className="text-gray-300 hover:text-blue-500 cursor-pointer duration-300"
        >
          Contact
        </Link>
      </div>
      <div className="flex items-center gap-3 text-gray-300">
        <Tilt
          options={outOptions}
          className="hidden lg:flex items-center duration-200 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
        >
          <Tilt options={inOptions} className="w-full h-full flex items-center cursor-pointer">
            <IconContext.Provider value={{ className: "react-icon" }}>
              <span className="mr-3">Hire Me</span>
              <RiMailSendLine />
            </IconContext.Provider>
          </Tilt>
        </Tilt>
      </div>

      {/* Responsive Menu */}
      <div className="lg:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="focus:outline-none text-gray-300 hover:text-blue-500 cursor-pointer duration-300"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`${
            isMenuOpen ? "block bg-[#212529] duration-300" : "hidden"
          }  absolute w-full top-[50px] right-0 pr-[10%] pl-[10%] py-2 shadow-lg`}
        >
          <Link
            to="home"
            spy
            smooth
            onClick={toggleMenu}
            className="block px-4 py-2 text-gray-200 hover:text-[#212529] hover:bg-gray-200 rounded cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            spy
            smooth
            onClick={toggleMenu}
            className="block px-4 py-2 text-gray-200 hover:text-[#212529] hover:bg-gray-200 rounded cursor-pointer"
          >
            About Me
          </Link>
          <Link
            to="portfolio"
            spy
            smooth
            onClick={toggleMenu}
            className="block px-4 py-2 text-gray-200 hover:text-[#212529] hover:bg-gray-200 rounded cursor-pointer"
          >
            Portfolio
          </Link>
          <Link
            to="contact"
            spy
            smooth
            onClick={toggleMenu}
            className="block px-4 py-2 text-gray-200 hover:text-[#212529] hover:bg-gray-200 rounded cursor-pointer"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
