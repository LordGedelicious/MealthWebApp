import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeImg from "../images/HomeImg.svg";
import AcaraImg from "../images/AcaraImg.svg";
import KonselingImg from "../images/KonselingImg.svg";
import MsgImg from "../images/MsgImg.svg";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="h=[100vh] overflow-hidden">
          <div className="grid grid-cols-2 bg-white items-center h-[100vh]">
            <div>
              LOREM IPSUM
            </div>
            <img src={HomeImg} alt="A person sitting" />
          </div>
          <div className="grid grid-cols-2 items-center bg-[url('/src/images/bg/BGAcara.svg')] bg-cover bg-no-repeat bg-top h-[100vh] w-[100%] relative bottom-14">
            <img src={AcaraImg} alt="A person looking at herself" />
            <div>
              LOREM IPSUM
            </div>
          </div>
          <div className="grid grid-cols-2 items-center bg-[url('/src/images/bg/BGKonseling.svg')] bg-cover bg-no-repeat bg-top h-[90vh] w-[100%] relative bottom-44">
            <div>
              LOREM IPSUM
            </div>
            <img src={KonselingImg} alt="Two people chatting" />
          </div>
          <div className="bg-[url('/src/images/bg/BGBotchat.svg')] bg-no-repeat bg-cover bg-top h-[150vh] w-[100%] relative bottom-72 z-10">

          </div>
          <div className="h-[60vh] w-[100%] z-0">
            <div className="grid grid-cols-2 items-center relative bottom-80">
              <div>
                LOREM IPSUM
              </div>
              <img src={MsgImg} alt="Message" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
