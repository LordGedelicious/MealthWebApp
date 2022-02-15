import Logo from "../images/logo.png";

const Navbar = () => {
  return (
    <div className="absolute bg-transparent h-[5em] w-[100%] flex flex-row justify-between items-center text-bw-light bg-red">
      {/* Logo and Title */}
      <div className="flex flex-row items-center">
        <img src={Logo} alt="Logo" className="h-[5em]" />
        <h2>Mealth</h2>
      </div>

      {/* Links */}
      <div className="flex flex-row justify-between w-[25em] pr-[3em]">
        <p className="hover:underline hover:underline-offset-8 hover:decoration-2 cursor-pointer hover:transition ease-in-out delay-150">AAA</p>
        <p className="hover:underline hover:underline-offset-8 hover:decoration-2 cursor-pointer hover:transition ease-in-out delay-150">AAA</p>
        <p className="hover:underline hover:underline-offset-8 hover:decoration-2 cursor-pointer hover:transition ease-in-out delay-150">AAA</p>
        <p className="hover:underline hover:underline-offset-8 hover:decoration-2 cursor-pointer hover:transition ease-in-out delay-150">AAA</p>
      </div>
    </div>
  );
};

export default Navbar;
