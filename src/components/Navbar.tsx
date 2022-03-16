import { useState } from "react";
import { Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Logo from "../images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
    
  return (
    <>
      <nav className="bg-[#FFFFFF] z-50 absolute w-full">
        <div className="w-full md:pl-[3rem] md:pr-[5rem]">  
          <div className="flex items-center justify-between h-[6rem]">
            <div className="w-full flex items-center justify-between">
              {/* LOGO */}
              <div className="flex-shrink-0">
                <a href="/"><img className="h-[6rem]" src={Logo} alt="Logo" /></a>
              </div>
              {/* NAVBAR ITEMS */}
              <div className="hidden md:block">
                <div className="flex items-baseline space-x-[4.5rem] text-[1.125rem] font-[400] text-black">
                  <a href="/" className=" hover:font-[700] px-3 py-2">HOME</a>
                  <a href="/" className=" hover:font-[700] px-3 py-2">EVENTS</a>
                  <div className="group  px-3 py-2 relative">
                    <p className="hover:font-[700] hover:cursor-pointer">OUR FEATURES &nbsp;&nbsp;<FontAwesomeIcon icon={faCaretDown} /></p>
                    <div className="absolute hidden pt-2 w-64 -left-1 group-hover:block bg-[#FFFFFF]">
                      <a className="hover:bg-[#D2D2D2] hover:font-[700] py-2 px-4 block whitespace-no-wrap" href="/">FOOD SCANNER</a>
                      <a className="hover:bg-[#D2D2D2] hover:font-[700] py-2 px-4 block whitespace-no-wrap" href="/">CURRENT CONDITION</a>
                      <a className="hover:bg-[#D2D2D2] hover:font-[700] py-2 px-4 block whitespace-no-wrap" href="/">LIBRARY</a>
                      <a className="hover:bg-[#D2D2D2] hover:font-[700] py-2 px-4 block whitespace-no-wrap" href="/">COUNSELING</a>
                    </div>
                  </div>
                  <div className="group  px-3 py-2 relative">
                    <p className="hover:font-[700] hover:cursor-pointer">GET TO KNOW &nbsp;&nbsp;<FontAwesomeIcon icon={faCaretDown} /></p>
                    <div className="absolute hidden pt-2 w-[17rem] -left-1 group-hover:block bg-[#FFFFFF]">
                      <a className="hover:bg-[#D2D2D2] hover:font-[700] py-2 px-4 block whitespace-no-wrap" href="/About">ABOUT US</a>
                      <a className="hover:bg-[#D2D2D2] hover:font-[700] py-2 px-4 block whitespace-no-wrap" href="/TermsAndConditions">TERMS AND CONDITIONS</a>
                      <a className="hover:bg-[#D2D2D2] hover:font-[700] py-2 px-4 block whitespace-no-wrap" href="/PrivacyPolicy">PRIVACY POLICY</a>
                    </div>
                  </div>
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
                <div className="group px-3 py-4 rounded-sm relative">
                  <p className="hover:font-[700] hover:cursor-pointer">OUR FEATURES &nbsp;&nbsp;<FontAwesomeIcon icon={faCaretDown} /></p>
                  <div className="w-full hidden pt-4 group-hover:block bg-[#FFFFFF]">
                    <a className="hover:bg-[#D2D2D2] hover:font-[700] py-2 px-4 block whitespace-no-wrap" href="/">FOOD SCANNER</a>
                    <a className="hover:bg-[#D2D2D2] hover:font-[700] py-2 px-4 block whitespace-no-wrap" href="/">CURRENT CONDITION</a>
                    <a className="hover:bg-[#D2D2D2] hover:font-[700] py-2 px-4 block whitespace-no-wrap" href="/">LIBRARY</a>
                    <a className="hover:bg-[#D2D2D2] hover:font-[700] py-2 px-4 block whitespace-no-wrap" href="/">COUNSELING</a>
                  </div>
                </div>
                <div className="group px-3 py-4 rounded-sm relative">
                  <p className="hover:font-[700] hover:cursor-pointer">GET TO KNOW &nbsp;&nbsp;<FontAwesomeIcon icon={faCaretDown} /></p>
                  <div className="w-full hidden pt-4 group-hover:block bg-[#FFFFFF]">
                    <a className="hover:bg-[#D2D2D2] hover:font-[700] py-2 px-4 block whitespace-no-wrap" href="/About">ABOUT US</a>
                    <a className="hover:bg-[#D2D2D2] hover:font-[700] py-2 px-4 block whitespace-no-wrap" href="/TermsAndConditions">TERMS AND CONDITIONS</a>
                    <a className="hover:bg-[#D2D2D2] hover:font-[700] py-2 px-4 block whitespace-no-wrap" href="/PrivacyPolicy">PRIVACY POLICY</a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </>
  );
};

export default Navbar;
