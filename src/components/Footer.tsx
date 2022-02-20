import Logo from "../images/logo.png";

const Footer = () => {
  return (
    <div className="bg-sorange h-[8em] w-[100%] flex flex-row justify-between items-center text-[#FFFFFF]">
      {/* Logo and Tagline */}
      <div className="flex flex-col items-start content-start pl-[2em]">
        <img src={Logo} alt="Logo" className="h-[5em]" />
        <p>“it&apos;s everyone&apos;s right to be</p>
        <p>healthy mentally and physically”</p>
      </div>

      {/* Links */}
      <div className="flex flex-row justify-between w-[30em] pr-[3em] md:visible invisible">
        <p className="w-[3.5em] hover:font-bold cursor-pointer hover:transition ease-in-out delay-150">Utama</p>
        <p className="w-[3em] hover:font-bold cursor-pointer hover:transition ease-in-out delay-150">Acara</p>
        <p className="w-[5.2em] hover:font-bold cursor-pointer hover:transition ease-in-out delay-150">Konseling</p>
        <p className="w-[4.2em] hover:font-bold cursor-pointer hover:transition ease-in-out delay-150">Chatbot</p>
      </div>

      {/* Social Media */}
      <div className="flex flex-col items-end content-end pr-[2em]">
        <div className="flex flex-row mb-[1em]">
          <div className="bg-red h-10 w-10 rounded-full hover:bg-white mr-3"></div>
          <div className="bg-red h-10 w-10 rounded-full hover:bg-white"></div>
        </div>
        <p>© 2022</p>
      </div>
    </div>
  );
};

export default Footer;
