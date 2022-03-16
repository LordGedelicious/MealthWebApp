import { useState } from "react";
import { Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Logo from "../images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
    
  return (
    <>
      <nav className="bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">  
          <div className="flex items-center justify-between h-[6rem]">
            <div className="w-full flex items-center justify-between">
              {/* LOGO */}
              <div className="flex-shrink-0">
                <a href="/"><img className="h-[6rem]" src={Logo} alt="Logo" /></a>
              </div>
              {/* NAVBAR ITEMS */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4 text-[1.125rem] font-[400] text-black">
                  <a href="/" className=" hover:font-[700] px-3 py-2 rounded-md">HOME</a>
                  <p className="hover:font-[700] px-3 py-2 rounded-md">OUR FEATURES &nbsp;&nbsp;<FontAwesomeIcon icon={faCaretDown} /></p>
                  <p className="hover:font-[700] px-3 py-2 rounded-md">GET TO KNOW &nbsp;&nbsp;<FontAwesomeIcon icon={faCaretDown} /></p>
                </div>
              </div>
            </div>
            {/* BURGER BUTTON */}
            <div className="mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-transparent inline-flex items-center justify-center p-[1rem] rounded-sm text-[1.5rem] text-black hover:font-[700] hover:bg-[#D2D2D2] focus:font-[700]"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (<FontAwesomeIcon icon={faBars} />) : (<FontAwesomeIcon icon={faX} />)}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU */}
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-[1.125rem] font-[400] text-black">
                <a href="/" className="hover:font-[700] hover:bg-[#D2D2D2] block px-3 py-4 rounded-sm">HOME</a>
                <p className="hover:font-[700] hover:bg-[#D2D2D2] block px-3 py-4 rounded-sm">OUR FEATURES &nbsp;&nbsp;<FontAwesomeIcon icon={faCaretDown} /></p>
                <p className="hover:font-[700] hover:bg-[#D2D2D2] block px-3 py-4 rounded-sm">GET TO KNOW &nbsp;&nbsp;<FontAwesomeIcon icon={faCaretDown} /></p>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </>
  );
};

export default Navbar;
