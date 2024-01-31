import { useState } from "react";
// react icons
import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toogleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { link: "Beranda", path: "home" },
    { link: "Tentang Kami", path: "feature" },
    { link: "Layanan", path: "about" },
    { link: "Tim", path: "pricing" },
  ];
  return (
    <>
      {/* navigation for desktop device */}
      <nav className="bg-white md:px-14 p-4 max-w-screen-2xl mx-auto text-gray-700 fixed top-0 right-0 left-0">
        <div className="text-lg container mx-auto flex justify-between items-center font-medium">
          <div className=" flex space-x-14 items-center">
            {/* logo */}
            <a
              href="/"
              className="text-2xl font-semibold flex items-center space-x-3"
            >
              <p className="bg-[#44b678] w-7 h-7 rounded"></p>
              <span className="text-[#44b678]">JokiinAja</span>
            </a>
            {/* navitems */}
            <ul className="md:flex space-x-12 hidden text-sm">
              {navItems.map(({ link, path }) => (
                <a
                  key={link}
                  href={path}
                  className="block hover:text-[#44b678]"
                >
                  {link}
                </a>
              ))}
            </ul>
          </div>
          {/* language and sign up */}
          <div className="space-x-12 hidden md:flex items-center">
            <a
              href="/"
              className="hidden lg:flex items-center hover:text-primary"
            >
              <span>Testimoni</span>
            </a>
            <button
              className="bg-[#44b678] py-2 px-4  transition-all text-white duration-300 rounded-md
          hover:text-white hover:bg-[#3c805b] text-md"
            >
              Sign Up
            </button>
          </div>
          {/* menu btn only display mobile */}
          <div className="md:hidden ">
            <button
              onClick={toogleMenu}
              className="text-white focus:outline-none focus:text-gray-300"
            >
              {isMenuOpen ? (
                <FaXmark className="w-6 h-6 text-primary" />
              ) : (
                <FaBars className="w-6 h-6 text-primary" />
              )}
            </button>
          </div>
        </div>
      </nav>
      {/* navigation for mobile device */}
      <div
        className={`space-y-4 px-4 pt-24 pb-5 bg-primary ${
          isMenuOpen ? "block fixed top-0 left-0 right-0" : "hidden"
        }`}
      >
        {navItems.map(({ link, path }) => (
          <a key={link} href={path} className="block hover:text-gray-300">
            {link}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;
