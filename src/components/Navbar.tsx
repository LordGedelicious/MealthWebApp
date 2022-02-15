//import

const Navbar = () => {
  return (
    <div className="absolute bg-transparent h-[3em] w-[100%] px-[2em] flex flex-row justify-between items-center text-bw-light">
      {/* Logo and Title */}
      <div>
        {/* Insert logo here */}
        <h2>Mealth</h2>
      </div>

      {/* Links */}
      <div className="flex flex-row justify-between w-[25em]">
        <p className="hover:underline hover:underline-offset-8 hover:decoration-2 cursor-pointer hover:transition ease-in-out delay-150">AAA</p>
        <p className="hover:underline hover:underline-offset-8 hover:decoration-2 cursor-pointer hover:transition ease-in-out delay-150">AAA</p>
        <p className="hover:underline hover:underline-offset-8 hover:decoration-2 cursor-pointer hover:transition ease-in-out delay-150">AAA</p>
        <p className="hover:underline hover:underline-offset-8 hover:decoration-2 cursor-pointer hover:transition ease-in-out delay-150">AAA</p>
      </div>
    </div>
  );
};

export default Navbar;
