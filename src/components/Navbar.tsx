import Logo from "../images/logo.png";

const Navbar = () => {
  return (
    <div className="absolute bg-[#FFFFFF] h-[5em] w-[100%] flex flex-row justify-between items-center text-black z-10">
      {/* Logo and Title */}
      <div className="flex flex-row items-center">
        <img src={Logo} alt="Logo" className="h-[5em]" />
        <h3 className="text-2xl"><b>
          <span className="text-red">m </span>
          <span className="text-sorange">e </span>
          <span className="text-syellow">a </span>
          <span className="text-green">l </span>
          <span className="text-blue">t </span>
          <span className="text-spurple">h</span>
        </b></h3>
      </div>

      {/* Links */}
      <div className="flex flex-row justify-between w-[30em] pr-[3em] md:visible invisible">
        <p className="w-[3.5em] hover:font-bold cursor-pointer hover:transition ease-in-out delay-150">Utama</p>
        <p className="w-[3em] hover:font-bold cursor-pointer hover:transition ease-in-out delay-150">Acara</p>
        <p className="w-[5.2em] hover:font-bold cursor-pointer hover:transition ease-in-out delay-150">Konseling</p>
        <p className="w-[4.2em] hover:font-bold cursor-pointer hover:transition ease-in-out delay-150">Chatbot</p>
      </div>
    </div>
  );
};

export default Navbar;
