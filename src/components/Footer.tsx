import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedin, faTiktok } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return (

    <div className="bg-sorange text-white text-left flex flex-col lg:flex-row gap-y-[2rem] px-[2rem] lg:px-[4.375rem] py-[2.625rem]">
      {/* LOGO, TAGLINE, SOCIAL MEDIA */}
      <div className="lg:flex-basis-1/6">
        <p className="font-[700] text-[1.5rem] pb-[0.5rem]">m e a l t h</p>
        <p className="font-[500] pb-[1rem]">“it's everyone's right to be healthy mentally and physically”</p>
        <div className="flex flex-row pb-[1.3rem] justify-between sm:justify-start sm:gap-[1.5rem] lg:gap-[2.5rem]">
          <div><a href="http://www.instagram.com/mealth_id"><FontAwesomeIcon icon={faInstagram} className="bg-red w-[28px] p-[10px] text-[28px] rounded-full hover:opacity-70"/></a></div>
          <div><a href="https://www.linkedin.com/company/mealthcommunity/"><FontAwesomeIcon icon={faLinkedin} className="bg-red w-[28px] p-[10px] text-[28px] rounded-full hover:opacity-70"/></a></div>
          <div><a href="https://www.tiktok.com/@mealthid"><FontAwesomeIcon icon={faTiktok} className="bg-red w-[28px] p-[10px] text-[28px] rounded-full hover:opacity-70"/></a></div>
          <div><a href="mailto:mealthcommunity@gmail.com"><FontAwesomeIcon icon={faEnvelope} className="bg-red w-[28px] p-[10px] text-[28px] rounded-full hover:opacity-70"/></a></div>
        </div>
        <p className="font-[500]">© 2022</p>
      </div>

      {/* OUR FEATURES */}
      <div className="divide-y-2 lg:ml-[9rem] lg:basis-3/6">
        <p className="font-[700] text-[1.5rem] pb-[0.5rem]">OUR FEATURES</p>
        <div className="text-[1.125rem] font-[700] pt-[1.3rem]">
          <div className="grid lg:grid-cols-2">
            <div className="grid lg:grid-rows-2">
              {/* HARUS DITAMBAH OnClick={panggil fungsi popup} */}
              <a href="/" className="mb-[1.5rem] block hover:underline hover:transition ease-in-out delay-150">FOOD SCANNER</a> 
              <a href="/Konsultasi" className="mb-[1.5rem] block hover:underline hover:transition ease-in-out delay-150">COUNSELING</a>
            </div>
            <div className="grid lg:grid-rows-2">
              {/* HARUS DITAMBAH OnClick={panggil fungsi popup} */}

              <a href="/" className="mb-[1.5rem] block hover:underline hover:transition ease-in-out delay-150">CURRENT CONDITION</a>
              <a href="/" className="mb-[1.5rem] block hover:underline hover:transition ease-in-out delay-150">LIBRARY</a>
            </div>
          </div>
        </div>
      </div>

      {/* GET TO KNOW */}
      <div className="divide-y-2 lg:ml-[7rem] lg:basis-2/6">
        <p className="font-[700] text-[1.5rem] pb-[0.5rem]">GET TO KNOW</p>
        <div className="text-[1.125rem] font-[700] pt-[1.3rem]">
          <a href="/About" className="mb-[1.5rem] block hover:underline hover:transition ease-in-out delay-150">ABOUT US</a>
          <a href="/TermsAndConditions" className="mb-[1.5rem] block hover:underline hover:transition ease-in-out delay-150">TERMS AND CONDITIONS</a>
          <a href="/PrivacyPolicy" className="mb-[1.5rem] block hover:underline hover:transition ease-in-out delay-150">PRIVACY POLICY</a>
          <a href="https://forms.gle/skzNiix44vi6D5LP7"
            target="_blank"
            rel="noopener noreferrer" 
            className="mb-[1.5rem] block hover:underline hover:transition ease-in-out delay-150"
          >
              WEBAPP FEEDBACK
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
