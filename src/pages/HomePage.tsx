import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomeImg from "../images/HomeImg.svg";
import AcaraImg from "../images/AcaraImg.svg";
import KonselingImg from "../images/KonselingImg.svg";
import MsgImg from "../images/MsgImg.svg";
import Button from "../components/Button";

const HomePage = () => {
  return (
    <>
      <div className="bg-white">
        <div className="h=[100vh] overflow-hidden">
          <div className="flex flex-col lg:grid grid-cols-2 grid-rows-1 bg-white items-center my-24">
            <img src={HomeImg} alt="A person sitting" className="col-start-2 row-start-1" />
            <div className="text-center px-[10%] lg:pl-24 col-start-1 row-start-1 lg:text-left mb-12 lg:mb-0">
              <h1 className="text-7xl">Mealth</h1>
              <h3>Bersama Mealth, mari berdamai dengan diri sendiri</h3>
            </div>
            
          </div>
          <div className="flex flex-col lg:grid grid-cols-2 items-center bg-[url('/src/images/bg/BGAcara.svg')] bg-cover bg-no-repeat bg-top min-h-[80vh] w-[100%] relative bottom-14">
            <img src={AcaraImg} alt="A person looking at herself" className="mb-12 relative" />
            <div className="flex flex-col items-end px-[10%] items-center lg:pr-24 text-right mb-36 lg:mb-12 lg:items-end">
              <h1 className="text-white text-5xl mb-3 text-center lg:text-right">Bergabung <br /> Bersama Mealth</h1>
              <h3 className="mb-12 text-white text-center lg:text-right">Bergabung bersama di tempat yang aman dan nyaman untuk berbagi cerita</h3>
              <a href="https://line.me/ti/g2/RtRB7pV9-TXcRsvuu2z-QqxGtQM4DtkCXa1r6w?utm_source=invitation&utm_medium=link_copy&utm_campaign=default" className="my-1 w-full lg:w-3/5"><Button className="bg-green w-full hover:bg-orange">JOIN US AT LINE</Button></a>
              <a href="https://bit.ly/MealthGroupCommunity" className="my-1 w-full lg:w-3/5"><Button className="bg-green w-full hover:bg-orange">JOIN US AT WHATSAPP</Button></a>
            </div>
          </div>
          <div className="flex flex-col lg:grid grid-cols-2 items-center bg-[url('/src/images/bg/BGKonseling.svg')] bg-cover bg-no-repeat bg-top h-[90vh] w-[100%] relative bottom-44">
            <img src={KonselingImg} alt="Two people chatting" className="col-start-2 row-start-1"/>
            <div className="flex flex-col items-center lg:items-start px-[10%] lg:pl-24 col-start-1 row-start-1">
              <h1 className="text-5xl mb-3 text-center lg:text-left">Konsultasi <br /> dengan Ahli</h1>
              <h3 className="mb-12 text-center lg:text-left">Ceritakan kecemasanmu bersama para ahli</h3>
              <a href="/Konsultasi"><Button className="bg-orange w-full hover:bg-spurple my-1">BOOK NOW</Button></a>
            </div>
            
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
    </>
  );
};

export default HomePage;
