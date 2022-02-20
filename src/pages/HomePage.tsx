import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white h-[100vh] w-[100%] p-[50vh]">
        <h1>Welcome to Mealth!</h1>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
