import Left from "../images/about/left.svg";
import Mid from "../images/about/mid.svg";
import Right from "../images/about/right.svg";
import Heart from "../images/about/heart.svg";
import FlowerSmall from "../images/about/flower_small.svg";
import FlowerBig from "../images/about/flower_big.svg";
import HeartFull from "../images/about/heart_full.svg";
import Eye from "../images/about/eye.svg";
import Star from "../images/about/star.svg";
import Nathalie from "../images/about/team/NathalieMauraSoetopo.png";
import Naufal from "../images/about/team/NaufalDhamiriSyifa.png";
import Briana from "../images/about/team/BrianaAlifiaPutri.png";
import Rivad from "../images/about/team/MuhammadRivadIchsandiB.png";
import TeamProfile from "../components/TeamProfile";
import Gmail from "../images/about/social_media_icons/gmail.svg";
import Instagram from "../images/about/social_media_icons/instagram.svg";
import LinkedIn from "../images/about/social_media_icons/linkedin.svg";
import TikTok from "../images/about/social_media_icons/tiktok.svg";
import Button from "../components/Button";


const About = () => {
  return (
    <div className="bg-white">
      <div className="bg-[url('/src/images/bg/BGAboutUs.svg')] w-full flex flex-row items-center justify-between bg-cover bg-no-repeat bg-bottom py-36">
        <img src={Left} alt="Kado" className="w-[20vw] lg:w-[25vw]" />
        <div className="flex flex-col items-center justify-center h-full">
          <img src={Mid} alt="Berpegangan Tangan" className="w-[30vw]" />
          <h1 className="text-white text-5xl lg:text-6xl my-12">About Us</h1>
          <a href="#about">
          <button className="text-black bg-green rounded-3xl px-6 py-3 hover:bg-red hover:text-white hover:shadow-lg hover:font-bold transition ease-in-out duration-300">LEARN MORE!</button>
          </a>
        </div>
        <img src={Right} alt="Kado" className="w-[20vw] lg:w-[25vw]" />
      </div>

      <div id="about" className="flex flex-col items-center justify-center mx-[10vw] text-center">
        <h1 className="text-5xl my-12 text-speach">Background</h1>
        <p>Sebagai manusia, makanan adalah salah satu kebutuhan primer yang dibutuhkan untuk hidup. Namun, sayangnya kebutuhan ini dapat berubah menjadi sebuah kesalahan, ketakutan, penyesalan, dan musuh seseorang. Parahnya, perasaan-perasaan ini harus dihadapi tiga kali sehari dan menjadi sebuah permasalahan. 
        <br /><br />
        Berdasarkan International Encyclopedia of the Social & Behavioral Sciences, Eating Behavior dapat diartikan sebagai "Eating behavior is another consequential health behavior that is addressed by behavioral medicine programs that target specific food consumption or overall weight gain or loss." Salah satu bentuk dari Eating Behavior adalah Eating Disorder. Faktanya terdapat 420.000 orang Indonesia yang mengalami Eating Disorder.</p>

        <h1 className="text-5xl mt-24 mb-12 text-speach">Mealth</h1>
        <p>Mealth adalah sebuah ruang yang aman, nyaman, dan suportif dalam bentuk komunitas yang ingin meningkatkan kesadaran dan pengetahuan mengenai Eating Behavior secara spesifik pada Eating Disorder kepada masyarakat Indonesia melalui <i>social media, events, </i>dan program yang diberikan.</p>

        <h1 className="text-5xl mt-24 mb-12 text-speach">Core Values</h1>
        <div className="flex flex-col lg:flex-row w-full justify-around px-12 mb-24">
          <div className="my-3 flex lg:h-[20vw] lg:w-[15vw] bg-[#FFFFFF] rounded-3xl relative overflow-hidden">
            <img src={FlowerSmall} className="absolute -top-8 left-6 animate-spin-slow w-[30%]" />
            <img src={FlowerBig} className="absolute top-8 -right-12 animate-spin-slow w-[80%]" />
            <h3 className="relative self-end justify-self-end p-6 text-3xl z-10">Nyaman</h3>
          </div>
          <div className="my-3 flex lg:h-[20vw] lg:w-[15vw] bg-[#FFFFFF] rounded-3xl relative overflow-hidden">
            <img src={Star} className="absolute top-10 left-6 animate-pulse w-[25%]" />
            <img src={Star} className="absolute top-5 left-24 animate-pulse w-[15%]" />
            <img src={Eye} className="absolute top-8 -right-12 animate-pulse w-[150%]" />
            <h3 className="relative self-end justify-self-end p-6 text-3xl z-10">Aman</h3>
          </div>
          <div className="my-3 flex lg:h-[20vw] lg:w-[15vw] bg-[#FFFFFF] rounded-3xl relative overflow-hidden">
            <img src={HeartFull} className="absolute top-3 left-6 animate-wiggle w-[25%]" />
            <img src={HeartFull} className="absolute top-12 -right-8 animate-wiggle w-[70%]" />
            <h3 className="relative self-end justify-self-end p-6 text-3xl z-10">Suportif</h3>
          </div>

        </div>
      </div>

      <div className="bg-[url('/src/images/bg/BGAboutUs2.svg')] bg-top flex flex-col bg-cover bg-no-repeat items-center justify-between overflow-hidden">
        <h1 className="text-6xl pt-24 mb-12 text-white">Our Team</h1>
        <div className="flex flex-col lg:flex-row">
          <TeamProfile photo={Nathalie} name="Nathalie Maura Soetopo" title="Co-Founder" />
          <TeamProfile photo={Naufal} name="Naufal Dhamiri Syifa" title="Co-Founder" />
          <TeamProfile photo={Briana} name="Briana Alifia Putri" title="Co-Founder" />
          <TeamProfile photo={Rivad} name="Muhammad Rivad Ichsandi B" title="Co-Founder" />
        </div>
        <div className="flex flex-col bg-blue pb-12 lg:grid grid-cols-2 grid-rows-2 w-full h-full">
          <img src={Heart} alt="Hati" className="w-full object-contain px-[8vw] self-end" />
          <div className="flex flex-col px-[8vw] justify-between">
            <h1 className="text-7xl pt-24 mb-6 text-white">Social Media</h1>
            <a href="https://www.instagram.com/mealth_id/" className="w-full">
              <Button className="bg-red text-white hover:bg-spurple my-1 w-full">
                <div className="grid grid-rows-1 grid-cols-[2rem,auto] w-full">
                  <img src={Instagram} alt="Instagram:" className="w-6 h-6" />
                  <p className="w-full text-center">mealth_id</p>
                </div>
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/mealth-community" className="w-full">
              <Button className="bg-red text-white hover:bg-spurple my-1 w-full">
                <div className="grid grid-rows-1 grid-cols-[2rem,auto] w-full">
                  <img src={LinkedIn} alt="LinkedIn:" className="w-6 h-6" />
                  <p className="w-full text-center">mealth-community</p>
                </div>
              </Button>
            </a>
            <a href="https://www.tiktok.com/@mealthid" className="w-full">
              <Button className="bg-red text-white hover:bg-spurple my-1 w-full">
                <div className="grid grid-rows-1 grid-cols-[2rem,auto] w-full">
                  <img src={TikTok} alt="Tiktok:" className="w-6 h-6" />
                  <p className="w-full text-center">@mealth_id</p>
                </div>
              </Button>
            </a>
            <a href="mailto:mealthcommunity@gmail.com" className="w-full">
              <Button className="bg-red text-white hover:bg-spurple my-1 w-full">
                <div className="grid grid-rows-1 grid-cols-[2rem,auto] w-full">
                  <img src={Gmail} alt="Gmail:" className="w-6 h-6" />
                  <p className="text-sm md:text-lg w-full text-center">mealthcommunity@gmail.com</p>
                </div>
              </Button>
            </a>
          </div>
          <div className="px-[8vw]">
            <h1 className="text-7xl pt-24 mb-12 text-white">Community</h1>
            <a href="https://line.me/ti/g2/RtRB7pV9-TXcRsvuu2z-QqxGtQM4DtkCXa1r6w?utm_source=invitation&utm_medium=link_copy&utm_campaign=default"><Button className="bg-green w-full hover:bg-orange hover:text-yellow my-1">JOIN US AT LINE</Button></a>
            <a href="https://bit.ly/MealthGroupCommunity"><Button className="bg-green w-full hover:bg-orange hover:text-yellow my-1">JOIN US AT WHATSAPP</Button></a>
          </div>
          <div className="px-[8vw]">
            <h1 className="text-7xl pt-24 mb-12 text-white">Contact Us</h1>
            <Button className="bg-red w-full text-white hover:bg-green hover:text-black">+62 813-9448-7780</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
